// pages/blogs/[slug].jsx
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Define the API URL for fetching data
const PAYLOAD_CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;
const PAYLOAD_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL;

// Fetch single blog by slug (optimized for SSG)
async function getBlog(slug) {
  try {
    const res = await fetch(
      `${PAYLOAD_CMS_URL}/posts?where[slug][equals]=${slug}&depth=1`,
      {
        next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status}`);
    }

    const data = await res.json();
    return data.docs[0] || null; // First matching document or null
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Fetch all slugs for static generation
async function getAllBlogSlugs() {
  try {
    const res = await fetch(
      `${PAYLOAD_CMS_URL}/posts?limit=1000&depth=0`, // Adjust limit as needed
      {
        next: { revalidate: 60 },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    return data.docs.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slugObj) => ({
    slug: slugObj.slug,
  }));
}

// Rich text renderer (unchanged)
function renderRichText(content) {
  if (!content?.root?.children) return null;

  const getElementByNodeType = (node, index) => {
    const { type, children, text } = node;

    const nodeTypes = {
      text: () => <span key={index}>{text}</span>,
      paragraph: () => (
        <p key={index} className="mb-4">
          {children?.map((child, i) => getElementByNodeType(child, i))}
        </p>
      ),
      heading: () => {
        const HeadingTag = `h${node.level || 2}`;
        return (
          <HeadingTag key={index} className="mb-4 font-bold">
            {children?.map((child, i) => getElementByNodeType(child, i))}
          </HeadingTag>
        );
      },
      list: () => {
        const ListTag = node.listType === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={index} className="mb-4 ml-6">
            {children?.map((child, i) => getElementByNodeType(child, i))}
          </ListTag>
        );
      },
      listItem: () => (
        <li key={index} className="mb-1">
          {children?.map((child, i) => getElementByNodeType(child, i))}
        </li>
      ),
      quote: () => (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
          {children?.map((child, i) => getElementByNodeType(child, i))}
        </blockquote>
      ),
      link: () => (
        <a
          key={index}
          href={node.url}
          className="text-blue-600 hover:underline"
          target={node.newTab ? '_blank' : '_self'}
          rel={node.newTab ? 'noopener noreferrer' : ''}
        >
          {children?.map((child, i) => getElementByNodeType(child, i))}
        </a>
      ),
      image: () => (
        <div key={index} className="my-4">
          <Image
            src={node.src}
            alt={node.alt || ''}
            width={node.width || 800}
            height={node.height || 500}
            className="rounded-lg"
          />
          {node.caption && <p className="text-sm text-gray-500 mt-2">{node.caption}</p>}
        </div>
      ),
    };

    return nodeTypes[type]?.() || (
      <div key={index}>
        {children?.map((child, i) => getElementByNodeType(child, i))}
      </div>
    );
  };

  return content.root.children.map((node, index) => getElementByNodeType(node, index));
}

// Components (unchanged)
const HeroImage = ({ image, title }) => {
  if (!image || !image.url) return null;

  const imageUrl = image.url.startsWith('http')
    ? image.url
    : `${PAYLOAD_BASE_URL}${image.url}`;

  return (
    <div className="relative w-full h-96 mb-8">
      <Image
        src={imageUrl}
        alt={title || 'Blog post image'}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover rounded-lg"
      />
    </div>
  );
};

const BlogMeta = ({ publishedAt, categories, authors }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-gray-600">
    {publishedAt && <p>{new Date(publishedAt).toLocaleDateString()}</p>}
    {authors?.length > 0 && (
      <p className="text-gray-700">
        By: {authors.map((author) => author.name).join(', ')}
      </p>
    )}
    {categories?.length > 0 && (
      <p>
        Categories:{' '}
        {categories
          .map((cat) => (typeof cat === 'object' ? cat.title : cat))
          .join(', ')}
      </p>
    )}
  </div>
);

// Main BlogDetailPage
export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-300px)]">
      <article className="max-w-3xl mx-auto">
        <HeroImage image={blog.heroImage} title={blog.title} />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <BlogMeta
          publishedAt={blog.publishedAt}
          categories={blog.categories}
          authors={blog.populatedAuthors}
        />

        <div className="prose prose-lg max-w-none">
          {blog.content && renderRichText(blog.content)}
        </div>

        {blog.meta?.description && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">Summary</h3>
            <p className="text-gray-700">{blog.meta.description}</p>
          </div>
        )}
      </article>
    </div>
  );
}

// Metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params; // No need to await params, it’s already resolved
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  return {
    title: blog.title,
    description: blog.meta?.description,
  };
}

export const revalidate = 60; // ISR: Revalidate every 60 seconds
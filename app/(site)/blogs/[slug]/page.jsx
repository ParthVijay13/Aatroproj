// // pages/blogs/[slug].jsx
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { RichText } from '@payloadcms/richtext-lexical/react';
// import React from 'react';

// // Define API URLs (set these in your .env file)
// const PAYLOAD_CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL; // e.g., http://localhost:3000/api
// const PAYLOAD_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL; // e.g., http://localhost:3000

// // Fetch blog by slug
// async function getBlog(slug) {
//   try {
//     const res = await fetch(
//       `${PAYLOAD_CMS_URL}/posts?where[slug][equals]=${slug}&depth=2`, // Increased depth for populated nodes
//       {
//         next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );

//     if (!res.ok) throw new Error(`Failed to fetch blog: ${res.status}`);
//     const data = await res.json();
//     return data.docs[0] || null; // Return first matching blog or null
//   } catch (error) {
//     console.error('Error fetching blog:', error);
//     return null;
//   }
// }

// // Fetch all slugs for static generation
// async function getAllBlogSlugs() {
//   try {
//     const res = await fetch(`${PAYLOAD_CMS_URL}/posts?limit=1000&depth=0`, {
//       next: { revalidate: 60 },
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const data = await res.json();
//     return data.docs.map((post) => ({ slug: post.slug }));
//   } catch (error) {
//     console.error('Error fetching slugs:', error);
//     return [];
//   }
// }

// // Generate static paths
// export async function generateStaticParams() {
//   const slugs = await getAllBlogSlugs();
//   return slugs.map((slugObj) => ({ slug: slugObj.slug }));
// }

// // Hero image component
// function HeroImage({ image, title }) {
//   if (!image) return null;

//   const imageUrl = image.url.startsWith('http') 
//     ? image.url 
//     : `${PAYLOAD_BASE_URL}${image.url}`;

//   return (
//     <div className="mb-8 relative h-[400px] w-full rounded-lg overflow-hidden">
//       <Image
//         src={imageUrl}
//         alt={title || 'Blog hero image'}
//         fill
//         priority
//         className="object-cover"
//       />
//     </div>
//   );
// }

// // Blog metadata component
// function BlogMeta({ publishedAt, categories, authors }) {
//   return (
//     <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
//       {publishedAt && (
//         <div className="flex items-center">
//           <span className="mr-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           </span>
//           <time dateTime={publishedAt}>
//             {new Date(publishedAt).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })}
//           </time>
//         </div>
//       )}
//       {categories?.length > 0 && (
//         <div className="flex items-center flex-wrap gap-2">
//           <span className="mr-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//             </svg>
//           </span>
//           {categories.map((category) => (
//             <span key={category.id} className="bg-gray-100 px-2 py-1 rounded text-sm">
//               {category.name}
//             </span>
//           ))}
//         </div>
//       )}
//       {authors?.length > 0 && (
//         <div className="flex items-center">
//           <span className="mr-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//           </span>
//           <div>
//             {authors.map((author, i) => (
//               <React.Fragment key={author.id}>
//                 {i > 0 && ', '}
//                 <span>{author.name}</span>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Rich text renderer component
// function RichTextRenderer({ content }) {
//   if (!content || !content.root) {
//     return <p>No content available</p>;
//   }

//   return (
//     <div className="rich-text prose prose-lg max-w-none">
//       <RichText content={content} />
//     </div>
//   );
// }

// // Main BlogDetailPage component
// export default async function BlogDetailPage({ params }) {
//   const { slug } = await params;
//   const blog = await getBlog(slug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-300px)]">
//       <article className="max-w-3xl mx-auto">
//         <HeroImage image={blog.heroImage} title={blog.title} />
//         <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

//         <BlogMeta
//           publishedAt={blog.publishedAt}
//           categories={blog.categories}
//           authors={blog.populatedAuthors || blog.authors}
//         />

//         {blog.content && <RichTextRenderer content={blog.content} />}

//         {blog.meta?.description && (
//           <div className="mt-8 p-4 bg-gray-100 rounded-lg">
//             <h3 className="font-semibold mb-2">Summary</h3>
//             <p className="text-gray-700">{blog.meta.description}</p>
//           </div>
//         )}
//       </article>
//     </div>
//   );
// }

// // Metadata generation
// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const blog = await getBlog(slug);

//   if (!blog) {
//     return { title: 'Blog Not Found' };
//   }

//   return {
//     title: blog.title,
//     description: blog.meta?.description,
//     openGraph: {
//       title: blog.title,
//       description: blog.meta?.description,
//       images: blog.heroImage ? [blog.heroImage.url] : [],
//       type: 'article',
//     },
//   };
// }

// export const revalidate = 60; // ISR: Revalidate every 60 seconds







// pages/blogs/[slug].jsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

// Set API URLs
const PAYLOAD_CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3001/api'; 
const PAYLOAD_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL || 'http://localhost:3001';

// Fetch blog by slug
async function getBlog(slug) {
  try {
    const apiUrl = `${PAYLOAD_CMS_URL}/posts?where[slug][equals]=${slug}&depth=1`;
    
    const res = await fetch(apiUrl, {
      next: { revalidate: 60 },
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error(`Failed to fetch blog: ${res.status}`);
    const data = await res.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Fetch all slugs for static generation
async function getAllBlogSlugs() {
  try {
    const apiUrl = `${PAYLOAD_CMS_URL}/posts?limit=1000&depth=0`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 60 },
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return data.docs.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}

// Generate static paths
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slugObj) => ({
    slug: slugObj.slug,
  }));
}

// Hero image component
function HeroImage({ image, title }) {
  if (!image) return null;

  const imageUrl = image.url.startsWith('http') 
    ? image.url 
    : `${PAYLOAD_BASE_URL}${image.url}`;

  return (
    <div className="mb-8 relative h-[400px] w-full rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title || 'Blog hero image'}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}

// Blog metadata component
function BlogMeta({ publishedAt, categories, authors }) {
  return (
    <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
      {publishedAt && (
        <div className="flex items-center">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      )}
      {categories?.length > 0 && (
        <div className="flex items-center flex-wrap gap-2">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </span>
          {categories.map((category) => (
            <span key={category.id} className="bg-gray-100 px-2 py-1 rounded text-sm">
              {category.name}
            </span>
          ))}
        </div>
      )}
      {authors?.length > 0 && (
        <div className="flex items-center">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <div>
            {authors.map((author, i) => (
              <React.Fragment key={author.id || i}>
                {i > 0 && ', '}
                <span>{author.name}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Lexical Format Rich Text Renderer component
const LexicalRenderer = ({ content }) => {
  if (!content || !content.root || !content.root.children) {
    return <p>No content available</p>;
  }

  const renderNode = (node, index) => {
    // Handle text node with different formatting
    if (node.type === 'text') {
      let text = node.text || '';
      
      // Apply proper formatting based on the format bit flags:
      // 1 = bold, 2 = italic, 4 = strikethrough, 8 = underline, 16 = code
      if (node.format === 1) {
        return <strong key={index}>{text}</strong>;
      } else if (node.format === 2) {
        return <em key={index}>{text}</em>;
      } else if (node.format === 8) {
        return <u key={index}>{text}</u>;
      } else if (node.format === 4) {
        return <s key={index}>{text}</s>;
      } else if (node.format === 16) {
        return <code key={index} className="bg-gray-100 px-1 py-0.5 rounded">{text}</code>;
      }
      
      return text;
    }
    
    // Handle link node
    if (node.type === 'link') {
      const url = node.fields?.url || '#';
      const newTab = node.fields?.newTab || false;
      
      return (
        <a 
          key={index}
          href={url}
          className="text-blue-600 hover:underline" 
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {node.children?.map((child, i) => renderNode(child, `${index}-${i}`))}
        </a>
      );
    }
    
    // Handle line break
    if (node.type === 'linebreak') {
      return <br key={index} />;
    }
    
    // Handle paragraph
    if (node.type === 'paragraph') {
      return (
        <p key={index} className="mb-4">
          {node.children?.map((child, i) => renderNode(child, `${index}-${i}`))}
        </p>
      );
    }
    
    // Fallback for other nodes with children
    if (node.children && Array.isArray(node.children)) {
      return <React.Fragment key={index}>
        {node.children.map((child, i) => renderNode(child, `${index}-${i}`))}
      </React.Fragment>;
    }
    
    // For unhandled node types
    return null;
  };

  return (
    <div className="rich-text prose prose-lg max-w-none">
      {content.root.children.map((node, index) => renderNode(node, index))}
    </div>
  );
};

// Main BlogDetailPage component
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
          authors={blog.populatedAuthors || blog.authors}
        />

        {blog.content ? (
          <LexicalRenderer content={blog.content} />
        ) : (
          <p className="text-gray-500 italic">No content available for this blog post.</p>
        )}

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
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  return {
    title: blog.title,
    description: blog.meta?.description,
    openGraph: {
      title: blog.title,
      description: blog.meta?.description,
      images: blog.heroImage ? [blog.heroImage.url] : [],
      type: 'article',
    },
  };
}

export const revalidate = 60; // ISR: Revalidate every 60 seconds

// import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
// Define the API and base URLs
const PAYLOAD_CMS_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;
const PAYLOAD_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL;

// getBlogs function (updated above)
async function getBlogs(page = 1, limit = 3) {
  try {
    const res = await fetch(
      `${PAYLOAD_CMS_URL}/posts?depth=1&limit=${limit}&page=${page}`,
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }

    const data = await res.json();
    const posts = data.docs || [];
    const totalDocs = data.totalDocs || 0;
    const totalPages = data.totalPages || 1;

    if (posts.length === 0) {
      console.warn('No blog posts returned from API.');
    } else if (!posts[0].heroImage || !posts[0].heroImage.url) {
      console.warn('Featured image missing or incomplete in response:', posts[0]);
    }

    return { posts, totalDocs, totalPages };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { posts: [], totalDocs: 0, totalPages: 1 };
  }
}

// HeroImage component (unchanged)
const HeroImage = ({ image, title }) => {
  if (!image || !image.url) {
    return (
      <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No image available</p>
      </div>
    );
  }

  const imageUrl = image.url.startsWith('http')
    ? image.url
    : `${PAYLOAD_BASE_URL}${image.url}`;

  return (
    <div className="relative h-48 w-full">
      <Image
        src={imageUrl}
        alt={image.alt || title || 'Blog post image'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
};

// BlogCard component (unchanged)
const BlogCard = ({ blog }) => (
  <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    <HeroImage image={blog.heroImage} title={blog.title} />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      {blog.category && (
        <p className="text-sm text-gray-500 mb-2">
          Category: {typeof blog.category === 'object' ? blog.category.title : blog.category}
        </p>
      )}
      {blog.publishedAt && (
        <p className="text-sm text-gray-500 mb-4">
          {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
      )}
      {blog.excerpt && (
        <p className="text-gray-700 mb-4 line-clamp-3">{blog.excerpt}</p>
      )}
      <Link
        href={`/blogs/${blog.slug}`}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Read more
      </Link>
    </div>
  </div>
);

// Main BlogsPage with Pagination
export default async function BlogsPage({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1; // Get page from URL query (?page=)
  const limit = 12; // Blogs per page
  const { posts, totalDocs, totalPages } = await getBlogs(page, limit);

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center min-h-[calc(100vh-300px)]">
        <h1 className="text-3xl font-bold mb-6">Our Astrology Blogs</h1>
        <p className="text-lg">No blog posts found. Check back soon for new content!</p>
      </div>
    );
  }

  return (
    <>
    <Head>
        <title>Ravindra Purohit | blogs</title>
      </Head>
    <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-300px)]">
      <h1 className="text-3xl font-bold mb-6">Our Astrology Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          {/* Previous Button */}
          {page > 1 && (
            <Link
              href={`/blogs?page=${page - 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Previous
            </Link>
          )}

          {/* Page Info */}
          <span className="text-gray-600">
            Page {page} of {totalPages}
          </span>

          {/* Next Button */}
          {page < totalPages && (
            <Link
              href={`/blogs?page=${page + 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
    </>
  );
}

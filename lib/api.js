// lib/api.js
// This file handles the communication between the frontend and API

// Function to fetch all posts
export async function getPosts() {
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        cache: 'no-store' // Use this for frequent updates or SSR
        // Or use 'force-cache' for static pages with ISR
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
  
  // Function to fetch a post by slug
  export async function getPostBySlug(slug) {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/slug/${slug}`, {
        cache: 'no-store' // Or use ISR with next.revalidate: 60 (seconds)
      });
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error('Failed to fetch post');
      }
      
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error(`Error fetching post with slug ${slug}:`, error);
      return null;
    }
  }
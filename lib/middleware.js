// middleware.js
import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

export function middleware(request) {
  // Check if the path starts with /admin and is not /admin/login (or other public admin pages)
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    !request.nextUrl.pathname.startsWith('/admin/login')
  ) {
    // Example: Check for an auth token cookie (adjust the key as per your auth logic)
    const token = request.localstorage.get('token');

    if (!token) {
      // If no token, redirect to /admin/login
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Continue to the requested route if authenticated or not an admin route
  return NextResponse.next();
}

// Specify that the middleware should run on all /admin routes
export const config = {
  matcher: ['/admin/:path*'],
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Protect home route - redirect to login if no session cookie
  if (request.nextUrl.pathname.startsWith('/home')) {
    if (!request.cookies.has('session')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Protect admin routes - redirect if no auth cookie (for demo)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!request.cookies.has('auth')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/admin/:path*', '/dashboard/:path*'],
};



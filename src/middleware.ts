import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
      // Get the session token from the request
      const token = await getToken({ req });

      // Avoid modifying the request/response on the OAuth callback route
      if (req.nextUrl.pathname.startsWith('/api/auth/callback/discord')) {
            return NextResponse.next(); // Don't intercept the OAuth callback
      }

      // If the user is not authenticated and trying to access a protected route
      if (!token) {
            if (req.nextUrl.pathname.startsWith('/dashboard')) {
                  // Redirect to the Discord sign-in if the user tries to access the /dashboard page
                  return NextResponse.redirect(new URL('/api/auth/signin/discord', req.url));
            }

            // Redirect to the homepage or other public pages if not authenticated
            return NextResponse.redirect(new URL('/', req.url));
      }

      // If the user is authenticated, allow access to protected routes
      if (req.nextUrl.pathname.startsWith('/dashboard')) {
            return NextResponse.next();
      }

      // Allow all other routes to pass through
      return NextResponse.next();
}

export const config = {
      matcher: ['/dashboard'],
};

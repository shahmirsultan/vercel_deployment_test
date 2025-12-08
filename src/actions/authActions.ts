'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Fixed credentials
const FIXED_USERNAME = 'admin';
const FIXED_PASSWORD = 'password123';

export async function loginUser(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  // Validate credentials
  if (username === FIXED_USERNAME && password === FIXED_PASSWORD) {
    // Set auth cookie
    const cookieStore = await cookies();
    cookieStore.set('session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    // Redirect to home page
    redirect('/home');
  } else {
    return {
      success: false,
      message: 'Invalid username or password',
    };
  }
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/');
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.has('session');
}


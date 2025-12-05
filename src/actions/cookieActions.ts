'use server'

import { cookies } from 'next/headers';

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set('auth', 'demo-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
  return { success: true, message: 'Auth cookie set! You can now access /admin' };
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('auth');
  return { success: true, message: 'Auth cookie removed! /admin will redirect now' };
}


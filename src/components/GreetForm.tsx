'use client'

import { useState } from 'react';
import { greetUser } from '@/actions/actions';

export default function GreetForm() {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setMessage('');
    
    try {
      const result = await greetUser(formData);
      if (result.success) {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('Error: Could not connect to server');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Greeting...' : 'Get Server Greeting'}
        </button>
      </form>

      {message && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-center">{message}</p>
        </div>
      )}
    </div>
  );
}


'use server'

export async function greetUser(formData: FormData) {
  // Extract the name from the form data
  const name = formData.get('name') as string;

  // Simulate server processing delay (e.g., database call)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Generate timestamp
  const timestamp = new Date().toLocaleString();

  // Return greeting message
  return {
    success: true,
    message: `Hello, ${name}! 👋 Greeted by server at ${timestamp}`,
  };
}


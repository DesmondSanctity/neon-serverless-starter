import { html } from 'hono/html';

export const signupHTML = html` <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Sign Up</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="description" content="" />
  </head>
  <body class="bg-gray-100">
   <div class="flex h-screen">
    <!-- Image Section -->
    <div class="hidden w-1/2 bg-gray-100 lg:block">
     <img
      src="/placeholder.jpg?height=1080&width=1080"
      alt="Signup background"
      class="h-full w-full object-cover"
     />
    </div>

    <!-- Form Section -->
    <div
     class="flex w-full flex-col justify-center px-4 lg:w-1/2 lg:px-8 xl:px-12"
    >
     <div class="mx-auto w-full max-w-sm">
      <!-- Logo -->
      <div class="mb-8 text-center">
       <svg
        class="h-8 w-8"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
       >
        <rect width="200" height="200" fill="#4A5568" rx="20" ry="20" />
        <path
         d="M50 70 Q50 50 70 50 H110 Q130 50 130 70 V80 Q130 100 110 100 H90 Q70 100 70 120 V130 Q70 150 90 150 H130"
         fill="none"
         stroke="#FFFFFF"
         stroke-width="12"
         stroke-linecap="round"
        />
        <path
         d="M140 50 V150"
         fill="none"
         stroke="#FFFFFF"
         stroke-width="12"
         stroke-linecap="round"
        />
       </svg>
      </div>

      <h2 class="mb-6 text-center text-3xl font-bold text-gray-900">
       Create an account
      </h2>

      <form class="space-y-4">
       <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
         >Email</label
        >
        <input
         id="email"
         name="email"
         type="email"
         required
         class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
         placeholder=" Enter your email"
        />
       </div>
       <div>
        <label for="phone" class="block text-sm font-medium text-gray-700"
         >Phone</label
        >
        <input
         id="phone"
         name="phone"
         type="tel"
         required
         class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
         placeholder=" Enter your phone number"
        />
       </div>
       <div>
        <label for="password" class="block text-sm font-medium text-gray-700"
         >Password</label
        >
        <input
         id="password"
         name="password"
         type="password"
         required
         class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
         placeholder=" Create a password"
        />
       </div>
       <button
        type="submit"
        class="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
       >
        Sign Up
       </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
       Already have an account?
       <a
        href="/login"
        class="font-medium text-indigo-600 hover:text-indigo-500"
        >Log in</a
       >
      </p>
     </div>
    </div>
   </div>
  </body>
 </html>`;

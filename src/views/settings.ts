import { html } from 'hono/html';

export const settingsHTML = html`<!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Chat Layout with Mobile Nav</title>
   <script src="https://cdn.tailwindcss.com"></script>
   <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
   />
  </head>
  <body class="bg-gray-100 min-h-screen flex flex-col">
   <!-- Top Navigation Bar -->
   <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto flex items-center justify-between">
     <div class="flex items-center space-x-2">
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
      <h1 class="text-xl font-bold text-gray-800 hidden sm:inline">CB Chat</h1>
     </div>
     <div class="flex items-center space-x-4">
      <a
       href="/chatbox"
       class="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base"
       >Home</a
      >
      <a
       href="/chats"
       class="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base"
       >Chats</a
      >
      <a
       href="/settings"
       class="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base"
       >Settings</a
      >
      <a
       href="https://github.com/yourusername/your-repo"
       target="_blank"
       rel="noopener noreferrer"
       class="text-gray-600 hover:text-gray-800"
      >
       <i class="fab fa-github text-xl sm:text-2xl"></i>
       <span class="sr-only">GitHub Repository</span>
      </a>
      <button
       class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded text-sm sm:text-base"
       onclick="window.location.href = '/';"
      >
       Logout
      </button>
     </div>
    </div>
   </nav>

   <!-- Main Content Area -->
   <main class="flex-1 overflow-hidden">
    <div class="container mx-auto p-4 max-w-sm">
     <h2 class="text-2xl font-bold mb-4">Settings</h2>
     <!-- Change Password Form -->
     <form class="space-y-4">
      <div>
       <label for="old-password" class="block text-sm font-medium text-gray-700"
        >Old Password</label
       >
       <input
        id="old-password"
        name="old-password"
        type="password"
        required
        class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder=" Enter your old password"
       />
      </div>
      <div>
       <label for="new-password" class="block text-sm font-medium text-gray-700"
        >New Password</label
       >
       <input
        id="new-password"
        name="new-password"
        type="password"
        required
        class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder=" Enter your new password"
       />
      </div>
      <button
       type="submit"
       class="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
       Change Password
      </button>
     </form>
    </div>
   </main>
  </body>
 </html>`;

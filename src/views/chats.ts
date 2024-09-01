import { html } from 'hono/html';

export const chatsHTML = html`<!DOCTYPE html>
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
      >
       Logout
      </button>
     </div>
    </div>
   </nav>

   <!-- Main Content Area -->
   <main class="flex-1 overflow-hidden">
    <div class="container mx-auto p-4">
     <h2 class="text-2xl font-bold mb-4">Your Chats</h2>
     <!-- Chat List -->
     <div class="bg-white rounded-lg shadow-md">
      <ul class="divide-y divide-gray-200">
       <li class="p-4 hover:bg-gray-50 cursor-pointer">
        <div class="flex justify-between items-center">
         <div>
          <h3 class="text-lg font-semibold">
           How to implement a binary search tree?
          </h3>
          <p class="text-gray-600">
           You: I need help implementing a binary search tree in Python...
          </p>
         </div>
         <span class="text-sm text-gray-500">2 days ago</span>
        </div>
       </li>
       <li class="p-4 hover:bg-gray-50 cursor-pointer">
        <div class="flex justify-between items-center">
         <div>
          <h3 class="text-lg font-semibold">
           Explain the concept of recursion
          </h3>
          <p class="text-gray-600">
           You: Can you explain the concept of recursion and provide some
           examples?
          </p>
         </div>
         <span class="text-sm text-gray-500">1 week ago</span>
        </div>
       </li>
       <li class="p-4 hover:bg-gray-50 cursor-pointer">
        <div class="flex justify-between items-center">
         <div>
          <h3 class="text-lg font-semibold">
           How to optimize database queries?
          </h3>
          <p class="text-gray-600">
           You: I'm working on a project where database queries are slow. How
           can I optimize them?
          </p>
         </div>
         <span class="text-sm text-gray-500">2 weeks ago</span>
        </div>
       </li>
      </ul>
     </div>
     <!-- Pagination -->
     <div class="mt-4 flex justify-center">
      <nav class="inline-flex rounded-md shadow">
       <a
        href="#"
        class="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
       >
        Previous
       </a>
       <a
        href="#"
        class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
       >
        1
       </a>
       <a
        href="#"
        class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
       >
        2
       </a>
       <a
        href="#"
        class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
       >
        3
       </a>
       <a
        href="#"
        class="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
       >
        Next
       </a>
      </nav>
     </div>
    </div>
   </main>

   <!-- New Chat Button -->
   <div class="p-4 bg-white border-t">
    <div class="container mx-auto">
     <button
      class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
     >
      Start New Chat
     </button>
    </div>
   </div>
  </body>
 </html>`;

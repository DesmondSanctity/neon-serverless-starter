import { html } from 'hono/html';

export const homeHTML = html`<!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>CB Chat - AI-Powered Conversations</title>
   <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    rel="stylesheet"
   />
   <style>
    body {
     font-family: 'Inter', sans-serif;
    }
   </style>
  </head>
  <body class="bg-gray-50 text-gray-800">
   <header class="bg-white shadow-sm">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
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
      <span class="text-xl font-bold">CB Chat</span>
     </div>
     <div class="hidden md:flex space-x-4">
      <a href="#features" class="text-gray-600 hover:text-gray-800">Features</a>
      <a href="#pricing" class="text-gray-600 hover:text-gray-800">Pricing</a>
      <a href="#contact" class="text-gray-600 hover:text-gray-800">Contact</a>
     </div>
     <div class="flex space-x-2">
      <a
       href="/login"
       class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
      >
       Log In
      </a>
      <a
       href="/signup"
       class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
       Sign Up
      </a>
     </div>
    </nav>
   </header>

   <main>
    <!-- Hero Section -->
    <section
     class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20"
    >
     <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
       Experience AI-Powered Conversations
      </h1>
      <p class="text-xl mb-8">
       Unlock the power of intelligent chat with CB Chat
      </p>
      <a
       href="/signup"
       class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
      >
       Get Started
      </a>
     </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20">
     <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
       <div class="bg-white p-6 rounded-lg shadow-md">
        <svg
         class="w-12 h-12 text-blue-500 mb-4"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
         ></path>
        </svg>
        <h3 class="text-xl font-semibold mb-2">Intelligent Responses</h3>
        <p class="text-gray-600">
         Our AI generates human-like responses for natural conversations.
        </p>
       </div>
       <div class="bg-white p-6 rounded-lg shadow-md">
        <svg
         class="w-12 h-12 text-blue-500 mb-4"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
         ></path>
        </svg>
        <h3 class="text-xl font-semibold mb-2">Customizable Chatbots</h3>
        <p class="text-gray-600">
         Create and customize chatbots for various use cases and industries.
        </p>
       </div>
       <div class="bg-white p-6 rounded-lg shadow-md">
        <svg
         class="w-12 h-12 text-blue-500 mb-4"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
         ></path>
        </svg>
        <h3 class="text-xl font-semibold mb-2">Secure & Private</h3>
        <p class="text-gray-600">
         Your conversations are encrypted and protected with advanced security
         measures.
        </p>
       </div>
      </div>
     </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-100 py-20">
     <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">
       Ready to transform your conversations?
      </h2>
      <p class="text-xl mb-8">
       Join thousands of users already benefiting from CB Chat
      </p>
      <a
       href="/signup"
       class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
      >
       Start Free Trial
      </a>
     </div>
    </section>
   </main>

   <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
     <div class="flex flex-wrap justify-between items-center">
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
       <div class="flex items-center space-x-2">
        <svg
         class="h-8 w-8"
         viewBox="0 0 200 200"
         xmlns="http://www.w3.org/2000/svg"
        >
         <rect width="200" height="200" fill="#FFFFFF" rx="20" ry="20" />
         <path
          d="M50 70 Q50 50 70 50 H110 Q130 50 130 70 V80 Q130 100 110 100 H90 Q70 100 70 120 V130 Q70 150 90 150 H130"
          fill="none"
          stroke="#4A5568"
          stroke-width="12"
          stroke-linecap="round"
         />
         <path
          d="M140 50 V150"
          fill="none"
          stroke="#4A5568"
          stroke-width="12"
          stroke-linecap="round"
         />
        </svg>
        <span class="text-xl font-bold">CB Chat</span>
       </div>
       <p class="mt-2 text-sm">Empowering conversations with AI</p>
      </div>
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
       <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
       <ul class="space-y-2">
        <li><a href="#" class="hover:text-gray-300">Home</a></li>
        <li><a href="#features" class="hover:text-gray-300">Features</a></li>
        <li><a href="#pricing" class="hover:text-gray-300">Pricing</a></li>
        <li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
       </ul>
      </div>
      <div class="w-full md:w-1/3">
       <h3 class="text-lg font-semibold mb-2">Connect with us</h3>
       <div class="flex space-x-4">
        <a href="#" class="hover:text-gray-300">
         <span class="sr-only">Facebook</span>
         <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
         >
          <path
           fill-rule="evenodd"
           d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
           clip-rule="evenodd"
          />
         </svg>
        </a>
        <a href="#" class="hover:text-gray-300">
         <span class="sr-only">Twitter</span>
         <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
         >
          <path
           d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
          />
         </svg>
        </a>
        <a href="#" class="hover:text-gray-300">
         <span class="sr-only">GitHub</span>
         <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
         >
          <path
           fill-rule="evenodd"
           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
           clip-rule="evenodd"
          />
         </svg>
        </a>
       </div>
      </div>
     </div>
     <div class="mt-8 text-center text-sm">
      <p>&copy; 2023 CB Chat. All rights reserved.</p>
     </div>
    </div>
   </footer>
  </body>
 </html>`;

import { html } from 'hono/html';

export const chatHTML = html` <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Chatbox Layout</title>
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
   <main class="flex-1 flex flex-col overflow-hidden">
    <div class="flex-1 overflow-y-auto p-4">
     <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4">Chat Interface</h2>
      <div class="bg-white rounded-lg shadow-md p-4">
       <!-- Chat messages would go here -->
       <div id="chat-messages" class="mb-4 h-96 overflow-y-auto">
        <div class="mb-2">
         <p class="bg-gray-200 rounded-lg p-2 inline-block">
          Hello! How can I help you today?
         </p>
        </div>
        <!-- Add more message bubbles as needed -->
       </div>
       <!-- Chat input -->
       <form id="chat-form" class="flex">
        <input
         type="text"
         id="chat-input"
         class="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         placeholder="Type your message..."
        />
        <button
         type="submit"
         class="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         Send
        </button>
       </form>
      </div>
     </div>
    </div>
   </main>

   <script>
    // Chat form submission (placeholder functionality)
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', (e) => {
     e.preventDefault();
     if (chatInput.value.trim() !== '') {
      const message = document.createElement('div');
      message.className = 'mb-2 text-right';
      message.innerHTML = (
       <p class='bg-blue-500 text-white rounded-lg p-2 inline-block'>
        {' '}
        {chatInput.value}{' '}
       </p>
      );
      chatMessages.appendChild(message);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
     }
    });
   </script>
  </body>
 </html>`;

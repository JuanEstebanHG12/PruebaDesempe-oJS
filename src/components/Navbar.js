export function Navbar() {
    return `<header class="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
  
  <!-- Left: Breadcrumb -->
  <div class="flex items-center space-x-2 text-sm text-gray-600">
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10" />
    </svg>
    <span>/</span>
    <span class="font-medium text-gray-800">Dashboard</span>
  </div>

  <!-- Right: Actions -->
  <div class="flex items-center space-x-6">
    
    <!-- Notification -->
    <button class="relative text-gray-500 hover:text-gray-700">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5" />
      </svg>
    </button>

    <!-- User -->
    <div class="flex items-center space-x-2 cursor-pointer">
      <img
        src="avatar.jpg"
        alt="User avatar"
        class="w-8 h-8 rounded-full object-cover"
      >
      <div class="text-sm leading-tight">
        <p class="font-medium text-gray-800">Alex Morgan</p>
        <p class="text-gray-500 text-xs">Product Designer</p>
      </div>

      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Logout -->
    <button class="text-red-500 hover:text-red-600">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
      </svg>
    </button>

  </div>
</header>

`

}
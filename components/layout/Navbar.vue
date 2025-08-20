<template>
  <header id="topNavbar">
    <nav>
      <h1 class="text-3xl text-pink-800 font-bold font-(family-name:--font-1)">Instagram</h1>
      <ul class="flex gap-4">
        <li><button class="cursor-pointer">
          <font-awesome-icon icon="fa fa-plus" class="w-6 border-2 border-gray-500 p-[2px] rounded-sm text-gray-500" />
        </button></li>
        <li><button class="cursor-pointer relative">
          <NotificationDot />
          <font-awesome-icon icon="fa-regular fa-heart" class="text-gray-500 w-6 relative" />
        </button></li>
        <li><button>
          <font-awesome-icon icon="fab fa-facebook-messenger" class="cursor-pointer w-6 text-gray-500" />
        </button></li>
      </ul>
    </nav>
  </header>
</template>


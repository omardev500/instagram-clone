<template>
  <header class="flex items-center justify-between pt-6 px-3 pb-2">
    <h1 class="text-2xl font-bold font-(family-name:--font-1)">Instagram</h1>
    <nav class="flex gap-4">
      <button class="cursor-pointer">
        <font-awesome-icon icon="fa fa-plus" class="w-6 border-2 border-gray-500 p-[2px] rounded-sm text-gray-500" />
      </button>
      <button class="cursor-pointer relative">
        <NotificationDot />
        <font-awesome-icon icon="fa-regular fa-heart" class="text-gray-500 w-6 relative" />
      </button>
      <button>
        <font-awesome-icon icon="fab fa-facebook-messenger" class="cursor-pointer w-6 text-gray-500" />
      </button>
    </nav>
  </header>
</template>


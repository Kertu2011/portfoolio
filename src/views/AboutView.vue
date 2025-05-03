<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div class="text-center">
              <h1 class="text-3xl font-bold text-gray-900">About Page</h1>
              <p class="mt-2 text-gray-600">This page demonstrates Vue Router navigation.</p>
            </div>
            <div class="mt-8 text-center">
              <router-link to="/" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Back to Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
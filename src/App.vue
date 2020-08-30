<template>
  <div id="app">
    <div type="dark" variant="info">
      <div to="/">Rick & Morty</div>
      <div class="ml-auto">
        <router-link to="/" :active="$route.path === '/'">Characters</router-link>
        <router-link to="/favorites" :active="$route.path === '/favorites'"
          >Favorites</router-link
        >
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
.spinner {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

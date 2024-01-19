<template>
  <div class="phone-container">
    <header>
      <div class="logo">Your Phone</div>
    </header>

    <nav>
      <RouterLink to="/appeler">Appeler</RouterLink>
      <RouterLink to="/contacter">Contacts</RouterLink>
      <RouterLink to="/+">Ajouter contact</RouterLink>
      <RouterLink to="/composer">Composer</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.phone-container {
  width: 100vw;
  height: 100vh;
  background-color: #eee; /* Background color of the phone */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  padding: 1rem;
  background-color: #fff; /* Header background color */
}

.logo {
  font-size: 1.5rem;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  align-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: #333; /* Link color */
}

nav a:first-of-type {
  border: 0;
}
</style>
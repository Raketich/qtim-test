<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left">
        <NuxtLink to="/articles" class="logo">
          <img
            src="/icons/logo-qtim.svg"
            alt="QTIM Logo"
            width="84"
            height="25"
          />
        </NuxtLink>
      </div>
      <div class="header__right">
        <div class="header__nav">
          <NuxtLink to="/works" class="nav-link">Works</NuxtLink>
          <NuxtLink href="https://qtim.pro/" class="nav-link">About</NuxtLink>
        </div>
        <div class="header__actions">
          <button class="lang-switcher">
            <img
              src="/icons/uk-flag.svg"
              alt="Language"
              width="24"
              height="24"
            />
          </button>
          <NuxtLink to="/" class="right-button">Let's work</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 121px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 100;
}

.header__container {
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 0 40px;
  margin: 0 auto;
}

.header__right {
  display: flex;
  gap: 91px;
  align-items: center;
}

.header__nav {
  display: flex;
  gap: 58px;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  height: 52px;
}

.header__actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.lang-switcher {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid var(--color-gray-light);
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.right-button {
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 52px;
  padding: 16px 32px;
  border-radius: 100px;
  background: var(--color-black);
  color: var(--color-white);
}

.logo {
  display: flex;
  align-items: center;
  height: 52px;
}
</style>

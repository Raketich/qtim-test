<script setup lang="ts">
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;

  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left">
        <NuxtLink to="/articles" class="logo" @click="closeMobileMenu">
          <img
            src="/icons/logo-qtim.svg"
            alt="QTIM Logo"
            width="84"
            height="25"
          />
        </NuxtLink>
      </div>

      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <div
          class="mobile-menu-toggle__icon"
          :class="{ 'is-active': mobileMenuOpen }"
        ></div>
      </button>

      <div class="header__right" :class="{ 'is-open': mobileMenuOpen }">
        <div class="header__nav">
          <NuxtLink to="/works" class="nav-link" @click="closeMobileMenu"
            >Works</NuxtLink
          >
          <NuxtLink
            href="https://qtim.pro/"
            class="nav-link"
            @click="closeMobileMenu"
            >About</NuxtLink
          >
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
          <NuxtLink
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            class="right-button"
            @click="closeMobileMenu"
            >Let's work</NuxtLink
          >
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

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  position: relative;
  cursor: pointer;
  z-index: 101;
}

.mobile-menu-toggle__icon {
  position: relative;
  width: 24px;
  height: 2px;
  background: var(--color-black);
  transition: all 0.3s;
  margin: 0 auto;
}

.mobile-menu-toggle__icon::before,
.mobile-menu-toggle__icon::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-black);
  transition: all 0.3s;
}

.mobile-menu-toggle__icon::before {
  transform: translateY(-8px);
}

.mobile-menu-toggle__icon::after {
  transform: translateY(8px);
}

.mobile-menu-toggle__icon.is-active {
  background: transparent;
}

.mobile-menu-toggle__icon.is-active::before {
  transform: rotate(45deg);
}

.mobile-menu-toggle__icon.is-active::after {
  transform: rotate(-45deg);
}

@media (max-width: 960px) {
  .header {
    height: 80px;
  }

  .header__container {
    padding: 0 20px;
  }

  .header__right {
    gap: 40px;
  }

  .header__nav {
    gap: 30px;
  }

  .right-button {
    padding: 12px 24px;
  }
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }

  .header__right {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    justify-content: center;
    padding: 40px 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 100;
  }

  .header__right.is-open {
    transform: translateX(0);
  }

  .header__nav {
    flex-direction: column;
    gap: 40px;
  }

  .header__actions {
    margin-top: 60px;
  }

  .nav-link {
    font-size: 24px;
  }
}
</style>

<script setup lang="ts">
import OfficeLocation from "@/components/common/OfficeLocation.vue";

const contacts = {
  phone: "+7 (920) 278-00-68",
  email: "qtim@agency.com",
};

const locations = [
  {
    title: "Office in Russia",
    body: "139 Ruben Station Lake Drew, NM 52678",
  },
  {
    title: "Office in Dubai",
    body: "139 Ruben Station Lake Drew, NM 52678",
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__top">
        <div class="footer__left">
          <div class="footer__question text-s">Is there a project?</div>
          <div class="footer__title">Let's work together</div>
        </div>
        <div class="footer__right">
          <div class="footer__contacts">
            <div class="text-s">For all questions</div>
            <div class="text-s">{{ contacts.phone }}</div>
            <div class="text-s">{{ contacts.email }}</div>
          </div>
          <div class="footer__locations">
            <OfficeLocation
              v-for="location in locations"
              :key="location.title"
              :title="location.title"
              :body="location.body"
            />
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__nav text-s">
          <NuxtLink
            href="https://www.facebook.com/qtim.pro/"
            class="footer__link"
            >Facebook</NuxtLink
          >
          <NuxtLink
            href="https://www.instagram.com/qtim.pro/"
            class="footer__link"
            >Instagram</NuxtLink
          >
          <NuxtLink href="https://t.me/qtim_pro" class="footer__link"
            >Telegram</NuxtLink
          >
        </div>
        <div class="footer__go-container">
          <NuxtLink
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            class="footer__go-btn"
            >Go</NuxtLink
          >
          <div class="footer__go-circle"></div>
        </div>
        <div class="footer__nav text-s">
          <NuxtLink href="https://www.behance.net/" class="footer__link"
            >Behance</NuxtLink
          >
          <NuxtLink
            href="https://ru.linkedin.com/company/qtim"
            class="footer__link"
            >Linkedin</NuxtLink
          >
          <NuxtLink to="/privacy-policy" class="footer__link"
            >Privacy Policy</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: var(--color-violet-soft);
  display: flex;
  justify-content: center;
  min-height: 900px;
}

.footer__content {
  max-width: 1216px;
  width: 100%;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__top {
  display: flex;
  gap: 368px;
}

.footer__left {
  width: 464px;
  max-width: 100%;
}

.footer__question {
  margin-bottom: 24px;
}

.footer__title {
  font-size: 84px;
  line-height: 100%;
  text-decoration: underline;
}

.footer__right {
  display: flex;
  flex-direction: column;
  max-width: 152px;
  gap: 36px;
  padding-top: 50px;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__locations {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  margin-top: 80px;
}

.footer__nav {
  display: flex;
  gap: 32px;
  padding-bottom: 20px;
}

.footer__link {
  color: inherit;
  border-bottom: 1px solid var(--color-black);
}

.footer__go-container {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__go-btn {
  color: var(--color-white);
  background: none;
  border: none;
  font-size: 20px;
  position: relative;
  z-index: 2;
  padding-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
}

.footer__go-circle {
  width: 358px;
  height: 179px;
  background: var(--color-black);
  border: none;
  border-radius: 179px 179px 0 0;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

a {
  text-decoration: none;
}

@media (max-width: 1240px) {
  .footer__top {
    gap: 120px;
  }

  .footer__title {
    font-size: 64px;
  }
}

@media (max-width: 960px) {
  .footer__content {
    padding-top: 100px;
  }

  .footer__top {
    flex-direction: column;
    gap: 60px;
  }

  .footer__right {
    padding-top: 0;
    max-width: 100%;
  }

  .footer__title {
    font-size: 48px;
  }

  .footer__go-circle {
    width: 260px;
    height: 130px;
  }
}

@media (max-width: 768px) {
  .footer__bottom {
    margin-top: 60px;
  }

  .footer__nav {
    flex-direction: column;
    gap: 16px;
  }

  .footer__go-btn {
    font-size: 16px;
    padding-bottom: 16px;
  }
}

@media (max-width: 640px) {
  .footer__content {
    padding: 80px 20px 40px;
  }

  .footer__left {
    width: 100%;
  }

  .footer__title {
    font-size: 36px;
  }

  .footer__bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 80px;
    align-items: flex-start;
  }

  .footer__go-container {
    position: relative;
    grid-column: 1 / -1;
    grid-row: 2;
    transform: none;
    left: auto;
    bottom: auto;
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .footer__go-circle {
    width: 200px;
    height: 100px;
  }
}
</style>

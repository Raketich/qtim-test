<script setup lang="ts">
interface Props {
  id: string;
  title: string;
  preview: string;
  image: string;
}

const props = defineProps<Props>();
const imageLoaded = ref(true);

const handleImageError = () => {
  imageLoaded.value = false;
};

const getArticleUrl = (title: string, id: string) => {
  const kebabTitle = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return `/articles/${kebabTitle}-${id}`;
};
</script>

<template>
  <NuxtLink :to="getArticleUrl(title, id)" class="article-card">
    <div class="article-card__image-container">
      <img
        v-if="image && imageLoaded"
        :src="image"
        :alt="title"
        class="article-card__image"
        @error="handleImageError"
      />
      <div v-else class="article-card__fallback">
        <div class="article-card__fallback-text">{{ title }}</div>
      </div>
    </div>
    <p class="article-card__description text-s">{{ preview }}</p>
  </NuxtLink>
</template>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 280px;
  height: 378px;
  text-decoration: none;
  color: inherit;
  margin: 0 auto;
}

.article-card__image-container {
  width: 100%;
  height: 280px;
  position: relative;
}

.article-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-card__fallback {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-violet) 0%,
    var(--color-blue) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.article-card__fallback-text {
  color: var(--color-white);
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-card__description {
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 480px) {
  .article-card {
    height: auto;
    min-height: 300px;
  }

  .article-card__image-container {
    height: 220px;
  }
}
</style>

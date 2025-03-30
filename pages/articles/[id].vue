<script setup lang="ts">
import type { Article } from "~/types/article";

const route = useRoute();
const { id } = route.params;
const article = ref<Article | null>(null);
const { getArticle } = useArticles();
const imageLoaded = ref(true);

const handleImageError = () => {
  imageLoaded.value = false;
};

const { data: articleData } = await getArticle(id as string);
article.value = articleData.value || null;

useHead(() => {
  if (!article.value) return {};

  const title = article.value.title;
  const description = article.value.preview || article.value.description;
  const url = `https://qtim.pro/articles/${id}`;
  const image =
    imageLoaded.value && article.value.image
      ? article.value.image
      : "https://qtim.pro/og-image.jpg";

  return {
    title: title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: `${title} | QTIM` },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
  };
});
</script>

<template>
  <div class="article-page">
    <div v-if="article" class="article">
      <h1 class="article__title title-h1">{{ article.title }}</h1>

      <div class="article__image-container">
        <img
          v-if="article.image && imageLoaded"
          :src="article.image"
          :alt="article.title"
          class="article__image"
          @error="handleImageError"
        />
        <div v-else class="article__fallback">
          <div class="article__fallback-text">{{ article.title }}</div>
        </div>
      </div>

      <div class="article__description text-m">{{ article.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.article-page {
  padding: 80px 0;
}

.article {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.article__title {
  text-align: left;
}

.article__image-container {
  width: 100%;
  position: relative;
  min-height: 400px;
}

.article__image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.article__fallback {
  width: 100%;
  height: 400px;
  background: linear-gradient(
    135deg,
    var(--color-mint) 0%,
    var(--color-violet-soft) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.article__fallback-text {
  color: var(--color-black);
  font-size: 32px;
  line-height: 1.3;
  text-align: center;
  font-weight: 500;
  max-width: 800px;
}

.article__description {
  width: 695px;
  text-align: left;
}
</style>

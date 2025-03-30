<script setup lang="ts">
import type { Article } from "~/types/article";
import ArticleCard from "@/components/common/ArticleCard.vue";

const articlesData = ref<Article[]>([]);
const { getArticles } = useArticles();

const { data } = await getArticles();
articlesData.value = data.value || [];

const articles = computed(() => articlesData.value);
const { paginatedItems, visiblePages, currentPage, totalPages, goToPage } =
  usePagination(articles);

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1);
  }
};

useHead({
  title: "Articles",
  meta: [
    {
      name: "description",
      content:
        "Browse our collection of articles about design, development, and digital solutions",
    },
    { property: "og:title", content: "Articles | QTIM" },
    {
      property: "og:description",
      content:
        "Browse our collection of articles about design, development, and digital solutions",
    },
    { property: "og:url", content: "https://qtim.pro/blog" },
    { property: "og:image", content: "https://qtim.pro/og-image.jpg" },
  ],
});
</script>

<template>
  <div class="articles-page">
    <h1 class="articles-page__title text-xxl">Articles</h1>
    <div class="articles__grid">
      <ArticleCard
        v-for="article in paginatedItems"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :preview="article.preview"
        :image="article.image"
      />
    </div>
    <div v-if="visiblePages.length > 1" class="pagination">
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button class="pagination__next" @click="goToNextPage"></button>
    </div>
  </div>
</template>

<style scoped>
.articles-page {
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  gap: 50px;
}

.articles__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  justify-content: center;
  margin-bottom: 40px;
}

.pagination {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pagination button {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: none;
  background: var(--color-gray-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.pagination button.active {
  background: var(--color-black);
  color: var(--color-white);
}

.pagination__next {
  background: var(--color-white) !important;
  border: 1px solid var(--color-gray-light) !important;
  position: relative;
}

.pagination__next::after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-top: 1.5px solid var(--color-gray);
  border-right: 1.5px solid var(--color-gray);
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -6px;
  margin-top: -4px;
}

@media (max-width: 1240px) {
  .articles__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 960px) {
  .articles__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .articles-page {
    padding: 40px 0;
    gap: 30px;
  }

  .articles__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .pagination button {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }
}
</style>

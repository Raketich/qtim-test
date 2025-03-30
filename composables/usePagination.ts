import type { Article } from "~/types/article";

export const usePagination = (
  items: ComputedRef<Article[]> | Ref<Article[]>,
  itemsPerPage = 8
) => {
  const currentPage = ref(1);
  const totalPages = computed(() =>
    Math.ceil(items.value.length / itemsPerPage)
  );

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.value.slice(start, end);
  });

  const visiblePages = computed(() => {
    const pages = [];
    const maxVisiblePages = 5;
    let start = Math.max(
      1,
      currentPage.value - Math.floor(maxVisiblePages / 2)
    );
    let end = Math.min(totalPages.value, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  });

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    visiblePages,
    goToPage,
  };
};

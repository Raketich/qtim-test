import type { Article } from "~/types/article";

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path.startsWith("/articles/") && /^\/articles\/\d+$/.test(to.path)) {
    const id = to.path.split("/").pop();

    const { data } = await useAsyncData<Article>(`article-${id}`, () =>
      $fetch(
        `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
      )
    );

    if (data.value) {
      const kebabTitle = data.value.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      return navigateTo(`/articles/${kebabTitle}-${id}`, { redirectCode: 301 });
    }
  }
});

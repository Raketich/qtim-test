import type { Article } from "~/types/article";

const API_URL =
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts";

export const useArticles = () => {
  const getArticles = () => {
    return useAsyncData<Article[]>("articles", () => $fetch(API_URL));
  };

  const getArticle = (id: string) => {
    return useAsyncData<Article>(`article-${id}`, () =>
      $fetch(`${API_URL}/${id}`)
    );
  };

  return {
    getArticles,
    getArticle,
  };
};

import { ref } from "vue";

export const useTheme = () => {
  const isPeachTheme = ref(false);

  const toggleTheme = () => {
    isPeachTheme.value = !isPeachTheme.value;
    document.body.classList.toggle("peach-theme");
  };

  return {
    isPeachTheme,
    toggleTheme,
  };
};

<template>
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <p v-if="!countdownStopped">
      You will be redirected to the home page in {{ countdown }} seconds...
    </p>
    <p v-else>Redirect stopped. You can stay here.</p>
    <button @click="stopCountdown" v-if="!countdownStopped">
      Stop Redirect
    </button>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup>
const router = useRouter();
const countdown = ref(5);
const countdownStopped = ref(false);
let countdownInterval;

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    if (countdown.value > 0 && !countdownStopped.value) {
      countdown.value--;
    } else if (!countdownStopped.value) {
      router.push("/");
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const stopCountdown = () => {
  countdownStopped.value = true;
  clearInterval(countdownInterval);
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
h1 {
  color: var(--color-violet);
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: var(--color-violet-soft);
  border: 1px solid var(--color-gray-soft);
  border-radius: 10px;
  cursor: pointer;
}
</style>

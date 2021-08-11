<template>
    <router-link to="/Second"><button class="btn">Налоговый вычет</button></router-link>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
@media screen and (max-width: 453px) {
  .btn {
    padding: 12px 24px;
    font-size: 12px;
  }
}
</style>
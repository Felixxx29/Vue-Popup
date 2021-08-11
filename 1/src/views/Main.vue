<template>
  <div id="container">
    <Button/>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Main",
  components: {
    Button
  },
}
</script>

<style scoped>
#container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;;
}
</style>
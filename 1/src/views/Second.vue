<template>
  <div id="container">
    <Form/>
  </div>
</template>

<script>
import Form from "../components/Form";

export default {
  name: "Second",
  components: {
    Form
  }
}
</script>

<style scoped>
html {
  min-height: 100%;
}
body {
  min-height: 100%;
}
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}

</style>
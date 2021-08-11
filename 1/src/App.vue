<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "LabGrotesque-Medium";
  src: url("./assets/fonts/lab-grotesque/LabGrotesque-Medium.ttf");
}

@font-face {
  font-family: "LabGrotesque-Regular";
  src: url("./assets/fonts/lab-grotesque/LabGrotesque-Regular.ttf");
}

body {
  margin: 0;
}

.bgMain {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
}

.bgClicked {
  background: rgba(0, 0, 0, 0.3);
}

.btn {
  padding: 16px 32px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: "LabGrotesque-Medium", sans-serif;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
  background: transparent;
}

.btn:hover {
  background: white;
  cursor: pointer;
  color: Black;
}

.btn.btnDisabled {
  background: #BEC5CC;
}

@media screen and (max-width: 768px){
}
</style>


<template>
  <router-view/>
</template>

<style>
@import url('@/assets/main/iconts.css');

*, body {
  margin:0;
  padding: 0;
}
body {
  overflow: hidden;
  height: 90vh;
  font-family: 'Roboto', 'Rubik', sans-serif;
}

.btn {
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: bolder;
}
.btn-primary {
  background-color: #42b983;
}
</style>

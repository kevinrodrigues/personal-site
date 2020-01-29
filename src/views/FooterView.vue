<template>
  <div>
    <footer>
      <button v-scroll-to="{ el: '#home', duration: 700 }"></button>
      <p class="footer-note">Kevin Rodrigues &copy; 2020</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
footer {
  background: #1b242f;
  padding: 70px 0 50px 0;
  position: relative;
}

button {
  background: #e31b6d;
  cursor: pointer;
  font-size: 13px;
  height: 50px;
  left: 0;
  line-height: 40pt;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: -25px;
  transition: background 0.5s;
  width: 47px;
  border: none;
}

.footer-note {
  color: #8f9aa7;
  font-size: 13px;
  margin-top: 35px;
  opacity: 0.6;
}
</style>

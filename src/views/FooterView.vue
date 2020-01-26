<template>
  <div>
    <footer>
      <button v-scroll-to="{ el: '#home', duration: 700 }">Top</button>
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

.footer-note {
  color: #8f9aa7;
  font-size: 13px;
  margin-top: 35px;
  opacity: 0.6;
}
</style>

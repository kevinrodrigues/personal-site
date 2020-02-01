<template>
  <div>
    <footer>
      <div class="c-scroll-top">
        <button v-scroll-to="{ el: '#home', duration: 700 }">
          <span></span>
        </button>
      </div>
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

.c-scroll-top {
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}


.c-scroll-top button {
  display: inline-block;
}

.c-scroll-top span {
  display: inline-block;
  width: 3em;
  height: 3em;
  margin-left: -0.25em;
  transition: all 0.1s ease-out;
}

.c-scroll-top span:after {
  content: '';
  display: inline-block;
  margin-top: 0.6em;
  width: 1.2em;
  height: 1.2em;
  border-top: 0.15em solid #fff;
  border-right: 0.15em solid #fff;
  transform: rotate(-45deg);
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

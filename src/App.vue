<template>
  <div>
      <div id="app">
        <router-view/>
      </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: #232741;
  margin: 0;
  color: #fff;
}
.btn {
  position: relative;
  border: 2px solid #fff;
  box-sizing: inherit;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 10px 40px 10px 20px;
  transition: all 0.5s;
  background: transparent;
  color: #fff;
}

.btn:before {
  content: "";
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border-top: 0.15em solid #fff;
  border-right: 0.15em solid #fff;
  -webkit-transform: rotate(-45deg);
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.btn {
  &:hover,
  &:focus {
    background-color: #04c2c9;
    border-color: #04c2c9;

    &:before {
      right: 10px;
    }
  }
}

.highlight {
  color: #04c2c9;
}

#app {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  color: #fff;
}

.flex {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.c-section {
  color: #fff;
  height: calc(100vh + 53px);
  padding: 0 10px;
  position: relative;
}

html,
body {
  width: 100%;
  height: 100%;
}

#particles-js {
  position:absolute;
  width:100%;
  height:100%;
  top: 0;
  z-index: -1;
}

#nav {
  padding: 30px;
  background-color: rgba(0,0,0,0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>

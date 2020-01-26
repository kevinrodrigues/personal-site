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

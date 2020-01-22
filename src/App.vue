<template>
  <div>
      <div id="app">
        <div id="nav">
          <router-link to="/">Me</router-link> |
          <router-link to="/build">Projects</router-link> |
          <router-link to="/github">Github</router-link>
        </div>
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

h1 {
  color: rgb(252, 58, 27);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  a {
    color: rgb(3, 59, 146);
  }
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

<template>
  <div>
    <div class="c-section flex">
      <div class="flex">
        <h1>Hello 👋🏽, I'm Kevin <strong>Rodrigues</strong></h1>
        <p class="spacing--bottom">I'm a UI Engineer at Just Eat.</p>
        <button class="btn">Projects</button>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 0;
}
h1 strong {
  color: #e31b6d;
}

.btn {
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

.btn {
  &:hover,
  &:focus {
    background-color: #04c2c9;
    border-color: #04c2c9;
  }
}

.spacing--bottom {
  margin: 0 0 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

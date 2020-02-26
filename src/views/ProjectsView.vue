<template>
  <div>
    <h2>Projects</h2>
    <p>Random things:</p>
    <a class="btn" href="https://github.com/kevinrodrigues" target="_blank">Github</a>
    <p>Forgot an item whilst shopping? `Need Milk` could help (Currently being built):</p>
    <strong class="btn disabled">Need Milk</strong>
  </div>
</template>

<style scoped lang="scss">
strong {
  text-decoration: underline;
}

.btn {
  border: 2px solid #e31b6d;
  color: #e31b6d;
  text-decoration: none;

  &.disabled {
    border: 2px solid #cac1c4;
    color: #cac1c4;

    &:before {
      border-top: 0.15em solid #cac1c4;
      border-right: 0.15em solid #cac1c4;
    }

    &:hover,
    &:focus {
      background-color: transparent;
      color: #cac1c4;

      &:before {
        border-top: 0.15em solid #cac1c4;
        border-right: 0.15em solid #cac1c4;
      }
    }
  }

  &:hover,
  &:focus {
    background-color: #e31b6d;
    color: #fff;

    &:before {
      border-top: 0.15em solid #fff;
      border-right: 0.15em solid #fff;
    }
  }
}

.btn:before {
  border-top: 0.15em solid #e31b6d;
  border-right: 0.15em solid #e31b6d;
}
</style>

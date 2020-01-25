<template>
  <div>
      <div id="app">
        <!--<div id="nav">-->
          <!--<router-link to="/">Me</router-link> |-->
          <!--<router-link to="/build">Projects</router-link> |-->
          <!--<router-link to="/github">Github</router-link>-->
        <!--</div>-->
        <router-view/>
      </div>
  </div>
</template>

<script>
import {
  CanvasSpace,
  Create,
  Group,
  Line,
} from 'pts';

export default {
  mounted() {
    this.patternGenerator();
  },

  methods: {
    patternGenerator() {
      let pts = new Group();
      const space = new CanvasSpace('#app').setup({ bgcolor: 'transparent', resize: true, retina: true });
      const form = space.getForm();

      space.add({
        start: () => {
          pts = Create.distributeRandom(space.innerBound, 200);
        },
        animate: () => {
          const perpend = new Group(space.center.$subtract(1), space.pointer)
            .op(Line.perpendicularFromPt);

          pts.rotate2D(0.0005, space.center);
          pts.forEach((p, i) => {
            const lp = perpend(p);
            const ratio = Math.min(1, 1 - lp.$subtract(p).magnitude() / (space.size.x / 2));
            form.stroke(`rgba(255,255,255,${ratio}`, ratio * 2).line([p, lp]);
            form.fillOnly(['#f03', '#09f', '#0c6'][i % 3]).point(p, 1);
          });
        },
      });
      space.play();
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #232741;
  margin: 0;
  color: #fff;
}
#app_canvas {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;
}
h1 {
  font-size: 20px;
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

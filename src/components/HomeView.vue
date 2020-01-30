<template>
  <div>
    <div id="home" class="c-section flex">
      <div id="pts" class="pts"></div>
      <div class="flex">
        <h1 class="heading">Hello, I'm Kevin <strong>Rodrigues</strong>.</h1>
        <p class="spacing--bottom sub-heading">👲🏽 I'm a Senior UI Engineer.</p>
        <button v-scroll-to="{
            el: '#projects',
            duration: 700
        }" class="btn">Projects</button>
        <nav class="flex">
          <ul>
            <li><a href="#" v-scroll-to="{ el: '#home', duration: 700 }">Home</a></li>
            <li><a href="#" v-scroll-to="{ el: '#about', duration: 700 }">About</a></li>
            <li><a href="#" v-scroll-to="{ el: '#projects', duration: 700 }">Projects</a></li>
            <li><a href="#" v-scroll-to="{ el: '#contact', duration: 700 }">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div id="about" class="c-section flex about">
      <about-view/>
    </div>

    <div id="projects" class="c-section flex projects">
      <project-view/>
    </div>

    <div id="contact" class="c-section flex contact">
      <contact-view/>
    </div>

    <div>
      <footer-view/>
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
import AboutView from '@/views/AboutView.vue';
import ProjectView from '@/views/ProjectsView.vue';
import ContactView from '@/views/ContactView.vue';
import FooterView from '@/views/FooterView.vue';

export default {
  name: 'home',
  components: {
    AboutView,
    ProjectView,
    ContactView,
    FooterView,
  },
  mounted() {
    this.patternGenerator();
  },
  methods: {
    patternGenerator() {
      let pts = new Group();
      const space = new CanvasSpace('#pts').setup({ bgcolor: 'transparent', resize: true, retina: true });
      const form = space.getForm();

      space.add({
        start: () => {
          pts = Create.distributeRandom(space.innerBound, 200);
        },
        animate: () => {
          const perpend = new Group(space.center.$subtract(1), space.pointer)
            .op(Line.perpendicularFromPt);

          pts.rotate2D(0.001, space.center);
          pts.forEach((p, i) => {
            const lp = perpend(p);
            const ratio = Math.min(1, 0.9 - lp.$subtract(p).magnitude() / (space.size.x / 1));
            form.stroke(`rgba(255,255,255,${ratio}`, ratio * 0.2).line([p, lp]);
            form.fillOnly(['#f03', '#09f', '#0c6'][i % 10]).point(p, 0.9);
          });
        },
      });
      space.play();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 0;
}
h1 strong {
  color: #e31b6d;
}

.heading {
  font-size: 24px;
}

.sub-heading {
  font-size: 22px;
}

@media screen and (min-width: 600px) {
  .heading,
  .sub-heading {
    font-size: 42px;
  }
}

.pts {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;
}

nav {
  bottom: 0;
  left: 0;
  position: absolute;
  background: #1b242f;
  border-bottom: 3px solid #04c2c9;
  height: 50px;
  text-align: left;
  width: 100%;
  z-index: 99;

  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
  }
}

.about,
.projects {
  background-color: #fff;
  color: #616161;
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

import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import * as Sentry from '@sentry/browser';
import LogRocket from 'logrocket';
import * as Integrations from '@sentry/integrations';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueScrollTo);
Vue.config.productionTip = false;

Sentry.init({
  dsn: 'https://d5d2bf2ee9f049e0bb03f4ecd1665b13@sentry.io/2067207',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

LogRocket.init('stmphc/personal-site-v6go3');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

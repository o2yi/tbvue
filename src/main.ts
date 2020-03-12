import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import axios from './libs/axios';
Vue.prototype.axios = axios;
// Vue.use(axios)



// import axios from 'axios';
// Vue.use(axios)
// import Vueaxios from 'vue-axios';
// console.log(axios);
// Vue.use(Vueaxios, axios)




new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

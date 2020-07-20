import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from 'vue';
import  BootstrapVue from './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
// import VueCompositionApi from '@vue/composition-api';
// import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './graphql/client';

// createApp({
//   setup() {
//     provide(DefaultApolloClient, apolloClient);
//   },

//   render: () => h(App)
// }).use(router, VueCompositionApi).mount('#app');

const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient);
app.use(router, VueCompositionApi, BootstrapVue);
app.mount("#app");

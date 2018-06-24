import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from '@/vuex/store'
import '@/filters'
/* @if NODE_ENV=='dev' */
import 'vconsole'
/* @endif */

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})


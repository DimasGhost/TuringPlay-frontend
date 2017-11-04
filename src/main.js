// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vMediaQuery from 'v-media-query';

window.Vue = Vue;
Vue.use(vMediaQuery);
Vue.config.productionTip = false;

Vue.mixin({
    computed: {
        mqw() {
            let update = this.$mq.resize;
            return innerWidth;
        }
    }
});

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
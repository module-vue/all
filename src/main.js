import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store.js';

Vue.config.productionTip = false;

import router from './router/router.js';
import './config/ie';


import promise from 'es6-promise';
promise.polyfill();

import VJstree from 'vue-jstree';

Vue.component(VJstree.name, VJstree);

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const VueUploadComponent = require('vue-upload-component');
Vue.component('file-upload', VueUploadComponent);

import WangEditor from 'wangeditor';
global.WangEditor = WangEditor;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import './assets/css/app.dev.scss';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    watch: {
        $route (to, from) {
            document.onkeydown = function(e) {
                let ev = (typeof event!= 'undefined') ? window.event : e;
                
                if(ev.keyCode == 13 && e.target.nodeName == 'BUTTON') {
                    return false;
                }
            }
        }
    }
});

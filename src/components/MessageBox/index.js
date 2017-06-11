import Vue from 'vue';
import MessageBox from './src/main.js';

export default {
    install() {
        Vue.prototype.$messageBox = MessageBox;
    }
};
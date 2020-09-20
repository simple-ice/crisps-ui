import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/demo/SwitchDemo.vue'
import ButtonDemo from './components/demo/ButtonDemo.vue'
import DialogDemo from './components/demo/DialogDemo.vue'
import TabsDemo from './components/demo/TabsDemo.vue'
import DocDemo from './components/demo/DocDemo.vue'

import Introduce from './views/Introduce.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
            {path: '', component: DocDemo},
            {path: 'introduce', component: Introduce},
            {path: 'get-started', component: GetStarted},
            {path: 'install', component: Install},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo},
        ]}
    ]
})
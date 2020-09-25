import {createWebHashHistory, createRouter} from 'vue-router'
import {h} from 'vue';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/demo/SwitchDemo.vue'
import ButtonDemo from './components/demo/ButtonDemo.vue'
import DialogDemo from './components/demo/DialogDemo.vue'
import TabsDemo from './components/demo/TabsDemo.vue'

import Markdown from './components/Markdown.vue';

import introduce from './markdown/introduce.md';
import install from './markdown/install.md';
import getStarted from './markdown/get-started.md';
const history = createWebHashHistory()
const md = (content: string, key: string) => {
   return h(Markdown, {content, key})
}

export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
            {path: '', redirect: '/doc/introduce'},
            {path: 'introduce', component: md(introduce, 'introduce')},
            {path: 'install', component: md(install, 'install')},
            {path: 'get-started', component: md(getStarted, 'get-started')},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo},
        ]}
    ]
})
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/demo/SwitchDemo.vue'
import ButtonDemo from './components/demo/ButtonDemo.vue'
import DialogDemo from './components/demo/DialogDemo.vue'
import TabsDemo from './components/demo/TabsDemo.vue'
import DocDemo from './components/demo/DocDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
            {path: '', component: DocDemo},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo},
        ]}
    ]
})
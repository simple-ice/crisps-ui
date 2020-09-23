<template>
<div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div class="demo-actions">
        <Button @click="codeVisible = !codeVisible">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="codeHtml"></pre>
    </div>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import {
    computed,
    ref
} from 'vue';
export default {
    components: {
        Button
    },
    props: {
        component: Object
    },
    setup(props) {
        const codeVisible = ref(false);
        const codeHtml = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        return {
            Prism,
            codeVisible,
            codeHtml
        }
    }
}
</script>

<style lang="scss">
$border-color: #daa593;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    border-radius: 6px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;

        >div {
            margin: 10px 0;
        }
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>

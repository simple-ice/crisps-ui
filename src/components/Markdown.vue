<template>
<div class="markdown-body" v-html="content">

</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const content = ref < string > (null)
        import(props.path).then(result => {
            content.value = result.default;
        })
        return {
            content
        }
    }
}
</script>

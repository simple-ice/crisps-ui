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
        content: {
            type: String,
            required: true
        }
    }
}
</script>

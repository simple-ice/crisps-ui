<template>
<div class="markdown-body" v-html="md">

</div>
</template>

<script>
import md from '../markdown/get-started.md';
export default {
    data() {
        return {
            md
        }
    }
}
</script>

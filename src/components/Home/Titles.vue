<template>
    <section class="scene" :id="scene">
        <div class="title-container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Titles',
        props: {
            scene: String,
            viewport: Object
        }
    }
</script>
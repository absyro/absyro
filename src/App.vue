<template>
    <NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    name: 'App',
    components: {
        NavBar
    }
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>

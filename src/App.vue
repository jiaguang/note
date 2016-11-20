<template>
    <div id="app">
        <Sidebar/>
        <Notelist/>
        <Editbox/>
    </div>
</template>
<style>
    body, html, #app {
        margin: 0;
        padding: 0;
        height: 100%
    }

    h1 {
        margin: 0;
    }


</style>
<script>
    import Sidebar from './components/sidebar.vue'
    import Notelist from './components/notelist.vue'
    import Editbox from './components/editbox.vue'
    import store from './vuex/store';
    export default{
        components: {
            Sidebar, Notelist, Editbox
        },
        store: store
    }


</script>

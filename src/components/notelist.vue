<!--suppress ALL -->
<template>
    <div id="notelist">
        <h1>记事本</h1>
        <ul>
            <li v-for="note in filteredNotes" @click="setActiveNote(note)"
                :class="{active: activeNote === note}"


            >{{note.txt}}
            </li>
        </ul>
    </div>
</template>
<style scoped>
    #notelist {
        float: left;
        height: 100%;
        background: #f5f5f5;
        width: 200px;
    }

    li:hover {
        background: #dedede
    }

    li.active {
        background: #ff0000
    }
</style>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        computed: {
            activeNote(){
                console.info(this.getActiveNote)
                return this.getActiveNote
            },
            filteredNotes(){
                return this.getNoteList
            },
            ...mapGetters(['getNoteList', 'getActiveNote'])
        },
        methods: {
            ...mapActions(['setActiveNote'])
        }
    }
</script>

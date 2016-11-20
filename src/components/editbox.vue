<template>
    <div id="note-editor">
    <textarea
            :value="getActiveNoteTxt"
            @input="editNote"
            class="form-control">
    </textarea>
    </div>
</template>
<style>
    #note-editor {
    height: 100%;
    margin-left: 300px;
}
#note-editor textarea {
    height: 100%;
    border: 0;
    border-radius: 0;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
</style>
<script>
import {mapGetters, mapActions} from 'vuex';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed:{

          ...mapGetters(['getActiveNoteTxt'])

        },
        methods:{
          ...mapActions(['editNote'])
        }
    }
</script>

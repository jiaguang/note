<template>
    <div id="toolbar">
        <a @click="addNote">新增</a>
        <a>收藏</a>
        <a @click="delNote">删除</a>
    </div>
</template>
<style scoped>
    #toolbar {
      float: left;
      width: 100px;
      height: 100%;
      background-color: #30414D;
      color: #767676;
      padding-top:100px;
    }
#toolbar a{ text-align:center; display:block; padding:10px 0}
#toolbar a:hover{ background:#dedede}
</style>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods: {
          ...mapActions([
            'addNote',
            'delNote'
          ])
        }
    }
</script>

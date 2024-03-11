<script>
// import TodoList from "./TodoList.vue";
import InputDiv from "./InputDiv.vue";
import CopyDiv from "./CopyDiv.vue"

export default {
  data() { },
  methods: {
    data() {
      return {
        task: "",
      };
    },
    methods: {
      submitData(e) {
        //取消預設事件
        e.preventDefault();

        // 把資料丟到上層使用$emit
        // this.$emit( `自訂事件`,傳值1)
        this.$emit(`abc`, this.task);
      },
    },
  },
  components: {
    // TodoList, 
    InputDiv, CopyDiv
  },
};
</script>

<template>
  <div class="main">
    <Input-div></Input-div>
    <CopyDiv></CopyDiv>
  </div>
</template>

<style scoped>
.main{
    margin: 10px;
}

</style>
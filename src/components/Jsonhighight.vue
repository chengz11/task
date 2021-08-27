<template>
  <div class="hello">
    <input
      type="text"
      placeholder="选择体检时间"
      id="orderTime"
      v-model="date"
    >
  </div>
</template>

<script>
export default {
  name: "myTime",
  data() {
    return {
      date: ""// 存储选择的日期
    };
  },
  mounted() {
    // 使用：执行一个laydate实例
    laydate.render({
      elem: "#orderTime", // 指定元素
      type: "datetime", // 组件的类型：year,month,time···　　　　　　　　format: 'yyyy-MM-dd HH:mm'// 设置显示格式
      done: value => { // 点击确认执行的回调函数，会把当前选择的时间传入进来
        // 把选择的时间赋值给先前定义好的变量，显示在页面
        this.date = value;
      }
    });
  }
};
</script>

<style scoped>
.hello {
  display: inline-block;
}
.hello input {
  margin-left: -4px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.layui-laydate .layui-this {
  background-color: #358ee7 !important;
}
</style>
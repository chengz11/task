<template>
  <div>
    <el-table
      :data="[]"
      stripe
      style="width: 100%"
    >
      <el-table-column
        v-if="true"
        :show-header="false"
        tooltip-effect="dark"
        show-overflow-tooltip
        prop="name"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="ip"
      >
      </el-table-column>
    </el-table>
    <el-scrollbar style="max-height:300px;">
      <!-- <el-table
        :data="tableData"
        :show-header="false"
        stripe
        style="width: 100%"
      >
        <el-table-column
          tooltip-effect="dark"
          show-overflow-tooltip
          prop="name"
          label="名称"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="ip"
        >
        </el-table-column>
      </el-table> -->
      <div class="a1">

      </div>
    </el-scrollbar>
    <div @mouseenter="aaa" @mouseleave="bbb">1123123</div>

  </div>
</template>

<script>
export default {
  // 数据
  data() {
    return {
      tableData: [
        {
          date: '2016-05-1111',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods:{
    aaa(){
      console.log(11);
    },
    bbb(){
      console.log(2222);
    }
  }
}
</script>

<style scoped>
.el-scrollbar__wrap {
  overflow: auto;
  overflow-x: auto;
}
.el-scrollbar__bar.is-horizontal {
  display: none;
}
div {
  overflow: auto;
}
.a1 {
  height: 1000px;
  background: #000;
}
</style>
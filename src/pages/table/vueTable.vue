<template>
  <div>
  <!--border:是否带有纵向边框-->
  <el-table
    :data="tableData"
    style="width: 100%"
    border
    height="250"
    min-width = "400"
    highlight-current-row
    :row-class-name="tableRowClassName"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <!-- el-table-column 固定表列在里面使用fixed-->
    <!-- type="index"加上对应序列(从零开始)，
    若要自定义需要增加:index="indexMethod"在methods里传入一个方法,返回值对应的序列号 -->
    <el-table-column
      fixed
      type="index"
      :index="indexMethod"
      width="80"
    label="序号">
    </el-table-column>

    <el-table-column
      label="日期"
      width="180"
      :filters="[{text: '2016-05-01', value: '2016-05-01'},
      {text: '2016-05-02', value: '2016-05-02'},
      {text: '2016-05-03', value: '2016-05-03'},
      {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <!--多级表头-->
    <!--格式化组件:formatter="formatter",这个方式常用于数字字典，比如数字返回对应的中文-->
    <el-table-column label="地址" align = "center">
      <el-table-column
        prop="province"
        label="省份"
        width="120"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
    </el-table-column>
    <!--align 列对齐方式-->
    <!--min-width=""对应百分百的宽度表格某些列一定要设置最小宽度，不然在某些分辨率下排版会异常-->
    <el-table-column label="操作" align = "center"
                     min-width = "180">
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" content="点击可编辑对应行" placement="top">
        <el-button
          size="mini"
          type="primary" plain
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="点击可删除对应行" placement="top">
        <el-button
          size="mini"
          type="danger" plain
          @click="handleDelete(scope.$index, scope.row,tableData)">删除</el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
   <!-- :page-size：页数，:total：总页数；平均每页数=:total/:page-size-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      background
      layout="total,prev, pager, next, jumper"
      :total="1024">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "vue-table",
    data() {
      return {

        currentPage: 5,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province : '200000',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province : '200000',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province : '200000',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province : '200000',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province : '200001',
          address: '上海市普陀区金沙江路 1511 弄'
        }, {
          date: '2016-05-09',
          name: '王小虎',
          province : '200001',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province : '200002',
          address: '上海市普陀区金沙江路 1512 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row,table) {
        table.splice(index, 1);
        console.log("索引:"+index+"，第几行："+row);
      },
      tableRowClassName({row, rowIndex}) {
        console.log("change row color:"+rowIndex+"->"+(rowIndex % 2 === 0))
        if (rowIndex % 2 === 0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
      },
      handleSelectionChange(val) {
        console.log("选择第几行啊:"+val)
        this.multipleSelection = val;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        console.log("property:"+property)
        return row[property] === value;
      },
      indexMethod(index) {
        return index+1;
      },
      formatter(row, column) {
        let provinceName = '-'
        if(row.province == '200000') {
          provinceName = '上海市'
        }else if(row.province == '200001'){
          provinceName = '上海'
        }
        return provinceName;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    }
  }
</script>

<style>

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>

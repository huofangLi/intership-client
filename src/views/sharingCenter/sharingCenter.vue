<template>
  <div class="container">
    <div class="top">
      <p>学校共享</p>
    </div>
    <div class="box">
      <div class="box-top">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-select placeholder="院系名称" v-model="dep" clearable class="select">
              <el-option
                v-for="item in options"
                :key="item.label"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
            <el-select placeholder="上传者" v-model="upload" clearable class="select">
              <el-option
                v-for="item in teachers"
                :key="item.id"
                :label="item.teaName"
                :value="item.teaName">
              </el-option>
            </el-select>
            <el-button type="primary" @click="getSharing">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="sharing.content" style="width: 100%;margin-left: 20px">
        <el-table-column prop="fileName" label="文件名称" width="200">
        </el-table-column>
        <el-table-column prop="fileSize" label="文件大小" width="150">
        </el-table-column>
        <el-table-column prop="createdTime" label="上传时间" width="200">
        </el-table-column>
        <el-table-column prop="uploadedBy" label="上传者" width="200">
        </el-table-column>
        <el-table-column prop="department" label="院系名称" width="200">
        </el-table-column>
        <el-table-column prop="operating" label="操作" width="150">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="getSharing"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[8,9,10,11,12,13,14]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="sharing.totalElements">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sharingCenter',
  data () {
    return {
      teachers: {},
      sharing: {},
      dep: '',
      upload: '',
      page: 0,
      size: 10,
      options: [{
        label: '机械工程学院',
        value: 'jixie'
      }, {
        label: '电气工程学院',
        value: 'dainqi'
      }, {
        label: '交通工程学院',
        value: 'jaotong'
      }, {
        label: '航空工程学院',
        value: 'hangkong'
      }, {
        label: '计算机与软件学院',
        value: 'jiruan'
      }, {
        label: '经济管理学院',
        value: 'jingguan'
      }, {
        label: '商务贸易学院',
        value: 'shangmao'
      }, {
        label: '艺术设计学院',
        value: 'yishu'
      }, {
        label: '国际教育学院',
        value: 'guojiao'
      }]
    }
  },
  created () {
    this.getAllTeachers()
    this.getSharing()
  },
  methods: {
    getSharing () {
      console.log('getSharing', this.dep, this.upload)
      var path = '/api/sharing-center?page=' + this.page + '&size=' + this.size
      if (this.dep != '') {
        path += '&dep=' + this.dep
      }
      if (this.upload != '') {
        path += '&upload=' + this.upload
      }
      this.$http.get(this.$serverPath + path, {}).then((result) => {
        if (result.status == 200) {
          this.sharing = result.data
          // console.log('getTSharing callback', this.sharing)
          // console.log('getTSharing callback totle', this.sharing.totalPages, this.sharing.totalElements)
        } else {
          console.log('接口请求错误')
        }
      })
    },
    getAllTeachers () {
      this.$http.get(this.$serverPath + '/api/teachers/?queryParams=1', {}).then((result) => {
        if (result.status == 200) {
          this.teachers = result.data
          // console.log('getTeacher callback', this.teachers)
        } else {
          console.log('接口请求错误')
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
  .top {
    text-align: left;
    color: rgb(40, 150, 221);
    font-size: 25px;
  }

  .select {
    margin-right: 5px;
    width: 180px;
  }

  .box-top {
    text-align: right;
  }

  .box-bottom {
    font-size: 13px;
    padding-left: 10px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* flex局部--垂直居中 */
  }

  .input-box {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    flex: 1 35%;
  }

  .input {
    width: 100px;
    height: 10px;
    font-size: 12px;
    padding-top: 2px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .yeshu {
    margin-left: 10px;
    color: #0563C1;
  }

  .btn {
    flex: 1 40%;
  }
</style>

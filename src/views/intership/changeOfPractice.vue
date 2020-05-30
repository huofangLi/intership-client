<template>
  <div class="all">
    <!-- 顶部标题 毕业登记-->
    <div class="top">
      <p class="title">毕业登记</p>
    </div>
    <!--数据部分 实习类型 -->
    <div class="data">
      <div class="data-sel">
        <div class="data-sel-sel">
          <p style="color: rgb(70, 136, 71); padding-right: 20px;">实习类型：</p>
          <el-radio-group v-model="radio">
            <el-radio :label="1">企业实习</el-radio>
            <el-radio :label="2">升学</el-radio>
            <el-radio :label="3">参军</el-radio>
            <el-radio :label="4">创业</el-radio>
            <el-radio :label="5" @click='onShow()'>其他</el-radio>
            <!--  <button  @click='onShow()' >aa </button> -->
          </el-radio-group>
        </div>
      </div>
      <!-- 其他类型输入框-->
      <div class="data-sel-other" v-if="isshow">
        <el-input placeholder="请输入实习类型" v-model="input" clearable></el-input>
      </div>
      <!-- 确认按钮-->
      <div class="data-ensure">
        <el-button type="success">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {

    return {
      isshow: false,
      radio: 5,

    }
  },
  onLoad () {

  },
  onShow () {
  },
  methods: {
    onShow: function () {
      this.isshow = !this.isshow
    }
  }

}
</script>

<style scoped>
  .top {
    height: 100%;
    text-align: left;
    border-bottom: 3px solid rgb(34, 34, 34);
    color: rgb(40, 150, 221);
    font-size: 25px;
  }

  .data {
    border-left: 1PX solid rgb(204, 204, 204);
    border-right: 1PX solid rgb(204, 204, 204);
    border-bottom: 2PX solid rgb(204, 204, 204);
  }

  .data-sel {
    padding-top: 20px;
    display: flex;
    align-items: center;

  }

  .data-sel-other {
    padding-top: 10px;
    width: 80%;
    margin: auto;
  }

  .data-sel-sel {
    display: flex;
    align-items: center;
    width: 80%;
    margin: auto;
  }

  .data-ensure {
    width: 95%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgb(245, 245, 245);
  }

</style>

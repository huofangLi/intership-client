<template>
  <div class="container">
    <!-- 标题 实习登记-->
    <div class="title-box">
      <p class="title">实习登记</p>
    </div>
    <!-- 数据表格-->
    <div class="data">
      <div class="data-box">
          <el-tabs style="height: 200px;">
            <!-- 基本信息表格-->
            <el-tab-pane label="基本信息">
              <div class="data-box-two">
                <div class="data-box-data">
                  <div class="data-box-hint"><span class="x">*</span>企业信用代码：</div>
                  <div class="data-box-input"><el-input placeholder="请输入企业信用代码" v-model="input" clearable style="width: 100%;"></el-input></div>
                </div>

                <div class="data-box-data">
                  <div class="data-box-hint"><span class="x">*</span>企业名称：</div>
                  <div class="data-box-input"><el-input placeholder="请输入企业名称" v-model="input" clearable style="width: 100%;"></el-input></div>
                </div>

                <div class="data-box-data">
                  <div class="data-box-hint"><span class="x">*</span>实习岗位：</div>
                  <div class="data-box-input"><el-input placeholder="请输入实习岗位" v-model="input" clearable style="width: 100%;"></el-input></div>
                </div>

                <div class="data-box-data1">
                  <div class="data-box-hint"><span class="x">*</span>企业联系人与电话：</div>
                  <div class="data-box-input">
                    <div class="data-box-name-box">
                      <span class="data-box-name-hint"><span class="x">*</span>姓名</span>
                      <span class="data-box-name-hint"><span class="x">*</span>职务</span>
                      <span class="data-box-name-hint"><span class="x">*</span>电话</span>
                    </div>
                    <div class="data-box-name-box">
                      <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                      <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                      <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                    </div>
                  </div>
                </div>

                <div class="data-box-data1">
                  <div class="data-box-hint"><span class="x">*</span>师傅资料：</div>
                  <div class="data-box-input">
                    <div class="data-box-name-box">
                      <span class="data-box-name-hint"><span class="x">*</span>姓名</span>
                      <span class="data-box-name-hint"><span class="x">*</span>师傅技能</span>
                      <span class="data-box-name-hint">电话</span>
                    </div>
                    <div class="data-box-name-box">
                      <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                      <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                      <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                    </div>
                  </div>
                </div>

               <div class="data-box-data1">
                 <div class="data-box-hint"><span class="x">*</span>紧急联系人：</div>
                 <div class="data-box-input">
                   <div class="data-box-name-box">
                     <span class="data-box-name-hint"><span class="x">*</span>姓名</span>
                     <span class="data-box-name-hint"><span class="x">*</span>电话</span>
                     <span class="data-box-name-hint"><span class="x">*</span>地址</span>
                   </div>
                   <div class="data-box-name-box">
                     <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                     <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                     <div class="data-box-name-input"><el-input v-model="input" clearable style="height: 25px; width: 100%;"></el-input></div>
                   </div>
                 </div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint"><span class="x">*</span>住宿类型：</div>
                 <div class="data-box-input">
                   <el-select v-model="home" clearable placeholder="请选择" style="margin-left: -190px; ">
                       <el-option v-for="item in options" :key="item.home" :label="item.label" :value="item.home"></el-option>
                    </el-select>
                 </div>
               </div>

               <div class="data-box-data">
                 <div class="data-box-hint"><span class="x">*</span>住宿地址：</div>
                 <div class="data-box-input"><el-input v-model="input" clearable style="width: 100%;"></el-input></div>
               </div>

               <div class="data-box-data">
                 <div class="data-box-hint"><span class="x">*</span>地区：</div>
                 <div class="data-box-input">
                   <el-select v-model="area" clearable placeholder="请选择" style="margin-left: -190px;">
                       <el-option v-for="item in areas" :key="item.area" :label="item.label" :home="item.area"></el-option>
                    </el-select>
                 </div>
               </div>

               <div class="data-box-data">
                 <div class="data-box-hint"><span class="x">*</span>企业详细地址：</div>
                 <div class="data-box-input"><el-input v-model="input" clearable style="width: 100%;"></el-input></div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint"><span class="x">*</span>企业性质：</div>
                 <div class="data-box-input">
                   <el-select v-model="nature" clearable placeholder="请选择" style="margin-left: -190px;">
                       <el-option v-for="item in natures" :key="item.nature" :label="item.label" :nature="item.nature"></el-option>
                    </el-select>
                 </div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint"><span class="x">*</span>规模：</div>
                 <div class="data-box-input">
                   <el-select v-model="scale" clearable placeholder="请选择" style="margin-left: -190px; ">
                       <el-option v-for="item in scales" :key="item.scale" :label="item.label" :nature="item.scale"></el-option>
                    </el-select>
                 </div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint"><span class="x">*</span>行业：</div>
                 <div class="data-box-input">
                   <el-select v-model="industry" clearable placeholder="请选择" style="margin-left: -190px;">
                       <el-option v-for="item in industrys" :key="item.industry" :label="item.label" :nature="item.industry"></el-option>
                    </el-select>
                 </div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint">企业简介：</div>
                 <div class="data-box-input">
                   <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2"></el-input>
                 </div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint">是否购买保险：</div>
                 <div class="data-box-input">
                   <el-radio v-model="radio1" label="1" border style="margin-left: -230px;">是</el-radio>
                   <el-radio v-model="radio1" label="2" border>否</el-radio>
                 </div>
               </div>

               <div class="data-box-data">
                 <div class="data-box-hint"></span>保险公司及保险号：</div>
                 <div class="data-box-input"><el-input v-model="input" clearable style="width: 100%;"></el-input></div>
               </div>

               <div class="data-box-data2">
                 <div class="data-box-hint">是否签订实习协议：</div>
                 <div class="data-box-input">
                   <el-radio v-model="radio3" label="1" border style="margin-left: -230px;">是</el-radio>
                   <el-radio v-model="radio3" label="2" border>否</el-radio>
                 </div>
               </div>

               <div class="data-box-data">
                 <div class="data-box-hint">上传协议附件和就业协议书（如照片）：</div>
                 <div class="data-box-input">
                   <button style="height: 30px;border-radius: 10px;margin-right: 5px; margin-left: -180px;">选择文件</button>
                   <el-input v-model="input" clearable style="height: 25px; width: 40%;"></el-input>
                 </div>
               </div>

               <div class="data-box-data">
                 <div class="data-box-hint"> <el-radio v-model="radio4" label="1" border style="margin-left: -230px;">我同意</el-radio></div>
                 <div class="data-box-input3">
                   <div>
                     <span style="font-size: xx-small;">本人承诺保证以上所填写资料真实,如有虚假,愿承担相应责任。</span>

                   </div>
                   <div>
                      <span style="font-size: xx-small;">I promise to ensure that the above information is true. If it is false, I will bear the corresponding responsibility.</span>
                   </div>
                 </div>
               </div>

              <div class="newly-ensure">
                <el-button type="success" @click="newly = false">确 定</el-button>
              </div>
            </div>
            </el-tab-pane>
            <!-- 岗位变更记录-->
            <el-tab-pane label="岗位变更记录">
              <!-- 记录-->
              <div class="data-box-two">
                <el-table :data="tableData" stripe style="width: 100% ;" >
                    <el-table-column prop="id" label="序号" width="180" align="center"></el-table-column>
                    <el-table-column prop="date" label="日期" width="180" align="center" ></el-table-column>
                    <el-table-column prop="danwei" label="变更单位" width="300" align="center" ></el-table-column>
                    <el-table-column prop="name" label="变更岗位名称" width="180" align="center" ></el-table-column>
                 </el-table>
              </div>
              <!-- 新增按钮-->
              <div class="data-box-new">
               <el-button type="success" @click="newly = true" >新增</el-button>
              </div>
              <!-- 新增表单-->
              <div>
                <el-dialog title="新增岗位变更记录" :visible.sync="newly" width="40%">
                  <div style="margin-top: -25px; border-top: 1px solid rgb(229, 229, 229);">
                    <div style="width: 90%;padding-top: 25px; display: flex;  margin: auto;">
                      <div style="width: 90%; margin: auto;">
                        <tr>
                          <td style="width:150px; "><span>序号:</span></td>
                          <td><el-input  v-model="input1" clearable ></el-input></td>
                        </tr>
                      </div>
                    </div>

                    <div style="width: 90%;padding-top: 10px; display: flex;  margin: auto;">
                      <div style="width: 90%; margin: auto;">
                        <tr>
                          <td style="width:150px; "><span>日期:</span></td>
                          <td><el-input  v-model="input2" clearable ></el-input></td>
                        </tr>
                      </div>
                    </div>

                    <div style="width: 90%;padding-top: 10px; display: flex;  margin: auto;">
                      <div style="width: 90%; margin: auto;">
                        <tr>
                          <td style="width:150px; "><span>变更单位名称:</span></td>
                          <td><el-input  v-model="input3" clearable ></el-input></td>
                        </tr>
                      </div>
                    </div>

                    <div style="width: 90%;padding-top: 10px; padding-bottom: 25px; display: flex;  margin: auto;">
                      <div style="width: 90%; margin: auto;">
                        <tr>
                          <td style="width:150px; "><span>变更岗位名称:</span></td>
                          <td><el-input  v-model="input4" clearable ></el-input></td>
                        </tr>
                      </div>
                    </div>
                    <div class="newly-ensure">
                      <el-button type="success" @click="newly = false">确 定</el-button>
                    </div>
                  </div>
                </el-dialog>
              </div>
            </el-tab-pane>
          </el-tabs>
      </div>
    </div>
  </div>
</template>


<script>
   export default {
     data() {
           return {
             newly:false,
             input1:'',
             input2:'',
             input3:'',
             input4:'',
             home: '',
             area:'',
             nature:'',
             scale:'',
             industry:'',
             textarea2:'',
             radio1:'',
             radio2:'',
             radio3:'',
             radio4:'',

             options: [{
                       home: '选项1',
                       label: '校内住宿'
                     }, {
                       home: '选项2',
                       label: '家庭住宿'
                     }, {
                       home: '选项3',
                       label: '个人租房'
                     }, {
                       home: '选项4',
                       label: '单位住宿'
                     }],
             areas: [{
                       home: '选项1',
                       label: '江苏省-南京市'
                     },],
            natures: [{
                      home: '选项1',
                      label: '国企'
                    },],
            scales: [{
                      home: '选项1',
                      label: '1-50人'
                    },],
            industrys: [{
                      home: '选项1',
                      label: '计算机/联网/通讯',
                    },],
             tableData: [{
               id:'1',
               date: '2016-05-02',
               danwei: '南京艾云科技技术有限公司',
               name: '软件开发'
             }, {
               id:'2',
               date: '2016-05-02',
               danwei: '南京艾云科技技术有限公司',
               name: '软件开发'
             },{
               id:'3',
               date: '2016-05-02',
               danwei: '南京艾云科技技术有限公司',
               name: '软件开发'
             },]
           }
         }
    };
</script>

<style scoped>
  .x{
    color:rgb(255, 0, 0) ;
    margin-top: -3px;
  }
  .title-box{
  /* border: 2px solid #000000; */
  }
  .title {
    font-size: 15px;
    text-align: left;
    border-bottom: 2PX solid rgb(62, 95, 125);
    padding-bottom: 10px;
  }
  .data{
    height: 1500px;
    margin-top: -18px;
    border: 1px solid rgb(235, 234, 239);
  }
  .data-box{
    width: 95%;
    height: 95%;
    margin: auto;
    margin-top: 25px;
  }
  .data-box-two{
    width: 98%;
    margin: auto;
  }
  .data-box-data{
    display: flex;width: 98%;
    margin: auto;
    margin-top: 15px;
    align-items: center;
  }
  .data-box-data1{
    display: flex;width: 98%;
    margin: auto;
    margin-top: 25px;
    align-items: center;
  }
  .data-box-data2{
    display: flex;width: 98%;
    margin: auto;
    margin-top: 30px;
    align-items: center;
  }
  .data-box-hint{
     width: 20%;
     text-align: right;
  }
  .data-box-input{
    width: 50%;
    margin-left: 50px;
  }
  .data-box-input2{
    width: 80%;
    margin-left: 50px;
  }
  .data-box-input3{
    width: 80%;
    margin-left: 50px;
    margin-bottom: 20px;
  }
  .data-box-name-box{
    width: 100%;
    display: flex;
  }
  .data-box-name-hint{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin-right: 12px;
    height: 30px;
    border-radius: 10px;
    margin-bottom:3px;
    border: 1px solid rgb(220, 223, 230);
  }
  .data-box-name-input{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin-right: 12px;
    height: 30px;
    border-radius: 10px;
  }
 .data-box-new{
   width: 98%;
   margin: auto;
   height: 80px;
   margin-top: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgb(245, 245, 245);
 }
 .newly-ensure{
   height: 80px;
   display: flex;
   width: 90%;
   margin: auto;
   align-items: center;
   justify-content: center;
   background-color: rgb(245, 245, 245);
 }

</style>

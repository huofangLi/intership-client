<template>
  <div class="container">
    <!--    <el-divider></el-divider>-->
    <!--    <div class="title">-->

    <!--      我的简历-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      111-->
    <!--    </div>-->


    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:
 collapse;table-layout:fixed;height: 100%;height: 500px;'>
      <col width='61' span='10' style='mso-width-source:userset;width:45.75pt'>
      <tr height='26' style='mso-height-source:userset;height: 10%;' id='r0'>
        <td colspan='2' rowspan='4' height='105' class='x35' width='122'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:78.9pt;'
            align='left' valign='top'><span
          style='mso-ignore:vglayout;position:absolute;z-index:0;margin-left:1px;margin-top:3px;width: 17%;height: 40%;'><img
          width='121' height='100'
          src="https://www.zhu1234.com/wp-content/uploads/2020/02/19300001357258133412489354717.jpg"
          name='图片3'></span><span
          style='mso-ignore:vglayout2'>
						<table cellpadding='0' cellspacing='0'>
							<tr>
								<td colspan='2' rowspan='4' height='105' class='x34' width='122' style='height:78.9pt;'></td>
							</tr>
						</table>
					</span>
        </td>
        <td class='x28' width='61' style='width: 13%;height: 10%;'>姓名</td>
        <td colspan='3' class='x22' width='183'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;height: 10%;'>李漷方
        </td>
        <td class='x26' width='61' style='width: 10%;height: 10%;'>性别</td>
        <td colspan='3' class='x22' width='183'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;height: 10%;'>男
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height: 10%;' id='r1'>
        <td class='x28' style="width: 13%;">手机号</td>
        <td colspan='3' class='x22'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;'>
          17805116182
        </td>
        <td class='x27' style="width: 10%;">邮箱</td>
        <td colspan='3' class='x25'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;height: 10%;'>2895844821@qq.com
<!--          <span style='font-size:11pt;color:#0563C1;font-weight:400;text-decoration: underline;text-line-through:none;-->
<!--          text-underline-style:single;font-family:"等线";'></span>-->
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height: 10%;' id='r2'>
        <td class='x28' style="width: 13%;">学号</td>
        <td colspan='3' class='x22'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;'>
          1702343107
        </td>
        <td class='x27' style="width: 10%;">班级</td>
        <td colspan='3' class='x22'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;'>
          软件1721
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height: 10%;' id='r3'>
        <td class='x28' style="width: 13%;">院系</td>
        <td colspan='3' class='x22'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;'>
          计算机与软件学院
        </td>
        <td class='x27' style="width: 10%;">专业</td>
        <td colspan='3' class='x22'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 30%;'>软件技术
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height:10%;' id='r4'>
        <td colspan='2' height='24' class='x30'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:10%;width: 17%;'>家庭住址
        </td>
        <td colspan='8' class='x32'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;width: 83%;'>123
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height:10%;' id='r5'>
        <td colspan='2' height='24' class='x30'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:10%;width: 13%;'>兴趣爱好
        </td>
        <td colspan='8' class='x32' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;'>123
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height:10%;' id='r6'>
        <td colspan='2' height='24' class='x30'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:10%;width: 17%;'>技能
        </td>
        <td colspan='8' class='x32' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;'>123
        </td>
      </tr>
      <tr height='26' style='mso-height-source:userset;height: 30%;' id='r7'>
        <td colspan='2' rowspan='3' height='78' class='x29'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:30%;width: 17%;'>自我评价
        </td>
        <td colspan='8' rowspan='3' height='78' class='x33'
            style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:58.8pt;'>123
        </td>
      </tr>
      <!--      <tr height='26' style='mso-height-source:userset;height:20.1pt' id='r8'>-->
      <!--      </tr>-->
      <!--      <tr height='26' style='mso-height-source:userset;height:20.1pt' id='r9'>-->
      <!--      </tr>-->
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {

    },
    created () {
      this.username = this.$store.state.username
      console.log('store username', this.username)
      this.getUser(this.$store.state.username)
    },
    methods: {
      getUser (username) {
        this.$http.get(this.$serverPath + '/api/users/admin', {
          login: username
        }).then((result) => {
          console.log('login callback', result.data)
          if (result.status == 200) {
            // 存储本次登录的token
            this.user = result.data
          } else {
            console.log('接口请求错误')
          }
        })
      }
    }
  }
</script>
<style>
  .container {
    width: 100%;
    height: 500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-start;
  }
</style>
<style scoped>
  .x34 {

    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
  }

  .x35 {
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
  }

  /*@page {*/
  /*  mso-header-data: "";*/
  /*  mso-footer-data: "";*/
  /*  margin: 0.75in 0.7in 0.75in 0.7in;*/
  /*  mso-header-margin: 0.3in;*/
  /*  mso-footer-margin: 0.3in;*/
  /*  mso-page-orientation: Portrait;*/
  /*}*/

  tr {
    mso-height-source: auto;
    mso-ruby-visibility: none;
  }

  col {
    mso-width-source: auto;
    mso-ruby-visibility: none;
  }

  br {
    mso-data-placement: same-cell;
  }

  .style0 {
    mso-number-format: General;
    vertical-align: bottom;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border: none;
    mso-protection: locked visible;
    mso-style-name: Normal;
    mso-style-id: 0;
  }

  .style0 {
    vertical-align: bottom;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    mso-protection: locked visible;
    mso-style-name: "Normal";
  }

  .style1 {
    text-align: general;
    vertical-align: middle;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 10pt;
    font-weight: 400;
    font-style: normal;
    font-family: "Arial", "sans-serif";
    mso-protection: locked visible;
  }

  .style2 {
    text-align: general;
    vertical-align: middle;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 10pt;
    font-weight: 400;
    font-style: normal;
    font-family: "Arial", "sans-serif";
    mso-protection: locked visible;
  }

  .style21 {
    text-align: general;
    vertical-align: bottom;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #0563C1;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: underline;
    font-family: "等线", "sans-serif";
    mso-protection: locked visible;
    mso-style-name: "超链接";
  }

  .x22 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: none;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x25 {
    mso-style-parent: style21;
    mso-number-format: General;
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #0563C1;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    text-decoration: underline;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: none;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x26 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    mso-pattern: auto none;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x27 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    mso-pattern: auto none;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "monospace";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x28 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    mso-pattern: auto none;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x29 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    mso-pattern: auto none;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x30 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    background: #BDD7EE;
    mso-pattern: auto none;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: none;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x32 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }

  .x33 {
    mso-style-parent: style0;
    mso-number-format: General;
    text-align: left;
    vertical-align: top;
    white-space: normal;
    word-wrap: break-word;
    background: white;
    mso-pattern: auto;
    color: #000000;
    font-size: 11pt;
    font-weight: 400;
    font-style: normal;
    font-family: "等线", "sans-serif";
    border-top: 1px solid windowtext;
    border-right: 1px solid windowtext;
    border-bottom: 1px solid windowtext;
    border-left: 1px solid windowtext;
    mso-diagonal-down: none;
    mso-diagonal-up: none;
    mso-protection: locked visible;
  }
</style>

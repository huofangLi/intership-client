<template>
  <div class="container">
    <div class="top">
      <p>实习成绩</p>
    </div>
    <div class="big-box">
      <p>查看实习成绩</p>
    </div>
    <div class="out-box">
      <div class="box1">
        <p style="font-size: 14px;color: red;font-weight: 600;">查看本次实习成绩：</p>
      </div>
      <div class="box2">
        <p style="font-size: 15px;color: rgb(40, 150, 221);">导师评分</p>
        <p style="font-size: 12px;font-weight: 600;">未评分</p>
      </div>
      <div class="box2">
        <p style="font-size: 15px;color: rgb(40, 150, 221);">师傅评分</p>
        <p style="font-size: 12px;font-weight: 600;">未评分</p>
      </div>
      <div class="box2">
        <p style="font-size: 15px;color: rgb(40, 150, 221);">综合评分</p>
        <p style="font-size: 12px;font-weight: 600;">未评分</p>
      </div>
    </div>
  </div>

</template>

<script>
</script>

<style>
  .top {
    font-size: 15px;
    color: rgb(40, 150, 221);
    text-align: left;
  }

  .big-box {
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    padding-left: 15px;
    border-top: 1px solid #CCCCCC;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    padding-bottom: 15px;
  }

  .out-box {
    display: flex;
    flex-direction: row;
    margin-top: -15px;
    border-left: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    padding-bottom: 30px;
  }

  .box1 {
    flex: 1 25%;
    border-right: 1px solid rgb(245, 245, 245);
    border-top: 1px solid rgb(245, 245, 245);
    border-bottom: 1px solid rgb(245, 245, 245);
    font-size: 15px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box2 {
    flex: 1 25%;
    border-right: 1px solid rgb(245, 245, 245);
    border-top: 1px solid rgb(245, 245, 245);
    border-bottom: 1px solid rgb(245, 245, 245);
    height: 80px;
  }
</style>

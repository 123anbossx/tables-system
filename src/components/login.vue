<template>
    <div class="loginPage">
       <div class="loginContain">
       <div style="margin-top: 230px;    display: inline-block;">
           <div>
               <span class="loginText">登陆账号:</span>
               <span><Input  placeholder="请输入登陆账号" style="width: 300px" /> </span>
           </div>
           <div style="margin-top: 30px">
               <span class="loginText">登陆密码:</span>
               <span><Input  placeholder="请输入登陆密码" style="width: 300px" /></span>
           </div>

       </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  .loginPage{
      position: fixed;
      background-image: url("../assets/img/bg.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
  }
    .loginContain{
         width: 500px;
        height: 700px;
        background-color: rgba(0,0,0,0.7);
        margin-top: 100px;
        margin-left: 150px;

    }
    .loginText{
        color: aliceblue;

    }
</style>
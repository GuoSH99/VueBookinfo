<template>
  <div id="login-container">
    <el-form
      :ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2 class="bt">图书信息管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入您的账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入您的密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

 <script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号 ", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码 ", trigger: "blur" },
          {
            min: 6,
            max: 32,
            message: "密码长度在 6 到 32 个 字符",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {//表示校验成功
          login(this.form.username,this.form.password)
          .then(response=>{
              console.log(response.data)
              const resp=response.data
              if(resp.flag)//认证通过
              {
                  getUserInfo(resp.data.token)
                  .then(response=>{
                      console.log(response.data)
                      const respUser=response.data
                      if(respUser.flag)
                      {
                          localStorage.setItem("xdz-manager-user",JSON.stringify(respUser.data))
                          localStorage.setItem("xdz-manager-token",resp.data.token)
                          this.$router.push('/home')
                      }
                      else{
                          this.$message({
                                message: respUser.message,
                                type: 'warning'
                                });
                      }
                  })
              }
              else{
                 this.$message({
                    message: resp.message,
                    type: 'warning'
                    });
                }

          })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>



<style scoped>
.login-form {
  width: 350px;
  background-color: rgb(227, 238, 236);
  padding: 15px;
  border-radius: 20px;
  height: 250px;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -125px;
  position: absolute;
}
#login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/login-bg.png");
}
login-title {
  color: #111111;
  text-align: center;
}
.bt {
  color: rgba(25, 104, 250, 0.877);
  text-align: center;
}
</style>
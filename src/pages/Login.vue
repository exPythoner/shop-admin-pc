<script setup>
import { ref, reactive } from "vue";
import { ElNotification } from 'element-plus'
// 导入login function
import { login } from "@/api/manager";

// account 的响应式数据
const form = reactive({
  username: "",
  password: "",
});

// 表单校验规则
const rules = {
  // 1.必填：required:true
  // 2. 提示信息： message:''
  // 3. 触发条件: trigger:'blur'
  // 4. 约束字符长度： min || max
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 2, max: 5, message: "请输入2～5字符的用户名", trigger: "blur" },
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

// form表单逻辑
const formRef = ref(null);

// 登录按钮的点击逻辑
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }

    // 数据来自于form 表单输入的数据
    login(form.username, form.password)
      .then((res) => {
        // console.log(res);
        ElNotification({
          message: '登录成功',
          type: "success",
          duration:3000
        });
      })
      .catch((err) => {
        // console.log("错误信息: ", err.response.data.msg);
        ElNotification({
          message: err.response.data.msg || '请求失败',
          type: "error",
          duration:3000
        });
      });
  });
};
</script>

<template>
  <div class="login">
    <el-row class="min-h-screen">
      <!-- 左列 -->
      <el-col class="left-col" :span="16">
        <!-- 加上一个div可以让外层flex布局,精确操控一个整体 -->
        <div>
          <h2 class="title">欢迎光临</h2>
          <div class="sub-title">
            此站点是《Vue3实战商城后台管理系统开发》视频课程的演示地址
          </div>
        </div>
      </el-col>
      <!-- 右列 -->
      <el-col class="right-col" :span="8">
        <h2 class="title">欢迎回来</h2>
        <div class="account">
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div>
        <!-- form start -->
        <el-form class="form w-[250px]" :model="form" :rules="rules" ref="formRef">
          <!-- text box username-->
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- text box password-->
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" show-password>
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- login button -->
          <el-form-item>
            <el-button class="btn w-[250px]" type="primary" @click="onSubmit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <!-- form end -->
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
// 左列
.left-col {
  @apply bg-indigo-500 flex justify-center items-center text-light-50;

  // 主标题
  .title {
    @apply text-5xl font-bold mb-6;
  }

  .sub-title {
    @apply text-sm;
  }
}

// 右列
.right-col {
  @apply bg-light-50 flex flex-col justify-center items-center;

  // 主标题
  .title {
    @apply text-3xl font-bold;
  }

  // account账号
  .account {
    @apply flex space-x-2 items-center text-gray-300 mt-5 mb-8;

    // left and right line
    .line {
      @apply w-16 h-px bg-gray-300;
    }
  }

  // form
  .form {
    @apply w-[250px];

    // login button
    .btn {
      background-color: #626aef;
      @apply rounded-full;
    }
  }
}
</style>

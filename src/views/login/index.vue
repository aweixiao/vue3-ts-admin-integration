<template>
  <div class="login_container">
    <el-col :span="8">
      <el-form>
        <h1>hello</h1>
        <h2>小王学堂</h2>
        <el-form-item label="">
          <el-input :prefix-icon="User" v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="">
          <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" :show-password="true" />
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import { Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

let loginForm = reactive({ username: '', password: '' })
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/login.jpg') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .el-form {
    max-width: 50%;
    min-width: 300px;
    margin-top: 150px;
    padding: 20px;
    border-radius: 2%;
    background-color: rgba(255, 255, 255, 0.1);

    .el-button {
      width: 100%;
    }

    h1,
    h2 {
      color: #ffffff;
    }
  }
}
</style>
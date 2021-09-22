<template>
  <a-form-model
    ref="loginForm"
    :model="loginForm"
    :rules="rules"
    v-bind="layout"

  >
    <a-form-model-item has-feedback label="邮箱：" prop="email">
      <a-input v-model="loginForm.email" type="input" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码：" prop="password">
      <a-input
        v-model="loginForm.password"
        type="password"
        autocomplete="off"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('loginForm')">
        提交
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { login } from '@/api/user';

export default {

  data() {
    const emailRef = /^[\w-]+@[\w.-]+.com$/;
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱内容为空'));
      }
      if (emailRef.test(value)) {
        return callback();
      }
      return callback(new Error('邮箱格式错误'));
    };
    const validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码输入为空'));
      }
      //   else if (value !== this.loginForm.pass) {
      //     callback(new Error("Two inputs don't match!"));
      //   }

      return callback();
    };
    return {
      loginForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: validateEmail, trigger: 'change' }],
        password: [{ validator: validatePass, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.loginForm).then((res) => {
            this.$store.dispatch('user/setUserAct', res.data);
            this.$router.push({
              name: 'Home',
            });
          }).catch((error) => {
            this.$message.error(error);
          });
          return true;
        }
        //   console.log('error submit!!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped lang="less">

</style>

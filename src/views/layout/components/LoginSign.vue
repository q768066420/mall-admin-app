<template>
  <a-form-model
    ref="loginSignForm"
    :model="loginSignForm"
    :rules="rules"
    v-bind="layout"
  >
    <a-form-model-item has-feedback label="邮箱：" prop="email">
      <a-input v-model="loginSignForm.email" type="input" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="用户密码：" prop="password">
      <a-input
        v-model="loginSignForm.password"
        type="password"
        autocomplete="off"
      />
    </a-form-model-item>
    <a-form-model-item has-feedback label="确认密码：" prop="passwordCheck">
      <a-input
        v-model="loginSignForm.passwordCheck"
        type="password"
        autocomplete="off"
      />
    </a-form-model-item>
    <a-form-model-item
      has-feedback
      label="验证码："
      prop="code"
      class="codeBtn"
    >
      <a-input v-model.number="loginSignForm.code" />
      <a-button type="primary" @click="getCodeBtn" aria-disabled="isDisabled">
        {{ isDisabled ? "验证码已发送" :"获取验证码"}}
      </a-button>
    </a-form-model-item>
    <a-form-model-item has-feedback label="用户名：" prop="username">
      <a-input v-model.number="loginSignForm.username" />
    </a-form-model-item>
    <!-- 选择用户信息 -->
    <a-form-model-item label="用户角色：" prop="role">
      <a-radio-group v-model="loginSignForm.role">
        <a-radio value="customer"> customer </a-radio>
        <a-radio value="admin"> admin </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('loginSignForm')">
        提交
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('loginSignForm')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { getCode, sendSign } from '@/api/user';

export default {
  data() {
    // 邮箱校验
    const emailRef = /^[\w-]+@[\w.-]+.com$/;
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'));
      }
      if (emailRef.test(value)) {
        return callback();
      }
      return callback(new Error('邮箱格式错误'));
    };
    // 密码校验
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码为空'));
      }
      return callback();
    };
    // 确认密码校验
    const validatePasswordCheck = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('确认密码为空'));
      }
      if (value !== this.loginSignForm.password) {
        return callback(new Error('两次输入的密码不相同'));
      }
      return callback();
    };
    // 验证码校验
    const validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('输入的验证码为空'));
      }
      return callback();
    };
    // 用户名校验
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('输入的用户名为空'));
      }
      return callback();
    };
    // 用户身份校验
    const validateRole = (rule, value, callback) => callback();
    return {
      // 发送验证码
      isDisabled: false,
      // 表单信息
      loginSignForm: {
        email: '',
        password: '',
        code: '',
        username: '',
        role: 'customer',
        passwordCheck: '',
      },
      rules: {
        email: [{ validator: validateEmail, trigger: 'change' }],
        password: [{ validator: validatePassword, trigger: 'change' }],
        passwordCheck: [
          { validator: validatePasswordCheck, trigger: 'change' },
        ],
        code: [{ validator: validateCode, trigger: 'change' }],
        username: [{ validator: validateUserName, trigger: 'change' }],
        role: [{ validator: validateRole, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    // 提交信息
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sendSign(this.loginSignForm).then((res) => {
            this.$message.success(res);
            this.$router.push({
              name: 'loginPage',
            });
          }).catch((error) => {
            this.$message.info(error);
          });
          return true;
        }
        return false;
      });
    },
    // 重置信息
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取验证码
    getCodeBtn() {
      const email = { email: this.loginSignForm.email };
      getCode(email)
        .then((res) => {
          this.$message.success(res.msg);
          this.isDisabled = true;
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
  },
};
</script>
<style scoped lang='less'>
@import url("~@/assets/css/loginSign.less");
</style>

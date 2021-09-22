<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 13 }"
  >
    <a-form-model-item ref="title" label="标题" prop="title" validate>
      <a-input v-model="form.title" />
    </a-form-model-item>

    <a-form-model-item ref="desc" label="商品描述" prop="desc" validate>
      <a-input v-model="form.desc" />
    </a-form-model-item>

    <a-form-model-item label="商品类目" prop="category" validate>
      <a-select
        v-model="form.category"
        placeholder="请选择添加的商品类目"
        @change="categoryChange"
      >
        <a-select-option
          v-for="item in categoryArr"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <!-- 商品子类目 -->
    <a-form-model-item label=" " prop="category" validate>
      <a-select v-model="form.c_item" placeholder="请选择添加的商品子类目">
        <a-select-option v-for="item in c_itemArr" :key="item" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <!-- 商品标签 -->
    <a-form-model-item label="商品标签" prop="tags" validate>
      <a-select
        mode="tags"
        style="width: 100%"
        :token-separators="[',']"
        v-model="form.tags"
      >
        <a-select-option v-for="item in this.form.tags" :key="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item
      label=""
      class="nextBtn"
      validate
      :wrapperCol="{ span: 24 }"
    >
      <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { pullKeyword } from '@/api/commodity';

export default {
  props: ['form'],
  async created() {
    const res = await pullKeyword();
    this.categoryArr = res.data.data;
  },
  data() {
    return {
      // 商品类目
      categoryArr: [],
      c_itemArr: [],
      rules: {
        title: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
        desc: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
        category: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
        c_item: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('nextBtn', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    categoryChange() {
      for (let i = 0; i < this.categoryArr.length; i += 1) {
        if (this.categoryArr[i].id === this.form.category) {
          this.c_itemArr = this.categoryArr[i].c_items;
          if (this.c_itemArr.length > 0) {
            const x = this.c_itemArr[0];
            this.form.c_item = x;
          } else {
            this.form.c_item = '';
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.nextBtn {
  margin: 0 auto;
}
</style>

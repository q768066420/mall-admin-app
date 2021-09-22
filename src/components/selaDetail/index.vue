<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 13 }"
  >
    <a-form-model-item ref="price" label="商品售价" prop="price" validate>
      <a-input v-model="form.price" />
    </a-form-model-item>

    <a-form-model-item
      ref="price_off"
      label="折扣价格"
      prop="price_off"
    >
      <a-input v-model="form.price_off" />
    </a-form-model-item>

    <a-form-model-item
      ref="inventory"
      label="商品库存"
      prop="inventory"
      validate
    >
      <a-input v-model="form.inventory" />
    </a-form-model-item>

    <a-form-model-item ref="unit" label="计量单位" prop="unit" validate>
      <a-input v-model="form.unit" />
    </a-form-model-item>
    <!-- 图片上传 -->
    <a-form-model-item ref="images" label="商品相册" prop="images" validate>
      <a-upload
        :action="
          'https://mallapi.duyiedu.com/upload/images?appkey=' +
          $store.state.user.user.appkey
        "
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
        name="avatar"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-form-model-item>
    <a-form-model-item
      label=" "
      class="nextBtn"
      validate
      :wrapperCol="{ span: 20 }"
      width="60px"
    >
      <a-button type="primary" @click="prev" class="prev">上一步</a-button>
      <a-button type="primary" @click="onSubmit">提交</a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  created() {
    if (this.form.images.length > 0) {
      this.fileList = this.form.images.map((item, index) => ({
        uid: index,
        name: `image-${index}.png`,
        status: 'done',
        url: item,
      }));
    }
  },
  props: ['form'],
  data() {
    return {
      rules: {
        price: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
        inventory: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
        unit: [
          {
            required: true,
            message: '该项不可以为空',
            trigger: 'blur',
          },
        ],
      },
      // 上传图片
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
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
    // 上传图片
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const obj = file;
      if (!file.url && !file.preview) {
        obj.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      this.fileList = fileList;
      if (file.status === 'done') {
        this.form.images.push(file.response.data.url);
      } else if (file.status === 'removed') {
        this.form.images = this.form.images.filter(
          (item) => item !== file.response.data.url,
        );
      }
    },
  },
};
</script>s
<style scoped>
.nextBtn {
  margin: 0 auto;
}
.prev {
  margin-right: 20px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>

<template>
  <div class="add-page-container">
    <a-form-model
      layout="inline"
      :model="pageInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item label="关键字">
        <a-input v-model="pageInline.searchWord" placeholder="请输入检索的关键字">
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="请输入检索的关键字">
        <a-select
          allowClear
          show-search
          placeholder="请选择检索关键词"
          option-filter-prop="children"
          style="width: 200px"
          @change="cahngeOpaction"
        >
          <a-select-option
            v-for="item in selectArr"
            :value="item.id"
            :key="item.id"
          >
            {{item.name}}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          搜索
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <a-button type="primary" class="addBtn" @click="addMerchandiseBtn">
      添加商品
    </a-button>
  </div>
</template>

<script>
export default {
  props: ['selectArr'],
  data() {
    return {
      pageInline: {
        searchWord: '',
        category: null,
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.$emit('submitForm', this.pageInline);
    },
    cahngeOpaction(e) {
      this.pageInline.category = e;
    },
    addMerchandiseBtn() {
      this.$router.push({
        name: 'ProductAdd',
      });
    },
  },

};
</script>

<style scoped lang="less">
.add-page-container{
  padding: 10px 15px;
  position: relative;
}
.addBtn{
  position: absolute;
  right: 3px;
  top: 15px;
}
</style>

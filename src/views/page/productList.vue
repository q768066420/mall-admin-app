<template>
  <div>
    <!-- 搜索头部 -->
    <pageTop @submitForm="submitForm" :selectArr="selectArr" />
    <!-- 表格 -->
    <merchFrom
      :data="merchData"
      :pageSize="size"
      :page="page"
      @getPage="getPageSub"
      :total="total"
      @editProBtn="editProBtn"
      @removeProBtn="removeProBtn"
    />
  </div>
</template>

<script>
import pageTop from '@/components/addPageTop/index.vue';
import { pullKeyword, pullAll, reomvePro } from '@/api/commodity';
import merchFrom from '@/components/merchFrom/index.vue';

export default {
  components: {
    pageTop,
    merchFrom,
  },
  methods: {
    editProBtn(value) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: value.id,
        },
      });
    },
    async removeProBtn(value) {
      this.$confirm({
        title: `是否删除${value.title}`,
        onOk: async () => {
          await reomvePro(value.id);
          this.$message.success(`${value.title}删除成功`);
          this.submitForm();
        },
        onCancel: () => {
          this.$message.warning('取消删除');
        },
        class: 'test',
      });
    },
    getPageSub(e) {
      this.page = e;
    },
    // 请求数据
    async submitForm(e) {
      const res = await pullAll({
        ...e,
        page: this.page,
        size: this.size,
      });
      this.total = res.data.total;
      this.merchFromData = res.data.data;
    },
    cahngeOpaction(e) {
      this.category = e;
    },
  },
  computed: {
    merchData() {
      return this.merchFromData.map((item) => ({
        ...item,
        key: item.id,
        status: item.status === 1 ? '上架' : '下架',
        category: this.selectArr && this.selectArr[item.category - 1].name,
      }));
    },
  },
  async created() {
    // 获取下拉列表数据
    const res = await pullKeyword();
    this.selectArr = res.data.data;
    // 请求数据
    this.submitForm();
  },
  data() {
    return {
      selectArr: [],
      size: null,
      page: null,
      merchFromData: [],
      total: null,
    };
  },
};
</script>

<style>
</style>

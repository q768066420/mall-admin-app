<template>
  <div class="product-add-container">
    <a-steps :current="current" class="steps-container">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <EditProInfo @nextBtn="next" v-if="current === 0" :form="form" />
      <SelaDetail
        v-if="current === 1"
        @prev="prev"
        @nextBtn="next"
        :form="from"
      />
    </div>
  </div>
</template>

<script>
import EditProInfo from '@/components/editProInfo/index.vue';
import SelaDetail from '@/components/selaDetail/index.vue';
import { sumbitPro, getPro, editPro } from '@/api/commodity';

export default {
  components: {
    EditProInfo,
    SelaDetail,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
          content: 'First-content',
        },
        {
          title: '填写商品销售信息',
          content: 'Second-content',
        },
      ],
      form: {
        title: '',
        desc: '',
        category: '',
        c_item: '',
        tags: ['全国顺丰包邮'],
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: 'g',
        images: [],
      },
    };
  },
  async created() {
    const { id } = this.$route.params;
    if (id) {
      const pro = await getPro(id);
      this.form = pro.data;
    }
  },
  methods: {
    async next(e) {
      this.from = {
        ...this.from,
        ...e,
      };
      if (this.current === 1) {
        const { id } = this.$route.params;
        if (id) {
          console.log(1);
          await editPro(this.from);
          console.log(2);
          this.$message.info('编辑成功');
        } else {
          await sumbitPro(this.form);
          this.$message.info('提交成功');
        }
        this.$router.push({
          name: 'ProductList',
        });
        return;
      }
      this.current += 1;
    },
    prev() {
      this.current -= 1;
    },
  },
};
</script>

<style sccoped lang = 'less'>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.steps-container {
  width: 50%;
  margin: 30px auto;
}
</style>

<template>
  <a-table :columns="columns" :data-source="data" :bordered="true"
  :pagination="true" @change ='cahngePage' :pageSizeOptions="pageSize" v-model="page"
  :total='total'>
    <div slot="operate" slot-scope="text,record">
      <a-button type="primary" size="small" class="btn" @click="editBtn(record)">编辑</a-button>
      <a-button type="primary" size="small" @click="removeBtn(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'category',
    key: 'category',
    ellipsis: true,
  },
  {
    title: '商品价格',
    dataIndex: 'price',
    key: 'price',
    ellipsis: true,
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    ellipsis: true,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: '库存量',
    dataIndex: 'inventory',
    key: 'inventory',
    ellipsis: true,
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'btn',
    key: 'btn',
    width: 140,
    scopedSlots: { customRender: 'operate' },
  },
];

export default {
  props: ['data', 'pageSize', 'page', 'total'],
  data() {
    return {
      columns,
    };
  },
  methods: {
    cahngePage(e) {
      this.$emit('getPage', e.current);
    },
    editBtn(value) {
      this.$emit('editProBtn', value);
    },
    removeBtn(value) {
      this.$emit('removeProBtn', value);
    },
  },
};
</script>
<style scoped>
.btn {
  margin-right: 10px;
}
</style>

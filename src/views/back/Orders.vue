<template>
  <Loading :active="isLoading" />
  <ToastMessages />
  <DeleteModal @delete-item="deletOrder" />
  <OrderModal :order="tempOrder" ref="orderModal" />
  <div class="table-responsive n-sbar">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`paidSwitch${item.id}`"
                    v-model="item.is_paid"
                    @change="updatePaid(item)"
                  />
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(false, item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  @click="delItemId = item.id"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <BackPagination :pages="pagination" @emit-pages="getOrders" />
</template>

<script>
import BackPagination from '@/components/BackPagination.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import OrderModal from '@/components/OrderModal.vue';

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
      delItemId: '',
    };
  },
  components: {
    BackPagination,
    DeleteModal,
    ToastMessages,
    OrderModal,
  },
  methods: {
    // 取得訂單
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 開啟檢視視窗
    openModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    // openDelOrderModal(item) {
    //   this.tempOrder = { ...item };
    //   const delComponent = this.$refs.delModal;
    //   delComponent.showModal();
    // },
    // 更新付款狀態
    updatePaid(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid })
        .then(() => {
          this.isLoading = false;
          this.getOrders(this.currentPage);
          this.$emitter.emit('push-message', {
            style: 'primary',
            title: 'The statement has been changed',
          });
        })
        .catch(() => {
          this.isLoading = false;
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 刪除訂單
    deletOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.delItemId}`;
      this.isLoading = true;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.$emitter.emit('push-message', {
            style: 'primary',
            title: 'The item has been removed.',
          });
          this.getOrders(this.currentPage);
        })
        .catch(() => {
          this.isLoading = false;
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

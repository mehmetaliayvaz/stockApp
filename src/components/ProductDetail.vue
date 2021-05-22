<template>
  <div class="ProductDetail">

    <div class="ProductDetail-home">
      <router-link to="/">Ana Sayfaya Dön</router-link>
    </div>

    <div class="ProductDetail-card">
      
      <div class="ProductDetail-card-img">
        <img :src="productDetail.photoUrl" alt="">
      </div>

      <div class="ProductDetail-card-title">
        <ul>
          <li>ÜRÜN ADI:</li>
          <li>İD:</li>
          <li>BARKOD:</li>
          <li>STOK:</li>
          <li>FİYAT:</li>
        </ul>
        <ul id="card-info" v-if="!editChange">
          <li>{{ productDetail.name }}</li>
          <li>{{ productDetail.id }}</li>
          <li>{{ productDetail.barcode }}</li>
          <li>{{ productDetail.stock }}</li>
          <li>{{ productDetail.price }}</li>
        </ul>
        <ul v-if="editChange">
          <li><input v-model="productDetail.name" type="text"></li>
          <li><input v-model="productDetail.id" type="text"></li>
          <li><input v-model="productDetail.barcode" type="text"></li>
          <li><input v-model="productDetail.stock" type="text"></li>
          <li><input v-model="productDetail.price" type="text"></li>
        </ul> 
      </div>

      <div class="ProductDetail-card-options">
        <div class="ProductDetail-card-options-edit">
          <svg v-if="!editChange" @click="editProduct" width="25px" height="25px" viewBox="0 0 20 20">
            <path d="M12.3 3.7l4 4-12.3 12.3h-4v-4l12.3-12.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z"></path>
          </svg>
          <svg v-if="!editChange" @click="deleteProduct" width="25px" height="25px" viewBox="0 0 32 32">
            <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
          </svg>
        </div>
        <div v-if="!editChange" class="ProductDetail-card-options-exit">
          <input v-model="exitProductSales" type="number" placeholder="Ürün çıkışı yap">
          <svg @click="exitProduct" width="25px" height="25px" viewBox="0 0 20 20">
            <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0c-5.523 0-10-4.477-10-10s4.477-10 10-10v0zM2 10c0 4.418 3.582 8 8 8s8-3.582 8-8v0c0-4.418-3.582-8-8-8s-8 3.582-8 8v0zM12.54 10.7l-3.54 3.55-1.41-1.41 2.81-2.84-2.8-2.83 1.4-1.41 4.24 4.24-0.7 0.7z"></path>
          </svg>
        </div>
        <div v-if="editChange" class="ProductDetail-card-options-exit">
          <Buton  @click.native="saveEdit" :text="'Değişiklikleri Kaydet'"></Buton>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Buton from './Buton';
import router from '../router';

export default {
  name: 'ProductDetail',
  components: {
    Buton,
  },
  data(){
    return{
      id: this.$route.params.id,
      productDetail: {},
      editChange: false,
      exitProductSales: null,

    }
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  created(){
    this.productDetail = this.getProducts.find(product => product.id == this.id);
  },
  methods:{
    deleteProduct(){
      this.$store.dispatch('deleteProduct', this.id);
    },
    editProduct(){
      this.editChange = !this.editChange;
    },
    saveEdit(){
      this.editChange = !this.editChange;
      var index = this.$store.state.products.findIndex(product => product.id == this.id);
      this.$store.state.products[index] = this.productDetail;
      this.$store.dispatch('setStorageProducts');

      const path = `/${this.productDetail.id}`
      router.push(path).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });

    },
    exitProduct(){
      if(parseInt(this.exitProductSales) <= this.productDetail.stock){
        this.$store.state.info.sales += parseInt(this.exitProductSales);
        this.$store.dispatch('setStorageSales');
        
        var index = this.$store.state.products.findIndex(product => product.id == this.id);
        this.$store.state.products[index].stock -= this.exitProductSales;
        this.$store.dispatch('setStorageProducts');
        this.exitProductSales = null;
      }
      else{
        alert('Stok sayısından fazla ürün çıkışı yapamazsınız.');
        this.exitProductSales = null;
      }
    }

  }
  
}
</script>

<style scoped>

</style>
<template>
  <div class="AddProduct">
    <div class="AddProduct-layer" @click="$parent.addShow = false;"></div>
    <div class="AddProduct-input">
      <div class="AddProduct-input-exit">
        <svg @click="changeAddShow" viewBox="0 0 32 32" width="25" height="25">
          <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
        </svg>
      </div>
      <span>
        <label for="">Ürün Adı: </label>
        <input v-model="product.name" type="text">
      </span>
      <span>
        <label for="">İd: </label>
        <input v-model="product.id" type="text">
      </span>
      <span>
        <label for="">Fotoğraf Linki: </label>
        <input v-model="product.photoUrl" type="text">
      </span>
      <span>
        <label for="">Barkod: </label>
        <input v-model="product.barcode" type="text">
      </span>
      <span>
        <label for="">Stok: </label>
        <input v-model="product.stock" type="number">
      </span>
      <span>
        <label for="">Fiyat: </label>
        <input v-model="product.price" type="text">
      </span>
      <Buton :text="'Ürünü Kaydet'" class="Add-product-input-button" @click.native="saveProduct"></Buton>
    </div>

  </div>
</template>
  
<script>
import Buton from './Buton';

export default {
  name: 'AddProduct',
  components:{
    Buton,
  },
  data(){
    return{
      product: {
        name: null,
        id: null,
        photoUrl: null,
        barcode: null,
        stock: null,
        price: null,
      }
    }
  },
  methods:{
    saveProduct(){
      if(this.product.name != null && 
         this.product.id != null && 
         this.product.photoUrl != null &&
         this.product.barcode != null &&
         this.product.stock != null &&
         this.product.price != null ){
        this.$store.state.products.push(this.product);
        this.$store.dispatch('setStorageProducts');
        this.product = {};
      }
      else{
        alert('boş yer bıraktınız.');
      }
    },
    changeAddShow(){
      this.$emit("addShow", false);
    }
  }
}
</script>

<style scoped>

  .Add-product-input-button{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

</style>
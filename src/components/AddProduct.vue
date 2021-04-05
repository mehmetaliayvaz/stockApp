<template>
  <div class="AddProduct">
    <div class="AddProduct-layer" @click="$parent.addShow = false;"></div>
    <div class="AddProduct-input">
      <span>
        <label for="">Ürün Adı: </label>
        <input v-model="product.name" type="text" name="" id="">
      </span>
      <span>
        <label for="">İd: </label>
        <input v-model="product.id" type="text" name="" id="">
      </span>
      <span>
        <label for="">Fotoğraf Linki: </label>
        <input v-model="product.photoUrl" type="text" name="" id="">
      </span>
      <span>
        <label for="">Barkod: </label>
        <input v-model="product.barcode" type="text" name="" id="">
      </span>
      <span>
        <label for="">Stok: </label>
        <input v-model="product.stock" type="text" name="" id="">
      </span>
      <span>
        <label for="">Fiyat: </label>
        <input v-model="product.price" type="text" name="" id="">
      </span>
      <Buton :text="text" class="Add-product-input-button" @click.native="saveProduct"></Buton>
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
      text: 'Ürünü Kaydet',
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
      this.$store.state.products.push(this.product);
      this.$store.dispatch('setStorageProducts');
      this.product = {};
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
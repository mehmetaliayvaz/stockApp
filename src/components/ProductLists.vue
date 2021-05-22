<template>
  <div class="ProductLists">
    <table>
      <tr>
        <th>Sıra</th>
        <th>Fotoğraf</th>
        <th>Ad</th>
        <th>İd</th> 
        <th>Barkod</th>
        <th>Stok</th>
        <th>Fiyat</th>
      </tr>
      <template v-for="(product, index) in filtered">
        <Product-List :index="index" :product="product" :key="index"></Product-List>
      </template>
    </table>
    <button v-if="showProductsButton" id="exampleProduct" @click="getExampleProducts">Örnek Ürünler Getirmek için Tıkla</button>
  </div>
</template>
  
<script>
import ProductList from './ProductList';
import { mapGetters } from 'vuex';


export default {
  name: 'ProductLists',
  components:{
    ProductList,
  },
  props: ['searchData'],
  data(){
    return{
      showProductsButton: false,
    }
  },
  created(){
    if(this.getProducts.length == 0 ){
      this.showProductsButton = true;
    }
  },
  computed:{
    ...mapGetters(['getProducts']),
    filtered(){
      return this.getProducts.filter((element) => {
        return element.name.match(this.searchData);
      })
    },
  },
  methods:{
    getExampleProducts(){
      this.$store.commit('setExampleProducts');
      this.$store.dispatch('setStorageProducts');
      this.showProductsButton = false;
    }
  },

}

</script>

<style scoped>

</style>
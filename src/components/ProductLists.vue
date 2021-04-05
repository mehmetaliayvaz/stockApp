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
      <template v-for="(product, index) in getProducts">
        <Product-List :index="index" :product="product" :key="index"></Product-List>
      </template>
    </table>
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
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters(['getProducts'])
  }

}

</script>

<style scoped>

</style>
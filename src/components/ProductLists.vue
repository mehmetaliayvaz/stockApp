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
      <Product-List></Product-List>
      <Product-List></Product-List>
      <Product-List></Product-List>
    </table>
  </div>
</template>
  
<script>
import ProductList from './ProductList';

export default {
  name: 'ProductLists',
  components:{
    ProductList,
  },
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>

</style>
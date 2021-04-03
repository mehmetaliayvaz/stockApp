<template>
  <div class="Home">

    <div class="Home-top">
      <Search></Search>
      <Buton class="Home-top-buton" ></Buton>
      <button @click="addShowChange">göster/gizle</button>
    </div>

    <div class="Home-list">
      <Product-Lists></Product-Lists>
    </div>

    <Add-Product v-if="this.addShow"></Add-Product>

  </div>
</template>
  
<script>
import Search from './Search';
import Buton from './Buton';
import ProductLists from './ProductLists';
import AddProduct from './AddProduct';

export default {
  name: 'Home',
  components: {
    Search,
    Buton,
    ProductLists,
    AddProduct,
  },
  data(){
    return{
      addShow: false,
    }
  },
  methods:{
    addShowChange(){
      this.addShow = !this.addShow;
    }
  }
}
</script>

<style scoped>

</style>
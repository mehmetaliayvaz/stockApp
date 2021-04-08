<template>
  <div class="Home">

    <div class="Home-top">
      <Search @data="searchData = $event"></Search>
      <Buton :text="textAdd" class="Home-top-buton" @click.native="addShowChange"></Buton>
      <Add-Product @addShow="addShow = $event" :class="{active: this.addShow}"></Add-Product>
    </div>

    <div class="Home-list">
      <Product-Lists :searchData="searchData"></Product-Lists>
    </div>

    

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
      textAdd: 'Ürün Ekle',
      searchData: '',
    }
  },
  methods:{
    addShowChange(){
      this.addShow = !this.addShow;
    },
  }
}
</script>

<style scoped>

</style>
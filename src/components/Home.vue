<template>
  <div class="Home">
    <div class="Home-top">
      <Search></Search>
      <Buton></Buton>
    </div>
    <div class="Home-list">
      <Product-Lists></Product-Lists>
    </div>
  </div>
</template>
  
<script>
import Search from './Search';
import Buton from './Buton';
import ProductLists from './ProductLists';

export default {
  name: 'Home',
  components: {
    Search,
    Buton,
    ProductLists,
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="AddProduct">
    <div class="AddProduct-layer" @click="$parent.addShow = false;"></div>
    <div class="AddProduct-input">
      <span>
      <label for="">Ürün Adı: </label>
      <input type="text" name="" id="">
      </span>
      <span>
        <label for="">İd: </label>
        <input type="text" name="" id="">
      </span>
      <span>
        <label for="">Fotoğraf Linki: </label>
        <input type="text" name="" id="">
      </span>
      <span>
        <label for="">Barkod: </label>
        <input type="text" name="" id="">
      </span>
      <span>
        <label for="">Stok: </label>
        <input type="text" name="" id="">
      </span>
      <span>
        <label for="">Fiyat: </label>
        <input type="text" name="" id="">
      </span>
      <Buton></Buton>
    </div>

  </div>
</template>
  
<script>
import Buton from './Buton';

export default {
  name: 'AddProduct',
  components:{
    Buton,
  }
}
</script>

<style scoped>

</style>
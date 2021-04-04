<template>
  <tr>
    <td>1</td>
    <td>
      <router-link :to="product.id">
        <img src="https://i.imgur.com/8vwj8DE.png" alt="">
      </router-link>
    </td>
    <td>
      <router-link :to="product.id">
        {{ product.name }}
      </router-link>
    </td>
    <td>{{ product.barcode }}</td>
    <td>{{ product.id }}</td>
    <td>{{ product.stock }}</td>
    <td>{{ product.price }}</td>
  </tr>
</template>
  
<script>
export default {
  name: 'ProductList',
  props: ['product'],
}
</script>

<style scoped>

</style>
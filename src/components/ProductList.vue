<template>
  <tr>
    <td>1</td>
    <td>
      <img src="https://i.imgur.com/8vwj8DE.png" alt="">
    </td>
    <td>{{ product.name }}</td>
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
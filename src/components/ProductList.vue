<template>
  <tr>
    <td>{{index + 1}}</td>
    <td>
      <router-link :to="product.id">
        <img :src="product.photoUrl" alt="">
      </router-link>
    </td>
    <td>
      <router-link :to="product.id">
        {{ product.name }}
      </router-link>
    </td>
    <td>
      <router-link :to="product.id">
        {{ product.id }}
      </router-link>
    </td>
    <td>
      <router-link :to="product.id">
        {{ product.barcode }}
      </router-link>
    </td>
    <td>{{ product.stock }}</td>
    <td>{{ product.price }}</td>
  </tr>
</template>
  
<script>
export default {
  name: 'ProductList',
  props: ['product', 'index'],
}
</script>

<style scoped>

</style>
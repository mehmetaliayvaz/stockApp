<template>
  <div id="app">

    <Header></Header>

    <div class="container">
      <div class="Cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <router-view></router-view>
    
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Card from './components/Card';

export default {
  name: 'App',
  components: {
    Header,
    Card,
  },
  created(){
    this.$store.dispatch('getStorageProducts');
  }

}
</script>

<style lang="scss">
  @import "./scss/app.scss";

  .Cards{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

</style>

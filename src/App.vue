<template>
  <div id="app">

    <Header></Header>

    <div class="container">
      <div class="Cards">
        <Card :card="card.card1"></Card>
        <Card :card="card.card2"></Card>
        <Card :card="card.card3"></Card>
        <Card :card="card.card4"></Card>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    
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
  data(){
    return{
      card: {
        card1: ['#FFB64D', '#FFCB80', 'Ürün Çeşidi', 'list-numbered'],
        card2: ['#4099FF', '#72B4FF', 'Toplam Ürün', 'cart'],
        card3: ['#FF4040', '#FF7272', 'Toplam Varlık', 'price-tag'],
        card4: ['#2ED8B6', '#59E0C5', 'Toplam Satış', 'credit-card'],
      }
    }
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

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .1s ease-out;
  }
  /*.fade-leave{}*/
  .fade-leave-active{
    transition: opacity .1s ease-out;
    opacity: 0;
  }

</style>

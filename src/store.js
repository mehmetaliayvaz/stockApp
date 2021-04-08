import Vue from 'vue';
import router from './router';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({


  state:{
    products: [],
    exampleProducts: [
      {name: "rotring kalem", id: "rotring-kalem", photoUrl: "https://productimages.hepsiburada.net/s/2/375/9554958417970.jpg", barcode: "8690216250218", stock: "100", price: "20"},
      {name: "faber mavi silgi", id: "faber-silgi", photoUrl: "https://www.istekle.com/images/thumbs/0019703_faber-castell-mavi-silgi_510.jpeg", barcode: "8694535664453", stock: "200", price: "3"},
      {name: "mopak top kağıt", id: "mopak-kagit", photoUrl: "https://www.igneiplikburada.com/productimages/182749/middle/mopak-rekort-a4-5-koli.jpg", barcode: "8694578653256", stock: "150", price: "25"},
      {name: "stabilo ince keçeli", id: "stabilo-keceli", photoUrl: "https://www.ankasanat.com/stabilo-point-88-ince-kece-uclu-kalem-25li-kirmizi-rulo-cantali-set-keceli-ve-gazli-kalem-stabilo-indirimli-70554-32-B.jpg", barcode: "8695976129678", stock: "30", price: "85"},
      {name: "mas sümen takımı", id: "mas-sumen", photoUrl: "https://productimages.hepsiburada.net/s/38/375/10576711647282.jpg", barcode: "8695935692105", stock: "10", price: "340"},
    ],
    info: {
      product: 0,
      totalProduct: 0,
      totalPrice: 0,
      sales: 0,
    }
  },


  mutations:{
    setStateProducts(state, payload){
      state.products = payload;
      state.info.product = payload.length;
      state.info.totalProduct = payload.reduce((toplam, item) => toplam + parseInt(item.stock), 0);
      state.info.totalPrice = payload.reduce((toplam, item) => toplam + (parseInt(item.price) * parseInt(item.stock)), 0);
      //state.info.totalPrice += item in payload[item].price;
    },
    setEmptyProducts(state){
      state.products = [];
    },
    deleteStateProduct(state, payload){
      state.products.splice(state.products.findIndex(product => product.id == payload), 1);
    },
    setExampleProducts(state){
      state.products = state.exampleProducts;
    },
    setStateSales(state, payload){
      state.info.sales = payload;
    }

  },


  actions: {
    setStorageProducts({state, dispatch}){
      localStorage.setItem('product', JSON.stringify(state.products));
      dispatch('getStorageProducts');
    },
    getStorageProducts({commit}){
      if (localStorage.getItem("product") === null){
        commit('setEmptyProducts');
      }
      else {
        var storageProducts = JSON.parse(localStorage.getItem('product'));
        commit('setStateProducts', storageProducts);
      }
    },
    deleteProduct({commit, dispatch}, id){
      commit('deleteStateProduct', id);
      dispatch('setStorageProducts');
      router.push('/');
    },
    setStorageSales({state}){
      localStorage.setItem('sales', JSON.stringify(state.info.sales)); 
    },
    getStorageSales({commit}){
      var storageSales = JSON.parse(localStorage.getItem('sales'));
      commit('setStateSales', storageSales);
    }

  },


  getters: {
    getProducts(state){
      return state.products;
    },
    getInfo(state){
      return state.info;
    },
  },


});

export default store;
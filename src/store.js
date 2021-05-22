import Vue from 'vue';
import router from './router';
import Vuex from 'vuex';
import { exampleProducts } from './exampleProducts';

Vue.use(Vuex);

const store =  new Vuex.Store({


  state:{
    products: [],
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
      state.products = exampleProducts;
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
      var sales = JSON.parse(localStorage.getItem('sales'));
      var storageSales = 0;
      if(sales != null){
        storageSales = sales;
      }
      
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
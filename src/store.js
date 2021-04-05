import Vue from 'vue';
import router from './router';
import Vuex from 'vuex';

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
      state.info.totalPrice = payload.reduce((toplam, item) => toplam + parseInt(item.price), 0);
      //state.info.totalPrice += item in payload[item].price;
    },

    setEmptyProducts(state){
      state.products = [];
    },
    deleteStateProduct(state, payload){
      state.products.splice(state.products.findIndex(product => product.id == payload), 1);
    }

  },


  actions: {

    getStorageProducts({commit}){
      if (localStorage.getItem("product") === null){
        commit('setEmptyProducts');
      }
      else {
        var storageProducts = JSON.parse(localStorage.getItem('product'));
        commit('setStateProducts', storageProducts);
      }
    },

    setStorageProducts({state}){
      localStorage.setItem('product', JSON.stringify(state.products));
    },

    deleteProduct({commit, dispatch}, id){
      commit('deleteStateProduct', id);
      dispatch('setStorageProducts');
      router.push('/');
    }

  },


  getters: {

    getProducts(state){
      return state.products;
    },
    getInfo(state){
      return state.info;
    }

  },


});

export default store;
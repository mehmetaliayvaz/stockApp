import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({


  state:{
    products: [],
  },



  mutations:{

    setStateProducts(state, payload){
      state.products = payload;
    },

    setEmptyProducts(state){
      state.products = [];
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
      console.log("Ürünler başarıyla localstorage'e eklendi.");
    }

  },



  getters: {

    getProducts(state){
      return state.products;
    },

  },


});

export default store;
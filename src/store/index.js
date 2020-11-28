import Vue from "vue";
import Vuex from "vuex";
import { FETCH_NEW_BEER, SET_BEER_DETAILS } from "./types";

Vue.use(Vuex);

export const state = {
  beerDetails: {
    name: ""
  }
};

export const actions = {
  [FETCH_NEW_BEER]: async ({ commit }) => {
    try {
      let res = await fetch(
        "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2"
      );
      res = await res.json();
      commit(SET_BEER_DETAILS, res.data);
    } catch (err) {
      console.error(err);
    }
  }
};

export const mutations = {
  [SET_BEER_DETAILS]: (state, payload) => {
    state.beerDetails = payload;
  }
};

export default new Vuex.Store({ state, mutations, actions });

import {createStore} from "vuex";
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';
const state = {
    champions: null
}

export default createStore({
    state,
    mutations,
    actions,
    getters
})
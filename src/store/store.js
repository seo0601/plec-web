import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
    state () {
        return {
            userId : null,
            isManager:null
        }
    },
    getters:{
        isUserId(state){
            return state.userId;
        },
        isManager(state){
            return state.isManager;
        }
    },
    mutations :{
        setUserId(state, userId){
            state.userId = userId;
        },
        setMore(state, data){
            state.more = data
        },
        setIsManager(state, isManager){
            state.isManager = isManager;
        },
    },
    actions : {
        setUserId:({commit}, userId) => {
            commit('setUserId', userId);
        },
        getData(){
            axios.get('http://localhost:9000/project/api/faq/Faqlist')
        },
        setIsManager:({commit}, isManager) => {
            commit('setIsManager', isManager);
        }
    },
    plugins:[
        createPersistedState()
    ]

})

export default store;
const mutations = {
    loginInvalido(state){
        state.loginInvalido = true;
    },
    setUser(state, user){
        state.user = user;
    }
}

export default mutations;
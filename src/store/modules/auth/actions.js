import axios from 'axios';
export default {

  async Register(context, form) {
  let response =  await axios.post('/register', form)
   return response;
  },
   async Login({commit}, form) {
    try{
   let response =  await axios.post('/login', form)
    localStorage.setItem("token", response.data.token);
    commit('setUser', {user: response} )

  return response;
    }
    catch(error) {
  return error.response;
    }
    },
  
  logout({commit}) {
    commit('logout');
  }
};

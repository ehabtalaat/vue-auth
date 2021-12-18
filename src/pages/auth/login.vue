<template>

 
  <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1" @submit.prevent="login">
      <input class="un " type="text" align="center" placeholder="phone" v-model="form.phone"> 
      <input class="pass" type="password" align="center" placeholder="Password" v-model="form.password">
            <p v-if="error" id="error" style="margin:auto;color:red;text-align: center;">{{error}}</p>

      <button class="submit" type="submit" align="center">Sign in</button>
    </form>
            
     <router-link to="/register"><span class="psw">sign up </span></router-link>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
        form:{
      phone:'',
      password:'',
    //  user_type:1
        },
      isLoading: false,
      error: ''
    };
  },
 created(){
     console.log(this.$store.getters.token,this.$store.getters.user);
 },
  methods: {
    async login() {
         if (
        this.form.phone === '' ||
        this.form.password === ''
      ) {
        this.error = 'من فضلك املاء جميع الحقول';
      }else{
      
    let response =  await this.$store.dispatch("Login", this.form);
     if(response.data.status == true){
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title:  response.data.message,
  timer: 1500
})
  

this.form = {
      phone:'',
      password:'',
};
this.error = null;
this.$router.go('/home');

     }else{
         console.log(this.form);
         this.error = response.data.message;
     }
     console.log(response)
      }

    },
  
  },
};
</script>

<style scoped>




        body {
        background-color: #F3EBF6;
        font-family: 'Ubuntu', sans-serif;
    }
    
    .main {
        background-color: #FFFFFF;
        width: 400px;
        height: 400px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }
    
    .sign {
        padding-top: 40px;
        color: #8C55AA;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 23px;
    }
    
    .un {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
    form.form1 {
        padding-top: 40px;
    }
    
    .pass {
            width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
   
    .un:focus, .pass:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
        
    }
    
    .submit {
      cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: linear-gradient(to right, #9C27B0, #E040FB);
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 35%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }
    span{
        cursor: pointer;
        border-radius: 5em;
        color: #9C27B0;
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 35%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04); 
    }
    
    .forgot {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        padding-top: 15px;
    }
    
    a {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        text-decoration: none
    }
    
 
        


</style>
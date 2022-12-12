<template>
    <section class="loginSection">
      <div class="msg">
        <h4 class="welcome">Bem Vindo!</h4>
        <h6 class="instructions">Entre com suas informações de login</h6>
      </div>
      <div class="loginCard">
        <div class="loginForm">
          <form class="login">
            <input
              class="user"
              type="text"
              name=""
              placeholder="Email"
              v-model="email"
            />
            <input
              class="password"
              type="password"
              name=""
              placeholder="Senha"
              v-model="password"
            />
            <div class="rememberMe">
              <input type="checkbox" name="remember" />
              <p class="message">Lembrar de mim</p>
            </div>
            
          </form>
          <button @click="login">Login</button>
          <div class="noPassword">
            <router-link class="forgotPassword" to=""
              >Esqueceu a senha?</router-link
            >
          </div>
          <p class="join">
            Não tem uma conta?
            <router-link class="toJoin" to="/joinus">Criar conta</router-link>
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    mounted() {
    },
    methods: {
      login(){
        if(this.email == '' || this.password == ''){
          alert('Preencha todos os campos')
          return
        }

        axios.post('http://localhost:3030/login', {
          "email": this.email,
          "senha": this.password
        })
        .then(res => {
          console.log(res.status)

          if(res.status == 200){
            alert('Login realizado com sucesso')
            this.$router.push('/')
          } else {
            alert('Email ou senha incorretos, tente novamente')
          }
        })
      },
    },
  };
  </script>
  
  <style scoped>
  .loginSection {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .welcome {
    font-size: 2rem;
  }
  .instructions {
    color: var(--carbonLight);
  }
  .login {
    display: flex;
    flex-direction: column;
  }
  .user,
  .password {
    display: flex;
    border: solid var(--carbon) 1px;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    appearance: none;
    outline: none;
    width: 20rem;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    transition: 0.3s;
  }
  input::placeholder {
    color: var(--carbonLight);
    font-size: 0.9rem;
  }
  input:focus {
    box-shadow: 0 0 10px var(--blue);
  }
  .rememberMe {
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rememberMe p {
    margin: 0 0 0 0.2rem;
  }
  .loginBtn {
    border: solid 1px var(--blue);
    color: white;
    text-decoration: none;
    background-color: var(--blue);
    padding: 5px 15px;
    border-radius: 2rem;
    transition: 0.3s;
    margin: 0.5rem 0;
  }
  .loginBtn:hover {
    background-color: var(--carbonLight);
    border: solid 1px var(--carbonLight);
  }
  .noPassword {
    text-align: center;
    margin-bottom: 0.2rem;
  }
  .forgotPassword {
    font-size: 0.9rem;
  }
  .join {
    color: var(--carbonLight);
    font-size: 0.8rem;
    text-align: center;
  }
  
  .or {
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    margin: 0.5rem 0;
  }
  .divider {
    position: relative;
    display: inline-block;
  }
  .divider::after,
  .divider::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 9999px;
    height: 1px;
    background: var(--carbon);
  }
  .divider::after {
    left: 100%;
    margin-left: 1rem;
  }
  .divider::before {
    right: 100%;
    margin-right: 1rem;
  }
  .socialLogin {
    display: flex;
    flex-direction: column;
  }
  .socialLoginBtn {
    border: solid 1px var(--carbon);
    color: var(--carbon);
    text-decoration: none;
    background-color: white;
    padding: 5px 15px;
    border-radius: 2rem;
    transition: 0.3s;
    margin: 0.2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: 0.4s;
  }
  .socialLoginBtn:hover {
    background-color: var(--carbonLight);
    border: solid 1px var(--carbonLight);
  }
  </style>
  
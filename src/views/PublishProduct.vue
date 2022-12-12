<template>
  <section class="signUpSection">
      <div class="msg">
        <h4 class="welcome">Anuncie seu produto</h4>
        <h6 class="instructions">Insira as informações do seu produto</h6>
      </div>
      <div class="loginCard">
        <div class="loginForm">
          <form action="" class="login">
            <label class="inputLabel" for="name">Nome do produto:</label>
            <input
              class="name"
              type="text"
              name="name"
              placeholder=""
              v-model="form.name"
            />
            <label class="inputLabel" for="email">Preço:</label>
            <input
              class="user"
              type="text"
              name="email"
              placeholder=""	
              v-model="form.price"
            />
            <label class="inputLabel" for="state">Estado do produto:</label>
              <select id="state" class="user" aria-placeholder="Insira o estado atual do produto">
                <option value="novo" class="placeholder"></option>
                <option value="usado">Novo</option>
                <option value="fiat">Usado</option>
                <option value="audi">Usado em estado de novo</option>
              </select>
            <label class="inputLabel" for="password">Insira fotos do seu produto:</label>
            <input
              class="imgProduto"
              type="file"
              name=""
              placeholder="imagem"
            />
            <div class="rememberMe">
              <input type="checkbox" name="remember" />
              <p class="message">
               Eu concordo com os <a href="">Termos de Venda</a>
              </p>
            </div>
            <router-link to="/">
              <button class="loginBtn" @click="submitForm">Publicar</button>
            </router-link>
          </form>
        </div>
      </div>
    </section>

</template>

<script>
import axios from 'axios';

export default {
  name: 'PublishProduct',
  data() {
    return {
      form: {
        name: '',
        price: '',
        image: '',
      }
    };
  },
  
  methods: {
    submitForm(){
      axios.post('http://localhost:3030/publicar', {
        "nome_produto": this.form.name,
        "preco": this.form.price,
        "imagem": "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg",
      })
    },
  },
};
</script>

<style scoped>

.signUpSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin: 1rem 0 2rem 0;
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
  .inputLabel {
    margin-top: 0.5rem;
  }
  .user,
  .password,
  .name {
    display: flex;
    border: solid var(--carbon) 1px;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    appearance: none;
    outline: none;
    width: 20rem;
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
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rememberMe p {
    margin: 0 0 0 0.2rem;
  }
  .loginBtn { 
    width: 20rem;
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

  .publishForm {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .nomeProduto {
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
  

</style>

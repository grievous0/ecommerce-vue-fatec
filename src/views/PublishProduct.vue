<template>
  <h2 class="msg">Anuncie seu produto!</h2>
  <section class="publishForm">
    
    <form action="" method="">
      <input
        class="nomeProduto"
        type="text"
        name=""
        placeholder="Nome do produto"
        v-model="form.name"
      />
      <input
        class="nomeProduto"
        type="text"
        name=""
        placeholder="Preço"
        v-model="form.price"
      />
      <input
        class="imgProduto"
        type="file"
        name=""
        placeholder="imagem"
        @change="form.image"
      />
      <router-link to="/">
        <button class="loginBtn" @click="submitForm" >Publicar</button>
      </router-link>
    </form>
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
      axios.post('http://localhost:3000/products', {
        "name": this.form.name,
        "price": this.form.price,
        "image": this.form.image
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      }) 
    },
  },
};
</script>

<style scoped>

.msg {
  font-size: 1.5rem;

    background-color: var(--blue);
    color: rgb(0, 0, 0);
    text-align: center;
    box-shadow: 0 0 20px var(--blue);
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

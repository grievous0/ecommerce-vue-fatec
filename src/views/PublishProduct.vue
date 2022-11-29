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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .publishForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin: 1rem 0 2rem 0;
  }

  .nomeProduto {
    width: 100%;
    height: 2rem;
    border: 1px solid var(--carbonLight);
    border-radius: 0.5rem;
    padding: 0.5rem;
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

<template>
  <section class="product-line">
    <div class="messages">
      <h3 class="message highlight"></h3>
    </div>
      
    <h2>
      <span class="highlight">Produtos em destaque</span>
    </h2>

    <div class="messages">
      <h3 class="message highlight"></h3>
    </div>
        
    <div class="product-cards">
      <div class="card" 
        v-for="(product, index) in featuredProducts" 
        :key="index"
      >
        <div class="card-img">
          <img
            :src="product.image"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="product-info">
            <h4 class="product-name">{{product.name}}</h4>
            <p class="price"><strike>R${{product.oldPrice}}</strike> <span>R${{product.price}}</span></p>
            <a @click="addToCart(product)" class="cart">Adicionar no Carrinho</a>
        </div>
      </div>
  </div>

  <div class="messages">
      <h3 class="message highlight"></h3>
  </div>

  <h2 class="title">
    <span class="highlight">Produtos com desconto</span>
  </h2>
  
  <div class="messages">
      <h3 class="message highlight"></h3>
  </div>

  <div class="product-cards">
      <div class="card" 
        v-for="(product, index) in discountedProducts" 
        :key="index"
      >
        <div class="card-img">
          <img
            :src="product.image"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="product-info">
            <h4 class="product-name">{{product.name}}</h4>
            <p class="price"><strike>R${{product.oldPrice}}</strike> <span>R${{product.price}}</span></p>
            <a class="cart" @click="addToCart(product)">Adicionar no Carrinho</a>
        </div>
      </div>
  </div>
  
  

  <div >
    <div class="messages">
      <h3 class="message highlight"></h3>
    </div>

    <h2 class="title">
      <span class="highlight">Seus produtos</span>
    </h2>

    <div class="messages">
        <h3 class="message highlight"></h3>
    </div>
    
    <div class="product-cards">
        <div class="card" 
          v-for="(produto, index) in produtos" 
          :key="index"
        >
          <div class="card-img">
            <img
              :src="produto.imagem"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="product-info">
              <h4 class="product-name">{{produto.nome_produto}}</h4>
              <p class="price"><span>R${{produto.preco}}</span></p>
              <a class="delete" @click="deleteProduct(produto.nome_produto)">Deletar</a>
          </div>
        </div>
    </div>
  </div>
      
  </section>
</template>
  
<script>
import axios from 'axios';

export default {
name: 'productsLine',

  data(){
      return {
        products: '',
        featuredProducts: '',
        discountedProducts: '',
        cart: '',
        totalPrice: 0,
        isProducts: false,
        produtos: []
      }
    },
  mounted(){
    this.fetchFeaturedProducts();
    this.fetchDiscountedProducts();
    this.fetchProducts();
    this.test()
  },
  methods: {
    test(){
      axios.get('http://localhost:3030/produtos')
      .then(response => {
        console.log(response.data);
        this.produtos = response.data;
      })
    },
    fetchFeaturedProducts(){
      axios.get('http://localhost:3000/featuredProducts/')
      .then(response => {
        this.featuredProducts = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    },

    fetchDiscountedProducts(){
      axios.get('http://localhost:3000/discountedProducts/')
      .then(response => {
        this.discountedProducts = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    },

    fetchProducts(){
      axios.get('http://localhost:3000/products/')
      .then(response => {
        this.products = response.data;
        if(this.products.length > 0){
          this.isProducts = true;
        }
      })
      .catch(error => {
        console.log(error);
      })
    },

    deleteProduct(nome_produto){
      axios.post("http://localhost:3030/produtos/deletar", {
        nome_produto: nome_produto
      }).then(response => {
        console.log(response);
        this.test();
      })
    },

    addToCart(product){
      axios.post('http://localhost:3000/cart/', product)
      .then(response => {
        this.fetchCart()
        console.log(response);
      })
    },

    fetchCart(){
      axios.get('http://localhost:3000/cart/')
      .then(response => {
        this.cart = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    },
    countTotalPrice(){
      axios.get('http://localhost:3000/cart/')
      .then(response => {
        response.data.forEach(product => {
          this.totalPrice += product.price;
        });
      })
    },
    deleteFromCart(index){
      axios.delete(`http://localhost:3000/cart/${index}`)
      .then(response => {
        console.log(response);
        this.fetchCart();
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>
  
  <style scoped>
  .product-line {
    z-index: 0;
  }
  .messages {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .message {
    font-size: 1.5rem;
    margin: 0.4rem 0.5rem;
    padding: 0.3rem 3rem;
    background-color: var(--blue);
    color: white;
    text-align: center;
    border-radius: 2rem;
    box-shadow: 0 0 20px var(--blue);
  }
  .underline {
    text-decoration: underline;
    text-transform: uppercase;
  }
  h2 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    margin: 1rem;
  }

  .carousel {
    margin: 3rem auto;
    padding: 0 2rem;
  }
  
  .carousel .carousel-item {
    min-height: 330px;
    text-align: center;
    overflow: hidden;
  }
  .carousel .carousel-item .img-box {
    height: 150px;
    width: 100%;
    position: relative;
  }
  .carousel .carousel-item img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 0.5rem;
  }
  .carousel .carousel-item h4 {
    font-size: 1rem;
  }
  .carousel .carousel-item .btn {
    border-radius: 2rem;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
    background: none;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    margin-top: 5px;
    line-height: 16px;
  }
  .carousel .carousel-item .btn:hover,
  .carousel .carousel-item .btn:focus {
    color: #fff;
    background: #000;
    border-color: #000;
    box-shadow: none;
  }
  .carousel .carousel-item .btn i {
    font-size: 1rem;
    font-weight: bold;
  }
  .carousel .thumb-wrapper {
    text-align: center;
  }
  .carousel .thumb-content {
    padding: 1rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
    height: 100px;
    width: 40px;
    margin: auto 0;
  }
  .carousel-control-prev i,
  .carousel-control-next i {
    position: absolute;
    top: 50%;
    display: inline-block;
    z-index: 5;
    left: 0;
    right: 0;
    color: rgba(0, 0, 0, 0.8);
  }
 
  .carousel-indicators {
    bottom: -40px;
  }
  .list-inline {
    margin: 0;
  }
  .star-rating i {
    font-size: 0.5rem;
    color: var(--yellow);
    margin: 0;
    padding: 0;
  }
  .carousel .carousel-item .btn {
    color: var(--blue);
  }
  .row {
    display: flex;
    justify-content: space-around;
  }
  .col-sm-3 {
    width: 23%;
    height: 50%;
    cursor: pointer;
    transition: 0.4s;
  }
  .col-sm-3:hover {
    transform: scale(1.04);
  }
  .discounted,
  .picks {
    background-color: white;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
  }
  
  .highlight {
    color: white;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .product-cards {
    display: flex;
    padding: 2rem 0;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    box-shadow: 0 0 5px #00000040;
    transition: 0.4s;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 20%;
    height: 360px;
    background-color: rgb(255, 255, 255);
  }
  .card:hover {
    box-shadow: 0 0 10px #00000040;
    transform: scale(1.02);
  }
  
  .card-img {
    width: 100px;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
  }
  .card-img img {
    width: 50%;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: flex-start;
    height: 40%;
  }
  .product-name {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
  }
  .price {
    margin: 0;
    font-size: 1.2rem;
  }
  .price span {
    font-size: 110%;
    color: var(--green);
    font-weight: bold;
  }
  .stars {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
  .star {
    font-size: 0.8rem;
    color: var(--yellow);
  }
  .count {
    color: var(--blue);
    font-size: 0.7rem;
    padding-left: 5px;
  }
  .cart {
    text-decoration: none;
    color: var(--blue);
    font-size: 0.9rem;
    font-weight: 600
  }

  .cart:hover {
    color: black;
  }
  .delete {
    text-decoration: none;
    color: #bb8630;
  }

  .delete:hover {
    color: rgb(156, 0, 0);
  }

  .refurbished .highlight {
    color: white
  }
  
  @media screen and (max-width: 1000px) {
    .carousel .carousel-item .img-box {
      height: 90px;
    }
    .thumb-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .thumb-content h4 {
      font-size: 0.8rem;
    }
    .list-inline {
      display: none;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      height: 1rem;
      width: 1rem;
    }
  }
  @media screen and (max-width: 750px) {
    .card-img {
      height: 40%;
    }
    .product-info {
      height: 60%;
    }
    .carousel .item-price {
      font-size: 10px;
      margin: 0;
    }
    .carousel .carousel-item h4[data-v-a99e3fae] {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 500px) {
    .picks {
      margin: 0;
      padding: 0;
    }
    .product-cards {
      flex-direction: column;
    }
    .card {
      width: 80%;
      justify-content: center;
      height: 165px;
    }
    .card-img {
      width: 40%;
      height: auto;
      padding: 0;
    }
    .product-info {
      width: 60%;
      padding-right: 0.5rem;
      height: auto;
    }
  }
  </style>
  
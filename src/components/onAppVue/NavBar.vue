<template>
    <section class="userLinks">
      <router-link class="link" to="/joinus">Criar conta </router-link>
      <router-link class="link" to="/login">Login</router-link>
    </section>
    <nav class="navbar">
      <div class="burger-menu">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle product"
            type="button"
            id="dropdownProduct"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownProduct">
            <form class="searchBox">
              <input class="productSearch" type="text" placeholder="Pesquisar produtos" />
              <button type="submit" class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <hr class="divider" />
            <div class="productCategories">
              <ul class="categories">
                <li class="category">
                  <a href="" class="categoryLink">TV e Som</a>
                </li>
                <li class="category">
                  <a href="" class="categoryLink">Computadorees e Tablets</a>
                </li>
                <li class="category">
                  <a href="" class="categoryLink">Camêra e Vídeo</a>
                </li>
                <li class="category">
                  <a href="" class="categoryLink">Smartphones</a>
                </li>
                <li class="category">
                  <a href="" class="categoryLink">Áudio</a>
                </li>
                <li class="category">
                  <a href="" class="categoryLink">Videogames</a>
                </li>
                <li class="category">
                  <a href="" class="categoryLink">Outros</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="brand">
        <router-link to="/">
          <img class="logo" src="@/assets/founditlogoteste.png" alt="" />
        </router-link>
      </div>
      <div class="tools">
        <div class="dropdown">
          <router-link to="/publish">
            <button
              class="btn publish"
              type="button"
              id="dropdownPublish"
            >
            <i class="fa-solid fa-plus"></i>
          </button>
        </router-link>

          <button
            class="btn dropdown-toggle cart"
            type="button"
            id="dropdownCart"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-end cart"
            aria-labelledby="dropdownCart"
          >
            <div class="cartHeader">
              <div class="cartQuantity">
                <i class="fa fa-shopping-cart cart-icon"></i
                ><span class="badge">{{this.totalItems}}</span>
              </div>
  
              <div class="shopping-cart-total">
                <h6 class="total">Total:</h6>
                <h6 class="totalAmount">R${{this.totalPrice}}</h6>
              </div>
            </div>
            <hr />
            <div class="products">
              <div class="product"
                v-for="(product, index) in cart"
                :key="index">
                <div class="productImage">
                  <img
                    class="image"
                    :src="product.image"
                    alt=""
                  />
                </div>
                <div class="productDesc">
                  <h5 class="productName">{{product.name}}</h5>
                  <div class="info">
                    <h4 class="price">R${{product.price}}</h4>
                    <i class="fa fa-trash-o delete-icon" @click="deleteFromCart(product.id)"></i>
                  </div>
                </div>
              </div>
              <div class="go-to-cart">
                <router-link class="see" to="/checkout">Ver tudo ></router-link>
              </div>
            </div>
            <hr />
            <div class="checkoutSection">
              <router-link class="checkout" to="/checkout"
                >Fechar Compra
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
    import axios from 'axios';

    export default {

      name: "NavBar",
      data() {
        return {
          cart: '',
          totalPrice: 0,
          totalItems: 0,
        }
      },
      mounted() {
        this.fetchCart();
        this.countTotalPrice();
        this.countCartItems()
      },
      methods: {
        countCartItems(){
          axios.get('http://localhost:3000/cart')
          .then(response => {
            this.totalItems = response.data.length;
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
  .userLinks {
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    background-color: #262626;
    width: 100%;
    padding: 0.5rem 2rem;
    gap: 0.7rem;
    height: 2rem;
  }
  .userLinks .link {
    color:  #FAB23D;
    text-decoration: none;
    transition: 0.2s;
  }
  .userLinks .link:hover {
    color: white;
  }
  .navbar {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1.5rem;
    top: 0;
    position: sticky;
    background-color: #000000;
    z-index: 2;
  }
  
  .dropdown-menu {
    padding: 1rem 1rem 0 1rem;
  }
  .cart,
  .product {
    z-index: 999;
  }
  .searchBox {
    display: flex;
    border: solid #FAB23D 1px;
    border-radius: 2rem;
    padding: 0.2rem 0.7rem;
  }
  .productSearch {
    border: none;
    color: var(--carbon);
    appearance: none;
    outline: none;
  }
  .search {
    border: none;
    background-color: transparent;
  }
  .search .fa-solid {
    font-size: 1rem;
  }
  .categories {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  .category,
  .categoryLink {
    list-style: none;
    text-decoration: none;
    color: var(--carbon);
    transition: 0.2s;
  }
  .categoryLink:hover {
    text-decoration: underline;
    color: var(--carbonLight);
  }
  
  .logo {
    width: 80px;
    margin-left: 50%;
    margin-right: 50%;
    padding: 2px;
    transition: 1s;
  }
  
  .logo:hover {
    transform: scale(1.05);
    transition: 0.4s;
  }
  
  .tools {
    display: flex;
    align-items: center;
  }
  
  .fa-solid {
    color: white;
    font-size: 1.5rem;
    transition: 0.6s;
  }
  
  .fa-solid:hover {
    color: #FAB23D;
    transition: 0.4s;
  }
  .dropdown {
    background-color: transparent;
  }
  .dropdown-toggle::after {
    content: none;
  }
  .cartHeader {
    display: flex;
    gap: 5rem;
    align-items: center;
  }
  .cartQuantity {
    display: flex;
    align-items: center;
  }
  .cart-icon {
    font-size: 1.2rem;
    margin-right: 7px;
  }
  .delete-icon {
    font-size: 1rem;
    margin-right: 7px;
    margin-bottom: 5px;
    color: red;
    cursor: pointer;
  }
  .badge {
    background-color: var(--blue);
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 1;
    padding-bottom: 4px;
  }
  .shopping-cart-total {
    display: flex;
    align-items: center;
  }
  
  .total {
    margin: 0;
    font-size: 0.8rem;
  }
  .totalAmount {
    margin: 0 3px 0 5px;
    color: var(--blue);
  }
  .products {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .product {
    display: flex;
  }
  .productImage {
    width: 40%;
  }
  .image {
    width: 60px;
  }
  .productDesc {
    width: 60%;
  }
  .info {
    display: flex;
    justify-content: space-between;
  }
  .info h4 {
    font-size: 0.9rem;
    font-weight: 300;
  }
  .price {
    color: var(--blue);
  }
  .qty span {
    font-size: 0.7rem;
    color: var(--carbon);
  }
  .qty {
    color: var(--green);
  }
  .go-to-cart {
    display: flex;
    justify-content: right;
  }
  .see {
    font-size: 0.8rem;
  }
  .checkoutSection {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
  }
  .checkout {
    color: white;
    text-decoration: none;
    background-color: var(--blue);
    padding: 5px 15px;
    border-radius: 2rem;
    transition: 0.3s;
  }
  .checkout:hover {
    background-color: var(--carbonLight);
  }
  @media screen and (max-width: 900px) {
    .logo {
      width: 60px;
    }
    .fa-solid {
      font-size: 1rem;
    }
    .navbar {
      padding: 0.4rem 1rem;
    }
  
    .cart-icon {
      font-size: 0.8rem;
      margin-right: 2px;
    }
    .badge {
      background-color: var(--blue);
      border-radius: 10px;
      color: white;
      display: flex;
      align-items: center;
      font-size: 9px;
      line-height: 1;
      padding: 3px 7px;
    }
  }
  @media screen and (max-width: 500px) {
    .cartHeader {
      justify-content: space-between;
    }
    .product {
      width: 90%;
    }
    .productName {
      font-size: 0.9rem;
    }
    .productImage {
      width: 30%;
    }
  }
  </style>
  
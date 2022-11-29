<template>
  <section class="checkoutScreen">
    <div class="checkOutCard">
      <!-- Billing section -->
      <div class="billing">
        <h3 class="title"><i class="fa-solid fa-lock"></i>Entrega segura</h3>
        <hr />
        <div class="sections">
          <div class="section">
            <h4 @click="isShown = !isShown" class="subtitle">
              <div><i class="fa-solid fa-1"></i>Entrega</div>
              <i class="fa-solid fa-caret-down"></i>
            </h4>
            <Transition name="slide-fade">
              <div v-show="!isShown" class="content">
                <form action="" class="deliveryInfo">
                  <input class="email" type="email" placeholder="Email" />
                  <div class="name">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Sobrenome" />
                  </div>
                  <input type="text" placeholder="Endereço" />
                  <div class="location">
                    <input type="text" placeholder="CEP" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="Estado" />
                    <input type="text" placeholder="Pais" />
                  </div>
                </form>
                <form action="" class="deliveryMethods">
                  <div class="method">
                    <h5></h5>
                    <h5>Metodo</h5>
                    <h5>Dias</h5>
                    <h5>Valor</h5>
                  </div>
                  <div class="method">
                    <input type="radio" name="gender" value="male" checked />
                    <h6>Standard</h6>
                    <h6>5-7 dias</h6>
                    <h6>Gratis</h6>
                  </div>
                  <div class="method">
                    <input type="radio" name="gender" value="male" />
                    <h6>Express</h6>
                    <h6>1-3 days</h6>
                    <h6>R$3.99</h6>
                  </div>
                </form>
              </div>
            </Transition>
          </div>
          <div class="section">
            <h4 @click="isShown = !isShown" class="subtitle">
              <div><i class="fa-solid fa-2"></i>Pagamento</div>
              <i class="fa-solid fa-caret-down"></i>
            </h4>
            <Transition name="slide-fade">
              <div v-show="isShown" class="content">
                <div class="cardSection">
                  <div class="card">
                    <h4 class="cardNumber">000 0000 0000 0000</h4>
                    <h6 class="cardHolder">Titular do cartão</h6>
                    <h6 class="cardDate">00/00</h6>
                    <img
                      src="https://www.svgrepo.com/show/362011/mastercard.svg"
                      alt=""
                      class="cardVendor"
                    />
                  </div>
                </div>
                <div class="paymentOptions">
                  <h5 class="payMethods">bandeiras aceitas:</h5>
                  <div class="payments">
                    <img
                      class="payMethod"
                      src="https://imagensemoldes.com.br/wp-content/uploads/2020/06/Bandeira-de-Cart%C3%A3o-PNG-Elo-1280x720.png"
                      alt="Elo"
                    />
                    <img
                      class="payMethod"
                      src="https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
                      alt="MasterCard"
                    />
                    <img
                      class="payMethod"
                      src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
                      alt="Visa"
                    />
                    <img
                      class="payMethod"
                      src="https://imagensemoldes.com.br/wp-content/uploads/2020/06/Bandeira-de-Cart%C3%A3o-PNG-American-Express-1280x720.png"
                      alt="American Express"
                    />
                    <img
                      class="payMethod"
                      src="https://redetriboo.com.br/wp-content/uploads/2021/01/hipercard-1.png?w=900"
                      alt="Hipercard"
                    />
                    <img
                      class="payMethod"
                      src="https://redetriboo.com.br/wp-content/uploads/2021/01/dinersclub-1.png?w=900  "
                      alt="Diners Club"
                    />
                  </div>
                </div>
                <div class="paymentInfo">
                  <form action="" class="paymentDetails">
                    <input
                      type="text"
                      class="cardNo"
                      placeholder="Titular do cartão"
                    />
                    <div class="cardDetails">
                      <input type="number" placeholder="Numero do Cartão" />
                      <input type="number" placeholder="MM/YY" />
                      <input type="number" placeholder="CVV" />
                    </div>
                  </form>
                  <div class="action">
                    <button class="continue">
                      Continuar <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                    ou
                    <button class="continue paypal">
                      <img
                        class="paypalImg"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/2560px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png"
                        alt="pix"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <hr />
          <div class="section">
            <p class="disclaimer">
              Ao continuar a compra você concorda com
              <a href="">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
      <!-- Checkout section -->
      <div class="check">
        <h3 class="title">
          <i class="fa-solid fa-cart-shopping"></i>Seu Pedido
        </h3>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}
.checkOutCard {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
}
.billing {
  width: 60%;
  padding: 0 0.5rem;
}
.title {
  font-size: 1rem;
  color: var(--carbon);
  display: flex;
  gap: 0.4rem;
}
.subtitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  transition: 0.4s;
  padding: 0.3rem 0.5rem;
}
.subtitle:hover {
  background-color: #FAB23D;
}
.subtitle div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
input {
  width: 100%;
  margin: 0.8rem 0;
  font-size: 1.2rem;
  outline: none;
  font-size: Roboto;
  font-weight: 400;
  padding: 0 5px;
}

input::placeholder {
  color: var(--carbonLight);
  font-size: 1rem;
  font-weight: 300;
  padding: 0 0.5rem;
}

.name {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
}
.location {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
}
.deliveryMethods {
  display: flex;
  flex-direction: column;
}
.method {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}
input[type="radio"] {
  width: 1rem;
}
.method h5 {
  font-size: 0.8rem;
  margin: 0;
}
.method h6 {
  font-weight: 300;
  margin: 0;
  padding: 0.5rem 0;
}

.disclaimer {
  text-align: center;
  color: var(--carbonLight);
  font-size: 0.9rem;
  font-weight: 300;
}
.cardSection {
  display: flex;
  justify-content: center;
  height: 70%;
}
.paymentOptions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.payMethods {
  font-size: 0.8rem;
  margin: 0;
  font-weight: 300;
}
.payments {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.payMethod {
  width: 3rem;
}

.card {
  background: linear-gradient(
    90deg,
    rgb(36, 36, 41) 0%,
    rgb(99, 99, 99) 35%,
    rgb(20, 20, 20) 100%
  );
  width: 52%;
  height: 16vw;
  border: none;
  border-radius: 1rem;
}

.cardNumber {
  position: absolute;
  font-size: 1.6vw;
  bottom: 20%;
  left: 1rem;
  color: white;
}
.cardHolder {
  position: absolute;
  bottom: 5%;
  left: 1rem;
  font-weight: 300;
  font-size: 1vw;
  color: white;
  text-transform: uppercase;
}
.cardDate {
  position: absolute;
  bottom: 5%;
  left: 52%;
  font-weight: 300;
  font-size: 1vw;
  color: white;
}
.cardVendor {
  width: 4.5vw;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 1rem;
}

.cardDetails {
  display: grid;
  grid-template-columns: 1.6fr 0.7fr 0.7fr;
  grid-template-rows: 1fr;
  gap: 0px 8px;
  grid-template-areas: ". . .";
}
.cardDetails input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.continue {
  border: none;
  background: var(--carbon);
  color: white;
  padding: 0.5rem 1rem;
  width: 8rem;
  height: 3rem;
  border-radius: 2rem;
}

.paypal {
  background-color: #fdc33a;
}
.paypalImg {
  height: 2rem;
}
.check {
  width: 40%;
}

/* Transition config */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .billing {
    padding: 0;
  }
  input {
    padding: 0 3px;
    margin: 0.4rem 0;
  }
  input::placeholder {
    font-size: 0.8rem;
    padding: 0 3px;
  }
  .method {
    gap: 0.5rem;
  }
  .method h5 {
    font-size: 0.6rem;
    padding: 0.3rem;
  }
  .method h6 {
    font-size: 0.8rem;
  }
  .disclaimer {
    font-size: 0.7rem;
  }
  .card {
    display: none;
  }
  .action {
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.2rem;
  }
  .cardDetails {
    gap: 0px 3px;
  }
}
</style>

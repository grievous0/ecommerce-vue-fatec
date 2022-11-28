<template>
    <footer class="footer">
      <a href="#" class="go-top">
        <h3>Voltar ao topo</h3>
      </a>
      <div class="footer-top">
        <div class="sections">
          <div class="logo-section">
            <img class="logo" src="@/assets/founditlogoteste3.png" alt="" />
            <p class="description">O melhor produto para " T.I "</p>
          </div>
          <div class="section">
            <h3 class="subtitle">Service</h3>
            <ul class="links">
              <li>
                <router-link class="link" to="/about-us">Sobre</router-link>
              </li>
              <li><router-link class="link" to="">Fale conosco</router-link></li>
              <li><router-link class="link" to="">Suporte</router-link></li>
            </ul>
          </div>
          <div class="section">
            <h3 class="subtitle">Fale conosco</h3>
            <div class="contactSection">
              <ul class="links">
                <li class="contact">
                  <div class="contactItem">
                    <i class="fa-solid fa-house"></i>
                    <p>Fatec Americana</p>
                  </div>
                  <div class="contactItem">
                    <i class="fa-solid fa-envelope"></i>
                    <p>foundit@mail.com</p>
                  </div>
                  <div class="contactItem">
                    <i class="fa-solid fa-phone"></i>
                    <p>+ 12 345 678 910</p>
                  </div>
                </li>
                <li class="social">
                  <a class="socialLink" href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a class="socialLink" href="">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a class="socialLink" href="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a class="socialLink" href="">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div class="footer-bottom">
        <p class="credits">
          © 2022 FoundIt - All rights reserved - feito por - Fabricio José dos Santos Junior, João Vitor de Oliveira pereira, Rafael Nunes, Raul de Oliveira Araujo
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    bottom: 0;
    align-items: center;
    background-color: var(--carbon);
    color: white;
    width: 100%;
  }
  .go-top {
    background-color: var(--carbonLight);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1rem 0;
    transition: 0.4s;
    cursor: pointer;
    text-decoration: none;
  }
  
  .go-top:hover {
    background-color: #FAB23D;
  }
  
  .go-top > h3 {
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    color: white;
  }
  .footer-top {
    display: flex;
    justify-content: center;
  }
  .sections {
    display: flex;
    gap: 5rem;
  }
  .logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .section {
    display: flex;
    flex-direction: column;
  }
  
  .logo {
    width: 70px;
    background-color: transparent;
    margin-bottom: 0.3rem;
    padding: 0.4rem;
  }
  
  .description {
    font-size: 0.7rem;
    font-weight: 200;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .link,
  .contactItem p {
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.4s;
    color: white;
    font-weight: 300;
    margin: 0;
  }
  
  .fa-solid {
    font-size: 0.8rem;
  }
  
  .link:hover {
    color: grey;
    text-decoration: underline;
    transition: 0.4s;
  }
  .contact {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .contactItem {
    display: flex;
    align-items: center;
  }
  .contactItem p {
    padding-left: 0.5rem;
  }
  .social {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .socialLink {
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.4s;
    color: white;
  }
  
  .socialLink:hover {
    color: var(--grey);
  }
  
  .divider {
    width: 90vw;
    color: #FAB23D;
  }
  .credits {
    font-size: 0.7rem;
    font-weight: 300;
  }
  
  @media screen and (max-width: 900px) {
    .sections {
      gap: 1rem;
    }
    .section {
      text-align: center;
      align-items: center;
    }
    .footer-top {
      padding: 0 1rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  
    .link,
    .contactItem p {
      font-size: 0.8rem;
    }
  
    .fa-solid {
      font-size: 0.8rem;
    }
    .contactItem p {
      padding-left: 0.3rem;
      font-size: 0.6rem;
    }
    .logo-section {
      width: 20%;
    }
    .sections {
      justify-content: center;
    }
  }
  
  .subtitle{
    color: #FAB23D;
  }
  .fa-house{
    color: #FAB23D;
  }

  .fa-envelope{
    color: #FAB23D;
  }
  .fa-phone{
    color: #FAB23D;
  }
  .fa-instagram{
    color: #FAB23D;
  }
  .fa-twitter{
    color: #FAB23D;
  }
  .fa-linkedin-in{
    color: #FAB23D;
  }
  .fa-facebook-f{
    color: #FAB23D;
  }
  
  </style>
  
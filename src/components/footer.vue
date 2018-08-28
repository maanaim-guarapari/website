<template lang="html">
  <footer class="footer">
    <b-container fluid>
      <b-row class="footer-info">
        <b-col sm="4" class="footer-image-container">
          <b-img class="footer-image" center src="static/img/logo.o.svg" alt="center image" />
        </b-col>
        <b-col sm="4">
          <h2>Sobre nós</h2>
          <p>Somos membros da <a target="_blank" href="http://www.igrejacristamaranata.org.br/">Igreja Cristã Maranata</a> - Presbitério Espírito Santense.</p>
          <a href="tel:+5527999552960">
            <p><fa icon="phone"/> (27) 99955-2960</p>
          </a>
        </b-col>
        <b-col sm="4">
          <h2>Nossa Localização</h2>
          <p>Rua Vitória Maria da Conceição - Praia do Morro, Guarapari - ES, 29216-370</p>
          <a target="_blank" href="https://goo.gl/maps/4QmsGsXKCWL2">
              <p><fa icon="map"/> Google Maps</p>
          </a>
        </b-col>
      </b-row>
      <b-row class="footer-copyright">
        <b-col class="text-center">
            <p>© 2018 Maanaim Guarapari - Honras e Glórias a Jesus Cristo. Amém!</p>
            <p>
              Made with <fa icon="heart"/> & <fa icon="coffee"/> by <a target="_blank" href="http://gustavoamorim.xyz"> Gustavo Amorim</a> using <a target="_blank" href="https://vuejs.org"><img src="static/img/icons/vue.svg" alt="Vue.js" style="height:1rem;" /></a> and <a target="_blank" href="https://aws.amazon.com/lambda/"><img src="static/img/icons/aws-lambda.svg" alt="AWS Lambda" style="height:1rem;"/></a>
            </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer {
  .footer-info {
    background: white;
    padding: 5px;
    .footer-image-container {
      display: none;
    }
  }

  .footer-copyright {
    height: 3.2em;
    background: white;
    p {
      margin: 0px;
    }
    margin-bottom: 150px;
  }

  @media (min-width: 768px) {

    background: rgba($default-light-bg, .95);

    .footer-info {
      padding: 15px 0px 0px 0px;

      .footer-image-container {
        display: block;

        .footer-image {
          width: 90%;
          height: auto;
        }
      }
    }

    .footer-copyright {
      background-color: rgb(240, 240, 240);
      margin-bottom: 0px;
    }
  }
}
</style>

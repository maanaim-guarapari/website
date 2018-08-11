<template lang="html">
  <b-navbar toggleable="md" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link to="/">
        <img src="static/img/logo.o.svg" alt="Home">
      </router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/eventos">Eventos</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc7kjTMSbwaod6VyqiukX7DIMdfYBDFACehWDqePnmLMzdNpg/viewform">Seja Voluntário!</b-nav-item>
        <b-nav-item href="http://admin.maanaimguarapari.com.br">Sign in</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style lang="scss">

$navbar-height: 100px;

.navbar {
  padding: 0px 25px 0px 25px;
  background-color: white;
  border-bottom: 1px solid #d3e0e9;

  .navbar-brand {
    padding: 0px;

    img {
      width: auto;
      height: $navbar-height;
    }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 840px) {

  }
}
</style>

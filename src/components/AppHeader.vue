<template>
  <header class="header">
    <router-link class="header__link" to="/">Главная</router-link>
    <router-link class="header__link" to="/champions">Чемпионы</router-link>
    <router-link class="header__link" to="/items">Предметы</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/app.scss';
  .header {
    display: flex;
    align-items: center;
    column-gap: 35px;

    &__link {
      color: $text-color;
      text-decoration: none;
    }
  }
.router-link-active {
  color: $active-color;
}
</style>
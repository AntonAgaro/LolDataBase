<template>
  <router-link
      class="champion-card__link"
      v-for="champion in champions"
      :key="champion.key"
      :to="{name: 'champion', params: {id: champion.id}}"
  >
      <div class="champion-card">
        <img class="champion-card__img" width="120" height="120" :src="`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${champion.image.full}`" :alt="champion.name">
        <h3 class="champion-card__title">{{ champion.name}}</h3>
      </div>
  </router-link>
</template>

<script setup>
defineProps({
  champions: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
@import '@/assets/app.scss';
.champion-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  cursor: pointer;

  &__title {
    text-align: center;
  }

  &__link {
    color: $text-color;
    text-decoration: none;
  }
}
</style>
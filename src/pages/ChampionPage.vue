<template>
  <div class="champion-page" v-if="championInfo">
    <div class="champion-page__titles">
      <h2 class="champion-page__title">{{ championInfo.name}}</h2>
      <h3 class="champion-page__subtitle">{{championInfo.title}}</h3>
    </div>
    <div class="champion-page__img-wrapper">
      <img class="champion-page__img" :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`" :alt="championInfo.name">
    </div>
    <div class="champion-page__descr">
      {{ championInfo.lore }}
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
const route = useRoute();
const store = useStore();
const getChampion = computed(() => store.getters.getChampion(route.params.id))
const championInfo = ref(null);

async function fetchChampionData() {
  const data = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.10.1/data/ru_RU/champion/${route.params.id}.json`);
  const json = await data.json();
  championInfo.value = json.data[route.params.id];
}
onMounted(() => {
  fetchChampionData();
})

</script>

<style lang="scss" scoped>
.champion-page {

  &__titles {
    padding: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    text-align: center;
  }

  &__img-wrapper {
    height: 0;
    position: relative;
    padding-top: calc(9 / 16 * 100%);
  }

  &__img {
    position: absolute;
    top: 0;
    max-width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }

  &__descr {
    padding: 20px;
  }
}
</style>
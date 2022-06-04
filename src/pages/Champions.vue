<template>
  <div class="champions">
    <champion-card v-if="champions" :champions="champions" />
  </div>
</template>

<script setup>
import ChampionCard from '@/components/ChampionCard.vue';
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const champions = computed(() => store.getters.getChampions);
</script>

<style lang="scss" scoped>
  .champions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 540px) {
      justify-content: space-between;
    }
  }
</style>
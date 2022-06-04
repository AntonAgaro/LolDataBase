<template>
  <div class="app">
    <app-header/>
    <div class="content">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

const store = useStore();
onMounted(async () => {
  await store.dispatch('fetchChampions');
})

const getChampions = computed(() => store.getters.getChampions);
</script>

<style lang="scss">
@import "@/assets/app.scss";
</style>
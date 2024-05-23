<script setup lang="ts">
import { pb } from '@/backend';
import { type MaisonResponse } from '@/pocketbase-types';
const maisonsListe: MaisonResponse[] = await pb.collection('maison').getFullList();

</script>

<template>

  <ul>
    <li v-for="uneMaison of maisonsListe " :key="uneMaison.id">
      <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
      >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
    </template>
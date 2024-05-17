<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue';
import type { MaisonResponse } from '@/pocketbase-types'

/* const maisonsListe: MaisonResponse[] = 
[
  {
    adresse: ' BESANCON secteur Cras',
    collectionId: 'qlnqfuovkywz0fe',
    collectionName: 'maison',
    created: '2024-04-11 14:20:06.242Z',
    favori: false,
    id: '4pn62inuhi7gou1',
    image: 'maison1_img2_AAwEatqxyw.webp',
    nbChambres: 3,
    nbSdb: 1,
    nomMaison: 'Terrain avec maison neuve',
    prix: 310000,
    surface: 545,
    updated: '2024-04-11 14:20:06.242Z'
  },
  {
    adresse: ' Saint Jean, Antibes',
    collectionId: 'qlnqfuovkywz0fe',
    collectionName: 'maison',
    created: '2024-04-11 14:24:42.271Z',
    favori: true,
    id: '9lz7auxmqerawxv',
    image: 'maison2_img5_kbcSY7X9wm.webp',
    nbChambres: 14,
    nbSdb: 10,
    nomMaison: 'Château de luxe',
    prix: 25000000,
    surface: 1013,
    updated: '2024-04-11 14:24:42.271Z'
  },
  {
    adresse: '  Givrand (85800)',
    collectionId: 'qlnqfuovkywz0fe',
    collectionName: 'maison',
    created: '2024-04-11 14:28:43.249Z',
    favori: false,
    id: 'n54290ax53hefuq',
    image: 'maison3_img4_SZzDAuo0kj.webp',
    nbChambres: 2,
    nbSdb: 1,
    nomMaison: 'Chalet avec terrain',
    prix: 81100,
    surface: 61,
    updated: '2024-04-11 14:28:43.249Z'
  },
  {
    adresse: 'Silly-Gallieni',
    collectionId: 'qlnqfuovkywz0fe',
    collectionName: 'maison',
    created: '2024-04-11 14:32:59.685Z',
    favori: false,
    id: 'ya934ljow2dyjev',
    image: 'maison4_img5_r1svklOBiB.webp',
    nbChambres: 5,
    nbSdb: 3,
    nomMaison: 'Maison / Villa',
    prix: 2650000,
    surface: 296,
    updated: '2024-04-11 14:32:59.685Z'
  },
  {
    adresse: 'Maison secteur Montchapet / Jouvence',
    collectionId: 'qlnqfuovkywz0fe',
    collectionName: 'maison',
    created: '2024-04-11 14:35:53.525Z',
    favori: true,
    id: 'cpqy7ixhclayarz',
    image: 'maison5_img5_1IgPXTPWts.jpg',
    nbChambres: 4,
    nbSdb: 2,
    nomMaison: 'Maison 6 pièces',
    prix: 555000,
    surface: 131,
    updated: '2024-04-11 14:35:53.525Z'
  }
] */
const maisonsListe = await pb.collection('maison').getFullList();
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison" />

</template>

<script setup>
import Requester from '../../components/requester.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <n-card title="test">
    <requester class="mt-3" />
  </n-card>
</template>

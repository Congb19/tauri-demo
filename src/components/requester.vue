<script setup>
import axios from 'axios';

const url = ref('http://api.congb19.com:8001/api/json');
const loading = ref(false);
const result = ref('');
const others = ref({});

async function makeRequest() {
  loading.value = true;
  const { status, data: requestData, headers } = await axios.get(url.value);
  console.log(status, requestData, headers);

  result.value = requestData;
  others.value = { status, headers };
  loading.value = false;
}
</script>

<template>
  <n-card title="requester">
    <div>
      GET <n-input type="text" :value="url" />
      <n-button type="primary" :loading="loading" @click="makeRequest">
        Make Request!
      </n-button>
    </div>

    <pre>{{ others }}</pre>
    <pre>{{ result }}</pre>
  </n-card>
</template>

<style scoped></style>

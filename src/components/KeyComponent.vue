<script>
export default {
  data() {
    return {
      keyboard: [
        { id: 1, keys: [{ id: 1, value: '1' }, { id: 2, value: '2' }, { id: 3, value: '3' }] },
        { id: 2, keys: [{ id: 4, value: '4' }, { id: 5, value: '5' }, { id: 6, value: '6' }] },
        { id: 3, keys: [{ id: 7, value: '7' }, { id: 8, value: '8' }, { id: 9, value: '9' }] },
        { id: 4, keys: [{ id: 10, value: '*' }, { id: 11, value: '0' }, { id: 12, value: '#' }] },
      ],
    };
  },
  methods: {
    onKeyPress(value) {
      console.log('Key pressed:', value);
    },
  },
};
</script>
<template>
    <div class="phone-keyboard">
      <div v-for="row in keyboard" :key="row.id" class="keyboard-row">
        <div v-for="key in row.keys" :key="key.id" class="keyboard-key" @click="onKeyPress(key.value)">
          {{ key.value }}
        </div>
      </div>
    </div>
  </template>
<style scoped>
.phone-keyboard {
  display: flex;
  flex-direction: column;
}

.keyboard-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.keyboard-key {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
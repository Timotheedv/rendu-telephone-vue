<script>
import CurrentNumber from '@/components/CurrentNumber.vue';
import KeyComponent from '@/components/KeyComponent.vue';

export default {
  components: {
    KeyComponent, 
    CurrentNumber,
  },
  data() {
    return {
      currentNumber: '', 
    };
  },
  methods: {
    onKeyPress(value) {
      this.currentNumber += value;
      console.log('Key pressed:', value);
    },
  },
};
</script>

<template>
  <div>
    <current-number :currentNumber="currentNumber" />
    <key-component @key-pressed="onKeyPress" /> 
  </div>
</template>

  
  
  
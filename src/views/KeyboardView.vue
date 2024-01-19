<template>
  <div>
    <KeyComponent @key-pressed="onKeyPress" />
  </div>
</template>

<script>
import KeyComponent from '@/components/KeyComponent.vue';
export default {
  components: {
    KeyComponent,
  },
  data() {
    return {
      callNumber: '',
    };
  },
  methods: {
    onKeyPress(value) {
      this.callNumber += value;

      const matchingContact = this.findMatchingContact(this.callNumber);
      if (matchingContact) {
        this.callNumber = matchingContact.name;
      }
      console.log('Key pressed:', value);
    },
    findMatchingContact(number) {
      return this.contacts.find((contact) => contact.phone === number);
    },
  },
};
</script>

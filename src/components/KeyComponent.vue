<template>
  <div>
    <div class="display-number">{{ inputNumber }}</div>
    <div class="phone-keyboard">
      <div v-for="row in keyboard" :key="row.id" class="keyboard-row">
        <div v-for="key in row.keys" :key="key.id" class="keyboard-key" @click="onKeyPress(key.value)">
          {{ key.value }}
        </div>
      </div>
      <button @click="makeCall" class="call-btn">Appeler</button>
    </div>
    
  </div>
</template>

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
      callNumber: '',
      inputNumber: '', 
    };
  },
  methods: {
  onKeyPress(value) {
    console.log('Key pressed:', value); 
    this.callNumber += value;

    const matchingContact = this.findMatchingContact(this.callNumber);
    if (matchingContact) {
      this.callNumber = matchingContact.name;
    }

    this.inputNumber = this.callNumber;
  },
  makeCall() {
  this.$router.push({ name: 'call-view', query: { number: this.callNumber } });
},

    findMatchingContact(number) {
      return this.contacts.find((contact) => contact.phone === number);
    },
  },
};
</script>

<style scoped>
.phone-keyboard {
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
}

.keyboard-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  gap: 10%;
}

.keyboard-key {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: black;
}

.call-btn {
  width: 150px;
  height: 50px;
  border: 1px solid #ccc;
  background-color: rgb(255, 223, 223);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.display-number {
  text-align: center;
  font-size: 24px;
  width: 200px;
  height: 40px;
  margin-bottom: 10px;

  color: black;
}
</style>

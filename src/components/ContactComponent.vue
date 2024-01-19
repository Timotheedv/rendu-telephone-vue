

<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedContact: null,
    };
  },
  methods: {
    showContactDetails(contact) {
      this.selectedContact = contact;
    },
    callContact() {
      if (this.selectedContact) {
        console.log(`Appel de ${this.selectedContact.name} au ${this.selectedContact.phone}`);
      }
    },
  },
};
</script>
<template>
  <div>
    <h2>Liste de contacts</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" @click="showContactDetails(contact)">
        {{ contact.name }}
      </li>
    </ul>

    <div v-if="selectedContact">
      <h3>Détails du contact</h3>
      <p>Nom: {{ selectedContact.name }}</p>
      <p>Numéro de téléphone: {{ selectedContact.phone }}</p>
      <button @click="callContact">Appeler</button>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  cursor: pointer;
}

li {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  color: black;
}

 h2{
  color: black;
}
p {
      color: black;
    }

</style>

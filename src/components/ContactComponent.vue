<script>
  export default {
    data() {
      // return {
      //   contacts: [
      //     { id: 1, name: 'Alice', phone: '123-456-7890' },
      //     { id: 2, name: 'Bob', phone: '987-654-3210' },

      //   ],
      //   selectedContact: null,
      // };
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
  /* Ajoutez du style selon vos besoins */
  ul {
    list-style-type: none;
    padding: 0;
    cursor: pointer;
  }
  
  li {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
  }
  </style>
  

  
  <script>
  export default {
    data() {
      return {
        newContact: {
          name: '',
          phone: '',
        },
      };
    },
    methods: {
      addContact() {
        this.$emit('contact-added', { ...this.newContact });
        this.newContact = {
          name: '',
          phone: '',
        };
      },
    },
  };
  </script>
  <template>
    <div>
      <h2>Formulaire d'ajout de contact</h2>
      <form @submit.prevent="addContact">
        <label for="name">Nom:</label>
        <input type="text" id="name" v-model="newContact.name" required>
  
        <label for="phone">Numéro de téléphone:</label>
        <input type="text" id="phone" v-model="newContact.phone" required>  
        <button type="submit">+</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  </style>
  
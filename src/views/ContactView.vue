
  <script>
  import ContactComponent from '@/components/ContactComponent.vue';
  import ContactForm from '@/components/ContactForm.vue';
  
  export default {
    components: {
      ContactComponent,
      ContactForm,
    },
    data() {
      return {
        selectedContact: null,
        contacts: [
        ],
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
      addNewContact(newContact) {
        // Ajoutez la logique pour ajouter le nouveau contact à la liste
        this.contacts.push(newContact);
      },
    },
  };
  </script>
  <template>
    <div>
      <contact-component @show-details="showContactDetails" @call-contact="callContact" />
      <contact-form @contact-added="addNewContact" />
    </div>
  </template>
  
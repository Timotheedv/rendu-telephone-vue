
  
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
        { id: 1, name: 'Alice Dumas', phone: '0623256512' },
      { id: 2, name: 'Pierre Paul', phone: '0685623666' },
      { id: 3, name: 'Jacques Martin', phone: '0623256512' },
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
        this.contacts.push(newContact);
      },
    },
  };
  </script>
  <template>
    <div>
      <contact-component :contacts="contacts" @show-details="showContactDetails" @call-contact="callContact" />
      <contact-form @contact-added="addNewContact" />
    </div>
  </template>

    <style scoped>
   
    </style>
  
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    contacts: JSON.parse(localStorage.getItem('contacts')) || [
      { id: 1, name: 'Alice Dumas', phone: '0623256512' },
      { id: 2, name: 'Pierre Paul', phone: '0685623666' },
      { id: 3, name: 'Jacques Martin', phone: '0623256512' },
    ],
  }),
  actions: {
    addNewContact(newContact) {
      this.contacts.push(newContact);
      this.saveContactsToLocalStorage();
    },
    saveContactsToLocalStorage() {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    },
  },
});

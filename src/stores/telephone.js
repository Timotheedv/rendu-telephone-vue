
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    contacts: [
      { id: 1, name: 'Alice Dumas', phone: 0623256512 },
      { id: 2, name: 'Pierre Paul', phone: 0685623666 },
      { id: 3, name: 'Jacques Martin', phone: 0623256512 },
      
      
    ],
  }),
});

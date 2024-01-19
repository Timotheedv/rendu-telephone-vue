import { createRouter, createWebHistory } from 'vue-router'
import CallView from '../views/CallView.vue'
import ContactView from '../views/ContactView.vue'
import FormView from '../views/FormView.vue'
import KeyboardView from '../views/KeyboardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Liste des appels',
      name: 'Appeler',
      component: CallView
    },

    {
      path: '/contacter',
      name: 'Contacter',
      component: ContactView
    },

    {
      path: '/+',
      name: 'formulaire',
      component: FormView
    },
    {
      path: '/composer',
      name: 'Composer',
      component: KeyboardView
    }
  ]
})

export default router
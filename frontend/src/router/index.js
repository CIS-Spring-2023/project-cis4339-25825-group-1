import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/loginPage.vue')
  },
  {
    path: '/pie',
    name: 'pie',
    component: () => import('../components/pieChart.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../components/services.vue')
  },
  {
    path: '/createservice',
    name: 'createservice',
    component: () => import('../components/createservice.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

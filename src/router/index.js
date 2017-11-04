import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BookClassification from '../components/base-data/components/BookClassification.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/book-classification',
      name: 'bookClassification',
      component: BookClassification
    }
  ]
})

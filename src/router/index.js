import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BookClassification from '../components/base-data/components/BookClassification.vue'
import BookList from '../components/base-data/components/BookList.vue'
import Plan from '../page/plan'

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
    },
    {
      path: '/book-list',
      name: 'bookList',
      component: BookList
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    }
  ]
})

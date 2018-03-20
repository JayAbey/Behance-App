// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the vue router
import VueRouter from 'vue-router'
//import the vue resorce
import VueResource from 'vue-resource'
//import the vuefire
// import VueFire from 'vuefire'
//import the App component
import App from './App'
// import the moment plugin
import moment from 'moment'

//tell Vue to use the router
Vue.use(VueRouter)
//tell Vue to use the resource
Vue.use(VueResource)
//tell vue to use the moment
Vue.use(moment)

//import components
import Home from './components/Home/Home'
import GameDesignHome from './components/GameDesign-Jay/GameDesign_Home-Jay'
import GameDesignDesigner from './components/GameDesign-Jay/GameDesign_Designer-Jay'
import GameDesignProjects from './components/GameDesign-Jay/GameDesign_Project-Jay'
import Mike from './components/GraphicDesign-Mike/GraphicDesign-Mike'
import Victor from './components/Photography-Victor/Photography-Victor'
import Contact from './components/Contact/Contact'

import Profile from './components/GraphicDesign-Mike/profile-page-mike'
import VictorPhotographerListPage from './components/Photography-Victor/Photographer-list-page-Victor'
import VictorPhotographerProfileDetailPage from './components/Photography-Victor/Photographer-profile-detail-page-Victor'
import VictorPhotographerProjectDetailPage from './components/Photography-Victor/Photographer-project-detail-page-Victor'


const routes = [
  { path: '/', component: Home },
  { path: '/game-design-home', component: GameDesignHome },
  { path: '/game-design-designer/:selectedDesignerID', component: GameDesignDesigner, props:true },
  { path: '/game-design-projects/:selectedProjectID', component: GameDesignProjects, props:true },
  { path: '/graphicDesign', component: Mike },

  { path: '/photography', component: Victor },
  { path: '/contact', component: Contact },
  // { path: '/profilePage', component: Profile },
  { path: '/graphic-designer/:username', component: Profile, props: true },
  // {
  //   path: '/admin', component: Admin,
  //   children: [
  //     {
  //       path: '/',
  //       component: Posts
  //     },
  //     {
  //       path: 'comments',
  //       component: Comments
  //     }
  //   ]
  // }

  { path: '/photography', component: Victor},
  { path: '/photographer-list-page', component: VictorPhotographerListPage},
  { path: '/photographer-profile-detail-page/:individualPhotographerUsername', component: VictorPhotographerProfileDetailPage, props: true},
  { path: '/photographer-project-detail-page/:individualPhotographerUserId/:individualPhotographerProject', component: VictorPhotographerProjectDetailPage, props: true},
  { path: '/contact', component: Contact }


];

const router = new VueRouter({
  routes,
  mode: 'history'
})

//instatiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app

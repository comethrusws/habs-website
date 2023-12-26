import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import AdmissionIn from '../views/AdmissionIn.vue'
import NoticeBoard from '../views/NoticeBoard.vue'
import PhotoGallery from '../views/PhotoGallery.vue'
import ContactUs from '../views/ContactUs.vue'
import CalendarView from '../views/CalendarView.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { title: 'Home - Himalayan Academy  Boarding School' }
  },
  { path: '/about', component: AboutUs, meta: { title: 'About Us' }  },
  {  path: '/admissions', component: AdmissionIn, meta: { title: 'Admissions' } },
  {  path: '/notice', component: NoticeBoard, meta: { title: 'Notices' } },
  {  path: '/contact', component: ContactUs, meta: { title: 'Contact Us' } },
  {  path: '/gallery', component: PhotoGallery, meta: { title: 'Gallery' } },
  {  path: '/calendar', component: CalendarView, meta: { title: 'Calendar' } },


];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Home|HABS'; 
  document.title = to.meta.title || defaultTitle;
  next();
});

export default router;

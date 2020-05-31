import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login'
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/account/login.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    meta: {
      title: '主页'
    },
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    }, {
      path: '/homepage',
      name: 'Homepage',
      component: () => import(/* webpackChunkName: "about" */ '../views/account/homepage.vue'),
    }, {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
      path: '/certificate',
      name: 'Certificate',
      component: () => import(/* webpackChunkName: "about" */ '../views/certificate/certificate.vue'),
      meta: {
        title: '我的证书'
      },
    }, {
      path: '/sharing_center',
      name: 'SharingCenter',
      component: () => import(/* webpackChunkName: "about" */ '../views/sharingCenter/sharingCenter.vue'),
      meta: {
        title: '共享中心'
      },
    }, {
      path: '/intership',
      name: 'Intersjip',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/myIntership.vue'),
      meta: {
        title: '我的实习'
      },
    }, {
      path: '/attendance_record',
      name: 'SharingCenter',
      component: () => import(/* webpackChunkName: "about" */ '../views/attendanceRecord/attendanceRecord.vue'),
      meta: {
        title: '事件管理'
      },
    }, , {
      path: '/alarm_event',
      name: 'AlarmEvent',
      component: () => import(/* webpackChunkName: "about" */ '../views/attendanceRecord/alarmEvent.vue'),
      meta: {
        title: '毕业设计'
      },
    }, {
      path: '/graduation_project',
      name: 'GraduationProject',
      component: () => import(/* webpackChunkName: "about" */ '../views/graduationProject/graduationProject.vue'),
      meta: {
        title: '毕业设计'
      },
    }, {
      path: '/information',
      name: 'Information',
      component: () => import(/* webpackChunkName: "about" */ '../views/account/information.vue'),
      meta: {
        title: '毕业设计'
      },
    }, {
      path: '/changeOfPractice',
      name: 'changeOfPractice',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/changeOfPractice.vue'),
      meta: {
        title: '变更实习类型'
      }
    }, {
      path: '/internshipRegistration',
      name: 'InternshipRegistration',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/internshipRegistration.vue'),
      meta: {
        title: '实习登记'
      }
    },{
      path: '/intershipTask',
      name: 'InternshipRegistration',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/intershipTask.vue'),
      meta: {
        title: '查看实习任务'
      }
    },{
      path: '/intershipReport',
      name: 'InternshipRegistration',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/intershipReport.vue'),
      meta: {
        title: '查看实习报告'
      }
    }, {
      path: '/intershipResults',
      name: 'InternshipRegistration',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/intershipResults.vue'),
      meta: {
        title: '查看实习成绩'
      }
    }, {
      path: '/attendanceManagement',
      name: 'InternshipRegistration',
      component: () => import(/* webpackChunkName: "about" */ '../views/intership/attendanceManagement.vue'),
      meta: {
        title: '查看考勤管理'
      }
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

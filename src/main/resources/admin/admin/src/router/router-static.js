import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import shiwu from '@/views/modules/shiwu/list'
    import shiwuYuyue from '@/views/modules/shiwuYuyue/list'
    import xunwu from '@/views/modules/xunwu/list'
    import xunwuYuyue from '@/views/modules/xunwuYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShiwu from '@/views/modules/dictionaryShiwu/list'
    import dictionaryShiwuYesno from '@/views/modules/dictionaryShiwuYesno/list'
    import dictionaryShiwuYuyueYesno from '@/views/modules/dictionaryShiwuYuyueYesno/list'
    import dictionaryXunwu from '@/views/modules/dictionaryXunwu/list'
    import dictionaryXunwuYesno from '@/views/modules/dictionaryXunwuYesno/list'
    import dictionaryXunwuYuyueYesno from '@/views/modules/dictionaryXunwuYuyueYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShiwu',
        name: '失物类型',
        component: dictionaryShiwu
    }
    ,{
        path: '/dictionaryShiwuYesno',
        name: '申请状态',
        component: dictionaryShiwuYesno
    }
    ,{
        path: '/dictionaryShiwuYuyueYesno',
        name: '报名状态',
        component: dictionaryShiwuYuyueYesno
    }
    ,{
        path: '/dictionaryXunwu',
        name: '寻物类型',
        component: dictionaryXunwu
    }
    ,{
        path: '/dictionaryXunwuYesno',
        name: '申请状态',
        component: dictionaryXunwuYesno
    }
    ,{
        path: '/dictionaryXunwuYuyueYesno',
        name: '报名状态',
        component: dictionaryXunwuYuyueYesno
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/shiwu',
        name: '失物招领',
        component: shiwu
      }
    ,{
        path: '/shiwuYuyue',
        name: '失物认领',
        component: shiwuYuyue
      }
    ,{
        path: '/xunwu',
        name: '寻物启示',
        component: xunwu
      }
    ,{
        path: '/xunwuYuyue',
        name: '寻物认领',
        component: xunwuYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
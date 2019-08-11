export default {
    path:'/user',
    component:resolve=>require(['../components/common/user.vue'],resolve),
    children:[{
        path:'createTable',
        component:resolve=>require(['../components/createTable.vue'],resolve),
    }]

}

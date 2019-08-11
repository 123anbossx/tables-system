<style scoped>

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        margin-right: 40px;
    }
    .layout-nav{
        margin: 0 auto;
        margin-right: 20px;
        margin-left: 20px;
    }
    .layout-mgr{
        position: absolute;
        right: 0;
    }
    .ivu-layout{
        height: 100%;
        padding: 0px 0px 0px !important;
    }
    .ivu-menu-light {
        background: #fff;
        height: 100%;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">

                        <MenuItem v-for="(item,index) in headerList" :name="item.name"  :key="index" :to="item.defaultPath">
                             {{item.name}}
                        </MenuItem>

                    </div>
                    <div class="layout-mgr">
                        <MenuItem name="1" to="/user/createTable">{{user}}</MenuItem>
                    </div>

                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">

                        <Submenu  v-for="(item,index) in sliderList" :key="index" :name="index" v-if="Array.isArray(item)">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                {{item[0].name[0]}}
                            </template>
                            <MenuItem :name="item1.path" v-for="(item1,index1) in item" :key="index1" :to="item1.path">{{item1.name[1]}}</MenuItem>

                        </Submenu>
                        <MenuItem name="1-3" v-else  :to="item.path">{{item.name[0]}}</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{ minHeight: '280px', background: '#fff'}">
                       content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return{
               headerList:[],
               sliderList:[],
               user:'',
            }
        },
        methods:{
            getDaultPath(data){
                 if(Array.isArray(data[0])){
                     if(data[0][0].hasOwnProperty('children')){
                         return this.digui(data[0][0].children)
                     }else {
                         return data[0][0].path;
                     }

                 }else {
                     return data[0].path
                 }
            },

        },
        created(){

            let userMsg=JSON.parse(localStorage.getItem("LoginMsg"));
            this.user=userMsg.user.split('@')[0];
            this.axios.post('/nav',{
                key:['company','market']
            }).then((response)=>{
                let list=response.data.data;
                let param=this.$route.fullPath.split('/')[1];
                for(let item of list){
                    item.defaultPath=this.getDaultPath(item.children);
                     if(item.key==param){
                         this.sliderList=item.children;
                     }
                }
               this.headerList=list;
                // this.$store.commit('getDataList',list);
                // console.log(this.$store.state.Navlist);
            })
        }
    }
</script>
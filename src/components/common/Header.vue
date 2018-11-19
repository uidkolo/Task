<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="header-left">
            <div class="collapse-btn" @click="collapseChage">
                <i class="el-icon-menu"></i>
            </div>
            <div class="logo">客途智慧门店</div>
        </div>
        <div class="header-right">
            <div class="menu">
                <div class="item" v-for='(item,index) in menus' :key='index'>
                    <i class="iconfont" v-html='item.icon'></i>
                    <span>{{item.label}}</span>
                </div>
            </div>
            <div class="header-user-icon">
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="hover" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: 'linxin',
                message: 2,
                menus:[
                    {   
                        icon:'&#xe61f;',
                        label:'工单',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe602;',
                        label:'会员',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe60a;',
                        label:'库存',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe626;',
                        label:'绩效',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe60c;',
                        label:'财务',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe719;',
                        label:'商机',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe64f;',
                        label:'微信',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe657;',
                        label:'运营',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    },
                    {   
                        icon:'&#xe786;',
                        label:'设置',
                        subMenus:[
                            {
                                label: '收银开单'
                            },
                            {
                                label: '维修开单'
                            },
                            {
                                label: '客户资料'
                            },
                            {
                                label: '客户寄存'
                            },
                            {
                                label: '客户订货'
                            },
                            {
                                label: '客户预约'
                            },
                            {
                                label: '客户回访'
                            },
                            {
                                label: '保险业务'
                            },
                            {
                                label: '视频说明'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header .header-right .menu{
        display: flex;
        align-items: center;
    }
    .header .header-right .menu .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size:14px;
    }
    .header .header-right .menu .item i{
        font-size: 18px;
    }
    .header-right{
        display: flex;
        padding-right: 20px;
    }
    .header-user-icon{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin: 0 20px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>

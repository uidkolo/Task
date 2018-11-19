<template>
    <div class="login-wrap">
        <canvas id="canvas"></canvas> 
        <div class="ms-login">
            <div class="ms-title">客途智慧门店</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: 'admin',
                    password: '123456'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
            this.createCanvas()
            this.listenResize()
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 监听屏幕变化，重新渲染动画
            listenResize(){
                const that = this
                window.onresize = function(){
                    that.createCanvas();
                }
            },
            // 创建背景动画
            createCanvas(){
                var canvas = document.querySelector('canvas');
                var ctx = canvas.getContext('2d');
                var squids = new Array(32);
                var bubbles = new Array(54);
                var t = 0;
                //create squids
                for (var i=0; i<squids.length; i++) {
                  var s = 20, e = 160;
                  squids[i] = {
                    re: s + (Math.random()*e),
                    g:  s + (Math.random()*e),
                    b:  s + (Math.random()*e),
                    x: Math.random()*innerWidth, 
                    y: Math.random()*innerHeight, 
                    vx: (0.5-Math.random())/4,
                    vy: 0.1-Math.random(),
                    r: 10 + (Math.random()*40),
                    a: []
                  };
                }
                //create bubbles
                for (var i=0; i<bubbles.length; i++) {
                  bubbles[i] = {
                    x: Math.random()*innerWidth, 
                    y: Math.random()*innerHeight, 
                    vx: 0.5-Math.random(), 
                    vy: -0.2-Math.random(), 
                    o: 0.05 + Math.random()*0.1,
                    r: 3 + Math.random()*20
                  }; 
                }
                var limit = function (d) {
                  if (d.x<-d.r) d.x = innerWidth+d.r;
                  if (d.x>innerWidth+d.r) d.x = -d.r;
                  if (d.y<-d.r) d.y = innerHeight+d.r;
                  if (d.y>innerHeight+d.r) d.y = -d.r;
                };
                var animate = function () {
                  t++;
                  canvas.width = innerWidth;
                  canvas.height = innerHeight;
                  bubbles.forEach(function (b) {
                    b.x += b.vx;
                    b.y += b.vy;
                    limit(b);
                    ctx.fillStyle = 'rgba(255,255,255,'+b.o+')';
                    ctx.beginPath();
                    ctx.arc(b.x,b.y,b.r,Math.PI*2,0);
                    ctx.fill();
                  });
                  squids.forEach(function (d) {
                    var w = Math.sin((t+(d.r*100))/10);
                    d.x += d.vx*4; 
                    d.y -= w+1;
                    d.y += d.vy;
                    limit(d);
                    var color1 =  'rgba('+d.re+','+d.g+','+d.b+',0.4)';
                    var color2 =  'rgba('+d.re+','+d.g+','+d.b+',0.2)';
                    ctx.fillStyle = color1;
                    ctx.beginPath();
                    ctx.arc(d.x,d.y,d.r,Math.PI+(-0.5+d.vx)-(w/4),(0.5+d.vx)+(w/4));
                    ctx.fill();
                    d.a.push({x:d.x,y:d.y-(d.r*0.2)});
                    if (d.a.length > d.r*3) d.a.splice(0, 1);
                    d.a.forEach(function (p, i) {
                      ctx.fillStyle = color2;
                      ctx.fillRect(p.x,p.y,2,2);
                      if (i > d.a.length/2) {
                        ctx.fillRect(p.x-(d.r/4),p.y,2,2);
                        ctx.fillRect(p.x+(d.r/4),p.y,2,2);
                      }
                      if (i > d.a.length/3) {
                        ctx.fillRect(p.x+(d.r/10),p.y-10,2,2);
                        ctx.fillRect(p.x-(d.r/10),p.y-10,2,2);
                      }
                    });
                  });
                  requestAnimationFrame(animate);
                };
                animate();
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        background: linear-gradient(#2c76db,#031432);
        position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        background:#164280;
        border: none;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
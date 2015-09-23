// vue、director 相关初始化
var Vue = require('vue');
var Router = require('director').Router;
var router = new Router();
var default_route = 'home';

//调用Bmob模块
// var Bmob = require("bmob");
//初始化，第一个参数是Application_id，第二个参数是REST API Key
Bmob.initialize("1fda623a4434d099f6426fd9bc403f7a", "2fcecbe28d9c431e0383af6e34e28baa");

var app = new Vue(require('./views/app.vue'));

// 路由相关
function toRoute(route) {
    window.location.hash = route;
    app.view.current_route = route;
}
function toDefaultRoute() {
    toRoute(default_route);
}

app.routes.forEach(function (route) {
    router.on(route, function () {
       toRoute(route);
    });
});


router.configure({
    notfound: toDefaultRoute
});

router.init();
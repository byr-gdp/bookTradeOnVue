// vue、director 相关初始化

var Vue = require('vue');
var Router = require('director').Router;
var router = new Router();
var default_route = 'home';

var app = new Vue(require('./views/app.vue'));
// app 通过 app.vue 引入


// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Aloha!',

// 		view: {
// 			current_route: '',
// 			previous_route: ''
// 		},
// 		routes: ['home', 'about', 'blog']
// 	},
// 	components: {
// 		home: require('./home.vue'),
// 		about: require('./about.vue'),
// 		blog: require('./blog.vue')
// 	}
// })

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

// gameScore.set("score", 1337);
// gameScore.save(null, {
//   success: function(object) {
//     alert("create object success, object id:"+object.id);
//   },
//   error: function(model, error) {
//     alert("create object fail");
//   }
// });








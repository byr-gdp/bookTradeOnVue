<style>

</style>
<template>
	<div class="container app">
		<ul>
			<li v-repeat="routes" v-on="click: goTo($value)">{{$value}}</li>
		</ul>
		<div class="header">
			<span v-if="isLogin" class="pull-left">{{greeting}}</span>
			<span v-on="click: goTo('signup')" class="pull-right">注册</span>
			<span class="pull-right">/</span>
			<span v-on="click: goTo('login')" class="pull-right">登陆</span> 
			<span class="clearfix"></span>
		</div>
		<div v-component="{{view.current_route}}" class="clearfix"></div>
	</div>
</template>

<script>
module.exports = {
	el: '#app',
	data: {
		view: {
			current_route:  'home',
			previous_route: null,
		},
		routes: ['home', 'login', 'signup', 'setting'],
		isLogin: false,
		user: {
			username: '',
		}
	},
	computed: {
		greeting: function() {
			return this.user.username + "，欢迎您"
		}
	},
	components: {
		home:    require('./home.vue'),
		login:   require('./login.vue'),
		signup:  require('./signup.vue'),
		setting: require('./setting.vue')		
	},
	methods: {
		goTo: function(page) {
			this.view.current_route = page;
			window.location.hash = page;
		},
	}
}
</script>
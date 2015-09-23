<template>
	<ul>
		<li v-repeat="routes" v-on="click: goTo($value)">{{$value}}</li>
	</ul>
	<!-- <p>
		isLogin: {{isLogin}} |
		username: {{user.username}}
	</p> -->
	<div v-component="{{view.current_route}}"></div>
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
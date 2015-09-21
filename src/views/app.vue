<template>
	<ul>
		<li v-repeat="routes" v-on="click: goTo($value)">{{$value}}</li>
	</ul>

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
	},
	components: {
		home:    require('./home.vue'),
		login:   require('./login.vue'),
		signup:  require('./signup.vue'),
		setting: require('./setting.vue')		
	},
	methods: {
		goTo: function(page) {
			this.view.current_route_main = page;
			window.location.hash = page;
		},
	}
}
</script>
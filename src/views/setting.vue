<template>
	setting
	<ul>
		<li v-repeat="overlays" v-on="click: goTo($value)">{{$value}}</li>
	</ul>
	<div v-component="{{view.overlay}}"></div>
</template>
<script>
module.exports = {
	data: function() {
		return {
			view: {
				overlay: 'profile'
			},
			overlays: ['profile', 'manage']
		}
	},
	components: {
		profile: require('./_profile.vue'),
		manage:  require('./_manage.vue')
	},
	methods: {
		goTo: function(page) {
			this.view.overlay = page;
		}
	}
}
</script>
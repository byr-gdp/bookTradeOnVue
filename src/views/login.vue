<!-- 
	登陆存在一下问题需考虑并解决：
	1. 已登录状态选择登陆后应提示当前已登录，需要先退出。可能会用attach等方法

-->

<template>
	<div class="container login">
		<div class="row">
			<div class="col-md-4 col-md-offset-4 input-group">
				<span class="input-group-addon">用户名</span>
				<input type="text" class="form-control" v-model="username">
			</div>
		</div>	
		<br>
		<div class="row">	
			<div class="col-md-4 col-md-offset-4 input-group">
				<span class="input-group-addon">密码</span>
				<input type="password" class="form-control" v-model="password">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-4 col-md-offset-4 input-group">
				<button class="btn btn-success btn-block" v-on="click: login()">Log In</button>
			</div>
		</div>
	</div>
</template>
<script>
module.exports = {
	data: function() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login: function() {
			var that = this;
			var name = that.username;
			var pwd  = that.password;

			// to do
			// 验证输入合法性


			Bmob.User.logIn(name, pwd, {
				success: function(user) {
					// Do stuff after successful login.
					alert("login success");
					// console.info(JSON.stringify(user));

					// 登陆验证成功后，切换为“已登录状态”切跳转到首页
					// 这些方法可以提练出来
					that.$root.isLogin            = true;
					that.$root.user.username      = name;
					that.$root.view.current_route = 'home';
					window.location.hash          = 'home';

				},
				error: function(user, error) {
					// The login failed. Check error to see why.
					alert("login failed");
				}
			});
		}
	}
}
</script>
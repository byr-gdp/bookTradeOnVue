<style>
.signup {
	position: absolute;
	top: 40%;
}
</style>
<template>
	<div class="signup">
		<div class="row">
			<div class="col-md-4 col-md-offset-4 input-group">
				<span class="input-group-addon">用户名
				</span>
				<input type="text" class="form-control" v-model="username">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-4 col-md-offset-4 input-group">
				<span class="input-group-addon">
					密码
				</span>
				<input type="password" class="form-control" v-model="password">
			</div>
		</div>
		<br>	
		<div class="row">
			<div class="col-md-4 col-md-offset-4 input-group">
				<button class="btn btn-success btn-block" v-on="click: signup()">Sign Up</button>
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
		signup: function() {

			var that = this;
			var user = new Bmob.User();
			console.info('username:' + this.username + ' pwd:' + this.password);

			// to do
			// 此处应该验证输入的合法性



			user.set("username", this.username);
			user.set("password", this.password);

			// 暂时不考虑邮箱
			// user.set("email", "email@example.com");

			user.signUp(null, {
				success: function(user) {
					// Hooray! Let them use the app now.
					alert("success");

					// 注册成功后应该变为“已登录”状态切跳转到首页
					that.$root.isLogin = true;
					that.$root.user.username = that.username;
					that.$root.view.current_route = 'home';
					window.location.hash = 'home';

				},
				error: function(user, error) {
					// Show the error message somewhere and let the user try again.
					alert("Error: " + error.code + " " + error.message);
				}
			});
		}
	}
}
</script>
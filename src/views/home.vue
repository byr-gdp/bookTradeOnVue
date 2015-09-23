<template>
<div id="main" class="container">
  <div class="row">
	<div id="left" class="col-sm-6 col-lg-3">
	  <!-- 功能、新书 -->
	  <!-- <h3>功能区</h3> -->
	  <div class="fix">
	    <div class="function">
	      <div class="search input-group">
	        <span class="input-group-addon">搜索</span>
	        <input type="text" class="form-control" placeholder="请输入关键词">
	      </div>
	    </div> 
	    <hr>

	    <div class="new" >
	      <!-- <h4>发布二手书</h4> -->
	      <form>
	        <div class="input-group">
	          <span class="input-group-addon">书名</span>
	          <input type="text" class="form-control" v-model="newBook.bookname">
	          </div>
	        <br> 
	        <div class="input-group">
	          <span class="input-group-addon">描述</span>
	          <input type="textarea" class="form-control" v-model="newBook.desc">
	        </div>
	        <br>
	        <div class="input-group">
	          <span class="input-group-addon">学院</span>
	          <input type="text" class="form-control" v-model="newBook.academy">
	        </div>
	        <br>
	        <div class="input-group">
	          <span class="input-group-addon">价格</span>
	          <input type="number" class="form-control" v-model="newBook.price">
	        </div>
	        <br>
	        <div class="input-group">
	          <span class="input-group-addon">姓名</span>
	          <input type="text" class="form-control" v-model="newBook.seller">
	        </div>
	        <br>
	        <div class="input-group">
	          <span class="input-group-addon">电话</span>
	          <input type="tel" class="form-control" v-model="newBook.tel">
	        </div>
	        <br>
	        <div class="input-group">
	          <span class="input-group-addon">Q Q</span>
	          <input type="text" class="form-control" v-model="newBook.qq">
	        </div>
	       
	          <!-- <input type="hidden" v-model="newBook.id" value="0"> -->
	        <input type="hidden" value="0">
	        <br>
	        <input type="button" value="提交" class="btn btn-success btn-block" v-on="click: addNewBook()">
	        <!-- <button class="btn btn-success btn-block" v-on="click: addNewBook()">提交</button> -->
	      </form>
	    </div>
	  </div>
	</div>
	
	<!-- right part begin -->

	<div id="right" class="col-sm-6 col-lg-9">

	    <!-- 二手书详情 v－repeat -->

	    <!-- right part end-->
	</div>
  </div>
</div>	
</template>
<script>
module.exports = {
	data: function() {
		return {
			newBook: {
				bookname: '',
				desc:     '',
				price:    0,
				academy:  '',
				seller:   '',
				tel:      '',
				qq:       ''
			}
		}
	},
	methods: {
		addNewBook: function() {
			console.info('func addNewBook');
			var Book = Bmob.Object.extend("Book");
			var book = new Book();

			// TO DO
			// 保存前需验证数据

			// 添加数据，第一个入口参数是Json数据
			book.save(this.newBook, {
				success: function(gameScore) {
				// 添加成功
					alert("success");
				},
				error: function(gameScore, error) {
			    // 添加失败
			    	alert("failed");
			    }
			});
		},
	}
}
</script>

<style>
li {
	list-style: none;
}
#main #right .book-info-self {
	/*max-height: 2em;*/
}
#main #right .book-name {
	font-size: 20px;
}
#main #right .book-info-desc {
	/*border: 1px solid #ccc;*/
	max-height: 3em;
	/*min-height: 1em;*/
	height: 3em;
	overflow: scroll;
}

#main #right .book-info-seller {
	/*border: 1px solid #ccc;*/
	height:     1.5em;
	line-height: 1.5em;
	max-height: 1.5em;
	overflow:   scroll;
}
</style>

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
	        <!-- <div>
	      		<button class="btn btn-danger btn-block" v-on="click: getAllBooks()">query</button>
	        </div> -->
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
	          <input type="number" class="form-control" v-model="newBook.price" number>
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
		<ul>
            <li class="book col-md-4" v-repeat="book in books">
                <div class="panel panel-primary">
                	<div class="panel-heading">
                		<div class="panel-title">
                  		图书详情
                		</div>
                	</div>

	                <div class="panel-body">
						<p class="book-info-self">
							<span class="book-name">{{book.bookname}}</span>&nbsp&nbsp
		                    <span class="academy">{{book.academy}}</span>&nbsp&nbsp
		                    <span class="price">{{book.price}} 元</span>
						</p>
	                    <p class="book-info-desc">
	                    	{{book.desc}}
	                    </p>
	                    <p class="book-info-seller">
	                    	<span class="book-seller">{{book.seller}}</span>&nbsp&nbsp
		                    <!-- <span class="info">TEL&nbsp</span> -->
		                    <span class="book-tel">{{book.tel}}</span>&nbsp&nbsp
		                    <!-- <span class="info">QQ&nbsp</span> -->
		                    <span class="book-qq">{{book.qq}}</span>
	                    </p>
	                 
	                    <span class="text-muted pull-right">发布于 1 分钟前</span>
	                </div>
	            </div>
            </li>
        </ul> 
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
			},
			books: [],
			temp: '',
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
			    	alert("failed" + error.message);
			    }
			});
		},
		getAllBooks: function() {
			var that  = this;
			var Book  = Bmob.Object.extend("Book");
			var query = new Bmob.Query(Book);
			// 查询所有数据
			query.find({
			  	success: function(results) {
				    // alert("共查询到 " + results.length + " 条记录");
				    // 循环处理查询到的数据
			    	for (var i = 0; i < results.length; i++) {
			    		var object = results[i];

				    	// 从返回对象中取数据 
				    	that.books.push(new Object());
				    	that.books[i].bookname = object.get('bookname');
				    	that.books[i].price    = object.get('price');
				    	that.books[i].academy  = object.get('academy');
				    	that.books[i].desc     = object.get('desc');
				    	that.books[i].seller   = object.get('seller');
				    	that.books[i].tel      = object.get('tel');
				    	that.books[i].qq       = object.get('qq');
				    	// console.info(object.get('bookname'));
				      	// alert(object.id + ' - ' + object.get('bookname'));
			    	}
			  	},
			  	error: function(error) {
			    	alert("查询失败: " + error.code + " " + error.message);
			  	}
			});
		}
	},
	attached: function() {
		console.log('attached');
		this.getAllBooks();
	}
}
</script>
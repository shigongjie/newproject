require.config({
	baseUrl:"/",
	paths:{
		"jquery":"libs/jquery-1.12.4",
		"lunbo":"module/lunbo",
		"header":"module/header"
	},
	shim:{
		lunbo:{
			deps:["jquery"]
		},
//		header:{
//			deps:["jquery"]
//		}
	}
})

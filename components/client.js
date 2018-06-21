var sihem = [{mail : 'fs_bouhenniche@esi.dz',
pwd : '123'} ]
new Vue({
  el: '#clientSign',
	
		props : {
			email:{
        		type : String,
        		default : ''
        	},
    		password: {
      			type : String,
      			default : ''
    		},
    		show : {
    			type : Boolean,
    			default : false
    		}
		},
		
		methods:{
			provideInfo: function (event) {
				event.preventDefault();
			    console.log (sihem[0].mail == this.email+sihem[0].mail)
		    	if ((sihem[0].mail == this.email) && (sihem[0].pwd == this.password)) {
		    		this.show = false
		    		window.document.location.href='clientMsg.html';
		    	}else{
		    		this.show = true
		    	}
		    },
		    goforgot : function (argument) {
		    	window.document.location.href='forgot.html';
   		    }
		}


})



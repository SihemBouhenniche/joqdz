new Vue({
  el: '#clientSignup',
  data:{
  	name:'',
  	phone:0,
  	fax:0,
  	email:'',
  	adresse:'',
  	password:'',
  	passwordc:''
  },
  methods:{
  	goMsg(e){
  		e.preventDefault()
  		console.log('chahrazed')
  		window.document.location.href='clientMsg.html';
  	}
  	
  }
})
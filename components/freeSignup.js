new Vue({
  el: '#freeSignup',
  props:{
  	fname :{
      type : String,
      default : ''
    },
    lname :{
      type : String,
      default : ''
    },
    email :{
      type : String,
      default : ''
    },
    password :{
      type : String,
      default : ''
    },
    pwd :{
      type : String,
      default : ''
    },
    bth : {
      type : Date
    },
    skype :{
      type : String,
      default : ''
    },
  	phone:{
      type : Number,
      default : 0
    },
    photo ,
    adress : {
      type : String,
      default : ''
    },
  },
  methods:{
  	goMsg(e){
  		e.preventDefault()
  		console.log('chahrazed')
  		window.document.location.href='clientMsg.html';
  	},
    processFile(event) {
      this.photo = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#personelphoto')
                    .attr('src', e.target.result)
                    .width(200)
                    .height(180);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    },
    processFileid(event) {
      if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#idphoto')
                    .attr('src', e.target.result)
                    .width(200)
                    .height(180);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }   	
  }
})
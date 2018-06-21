
new Vue({
  el: '#forgot',
  props: {
    email:{
        type : String,
        default : ''
     },
    code: {
      type : String,
      default : ''
    }
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods : {
    provideInfo: function (event) {
      console.log(this.email + this.code)
      var tab = new Array();
      tab.push(this.email)
      tab.push(this.code)
      console.log(tab)
      return tab
    }
  } ,

})


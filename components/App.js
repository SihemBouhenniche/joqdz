new Vue({
  el: '#app',
  props: {
      show:{
        type : Boolean,
        default : true
      },
      clientShow: {
        type : Boolean,
        default : false
      },
      freeShow: {
        type : Boolean,
        default : false
      }
    },
  data : {
    tabContent : [

  { ID : 'about', 
    title : 'About Us', 
    description : 'JOQ is an IT startup with a new vision of freelancing in Algeria, it will play a dual role since it will be an IT company for service seekers and a client for free lancers. This approach comes to solve the usual problems in the business / free throw relationship' , 
    color : '#F0EDE5',
    right : false,
    linkImg : ['img/about-image.jpg','img/about-image-2.jpg']
  },
  {
    ID : 'how', 
    title : 'How It Works', 
    description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color : '#B4B7BA',
    right : true,
    linkImg : ['img/client.PNG','img/joqer.PNG']}
  ]
  },
  methods:{
    goClient : function (argument) {
      window.document.location.href='html/clientSignin.html';
    },

    goFree : function (argument) {
      window.document.location.href='html/freelancerSignin.html';
    }
  }
})

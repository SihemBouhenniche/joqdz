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
    description : 'It s easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes. Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more). With secure payments and thousands of reviewed professionals to choose from, JOQdz is the simplest and safest way to get work done online.',
    color : '#B4B7BA',
    right : true,
    linkImg : ['img/client.png','img/joqer.png']}
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

<template>
  <div class="container">
    <Header @show-task="showtask" @delete-all="deleteall" title="hello" :showaddtask="showaddtask"/>
    <router-view :showaddtask="showaddtask" :delete-all="deleteall"></router-view>
    <Footer/>
  </div>
</template>
 
<script>
import Header from './components/header'
import Footer from './components/footer'
import Home from './views/home'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
  },
  data(){
    return{  
      tasks: [],
      showaddtask: false
    }
  },
  methods:{

    showtask(){
      this.showaddtask = !this.showaddtask
    },
    deleteall(){
      if(confirm('Do you want to delete all tasks')){
        this.tasks = ''
      }
    }
  },
 
}

</script>
<style>
*{
  text-transform: capitalize;
}
#app {
  padding: 20px;
  border: 1px solid black;
  margin-left: 25%;
  width: 40%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

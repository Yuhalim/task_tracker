<template>
  <div v-show="showaddtask">
      <Addtask @add-task="addtask"/>

    </div>
    <Tasks
     @toggle-reminder="toggleReminder" 
     @delete-task="deleteTask" 
     :tasks="tasks" />
</template>
<script>
import Tasks from '../components/tasks'
import Addtask from '../components/addtask'
export default{
    name: 'Home',
    props:{
        showaddtask: Boolean,
    },
    components: {
        Tasks,
        Addtask,
    },
    data(){
        return{
            tasks:[]
        }
    },
    methods:{
    deletetask(){
      if(confirm('Do you want to delete all tasks')){
        this.tasks = ''
      }
    },
    showtask(){
      this.showaddtask = !this.showaddtask
    },
    async addtask(task){
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id){
      if(confirm('Are you sure you want to remove task?')){
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status ===200 ? (this.tasks = this.tasks.filter((task) => task.id !==id)) : alert('Error deleting task')

      }
    },
    async toggleReminder(id){
      const tasktoggle = await this.fetchtask(id)
      const update = {...tasktoggle, reminder:!tasktoggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(update)
      })
      const data = await res.json()

      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task)
    },
    async fetchtasks(){
      const res = await fetch('api/tasks');

      const data = await res.json();
      return data
    },
    async fetchtask(id){
      const res = await fetch(`api/tasks/${id}`)
      
      const data = await res.json()
      return data
    },
  },
  async created(){
    this.tasks = await this.fetchtasks()
    
  //   [{
  //     id:1, 
  //     text: 'doctors Appointment',
  //     day: 'December 1st at 2: 30pm',
  //     reminder: true,
  //   },
  //   {
  //     id:2, 
  //     text: 'Meeting at school',
  //     day: 'april 31st at 1: 00pm',
  //     reminder: true,
  //   },
  //   {
  //     id: 3, 
  //     text: 'shopping',
  //     day: 'December 15th at 10: 30am',
  //     reminder: false,
  //   },
  // ]
  },
}
</script>
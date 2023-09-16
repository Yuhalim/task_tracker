<template>
    <form @submit="onsubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" v-model="text" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label>Day and Time</label>
            <input type="text" name="day" v-model="day" placeholder="Add Day and Time">
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>

        <input type="submit" value="Save task" class="btn btn-block">

    </form>
</template>
<script>
export default{
    name: 'Addtask',
    data(){
        return{
            text: '',
            day: '',
            reminder: false,
        }
    },
    methods:{
        onsubmit(e){
            e.preventDefault();
            
            if(!this.text){
                alert('Please add a task')
                return
            }

            const newtask = {
                // id: Math.floor(Math.random() * 1000000),
                text: this.text,
                day: this.day,
                reminder: this.reminder,
            }
            this.$emit('add-task', newtask)
            this.text = ''
            this.day = ''
            this.reminder = false
        }
    }
}
</script>

<style>
    .add-form{
        text-align: left;
        margin-bottom: 40px;
    }
    .add-form .form-control{
        margin: 20px 0;
    }
    .form-control{
        margin: 15px 0;
    }
    .form-control label{
        display: block;
    }
    .form-control input{
        width: 95%;
        height: 30px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;

    }
    .form-control-check{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .form-control-check label{
        flex: 1;
    }
    .form-control-check input{
        flex: 2;
        height: 20px; 
    }
    .btn-block{
        width: 100%;
        height: 40px;
        text-align: center;
        padding: 3px;
        background: black;
        color: white;
        font-size: 17px;
        border-radius: 5px;
    }
</style>
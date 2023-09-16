<template>
    <header>
        <h1>{{title}} {{firstname}}</h1>
        <Button @btn-click="$emit('show-task')" :color="showaddtask ? 'red' : 'green'" :text="showaddtask ? 'Close' : 'Add Task'" />
        <!-- <Button color="red" text="update task"/> -->
        <!-- <Button @click="$emit('delete-all')" color="red" text="delete tasks"/> -->

    </header>
</template>

<script>

import Button from './button.vue'
export default{
    name: 'Header',
    props:{
        title: String,
        showaddtask: Boolean
    },
    components: {
        Button,
    },
    data(){
        return{
            firstname: 'halim',
        }
    }
}
</script>
<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    header h1{
        font-weight: bold;
    }
</style>

<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : 'error', 'task']">
        <h3 id="h3">{{ task.text }}
            <i @click="$emit('delete-task', task.id)" class="fa fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>
<script>
export default{
    name: 'Task',
    props:{
        task: Object
    },

}
</script>

<style scoped>
.fa{
    display: block;
    color: red;
}
.task{
    background: #f4f4f4;
    text-align: left;
    margin: 5px 0px;
    padding: 10px 20px;
    cursor: pointer;
}
.task.reminder{
    border-left: 5px solid green;
}
.task.error{
    border-left: 5px solid red;
}
.task h3{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task p{
    padding: 0 10px;
}

</style>
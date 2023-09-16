<template>
     <button id="button" @click="onclick()" :style="{background:color}">{{ text }}</button>
</template>


<script>
export default{
    name: 'Button', 
    props:{
        text: String,
        color: String,
    },
    methods:{
        onclick(){
            this.$emit('btn-click')
        },
    }
}
</script>
<style scoped>
button{
    padding: 15px;
    color: white;
    background: transparent;
    width: 100px;
    font-size: 20px;
    border-radius: 10px;
    border-style: none;
}
</style>
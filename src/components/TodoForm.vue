<template>
  <form v-on:submit.prevent="store.addTodo">
        Item: 
        <input type="text" v-model="store.newTodo.item">
        <br>
        Complete? 
        <input type="checkbox" v-model="store.newTodo.isComplete"> 
        <br>
        <input type="submit" value="Add To-do">
    </form>
</template>

<script setup>
import {useTodoStore} from '@/stores/todo.js'

const store = useTodoStore(); 

//below statements removed when moving to the pinia store 
//import { reactive } from 'vue'
// const newTodo = reactive({})

</script>

<style>

</style>
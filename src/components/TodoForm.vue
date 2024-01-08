<template>
  <form v-on:submit.prevent="$emit('addTodo', newTodo)">
        Item: 
        <input type="text" v-model="newTodo.item">
        <br>
        Complete? 
        <input type="checkbox" v-model="newTodo.isComplete"> 
        <br>
        <input type="submit" value="Add To-do">
    </form>
</template>

<script setup>
import { reactive } from 'vue'
const newTodo = reactive({})

</script>

<style>

</style>
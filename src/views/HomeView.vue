<template>
    <h1>This is the home page</h1>
    <select v-model="store.currentCatId">
      <option v-for="cat in store.cats" v-bind:key="cat.id" v-bind:value="cat.id">
        {{ cat.name }}
      </option>
    </select>
    <todo-list/>
</template>

<script setup>
import TodoList from '@/components/TodoList.vue'
import {useTodoStore} from '@/stores/todo.js'

const store = useTodoStore();
</script>

<style>

</style>

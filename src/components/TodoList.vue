<template>
    <h1>{{store.currentCat.name}}'s To-Do List</h1>

    <ul>
        <li v-for="todo in store.todos" v-bind:key="todo.id"
            v-bind:class="{completed: todo.isComplete}">
            <input type="checkbox" v-model="todo.isComplete">
            {{ todo.item }} <span v-show="todo.isComplete">COMPLETE</span>
        </li>
    </ul>

    <p>Todos Completed: {{  store.todosComplete }}</p>
    <p>Todos Left: {{ store.todosIncomplete }}</p>

    <todo-form/>
    <!-- <form v-on:submit.prevent="addTodo">
        Item: 
        <input type="text" v-model="newTodo.item">
        <br>
        Complete? 
        <input type="checkbox" v-model="newTodo.isComplete"> 
        <br>
        <input type="submit" value="Add To-do">
    </form> -->

</template>

<script setup>
// import { ref, reactive, computed } from 'vue' - commented out on moving everything to the pinia store 
import TodoForm from '@/components/TodoForm.vue'
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore(); 

//all of this has been moved to the pinia store! 

// const todos = reactive([
//                 {
//                     id: 1,
//                     item: "Put my dirty litterbox paw in Momther's food", 
//                     isComplete: false
//                 },
//                 {
//                     id: 2,
//                     item: "Roll around on Father's black pants", 
//                     isComplete: false
//                 },
//                 {
//                     id: 3,
//                     item: "Trigger the Litter Robot to cycle for no reason", 
//                     isComplete: false
//                 },
//                 {
//                     id: 4,
//                     item: "Open all the closet doors and have a look", 
//                     isComplete: false
//                 }
// ])

// const newTodo = reactive({}) -> moved to TodoForm.vue
// const currentTodoId = ref(5) 

// const todosComplete = computed(() => {
//     return todos.filter((todo) => {
//                 return todo.isComplete
//             }).length;
// }) 

// const todosIncomplete = computed(() => {
//     return todos.filter((todo) => {
//                 return !todo.isComplete
//             }).length;
// }) 

// function addTodo(newTodo) { 
//     let add = {...newTodo}
//     add.id = currentTodoId;
//     todos.push(add);
//     newTodo.id = undefined; 
//     newTodo.item = ''; 
//     newTodo.isComplete = false;
//     currentTodoId.value++;

// }

// export default {
//     data() { 
//         return { 
//             todos: [
//                 {
//                     id: 1,
//                     item: "Put my dirty litterbox paw in Momther's food", 
//                     isComplete: false
//                 },
//                 {
//                     id: 2,
//                     item: "Roll around on Father's black pants", 
//                     isComplete: false
//                 },
//                 {
//                     id: 3,
//                     item: "Trigger the Litter Robot to cycle for no reason", 
//                     isComplete: false
//                 },
//                 {
//                     id: 4,
//                     item: "Open all the closet doors and have a look", 
//                     isComplete: false
//                 }
//             ],
//             currentTodoId: 5,
//             newTodo: {}
//         }
//     },
    // computed: { 
    //     todosComplete() { 
    //         return this.todos.filter((todo) => {
    //             return todo.isComplete
    //         }).length;
    //     },
    //     todosInComplete() { 
    //         return this.todos.filter((todo) => {
    //             return !todo.isComplete
    //         }).length;
    //     }
    // },
//     methods: { 
//         addTodo() { 
//             this.newTodo.id = this.currentTodoId; 
//             this.todos.push(this.newTodo); 
//             this.newTodo = {}; 
//             this.currentTodoId++; 
//         }
//     }
// }
</script>

<style>
    li { 
        list-style-type: none;
    }
    
    .completed { 
        color: hotpink;
    }
</style>
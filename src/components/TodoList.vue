<template>
    <h1>Zenith's To-Do List</h1>

    <ul>
        <li v-for="todo in todos" v-bind:key="todo.id"
            v-bind:class="{completed: todo.isComplete}">
            <input type="checkbox" v-model="todo.isComplete">
            {{ todo.item }}
        </li>
    </ul>

    <p>Todos Completed: {{  todosComplete }}</p>
    <p>Todos Left: {{ todosInComplete }}</p>

    <form v-on:submit.prevent="addTodo">
        Item: 
        <input type="text" v-model="newTodo.item">
        <br>
        Complete? 
        <input type="checkbox" v-model="newTodo.isComplete"> 
        <br>
        <input type="submit" value="Add To-do">
    </form>

</template>

<script>
export default {
    data() { 
        return { 
            todos: [
                {
                    id: 1,
                    item: "Put my dirty litterbox paw in Momther's food", 
                    isComplete: false
                },
                {
                    id: 2,
                    item: "Roll around on Father's black pants", 
                    isComplete: false
                },
                {
                    id: 3,
                    item: "Trigger the Litter Robot to cycle for no reason", 
                    isComplete: false
                },
                {
                    id: 4,
                    item: "Open all the closet doors and have a look", 
                    isComplete: false
                }
            ],
            currentTodoId: 5,
            newTodo: {}
        }
    },
    computed: { 
        todosComplete() { 
            return this.todos.filter((todo) => {
                return todo.isComplete
            }).length;
        },
        todosInComplete() { 
            return this.todos.filter((todo) => {
                return !todo.isComplete
            }).length;
        }
    },
    methods: { 
        addTodo() { 
            this.newTodo.id = this.currentTodoId; 
            this.todos.push(this.newTodo); 
            this.newTodo = {}; 
            this.currentTodoId++; 
        }
    }
}
</script>

<style>
    li { 
        list-style-type: none;
    }
    
    .completed { 
        color: hotpink;
    }
</style>
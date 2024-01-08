import { defineStore } from 'pinia'

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [
      {
        id: 1,
        item: "Put my dirty litterbox paw in Momther's food",
        isComplete: false,
      },
      {
        id: 2,
        item: "Roll around on Father's black pants",
        isComplete: false,
      },
      {
        id: 3,
        item: "Trigger the Litter Robot to cycle for no reason",
        isComplete: false,
      },
      {
        id: 4,
        item: "Open all the closet doors and have a look",
        isComplete: false,
      },
    ],
    currentTodoId: 5,
    newTodo: {},
  }),
  getters: {
    todosComplete(state) {
      return state.todos.filter((todo) => {
        return todo.isComplete;
      }).length;
    },

    todosIncomplete(state) {
      return state.todos.filter((todo) => {
        return !todo.isComplete;
      }).length;
    },
  },
  actions: {
    addTodo() { 
      let add = {...this.newTodo}
      add.id = this.currentTodoId;
      this.todos.push(add);
      this.newTodo.id = undefined; 
      this.newTodo.item = ''; 
      this.newTodo.isComplete = false;
      this.currentTodoId++;
  
    }

  },
});

//this is an options-style store
//for setup stores, 
//see https://pinia.vuejs.org/core-concepts/#Setup-Stores
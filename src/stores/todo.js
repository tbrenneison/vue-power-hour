import { defineStore } from 'pinia'

export const useTodoStore = defineStore("todo", {
  state: () => ({
    cats: [
      {
        id: 1, 
        name: 'Zenith', 
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
          }
        ]
      },
      {
        id: 2, 
        name: 'Philco', 
        todos: [
          {
            id: 5,
            item: "SCREM",
            isComplete: true,
          },
          {
            id: 6,
            item: "LiCk",
            isComplete: false,
          },
          {
            id: 7,
            item: "on on on on on on on on on on on",
            isComplete: false,
          },
          {
            id: 8,
            item: "brrrrrrrrrrrrt",
            isComplete: false,
          }
        ]
      }
    ],
    // todos: [
    //   {
    //     id: 1,
    //     item: "Put my dirty litterbox paw in Momther's food",
    //     isComplete: false,
    //   },
    //   {
    //     id: 2,
    //     item: "Roll around on Father's black pants",
    //     isComplete: false,
    //   },
    //   {
    //     id: 3,
    //     item: "Trigger the Litter Robot to cycle for no reason",
    //     isComplete: false,
    //   },
    //   {
    //     id: 4,
    //     item: "Open all the closet doors and have a look",
    //     isComplete: false,
    //   },
    // ],
    currentTodoId: 5,
    newTodo: {},
    currentCatId: 1
  }),
  getters: {
    currentCat(state) {
      return state.cats.filter((cat)=> {return cat.id==state.currentCatId })[0];
    },
    todos() { 
      return this.currentCat.todos;
    },
    todosComplete() {
      return this.currentCat .todos.filter((todo) => {
        return todo.isComplete;
      }).length;
    },
    todosIncomplete() {
      return this.currentCat.todos.filter((todo) => {
        return !todo.isComplete;
      }).length;
    },
  },
  actions: {
    addTodo() { 
      let add = {...this.newTodo}
      add.id = this.currentTodoId;
      this.currentCat.todos.push(add);
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
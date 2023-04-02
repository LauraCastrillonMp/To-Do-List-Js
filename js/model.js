// Data storage for web navegator client
export default class Model {
    constructor() {
        this.view = null;
        this.toDos = []; // Super Database
        this.currentId = 1;
    }

    setView(view) {
        this.view = view;
    }

    getToDos() { // Obtain all To Do
        return this.toDos;
    }

    findToDo(id) { // Find id of the task to manipulate
        return this.toDos.findIndex((toDo) => toDo.id === id);
    }

    taskCompleted(id) {
        const index = this.findToDo(id);
        const toDo = this.toDos[index];
        toDo.completed = !toDo.completed;
        console.log(this.toDos);
    }

    addToDo(title, description) { // Receive To Do
        const toDo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }

        this.toDos.push(toDo);
        console.log(this.toDos);

        // Clon of object: toDo
        return {...toDo}; // return Object.assign({}, toDo);
    }

    removeToDo(id) {
        const index = this.findToDo(id);
        this.toDos.splice(index, 1); // Index, from that index how many elements I want to delete
    }
}
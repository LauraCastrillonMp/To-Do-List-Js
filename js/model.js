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
        const index = this.toDos.findIndex((toDo) => toDo.id === id);
        this.toDos.splice(index, 1); // Index, from that index how many elements I want to delete
    }
}
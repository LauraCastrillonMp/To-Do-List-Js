// Data storage for web navegator client
export default class Model {
    constructor() {
        this.view = null;
        this.toDos = JSON.parse(localStorage.getItem('toDos')); // Super Database
        if (!this.toDos || this.toDos.length < 1) { // List of tasks empty or null
            this.toDos = [{
                id: 0,
                title: 'JS',
                description: 'JS Practice',
                completed: false
            }];
            this.currentId = 1;
        } else {
            this.currentId = this.toDos[this.toDos.length -1].id + 1;
        }
    }

    setView(view) {
        this.view = view;
    }

    save() {
        // JSON: Object notation(string)
        localStorage.setItem('toDos', JSON.stringify(this.toDos));
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
        this.save();
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

        this.save(); // Save toDos in the local storage
        // Clon of object: toDo
        return {...toDo}; // return Object.assign({}, toDo);
    }

    removeToDo(id) {
        const index = this.findToDo(id);
        this.toDos.splice(index, 1); // Index, from that index how many elements I want to delete
        this.save();
    }
}
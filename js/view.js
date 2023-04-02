// this view/file will handle the table
import AddToDo from "./components/addToDo.js";
export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addToDoForm = new AddToDo();
        
        this.addToDoForm.onClick((title, description) => this.addToDo(title, description));
    }

    setModel(model) { // Obtaining the model for manipulation
        this.model = model;
    }

    render() { // Store tasks visually
        const toDos = this.model.getToDos();
        toDos.forEach(toDo => this.createRow(toDo));
    }

    addToDo(title, description) {
        const toDo = this.model.addToDo(title, description);
        this.createRow(toDo);
    }

    taskCompleted(id) {
        this.model.taskCompleted(id);
    }

    removeToDo(id) {
        this.model.removeToDo(id);
        document.getElementById(id).remove();
    }

    createRow(toDo) {
        const row = table.insertRow();
        row.setAttribute('id', toDo.id)
        row.innerHTML = `
            <td>${toDo.title}</td>
            <td>${toDo.description}</td>
            <td class="text-center"></td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = toDo.completed;
        checkbox.onclick = () => this.taskCompleted(toDo.id);
        row.children[2].appendChild(checkbox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeToDo(toDo.id);
        row.children[3].appendChild(removeBtn);
    }
}
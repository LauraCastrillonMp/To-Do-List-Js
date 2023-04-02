// Add things 
export default class AddToDo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback) { // Callback: function to be received and executed after
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
                // alert.innerText = 'Title and Description are required';
                console.error('Incorrect');
            } else {
                callback(this.title.value, this.description.value);
            }
        }
    }
}
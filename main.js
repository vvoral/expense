function addExpense(e) {
    var items = JSON.parse(localStorage.getItem("myObj")) || [];

    e.preventDefault();

    let item = {
        date: document.getElementById('date').value,
        place: document.getElementById('place').value,
        price: parseInt(document.getElementById('price').value),
    };

    items.push(item);
    localStorage.setItem('myObj', JSON.stringify(items));
    submitForm.reset()

    updateTable()

}

function updateTable() {
    var items = JSON.parse(localStorage.getItem("myObj")) || [];
    let sum = items.map(item => item.price).reduce((prev, next) => prev + next, 0);

    let getClass = document.querySelector(".test");
    let total = document.getElementById("total");
    getClass.innerHTML = items.map(item =>
        `<tr>
            <td>${item.date}</td>
            <td>${item.place}</td>
            <td>${item.price}</td>
        </tr> 
        `
    ).join('');

    total.innerHTML = `${sum}`;
}

// Remove current items from localStorage
let getClass = document.querySelector(".test");
let removeBtn = document.getElementById("remove");
removeBtn.addEventListener('click', removeLocalStorage);

function removeLocalStorage () {
    localStorage.clear();
    getClass.remove()
}

let submitForm = document.getElementById("id1");
submitForm.addEventListener('submit', addExpense);


window.onload = function(){
    updateTable()
}
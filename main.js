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
    submitForm.reset();

    updateTable()
    scrollToBottom()

}

function updateTable() {
    var items = JSON.parse(localStorage.getItem("myObj")) || [];
    let sum = items.map(item => item.price).reduce((prev, next) => prev + next, 0);

    let getClass = document.querySelector(".table-result");
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
let removeBtn = document.getElementById("remove");
removeBtn.addEventListener('click', removeLocalStorage);

function removeLocalStorage () {
    localStorage.clear();
    window.location.reload();
}

let submitForm = document.getElementById("id1");
submitForm.addEventListener('submit', addExpense);

function scrollToBottom() {

    rows = document.querySelectorAll(".table-result tr");
    last = rows[rows.length-1];

    last.scrollIntoView({
        behavior: "smooth"
    })
}

window.onload = function(){
    updateTable()
}
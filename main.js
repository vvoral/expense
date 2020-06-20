var items = JSON.parse(localStorage.getItem("myObj")) || []

function giveMeData() {
    boxvalue = document.getElementById('box').value;
    items.push({name: boxvalue});

    localStorage.setItem('myObj', JSON.stringify(items));
}

let getClass = document.querySelector(".test");

let removeBtn = document.getElementById("remove");

removeBtn.addEventListener('click', removeLocalStorage)

function removeLocalStorage () {
    localStorage.clear();
}

getClass.innerHTML = items.map(item =>
    `<tr>
        <td>${item.name}</td>
      </tr>             `
).join('');
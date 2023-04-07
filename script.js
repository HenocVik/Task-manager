
var tasks = JSON.parse(localStorage.getItem('tasks'));
var tbody = document.querySelector('tbody');
var line = '';
var ind = '';
tasks.forEach((element, index) => {

    line += '<tr id="' + index + '"><th scope="row">' + (index + 1) + '</th>  <td>' + element.titre + '</td> <td>' + element.description + '</td>  <td>' + element.completed + '</td>   <td> <button type="button" class="btn btn-outline-success" onclick="finish(' + index + ')">Marquer comme fini</button> <button type="button" onclick="deletetask(' + index + ')" class="btn btn-outline-danger">Supprimer</button>   </tr > ';
    ind = index + 2;
});
tbody.innerHTML = line;


var showform = document.querySelector('#addtask');
var formdiv = document.querySelector("#form");


var form = document.querySelector('form');

var showandhide = 'none';
var submit = document.querySelector("#submit")

showform.addEventListener('click', function (e) {
    if (showandhide == 'none') {
        showandhide = 'block';
        console.log(form);

    }
    else {
        showandhide = 'none';
    }
    formdiv.style.display = showandhide;
})

submit.addEventListener('click', function (e) {

    e.preventDefault();
    var title = document.getElementById('title');
    var description = document.getElementById('description');


    if (title.value == '' || description.value == '') {
        if (title.value == '') {
            title.style.borderColor = 'red'
        } else { title.style.borderColor = 'green' }
        if (description.value == '') {
            description.style.borderColor = 'red'
        } else { description.style.borderColor = 'green' }
    }
    else {
        var titleval = title.value;
        var descvalue = description.value;
        if (!tasks) { tasks = []; }
        var task = { "titre": titleval, "description": descvalue, "completed": false }

        tasks.push(task);
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        line = '<tr id="' + (ind - 1) + '"><th scope="row">' + (ind) + '</th>  <td>' + titleval + '</td> <td>' + descvalue + '</td>  <td>false</td>   <td> <button type="button" class="btn btn-outline-success" onclick="finish(' + (ind - 1) + ')">Marquer comme fini</button> <button type="button" onclick="deletetask(' + (ind - 1) + ')" class="btn btn-outline-danger">Supprimer</button>   </tr > ';
        tbody.innerHTML += line;


    }

});


function deletetask(id) {
    tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    line = document.getElementById(id);
    line.innerHTML = '';
}

function finish(id) {
    var task = tasks[id];
    task.completed = true;
    tasks[id] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    line = document.getElementById(id);
    line.innerHTML = '<tr id="' + id + '"><th scope="row">' + (id + 1) + '</th>  <td>' + task.titre + '</td> <td>' + task.description + '</td>  <td>' + task.completed + '</td>   <td> <button type="button" class="btn btn-outline-success" onclick="finish(' + id + ')">Marquer comme fini</button> <button type="button" onclick="deletetask(' + id + ')" class="btn btn-outline-danger">Supprimer</button>   </tr > ';


    // line.innerHTML = '';
}

var filtersign = true;
function filter() {

    const filteredArr = tasks.filter((task) => {
        return task.completed == filtersign;
    });
    filtersign = !filtersign;
    console.log(filteredArr);
    var linef = null;
    filteredArr.forEach((element, index) => {
        linef += '<tr id="' + index + '"><th scope="row">' + (index + 1) + '</th>  <td>' + element.titre + '</td> <td>' + element.description + '</td>  <td>' + element.completed + '</td>   <td> <button type="button" class="btn btn-outline-success" onclick="finish(' + index + ')">Marquer comme fini</button> <button type="button" onclick="deletetask(' + index + ')" class="btn btn-outline-danger">Supprimer</button>   </tr > ';
    });
    tbody.innerHTML = linef;
}

var fitlterd = document.getElementById('filter');
console.log(fitlterd);
fitlterd.addEventListener('click', filter);


//<button type = "button" class="btn btn-outline-warning"> Editer</button ></td >
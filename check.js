let emp = [
    {
        "name": "sumit",
        "age": 27
    }, {
        "name": "ram",
        "age": 18
    }
    , {
        "name": "monu",
        "age": 28
    }, {
        "name": "shyam",
        "age": 16
    }

]

const fil = emp.filter((emp)=>(emp.age<26)).map((fil)=> create(fil.name,fil.age))

function create(name,age){
const h2 = document.createElement("h2")
const maindiv = document.querySelector("#print")
h2.innerHTML = "name is "+ name + "&" + "age is "+ age
maindiv.appendChild(h2)
}

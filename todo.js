
document.querySelector("#submit").addEventListener('click',function(){
    const input = document.querySelector("#uInput").value

    if(input){
        createList(input)

    }else{ alert("enter text")}
})

document.querySelector("form").addEventListener('submit',function(e){
    e.preventDefault()
})

function createList(todo){
    let completed = 0;
    const div = document.createElement("div")
    div.className="divTo"
    const h2 = document.createElement("h2")
    h2.className="h2"
    const checkB = document.createElement("input")
    checkB.setAttribute('type','checkbox')
    checkB.className="checkB"
    checkB.addEventListener('click',function(){
        if(checkB.checked==true){
            h2.style.textDecoration="Line-through"
            h2.style.color="grey"
           
        }else{
            h2.style.textDecoration="none"
            h2.style.color="rgb(65, 62, 62)"
        }
            
        
    })
    
    h2.innerHTML=todo
    const btnDelete = document.createElement("button")
    btnDelete.className="btnDelete"
    btnDelete.innerHTML="&#x2718"
    btnDelete.addEventListener('click', function(e){
        let removeIt = e.target.parentNode
        removeIt.remove()
    })
    div.appendChild(checkB)
    div.appendChild(h2)
    div.appendChild(btnDelete)
    const mainDiv = document.querySelector("#todoList")
    mainDiv.appendChild(div)
}
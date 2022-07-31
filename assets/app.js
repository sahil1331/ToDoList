const addForm= document.querySelector('.add');
const list=document.querySelector('.todos');

const generateTemplate=(todo)=>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    
    `;


    list.innerHTML += html;
}

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    console.log(todo)

    if(todo.length>0){
        if(todo.length<=47){
            generateTemplate(todo);
            addForm.reset();
        }
        else{
            alert('Todo too large')
        }
    }
    else{
        alert('Todo cannot be empty')
    }
 
})


const addForm= document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');


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

//delete todos

list.addEventListener('click',(e)=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
})

const filterTodos=(term)=>{
    console.log(term)

    //add filter(hide item) class to list which do not match term
    Array.from(list.children)
        .filter((eachtodo)=>{
            // console.log(eachtodo.textContent.includes(term));
            return !eachtodo.textContent.toLowerCase().includes(term); 
        })
        .forEach((eachtodo)=>{
            eachtodo.classList.add('filtered');
        })

    //add show(show item) class to list which match term

    Array.from(list.children)
        .filter((eachtodo)=>{
            // console.log(eachtodo.textContent.includes(term));
            return eachtodo.textContent.toLowerCase().includes(term); 
        })
        .forEach((eachtodo)=>{
            eachtodo.classList.remove('filtered');
        })
}


//keyup event
search.addEventListener('keyup',(e)=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
})
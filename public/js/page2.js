let input_2 = document.querySelector("#input-text-p2");
let btn_2 = document.querySelectorAll("#btn-ajouter-p2");
let todo_box = document.querySelector(".todo");
let colonnes =document.querySelectorAll("#colonnes");
let all_text_input = [];
console.log(btn_2);
// * creer paraghraphe
for (let index = 0; index < btn_2.length; index++) {
    let element_2 = btn_2[index];
    const addin2 = () => {
        let value_2 = input_2.value;
        all_text_input.push(value_2);
        input_2.value = "";
        let div = document.createElement("div")
        div.innerHTML = `<div class="test_2">
    <p class="p-text-2">${value_2}</p>
    <i class="fa-solid fa-pen fa-lg modif-2" style="color: #005cfa;"></i>
    <i class="fa-solid fa-xmark fa-xl supprm-2" style="color: #f01000;"></i>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split drop-btn" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
    </button>
    </div>`
        todo_box.appendChild(div)
    }
    element_2.addEventListener("click", addin2);
}

//* function icons et select
todo_box.addEventListener("click",(element)=>{
        //! pour supprimer
    if(element.target.classList.contains("supprm-2"))
    {
    let content =element.target.parentElement;
    content.remove();
    all_text_input.push(content);
    }
    //! pour modifier
    if(element.target.classList.contains("modif-2"))
    {
    let para_p2 =element.target.previousElementSibling;
            let ask =confirm(`do you want to change this text`);
            if (ask == true) {
                let change =prompt(`change your text`);
                para_p2.textContent= change;
                all_text_input.push(content);
                console.log(all_text_input);
            }
    }
});

//* select


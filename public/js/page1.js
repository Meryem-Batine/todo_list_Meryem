let div_parent = document.querySelector(".div-parent");
let text_input = document.querySelector("#input-text");
let add_btn = document.querySelectorAll("#btn-ajouter");
let box = document.querySelector(".boite");
let select = document.querySelectorAll("#select");
let all_select = document.querySelector("#all-select");
let select_1 = document.querySelector("#select1");
let select_2 = document.querySelector("#select2");
let all_text = [];
console.log(div_parent);

// * creer paraghraphe
for (let index = 0; index < add_btn.length; index++) {
    let element = add_btn[index];
    const add = () => {
        let vlu =text_input.value;
        text_input.value = "";
        let div = document.createElement("div")
        div.innerHTML = `        <div class="test">
    <p class="p-text">${vlu}</p>
    <i class="fa-solid fa-pen fa-lg modif" style="color: #005cfa;"></i>
    <i class="fa-solid fa-check fa-xl valide" style="color: #09ae0c;"></i>
    <i class="fa-solid fa-xmark fa-xl supprm" style="color: #f01000;"></i>
    </div>`
        box.appendChild(div)
        box.appendChild(i);
        box.appendChild(supp);
        box.appendChild(mod);
        i.addEventListener("click", () => {
            div.textContent.style.color = "green"
        })
        supp.addEventListener("click", () => {
            div.remove();
            i.remove();
            supp.remove();
            mod.remove();
        })
        mod.addEventListener("click", () => {
            let ask = confirm(`do you want to change this text`);
            if (ask == true) {
                let change = prompt(`change your text`);
                div.textContent = change;
            }
        })
        if (text_input.value = "") {
            alert("no");
        }
    }
    element.addEventListener("click", add);
}
box.addEventListener("click",(element)=>{
    if(element.target.classList.contains("valide"))
    {
    let parent =element.target.parentElement;
    parent.style.color="green"
    }
    
    if(element.target.classList.contains("supprm"))
    {
    let parent =element.target.parentElement;
    parent.remove();
    }

    if(element.target.classList.contains("modif"))
    {
    let para =element.target.previousElementSibling;
            let ask =confirm(`do you want to change this text`);
            if (ask == true) {
                let change =prompt(`change your text`);
                para.textContent= change;
            }
    }
    
    });

















































// let added=document.querySelector(".added");
// let content=document.querySelector(".content");
// Verifie si input remplis
    // for (let index = 0; index < add_btn.length; index++) {
    //     let element = add_btn[index];
    //     const add = () =>{
    //         if (text_input.length == "" || text_input.length == 0) {
    //             alert("Remplis ton text");
    //         }else if (text_input.length != "" || text_input.length != 0) {
    //             content.textContent+=text_input.value;
    //         }
    //     }
    //     element.addEventListener("click", add)
    //     console.log(hbug);
    // }

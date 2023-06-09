let div_parent = document.querySelector(".div-parent");
let text_input = document.querySelector("#input-text");
let add_btn = document.querySelectorAll("#btn-ajouter");
let box = document.querySelector(".boite");
let add_div = document.querySelector("#add-div");
let all_element = [];
let vrf_element = [];
let non_vrf_element = [];

// * creer paraghraphe
for (let index = 0; index < add_btn.length; index++) {
    let element = add_btn[index];
    const add = () => {
        let vlu = text_input.value;
        all_element.push(vlu);
        non_vrf_element.push(vlu);
        text_input.value = "";
        let div = document.createElement("div")
        div.innerHTML = `<div class="test">
    <p class="p-text">${vlu}</p>
    <i class="fa-solid fa-pen fa-lg modif" style="color: #005cfa;"></i>
    <i class="fa-solid fa-check fa-xl valide" style="color: #09ae0c;"></i>
    <i class="fa-solid fa-xmark fa-xl supprm" style="color: #f01000;"></i>
    </div>`
        box.appendChild(div)
    }
    element.addEventListener("click", add);
}
//* function icons
box.addEventListener("click", (element) => {
    //! pour valider
    if (element.target.classList.contains("valide")) {
        let parent = element.target.parentElement;
        parent.style.color = "green";
        vrf_element.push(parent);
        non_vrf_element.pop();
    }
    //! pour supprimer
    if (element.target.classList.contains("supprm")) {
        let parent = element.target.parentElement;
        parent.remove();
    }
    //! pour modifier
    if (element.target.classList.contains("modif")) {
        let para = element.target.previousElementSibling;
        let ask = confirm(`do you want to change this text`);
        if (ask == true) {
            let change = prompt(`change your text`);
            para.textContent = change;
        }
    }
});
console.log(all_element);
console.log(vrf_element);
console.log(non_vrf_element);



//* select
let select = document.querySelectorAll("#select");
let select_1 = document.querySelector("#select1");
let select_2 = document.querySelector("#select2");


function toggleDiv(value) {
    const boxx=document.querySelector(".test");
    
    if (value == 1) {
        boxx.style.display ="none"
        alert("les element valider");
    }else if (value == 2) {
        boxx.style.display ="none"
        alert("les element non valider");
    }
}




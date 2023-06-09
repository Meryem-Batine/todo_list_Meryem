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




// select_1.addEventListener("click", ()=>{
//     for (let index = 0; index < non_vrf_element.length; index++) {
//         let element_non_vld = non_vrf_element[index];
//         element_non_vld.style.display ="none";
//         for (let index = 0; index < vrf_element.length; index++) {
//             let element_vld = vrf_element[index];
//             element_vld.display="block";
//         }
//     }
// });



// function toggleDiv() {
//     let boxx=document.querySelectorAll(".test");

//     for (let index = 0; index < boxx.length; index++) {
//         let element = boxx[index];
//         if (element.style.color =="green") {
//             alert("gooooo");
//         }else {
//             alert("hello")
//         }

//         }
//     }




// boxx.style.display = value == 1 ? "block" : "none";
// // non_vrf_element.push(boxx)
// boxx.style.display = value == 2 ? "block" : "none";




// function selected() {
//     let selectvalue=select.value;
//     let elementSelect =[];
//     if (selectvalue == "") {
//         for (let index = 0; index < all_element.length; index++) {
//             let element = all_element[index];
//             if (element.completed ==true) {
//                 elementSelect.push(element)
//             }
//         }
//     }else if (selectvalue == 2) {
//         for (let index = 0; index < all_element.length; index++) {
//             let element = all_element[index];
//             if (element.completed ==false) {
//                 elementSelect.push(element)
//             }
//         }
//     }else{
//         elementSelect =all_elementelement;
//     }
// }
// select.addEventListener("onclick",selected);





// function filterTodos(e) {
//     const todos = div.children;

//     console.log(e.target.value);
//     console.log(e.target.classList);
//     console.log(todos);

//     for (let k = 0; k < todos.length; k++) {
//         let element = todos[k];

//         switch (e.target.value) {
//             case "all":
//                 console.log(element);
//                 element.style.display = "flex";
//                 break;

//             case "select_1":
//                 console.log(element);

//                 if (element.style.color == "green") {
//                     element.style.display = "flex";
//                 } else {
//                     element.style.display = "none";
//                 }
//                 break;
//             case "completed":
//                 console.log(element);
//                 if (element.style.color == "green") {
//                     element.style.display = "none";
//                 } else {
//                     element.style.display = "flex";
//                 }
//                 break;
//         }
//     }
// }
// div.addEventListener("onclick", filterTodos);


document.addEventListener("click", (e) => {
    if (e.target.className.includes("valide")) {
        e.target.parentElement.parentElement.classList.toggle("green_color");
    }
});

document.addEventListener("click", (p) => {
    if (p.target.className.includes("invld")) {
        p.target.parentElement.parentElement.classList.add("red_none");
    }
});

document.addEventListener("click", (s) => {
    if (s.target.className.includes("modify")) {
        let askmodify = prompt("Entrez la modification");
        s.target.parentElement.previousElementSibling.textContent = askmodify;
    }
});

filterSelect.addEventListener("change", () => {
    let selectedValue = filterSelect.value;
    let listItems = Array.from(liste.children);

    listItems.forEach((item) => {
        item.style.display = "block"; // Réinitialise l'affichage de tous les éléments

        switch (selectedValue) {
            case "valid":
                if (!item.classList.contains("green_color")) {
                    item.style.display = "none"; // Masque les éléments non validés
                }
                break;

            case "invalid":
                if (!item.classList.contains("red_none")) {
                    item.style.display = "none"; // Masque les éléments non invalides
                }
                break;

            default:
                break;
        }
    });
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

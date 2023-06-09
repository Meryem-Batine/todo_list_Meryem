let div_parent = document.querySelector(".div-parent");
let text_input = document.querySelector("#input-text");
let add_btn = document.querySelectorAll("#btn-ajouter");
let box = document.querySelector(".boite");
let select = document.querySelectorAll("#select");
let select_1 = document.querySelector("#select1");
let select_2 = document.querySelector("#select2");
let all_text = [];
let all_element =[];
let vrf_element =[];

// * creer paraghraphe
for (let index = 0; index < add_btn.length; index++) {
    let element = add_btn[index];
    const add = () => {
        let vlu =text_input.value;
        all_element.push(vlu);
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
box.addEventListener("click",(element)=>{
    //! pour valider
    if(element.target.classList.contains("valide"))
    {
    let parent =element.target.parentElement;
    parent.style.color="green";
    vrf_element.push(parent)
    }
        //! pour supprimer
    if(element.target.classList.contains("supprm"))
    {
    let parent =element.target.parentElement;
    parent.remove();
    }
    //! pour modifier
    if(element.target.classList.contains("modif"))
    {
    let para =element.target.previousElementSibling;
            let ask =confirm(`do you want to change this text`);
            if (ask == true) {
                let change =prompt(`change your text`);
                para.textContent= change;
                all_element.push(parent);
                console.log(all_element);
            }
    }
});
console.log(all_element);
console.log(vrf_element);


//* select
// function addselect() {
//     let slct=document.querySelector("#select");
//     let slct_value=slct.value;
//     let selectElement=[];
//     if (slct ==="1") {
//         for (let index = 0; index < all_element.length; index++) {
//             let element = all_element[index];
//             selectElement.push(element);
//         }
//     }
// }











function toggleDiv(value) {
    let boxx=document.getElementsByClassName("test");
    for (let index = 0; index < all_element.length; index++) {
        let element = all_element[index];
        if (value == "") {
            alert("gooooo");
        }else if (value == 2) {
            boxx.style.display = value == 2 ? "none" : "none";
            
        }
    }


    // boxx.style.display = value == 1 ? "block" : "none";

    // // vrf_element.push(boxx)
    // boxx.style.display = value == 2 ? "block" : "none";

}


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

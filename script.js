let shareSection = document.getElementById("share-section");

let shareBtn = document.getElementById("share-btn1");

let shareBtn2 = document.getElementById("share-btn2")

let idCont = document.getElementById("id-container");

let closeBtn = document.getElementById("close-btn");


function test1 () {
    console.log('test one')
}

function openShare () {
    console.log('test one')
    idCont.style.display = "none";
    shareSection.style.display = "flex"
}

function closeShare () {
    console.log('test one')
    idCont.style.display = "flex";
    shareSection.style = "none";
}




shareBtn.addEventListener("click" , () => {
    console.log('test one')
    idCont.style.display = "none";
    shareSection.style.display = "flex"
});

shareBtn2.addEventListener("click" , () => {
    console.log('test one')
    // idCont.style.display = "none";
    shareSection.style.display = "flex"
});


closeBtn.addEventListener("click" , () => {
    console.log('test one')
    idCont.style.display = "flex";
    shareSection.style = "none";
})


// flex;
//     flex-wrap: wrap;
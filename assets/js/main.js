class Pet {
    constructor(tutor, name, specie, picture, date) {
        this.tutor = tutor;
        this.name = name;
        this.specie = specie;
        this.picture = picture;
        this.date = date;
    }
}

class PetList {
    constructor() {
        this.pets = [];
    }

    add(param) {
        if(emptyInputs()) {
            sendMSG(`Preencha todos os campos`, `error`)
        } else {
            sendMSG(`Pet cadastrado registrado com sucesso`, `success`)
            clearInputs()
        }
        this.pets.push(param)
    }
}

const petList = new PetList();
const pets = new Pet();

function createPet() {
    const tutor = document.getElementById("tutor").value;
    const name = document.getElementById("name").value;
    const specie = document.getElementById("specie").value;
    const picture = document.getElementById("picture").value;
    const date = document.getElementById("date").value;

    const pet = new Pet(tutor, name, specie, picture, date);
    petList.add(pet)
}

function emptyInputs() {
    const tutor = document.getElementById("tutor").value;
    const name = document.getElementById("name").value;
    const specie = document.getElementById("specie").value;
    const picture = document.getElementById("picture").value;
    const date = document.getElementById("date").value;

    if(tutor == "" || name == "" || specie == "" || picture == "" || date == "") {
        return true
    } else if(tutor == "" && name == "" && specie == "" && picture == "" && date == "") {
        return true
    } else{
        return false
    }
}


function showPet() {
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("list").classList.remove("hidden")
    let content = "";

    petList.forEach(pet => {
        content += 
        `
        <div id="pets">
            <p>${pet.tutor}</p>
            <p>${pet.name}</p>
            <p>${pet.specie}</p>
            <img src="${pet.picture}"></img>
            <p>${pet.date}</p>
        </div>
        `
    });
}

function clearInputs() {
    tutor = document.getElementById("tutor").value=""
    name = document.getElementById("name").value = ""
    specie = document.getElementById("specie").value=""
    picture = document.getElementById("picture").value=""
    date = document.getElementById("date").value="";
}

function formatDate() {
    const date = document.getElementById("date").value="";
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function sendMSG(msg,type){  
    const msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    const msgP = `
        <p class="${type}">${msg}</p>
    `;

    msgDiv.innerHTML += msgP;

    setTimeout(function(){
        msgDiv.innerHTML = "";
    }, 3000);
}

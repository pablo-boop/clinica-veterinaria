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

    add(tutor, name, specie, picture, date) {
        if(emptyInputs()) {
            sendMSG(`Preencha todos os campos`, `error`)
        } else if(!isURLValida(picture)) {
            sendMSG(`Link inválido`, `error`)
        } 
        else {
            const pet = new Pet(tutor, name, specie, picture, date)
            sendMSG(`Pet cadastrado registrado com sucesso`, `success`)
            this.pets.push(pet)
            clearInputs()
        }
    }


    calculateAge(yy, mm, dd) {
        const d = new Date();

        let year = d.getFullYear();
        let ageYear = (year - yy)
        
        let month = d.getMonth()
        let ageMonth = (month - mm);

        let day = d.getDay();
        let ageDay = (day - dd)

        return `${Math.abs(ageYear)}, ${Math.abs(ageMonth)}, ${Math.abs(ageDay)}`
    }

}
const petList = new PetList();

function createPet() {
    const tutor = document.getElementById("tutor").value;
    const name = document.getElementById("name").value;
    const specie = document.getElementById("specie").value;
    const picture = document.getElementById("picture").value;
    const date = document.getElementById("date").value;

    petList.add(tutor, name, specie, picture, date)
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
    
    if(petList.pets.length == 0) {
        sendMSG(`Não possuem pets cadastrados`, `error`)
    } else if(petList.pets.length != 0) {
        document.getElementById("main-container").classList.add("hidden")
        document.getElementById("list").classList.remove("hidden")
        const petsList = document.getElementById("list");
        petsList.innerHTML = "";
        
        petList.pets.forEach((pet) => {
            const cardPets = 
            `
            <div class="pets">
                <img src="${pet.picture}"></img>
                <p>Tutor: ${pet.tutor}</p>
                <p>Nome: ${pet.name}</p>
                <p>Espécie: ${pet.specie}</p>
                <p>Data de aniversario: ${formatDate(pet.date)[0]} / ${formatDate(pet.date)[1]} / ${formatDate(pet.date)[2]}</p>
                <p>Idade: ${petList.calculateAge(formatDate(pet.date)[2], formatDate(pet.date)[1], formatDate(pet.date)[0])}</p>
            </div>
            `
            petsList.innerHTML += cardPets;
        });
    }

}

function clearInputs() {
    tutor = document.getElementById("tutor").value=""
    name = document.getElementById("name").value = ""
    specie = document.getElementById("specie").value=""
    picture = document.getElementById("picture").value=""
    date = document.getElementById("date").value="";
}

function formatDate(date) {
    let dateSplit = date.split("-");
    let dateReverse = dateSplit.reverse();
    return dateReverse

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

function register() {
    document.getElementById("main-container").classList.remove("hidden");
    document.getElementById("list").classList.add("hidden")
}
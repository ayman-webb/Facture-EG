//form inputs 
const nom = document.getElementById("nom");
const prénom= document.getElementById("prénom");
const objet = document.getElementById("objet");
const quantité = document.getElementById("quantité");
const checkbox = document.getElementsByClassName("checkbox");
const compteurContainer = document.getElementById("compteur-container");
const policeContainer = document.getElementById("police-container");
const typeContainer = document.getElementById("type-container");
const form = document.getElementById("facture");

//handle select
const handleSelect = (event) => {
    const selected = event.target.value;
    typeContainer.innerHTML = "";
    policeContainer.innerHTML = "";
    compteurContainer.innerHTML = "";

    if(selected === "nouveau branchement"){
        typeContainer.innerHTML = `
            <select class="form-control border-2"  id="typeBranch" required>
                <option value="">-- Type de Branchement --</option>
                <option value="branchement en poly 25">Branchement 25</option>
                <option value="branchement en poly 50">Branchement 50</option>
            </select>
        `;
        compteurContainer.innerHTML = `
            <label class="form-label fs-5">Nombre de compteurs :</label>
            <input type="number" value="0" min="0" id="compteur" class="form-control w-25" required>
        `;

    }else if(selected === "modification de branchement"){
        typeContainer.innerHTML = `
        <select class="form-control border-2"  id="typeBranch" required>
            <option value="">-- Type de Branchement --</option>
            <option value="modification de branchement de 1/2 à 3/4">Modification 20 à 25</option>
            <option value='modification de branchement de 1/2 à 1"1/2'>Modification 20 à 50</option>
            <option value='modification de branchement de 3/4 à 1"1/2'>Modification 25 à 50</option>
        </select>
    `;
        compteurContainer.innerHTML = `
            <label class="form-label fs-5">Nombre de compteurs :</label>
            <input type="number" value="0" min="0" id="compteur" class="form-control w-25" required>
        `;
        policeContainer.innerHTML = ` 
            <input type="text" placeholder="N° de Police" class="form-control" id="police" required>
        `;
    }else if(selected === "déplacement de la niche"){
        policeContainer.innerHTML = ` 
        <input type="text" placeholder="N° de Police" class="form-control" id="police" required>
        `;
    }
};

//handle riveraine
const handleRiveraine = (event) => {
    const reviraine = Number(event.target.value);
    const motifContainer = document.getElementById("motifContainer");
    if(reviraine !== 0){
        motifContainer.innerHTML = "";
    }else if(reviraine == 0){
        motifContainer.innerHTML = `
            <input type="text" class="form-control" id="motif" placeholder="Motif de dispense">
        `;
    }
}

//handle Form
const handleForm = (event) => {
    event.preventDefault();
    localStorage.removeItem("data");
    const typeBranch = document.getElementById("typeBranch");
    const compteur = document.getElementById("compteur");
    const police = document.getElementById("police");
    const riveraine = document.getElementById("riveraine");
    const motif = document.getElementById("motif");
    console.log(riveraine.value, motif?.value)

    if(compteur && Number(compteur.value) == 0){
        alert("Veuillez saisir le nombre des compteurs");
        return;
    };

    const formData = {
        nom : nom.value,
        prénom : prénom.value,
        objet : objet.value,
        typeBranch : typeBranch ? typeBranch.value : "déplacement de la niche",
        police : police ? police.value : "",
        compteur : compteur ? Number(compteur.value) : 1,
        poseAppareils : compteur ? Number(compteur.value)+ 1 : 1,
        riveraine : Number(riveraine.value) > 0 ? Number(riveraine.value) : 0,
        motif : motif ? motif.value : "",
    }
    localStorage.setItem("data", JSON.stringify(formData));
    window.location.href = "table.html";
};

let botãoFront = document.getElementById("1");
let botãoBack = document.getElementById("2");

botãoFront.addEventListener("click", () => {});
botãoBack.addEventListener("click", () => {});

let ListaFront = document.querySelector(".lista-front");
let ListaBack = document.querySelector(".lista-Back");

function percorrerFront(arrayObjs) {
  ListaFront.innerHTML = "";
  for (let i = 0; i < arrayObjs.length; i++) {
    let itens = arrayObjs[i];
    let card = criarCard(itens);

    ListaFront.appendChild(card);
  }
}
function percorrerback(arrayObjs) {
  ListaBack.innerHTML = "";
  for (let i = 0; i < arrayObjs.length; i++) {
    let itens = arrayObjs[i];
    let card = criarCard(itens);

    ListaBack.appendChild(card);
  }
}

function criarCard(obj) {
  let Cargo = obj.title;
  let Cidade = obj.Local;
  let Descrição = obj.descrription;
  let CargaHorária = obj.modality[0];
  let LocalDeTrabalho = obj.modality[1];

  let card = document.createElement("li");
  let tagFoto = document.createElement("button");
  let tagDiv = document.createElement("div");
  let tagH3 = document.createElement("h3");
  let tagP = document.createElement("h5");
  let tagP2 = document.createElement("p");
  let tagBtn1 = document.createElement("button");
  let tagBtn2 = document.createElement("button");

  tagFoto.innerText = "K";
  tagH3.innerText = `${Cargo}`;
  tagP.innerText = `${Cidade}`;
  tagP2.innerText = `${Descrição}`;
  tagBtn1.innerText = `${CargaHorária}`;
  tagBtn2.innerText = `${LocalDeTrabalho}`;

  tagFoto.classList.add("Foto-perfil");
  tagBtn1.classList.add("carga-horária");
  tagBtn2.classList.add("Local-Trabalho");

  tagDiv.appendChild(tagH3);
  tagDiv.appendChild(tagP);
  card.appendChild(tagFoto);
  card.appendChild(tagDiv);
  // card.appendChild(tagH3);
  // card.appendChild(tagP);
  card.appendChild(tagP2);
  card.appendChild(tagBtn1);
  card.appendChild(tagBtn2);

  card.classList.add("card");

  return card;
}

percorrerFront(FrontJobs);
percorrerback(BackJobs);

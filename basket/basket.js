let basket = JSON.parse(localStorage.getItem("basket")) ?? [];

const cards = document.querySelector(".cards");

const createCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "50rem";
  card.id = item.id;

  const imageSec = document.createElement("img");
  imageSec.classList.add("card-img-top");
  imageSec.setAttribute("src", item.image);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const box=document.createElement("div")
  box.className="box"

  const titleSec = document.createElement("h5");
  titleSec.classList.add("card-title");
  titleSec.innerText = item.title;

  const descSec = document.createElement("p");
  descSec.classList.add("card-text");
  descSec.innerText = item.price;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
  deleteBtn.classList.add("m-3");
  deleteBtn.innerText = "Delete";

  const buttonbox =document.createElement("div")
  const minusbtn =document.createElement("button")
  const count =document.createElement("p")
  const plusbtn =document.createElement("button")
  const removebtn=document.querySelector(".btn")
  removebtn.innerText="RemoveAll"
  plusbtn.innerText="+"
  minusbtn.innerText="-"
  count.innerText="1"
  
  buttonbox.className="buttonbox"
  count.className="val"
  
  buttonbox.append(minusbtn,count,plusbtn,descSec)
  box.append(imageSec,cardBody)
  cardBody.append(titleSec,buttonbox);
  card.append(box,deleteBtn);
  cards.appendChild(card);
  

  count.innerText=localStorage.getItem("count")
  plusbtn.addEventListener("click",function(){
    count.innerText= +count.innerText + 1
   
  })
  minusbtn.addEventListener("click",function(){
    count.innerText= +count.innerText - 1
    localStorage.setItem("count",count.innerText)
  })
  removebtn.addEventListener("click",function(){
    cards.remove()
   
  })
  
  deleteBtn.addEventListener("click", deleteFromBasket);
};

basket.map((elem) => {
  createCard(elem);
});

function deleteFromBasket() {
  const id = this.parentNode.id;

  const newBasket = basket.filter((item) => item.id !== +id);

  localStorage.setItem("basket", JSON.stringify(newBasket));

  window.location.reload();

  cards.innerHTML = "";

  basket.map((elem) => {
    createCard(elem);
  });
}

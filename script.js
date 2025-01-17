import items from "./items.js";

const item = document.querySelector(".item");

function card(name, description, price, img) {
  // creating elementrs

  const divcard = document.createElement("div");
  const imgs = document.createElement("img");
  const divdata = document.createElement("div");
  const h5 = document.createElement("h5");
  const des = document.createElement("p");
  const pri = document.createElement("p");
  const butn = document.createElement("button");

  //adding classes and src

  divcard.classList.add("card");
  imgs.classList.add("card-img-top");
  h5.classList.add("card-title");
  des.classList.add("card-text");
  pri.classList.add("card-text");
  imgs.setAttribute("src", `${img}`);
  butn.classList.add("btn");
  butn.classList.add("btn-primary");
  divdata.classList.add("card-body");

  //setting inner text

  h5.innerText = `${name}`;
  des.innerText = `${description}`;
  pri.innerText = `${price}`;
  butn.innerText = `Add to Cart`;

  // appending all data to there positions

  divcard.appendChild(imgs);
  divcard.appendChild(divdata);
  divdata.appendChild(h5);
  divdata.appendChild(des);
  divdata.appendChild(pri);
  divdata.appendChild(butn);
  item.appendChild(divcard);

  //adding styles

  divcard.style.width = "18rem";
}

for (let key in items) {
    if (Array.isArray(items[key])) {
      items[key].forEach((ele) => {
        card(ele.name, ele.description, ele.prise, ele.imgsrc);
      });
    }
  }


console.log('main loaded');

const container = document.querySelector('.container');

//
fetch('http://localhost:3000/adidas')
  .then(myData => myData.json())
  .then(myJsonData => showCards(myJsonData));

//function to create card  
function createCard(title, imageUrl, price, sizeButtons) {
  const card = `
  <div class="card">
  <h2 class="title">${title}</h2>
  <img src="${imageUrl}" class="productImg"/>
  <h2>${price}</h2>
  <div class="sizeButtons">${sizeButtons}</div>
  <button class="buyButton">Buy Now</button>
</div>
  `;

  return card;
}

//function showcard
function showCards(myJsonData) {
  console.log(myJsonData);
  const adidasarray = myJsonData;
  for (let i = 0; i < adidasarray.length; i++) {
    const products = adidasarray[i];
    const sizeButtons = products.sizes.map(size => `<button class="sizeButton">EURO ${size}</button>`).join('');
    const card = createCard(products.title, products.imageUrl, products.price, sizeButtons)
    container.innerHTML += card;
  }
}


//function searchitem
function searchItems() {
  console.log("searchItems called");
  const searchInput = document.getElementById('keyword').value.toLowerCase();
  searchInSection('nike', searchInput);
}

function searchInSection(sectionId, searchInput) {
  console.log("searchInSection called");
  const items = document.getElementById(sectionId).querySelectorAll('.card');

  items.forEach(item => {
    const itemName = item.querySelector('.title');
    if (!itemName) {
      console.log("Item name not found:", item);
      return;
    }
    const itemNameText = itemName.textContent.toLowerCase();
    console.log("Item name text:", itemNameText);

    if (itemNameText.includes(searchInput)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}





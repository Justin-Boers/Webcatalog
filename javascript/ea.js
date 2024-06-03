console.log('main loaded');console.log('main loaded');

const container = document.querySelector('.items');

fetch('http://localhost:3000/emporio-armani')
  .then(myData => myData.json())
  .then(myJsonData => showCards(myJsonData));
 
//function showcard
  function showCards(myJsonData) {
    console.log(myJsonData);
    const eaarray = myJsonData;
    for (let i = 0; i < eaarray.length; i++) {
      const products = eaarray[i];
      const sizeButtons = products.sizes.map(size => `<button class="sizeButton">${size}</button>`).join('');
      const card = createCard(products.title, products.imageUrl, products.price, sizeButtons)
      container.innerHTML += card;
    }
  }
 
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

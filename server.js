function dataFetching(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => gettingProducts(json));
}

function gettingProducts(products){
    console.log(products);

    var divFromHtml =document.getElementById("products");
    var allProducts =[];

    for(var i=0; i<products.length; i++){
        allProducts+= `<div>
        <div><img src='${products[i].image}' alt="api-image"/></div>
        <p>${products[i].title}</p>
        <p>Rating :${products[i].rating.rate}</p>
        <p>₹${products[i].price}</p>
      </div>`;
    }
    divFromHtml.innerHTML =allProducts;
}
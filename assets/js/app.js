var url = new URLSearchParams(window.location.search);

/*if (!url.get("sku")) { //hvis der ikke står sku i query string
    showProducts();
    
} else { //hvis der står sku i query string
    showProducts(url.get("sku"));
}*/

showProducts();

function showProducts() {
    getProducts()
        .then(function(products) {
            let productCardTemplate = window.productCard;
            let productCatalogue = document.querySelector(".categoryList_container");
            console.log(products);
            
            /*products.forEach(function(product){
                let clone = productCardTemplate.content.cloneNode(true); //klon af indholdet af vores template

                let title = clone.querySelector(".productTitle");
                title.innerText = product.name;

                let link = clone.querySelector(".products__addToCardLink");
                let img = clone.querySelector(".productImage");
                
                link.href = "?sku=" + product.sku;
                img.src = product.image[0];

                productCatalogue.appendChild(clone);
            });*/
        });
        
        function filterByCategory(product) {
            return product.category = "cdAfspillere";
        }
        function getProducts() {
            return fetch("./assets/data/cd_afspillere.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    //console.log(data.cdafspillere);
                    let result = data.products.filter(function(filterByCategory){
                    })
                    return data; 
                })
        }
}
type Rating = {
    rate: number;
    count: number;
};

type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
};



fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products: Product[]) => {
    //Table HTML
    let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody> ';
    //Loop all products to fill the table
    products.forEach((pro: Product) => { 
        tableHTML += `<tr><td>${pro.id}</td><td>${pro.title}</td><td>${pro.description}</td><td>${pro.price}</td></tr>`;
    });
    //Close Table body
    tableHTML += '</tbody>';
    //Grab table element to set its inner HTML
    document.querySelector('#tableElement')!.innerHTML = tableHTML; //El caracter de exclamacion le dice al TS que si o si va a encontrar el id en el documento
    //Hide spinner
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display = 'none';
});
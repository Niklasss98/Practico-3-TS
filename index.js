fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    //Table HTML
    var tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody> ';
    //Loop all products to fill the table
    products.forEach(function (pro) {
        tableHTML += "<tr><td>".concat(pro.id, "</td><td>").concat(pro.title, "</td><td>").concat(pro.description, "</td><td>").concat(pro.price, "</td></tr>");
    });
    //Close Table body
    tableHTML += '</tbody>';
    //Grab table element to set its inner HTML
    document.querySelector('#tableElement').innerHTML = tableHTML; //El caracter de exclamacion le dice al TS que si o si va a encontrar el id en el documento
    //Hide spinner
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});

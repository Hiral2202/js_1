const pen = {
    name: "Parker Jatter std CD ballpen",
    color: "Blue",
    price: 10.99,
    discount: 0.1,
    rating: 4.5,
    inStock: true,
    }
document.getElementById("penInfo").innerHTML = `Name: ${pen.name}, Color: ${pen.color}, Price: $${pen.price}`;
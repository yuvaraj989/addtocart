let label = document.getElementById("label");
let shoppingpage = document.getElementById("shoppingpage");
console.log(label, shoppingpage);
let cart = JSON.parse(localStorage.getItem("data")) || [];
console.log(cart);
function calculate() {
    let cartlength = document.getElementById("cartamount")
    cartlength.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0)


}
calculate();
function generateitem() {

    if (cart.length !== 0) {
        return (shoppingpage.innerHTML = cart.map((v) => {
            console.log(v.id);
            let { id, img, price, name } = v;
            console.log(name, price, img, id);
            return (`<div id="product-id-${id}">
            <img src=${img} alt="">
            <h4>${name}</h4>
            <p>${price}</p>
            <button onclick="Removeitem(${id})">REMOVE</button>
              </div>`)

        }))

    }
    else {
        shoppingpage.innerHTML = "cart is Empty"
    }

}
generateitem();
function Removeitem(id) {
    console.log(id);
    cart = cart.filter((x) => x.id != id)
    localStorage.setItem("data", JSON.stringify(cart))
    calculate();
    generateitem();
    // totalamount();

}
function totalamount() {
    let totalamount = 0;
    cart.map((v) => {
        totalamount += v.item * v.price

    })
    label.innerHTML = `<div id="total">
    <h2>Total Price:${totalamount}</h2>
    <button id="refresh-button" onclick="window.location.reload()">REFRESH</button>
    </div>`
}
totalamount();


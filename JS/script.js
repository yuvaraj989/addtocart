const shop = document.getElementById("shop");
console.log(shop);
let cart = JSON.parse(localStorage.getItem("data")) || [];
function generate(){
    shop.innerHTML= item.map((value)=>{
        console.log(value);
        let{id,name,price,img}=value
        return (` <div id="product-id-${id}">
        <img src=${img} alt="">
        <h4>${name}</h4>
        <p>${price}</p>
        <button onclick="AddtoCart('${id}','${img}','${price}','${name}')">ADDTOCART</button>
         

        </div>
        `)
    }).join("");
    
}
generate();
 
function AddtoCart(id,img,price,name){
   cart.push({id:id,item:1,name:name,price:price,img:img})
   console.log(cart);
   localStorage.setItem("data",JSON.stringify(cart));
   calculate();
}
let calculate = ()=>{
    let cartdata = document.getElementById("cartamount")
    cartamount = cart.length;
    cartdata.innerHTML=cartamount; 
}

calculate();
// let data = [{}]
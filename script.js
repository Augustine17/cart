let quantity = {
    "1":0,
    "2":0,
    "3":0
}

let cart = {
    "1":0,
    "2":0,
    "3":0
}

let total = 0;

function displayProducts(){
    let products = document.querySelector("#prods");
    let cart = document.querySelector("#cart");
    //products section
    Products.forEach((e)=>{
        let new_product = document.createElement("div");
        let prod_name = document.createElement("div");
        let prod_price = document.createElement("div");
        let prod_counter = document.createElement("div");
        let prod_dec = document.createElement("div");
        let prod_number = document.createElement("div");
        let prod_inc = document.createElement("div");

        //adding classnames
        new_product.classList.add('product');
        prod_name.classList.add('prod_name');
        prod_price.classList.add('prod_price');
        prod_counter.classList.add('prod_counter');
        prod_dec.classList.add('prod_dec');
        prod_dec.addEventListener("click", decrement);
        prod_number.classList.add('prod_number');
        prod_inc.classList.add('prod_inc');
        prod_inc.addEventListener("click", increment);
        
        //adding ids
        prod_counter.setAttribute("id",e.id)
        prod_dec.setAttribute("id", `dec-${e.id}`);
        prod_inc.setAttribute("id", `inc-${e.id}`);

        prod_name.innerText = e.name;
        prod_price.innerText = e.price;
        prod_dec.innerText = "-";
        prod_number.innerText = "0";
        prod_inc.innerText = "+";

        prod_counter.appendChild(prod_dec);
        prod_counter.appendChild(prod_number);
        prod_counter.appendChild(prod_inc);

        new_product.appendChild(prod_name);
        new_product.appendChild(prod_price);
        new_product.appendChild(prod_counter);

        products.appendChild(new_product);

    })


    
}

let decrement = (e) => {
    let id = e.target.parentElement.id;
    let number = e.target.parentElement.querySelector('.prod_number');
    if(quantity[id] !== 0){
        quantity[id]--;
        number.innerText = quantity[id]
        cart[id]--
        total-= Products[id-1].price;
    }
    console.log(total);
    updateCart();
}

let increment = (e) => {
    let id = e.target.parentElement.id;
    let number = e.target.parentElement.querySelector('.prod_number');
        quantity[id]++;
        number.innerText = quantity[id]
        if(!cart.hasOwnProperty(id)){
            cart[id]=1
        }else{
            cart[id]++; 
        }
        total+= Products[id-1].price;
        updateCart();
}

function updateCart(e){
    if(total>0){
        let no = document.querySelector(".no_prods");
         no.innerText="";
        
            if(cart[1]>0){
                let cartitem_1 = document.querySelector("#cartitem-1");
                let cart_prod = document.querySelector("#cartprod-1");
                let cart_detail = document.querySelector("#cart-1");

                cartitem_1.classList.remove("hello")
                cart_prod.innerText = `Product-1`;
                cart_detail.innerText = `${cart[1]} x 100`;

            }else{
                let cartitem_1 = document.querySelector("#cartitem-1");
                let cart_prod = document.querySelector("#cartprod-1");
                let cart_detail = document.querySelector("#cart-1");

                cartitem_1.classList.add("hello")
                cart_prod.innerText = "";
                cart_detail.innerText = "";
            }

            if(cart[2]>0){
                let cartitem_2 = document.querySelector("#cartitem-2");
                let cart_prod = document.querySelector("#cartprod-2");
                let cart_detail = document.querySelector("#cart-2");

                cartitem_2.classList.remove("hello")
                cart_prod.innerText = `Product-2`;
                cart_detail.innerText = `${cart[2]} x 200`;

            }else{
                let cartitem_2 = document.querySelector("#cartitem-2");
                let cart_prod = document.querySelector("#cartprod-2");
                let cart_detail = document.querySelector("#cart-2");

                cartitem_2.classList.add("hello")
                cart_prod.innerText = "";
                cart_detail.innerText = "";
            }

            if(cart[3]>0){
                let cartitem_3 = document.querySelector("#cartitem-3");
                let cart_prod = document.querySelector("#cartprod-3");
                let cart_detail = document.querySelector("#cart-3");

                cartitem_3.classList.remove("hello")
                cart_prod.innerText = `Product-3`;
                cart_detail.innerText = `${cart[3]} x 300`;

            }else{
                let cartitem_3 = document.querySelector("#cartitem-3");
                let cart_prod = document.querySelector("#cartprod-3");
                let cart_detail = document.querySelector("#cart-3");

                cartitem_3.classList.add("hello")
                cart_prod.innerText = "";
                cart_detail.innerText = "";
            }   
            let totalDiv = document.querySelector("#total");
            let total_name = document.querySelector("#total-name");
            let total_price = document.querySelector("#total-price");


            total_name.innerText = "Total:";
            total_price.innerText = total
            totalDiv.classList.remove("hello")
          
    }else{
        let no = document.querySelector(".no_prods");
        no.innerText="No Product added to the cart";
        let cart_prod1 = document.querySelector("#cartprod-1");
        let cart_detail1 = document.querySelector("#cart-1");
        let cart_prod2 = document.querySelector("#cartprod-2");
        let cart_detail2 = document.querySelector("#cart-2");
        let cart_prod3 = document.querySelector("#cartprod-3");
        let cart_detail3 = document.querySelector("#cart-3");
        cart_prod1.innerText = "";
        cart_detail1.innerText = "";
        cart_prod2.innerText = "";
        cart_detail2.innerText = "";
        cart_prod3.innerText = "";
        cart_detail3.innerText = "";

        let total_name = document.querySelector("#total-name");
            let total_price = document.querySelector("#total-price");

            total_name.innerText = "";
            total_price.innerText = ""

            let cartitem_3 = document.querySelector("#cartitem-3");
            let cartitem_2 = document.querySelector("#cartitem-2");
            let cartitem_1 = document.querySelector("#cartitem-1");
            let totalDiv = document.querySelector("#total");
            cartitem_3.classList.add("hello")
            cartitem_2.classList.add("hello")
            cartitem_1.classList.add("hello")
            totalDiv.classList.add("hello")

    }
}

window.onload = () => displayProducts();
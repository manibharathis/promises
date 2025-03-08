const cart=["shoes","socks","shirt","pen"]
const promise = createOrder(cart)
promise
.then(function(orderId){
    console.log(orderId)
        })
        .catch(function(err){
            console.log(err.message)
        })
function proceedToPayment(orderId){
    return new Promise (function(resolve,reject){
        resolve("payment successfull")
    })
}

//producer
function createOrder(cart){
    const pr = new Promise(function (resolve , reject){
        //createorder
        //validatecart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "12345"
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    })
    return pr
}

function validateCart(cart){
    if(cart.length<0)
        return true
    else
    return false
}
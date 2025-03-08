const cart=["shoes","socks","shirt","pen"]
//co , ptp, sos, uw
function createOrder(cart){
    const promise = new Promise(function(resolve,reject){
        if(!validateCart){
            const err= new Error("cart is not valid")
            reject(err)
        }
        const orderId = "12345"
        setTimeout(function(){
            resolve(orderId)
        },3000)
    })
    return promise
}
function validateCart(cart){
    if(cart.length>0)
        return true
    else
        return false
}

function proceedToPayment(orderId){
    const promise = new Promise(function(resolve,reject){
        resolve({orderId : orderId ,paymentinfo : "payment successfull !!"})
    })
    return promise
}
function showOrderSummay(orderId){
    return new Promise (function(resolve,reject){
        resolve( {orderId : orderId ,showOrderSummay : "show order summary successfull !!"})
    })
}
function updateWallet(orderId){
    return new Promise (function(resolve,reject){
        resolve( {orderId : orderId ,updateWallet : "update wallet successfull !!"})
    })
}

createOrder(cart)
        .then(function(orderId){
            console.log(orderId)
          return orderId
            }
        )
        .then(function(orderId){
            //console.log("inside proceed to payment")
            return proceedToPayment(orderId)
        })
        .then(function(paymentinfo){
            console.log(paymentinfo.orderId + " " + paymentinfo.paymentinfo)
            return paymentinfo
        })
        .then(function(paymentinfo){
            
            return showOrderSummay(paymentinfo.orderId)
        })
        .then(function(showOrderSummay){
            console.log(showOrderSummay.showOrderSummay + " " + showOrderSummay.orderId)
            return showOrderSummay
        })
        .then(function(showOrderSummay){
           // console.log("inside update wallet")
            return updateWallet(showOrderSummay.orderId)
        })
        .then(function(updateWallet){
            console.log(updateWallet.updateWallet + " " + updateWallet.orderId)
        })

        .catch(function(err){
            console.log(err)
        })



const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // resolve("p1 resolved")
       const err = new Error("p1 failes")
       reject(err)
    },3000)
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // resolve("p2 resolved")
       const err = new Error("p2 failes")
       reject(err)
    },6000)
})
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      //  resolve("p3 resolved")
      const err = new Error("p3 failes")
      reject(err)
    },1000)
})

Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
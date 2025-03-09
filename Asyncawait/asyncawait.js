const promise = new Promise((resolve,reject)=>{
    resolve("baby")
})
async function getData(){
    //return "hello"
    return promise
}
const data = getData()
data.then((value)=>{
    console.log(value)
})
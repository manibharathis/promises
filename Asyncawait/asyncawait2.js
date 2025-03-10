const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
(res("p1 resolved"))
    }
,10000)
})
const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        (res("p2 resolved"))
    }
,5000)
})
async function handlePromise() {
    console.log("hello world")
    const val1 = await p1
    console.log(val1)
    const val2 = await p2
    console.log(val2)
} 

handlePromise()
async function handlegithub() {
   try{
   const data = await fetch("https://api.github.com/users/manibharathis")
  // const data = await fetch("invalid url")
const jsonData = await data.json()
console.log(jsonData)
   }
   catch(err){
       console.log(err)
   }
}
handlegithub()
//handlegithub().catch(err=>console.log(err))

let btn = document.querySelector("button");
let div = document.querySelector("#joke");
btn.addEventListener("click",async ()=>{
    let p = document.querySelector("#joke");
    // p.innerText = await catjoke();
    let fact = await catjoke();
    console.log(fact);
    p.innerText = fact;

});

let url = "https://catfact.ninja/fact";
async function catjoke()
{
    try{
        let obj = await axios.get(url);
        return obj.data.fact;
    }catch(e){
        console.log("error: ",e);
        return "Page not found!";
    }
}
// catjoke();

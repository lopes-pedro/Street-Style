const req = async function (){
    const res = await fetch("http://localhost:3000", {
        method: 'get'
    });
    return await res.json();
}

window.addEventListener("load", async ()=>{
    const test = document.getElementById("test124");
    const res = await req();
    test.innerHTML = res.productName;
    console.log(res);
})
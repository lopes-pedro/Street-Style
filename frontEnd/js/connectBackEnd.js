const req = async function (){
    console.log("kkk")
    const res = await fetch("http://localhost:3000", {
        acesscontrolalloworigin: 'off',
        mode: 'cors',
        credentials: 'include',
        method: 'get'
    });
    console.log(res)
}

window.addEventListener("load", ()=>{
    console.log("kkk");
    req();
})
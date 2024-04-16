let accord =document.querySelectorAll(".accord")
let acc1 =document.querySelector(".acc1")
let acc2 =document.querySelector(".acc2")
let acc3 =document.querySelector(".acc3")
let acc4 =document.querySelector(".acc4")
let acc5 =document.querySelector(".acc5")
let acc6 =document.querySelector(".acc6")
let acc7 =document.querySelector(".acc7")
let acc8 =document.querySelector(".acc8")
let acc9 =document.querySelector(".acc9")

let lorem1 =document.querySelector(".lorem1")
let lorem2=document.querySelector(".lorem2")
let lorem3=document.querySelector(".lorem3")
let lorem4=document.querySelector(".lorem4")
let lorem5=document.querySelector(".lorem5")
let lorem6=document.querySelector(".lorem6")
let lorem7=document.querySelector(".lorem7")
let lorem8=document.querySelector(".lorem8")
let lorem9=document.querySelector(".lorem9")

    acc1.addEventListener("click", ()=>{
        acc1.style.backgroundColor=("blue")
        if(lorem1.style.display=="none"){
            lorem1.style.display="block"
            lorem2.style.display="none"
            lorem3.style.display="none"
        }
        else{
            lorem1.style.display="none"
            lorem2.style.display="none"
            lorem3.style.display="none"
        }
    })
    acc2.addEventListener("click", ()=>{
        acc2.style.backgroundColor=("blue")
        if(lorem2.style.display=="none"){
            lorem2.style.display="block"
            lorem1.style.display="none"
            lorem3.style.display="none"
        }
        else{
            lorem1.style.display="none"
            lorem2.style.display="none"
            lorem3.style.display="none"
        }
    })
    acc3.addEventListener("click", ()=>{
        // acc3.style.backgroundColor=("blue")

        if(lorem3.style.display=="none"){
            lorem3.style.display="block"
            lorem1.style.display="none"
            lorem2.style.display="none"
        }
        else{
            lorem3.style.display="none"
            lorem1.style.display="none"
            lorem2.style.display="none"
        }
    })
    acc4.addEventListener("click", ()=>{
        acc4.style.backgroundColor=("blue")
        if(lorem4.style.display=="none"){
            lorem4.style.display="block"
            lorem5.style.display="none"
            lorem6.style.display="none"
        }
        else{
            lorem4.style.display="none"
            lorem5.style.display="none"
            lorem6.style.display="none"
        }
    })
    acc5.addEventListener("click", ()=>{
        acc5.style.backgroundColor=("blue")

        if(lorem5.style.display=="none"){
            lorem5.style.display="block"
            lorem4.style.display="none"
            lorem6.style.display="none"
        }
        else{
            lorem4.style.display="none"
            lorem6.style.display="none"
            lorem5.style.display="none"
        }
    })
    acc6.addEventListener("click", ()=>{
        acc6.style.backgroundColor=("blue")

        if(lorem6.style.display=="none"){
            lorem6.style.display="block"
            lorem5.style.display="none"
            lorem4.style.display="none"
        }
        else{
            lorem6.display="none"
            lorem5.style.display="none"
            lorem4.style.display="none"
        }
    })
    acc7.addEventListener("click", ()=>{
        acc7.style.backgroundColor=("blue")

        if(lorem7.style.display=="none"){
            lorem7.style.display="block"
            lorem8.style.display="none"
            lorem9.style.display="none"
        }
        else{
            lorem7.style.display="none"
            lorem8.style.display="none"
            lorem9.style.display="none"
        }
    })
    acc8.addEventListener("click", ()=>{
        acc8.style.backgroundColor=("blue")

        if(lorem8.style.display=="none"){
            lorem8.style.display="block"
            lorem7.style.display="none"
            lorem9.style.display="none"
        }
        else{
            lorem7.style.display="none"
            lorem8.style.display="none"
            lorem9.style.display="none"
        }
    })
    acc9.addEventListener("click", ()=>{
        acc9.style.backgroundColor=("blue")
        if(lorem9.style.display=="none"){
            lorem9.style.display="block"
            lorem7.style.display="none"
            lorem8.style.display="none"
        }
        else{
            lorem9.style.display="none"
            lorem7.style.display="none"
            lorem8.style.display="none"
        }
    })


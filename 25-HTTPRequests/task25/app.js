let cards=document.querySelector("#cards")
let input
fetch("https://northwind.vercel.app/api/suppliers")
.then(res=>res.json())
.then(data=>{
    data.forEach(elem=> {
        let card=document.createElement("div")
        card.className="card "
        card.style.width="18rem"
        
        let textbox=document.createElement("div")
        textbox.className="textbox"
        textbox.style.height="22rem"
        
        let companyN=document.createElement("p")
        companyN.innerText=elem.companyName

        let contactN=document.createElement("p")
        contactN.innerText=elem.contactName

        let contactT=document.createElement("p")
        contactT.innerText=elem.contactTitle

        let street=document.createElement("p")
        street.innerText=elem.address.street

        let city=document.createElement("p")
        city.innerText=elem.address.city
        
        let region=document.createElement("p")
        region.innerText=elem.address.region
        
        let postalCode=document.createElement("p")
        postalCode.innerText=elem.address.postalCode
        
        let country=document.createElement("p")
        country.innerText=elem.address.country
        
        let phone=document.createElement("p")
        phone.innerText=elem.address.phone

        let deletebtn=document.createElement("button")
        deletebtn.className="delete mb-3"
        deletebtn.innerText="Delete"

        let text1 =document.querySelector("#text1")
        let text2 =document.querySelector("#text2")
        let text3 =document.querySelector("#text3")
        let text4 =document.querySelector("#text4")
        let text5 =document.querySelector("#text5")
        let text6 =document.querySelector("#text6")
        let text7 =document.querySelector("#text7")
        let text8 =document.querySelector("#text8")
        let text9 =document.querySelector("#text9")

        let addbtn=document.querySelector(".btn")
        addbtn.addEventListener("click",function(){
            let newobj={
                companyName:text1.value,
                contactName:text2.value,
                contactTitle:text3.value,
                street:text4.value,
                city:text5.value,
                region:text6.value,
                postalCode:text7.value,
                country:text8.value,
                phone:text9.value
            }
            fetch("https://northwind.vercel.app/api/suppliers",{
                method: "POST",
                body:JSON.stringify(newobj)
            })
    
            
        })

        


    //    deletebtn.addEventListener("click",function(e){
    //     e.target.parentElement.remove()
    //     fetch("https://northwind.vercel.app/api/suppliers"+"/"+ elem.id,{
    //             method: "delete"
    //         })
    //         .then(res=>res.json)
           
    //    })
          
        

        textbox.append(companyN,contactN,contactT,street,city,region,postalCode,country,phone)
        card.append(textbox,deletebtn)
        cards.append(card)


    });
})
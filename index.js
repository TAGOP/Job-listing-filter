import { jobList } from "./data/code/data.js"
// Get all the needed data to make a job 
    //Part0:logo
    function comanyImage(jobNum){
        let regex = /[a-z0-9]+/gi
        let origin = jobList[jobNum].company
        let name = origin.toLocaleLowerCase().match(regex).join("-")+".svg"
        let final =  `./data/images/${name}`
        return final
    }
    //Part1:companyname,isnew,isfeatured
    function companyName(jobNum){
        return jobList[jobNum].company
    }
    function jobIsNew(jobNum){
        if(jobList[jobNum].new){
            return "NEW!"
        }
    }
    function jobIsFeatured(jobNum){
        if(jobList[jobNum].featured){
            return "FEATURED"
        }
    }
    //Part2:position
    function jobPosition(jobNum){
        return jobList[jobNum].position
    }
    //Part3:postime,contract,location
    function jobPostDate(jobNum){
        return jobList[jobNum].postedAt
    }
    function jobContract(jobNum){
        return jobList[jobNum].contract
    }
    function jobLocation(jobNum){
        return jobList[jobNum].location
    }
    //Part4:requirements
    function jobRequirements(jobNum){
        return [jobList[jobNum].role].concat([jobList[jobNum].level],jobList[jobNum].languages,jobList[jobNum].tools)
    }
//Creat/Select all the needed html elements
const main = document.querySelector("main")
    let section = document.createElement("section")
        const div0 = document.createElement("div")
            const img = document.createElement("img")
        const div1 = document.createElement("div")
            const div1a = document.createElement("div")
                const div1ap0 = document.createElement("p")
                const div1ap1 = document.createElement("p")
                const div1ap2 = document.createElement("p")
            const div1b = document.createElement("div")
                const div1bp0 = document.createElement("p")
            const div1c = document.createElement("div")
                const div1cp0 = document.createElement("p")
                const div1cp1 = document.createElement("p")
                const div1cp2 = document.createElement("p")
        const div2 = document.createElement("div")
            let button = document.createElement("button")
const recap = document.createElement("div")
const third = document.createElement("p")
const hr = document.createElement("hr")
const br = document.createElement("br")
hr.classList.add("ban")
const head = document.querySelector("#himg") 
if(window.innerWidth <= 680){
    hr.setAttribute("id","noban")
    head.removeAttribute("src")
    head.setAttribute("src","./data/images/bg-header-mobile.svg")
    br.setAttribute("id","no")
}
//Insert thos elements
jobList.forEach(
    (job,index) => {
            //if(jobIsFeatured(index)){section.classList.add("money")}
            // div0
                div0.classList.add("div0")
                //delet the previously appended elements from the parent expept from the first iteration
                if(div0.firstElementChild === img){div0.removeChild(img)}
                img.setAttribute("src",comanyImage(index))
                img.setAttribute("alt",companyName(index))
                img.classList.add("cimg")
                div0.append(img)     
            // div1
                div1.classList.add("div1")
                //a
                    div1a.classList.add("first")
                    //delet the previously appended elements from the parent expept from the first iteration
                    if(div1a.children.length !== 0){
                        div1a.removeChild(div1ap0);
                        if(div1a.contains(div1ap1)){div1ap1.remove()}
                        if(div1a.contains(div1ap2)){div1ap2.remove()};
                    }
                    //add the content of the previously created elements
                    div1ap0.innerText=companyName(index)
                    div1ap0.classList.add("comp")
                    div1a.append(div1ap0)
                    //
                    if(jobIsNew(index) === "NEW!"){
                        div1ap1.innerText = jobIsNew(index)
                        div1a.append(div1ap1)
                        div1ap1.classList.add("new")
                    }
                    //
                    section.classList.remove("featuredBand")
                    if(jobIsFeatured(index) === "FEATURED"){
                        div1ap2.classList.add("fet")
                        section.classList.add("featuredBand")
                        div1ap2.innerText = jobIsFeatured(index)
                        div1a.append(div1ap2)
                    }
                    //append the whole 
                    
                //b
                    div1b.classList.add("second")
                    //delet the previously appended elements from the parent expept from the first iteration
                    if(div1b.children[0] !== undefined ){div1b.removeChild(div1bp0)}
                    //add the content of the previously created elements
                    div1bp0.innerText = jobPosition(index)
                    //append the whole into the parent
                    div1b.append(div1bp0)
                //c
                    third.classList.add("third")
                    //delet the previously appended elements from the parent expept from the first iteration
                    if(div1c.children[0] !== undefined){(div1cp0,div1cp1,div1cp2).remove()}
                    //add the content of the previously created elements
                    div1cp0.innerText = jobPostDate(index)
                    div1cp1.innerText = jobContract(index)
                    div1cp2.innerText = jobLocation(index)
                    //append the whole into the parent
                    div1c.append(div1cp0,div1cp1,div1cp2)
                    third.innerText =  `${div1cp0.innerText}  ·  ${div1cp1.innerText}  ·  ${div1cp2.innerText}`
                //after the three div1's components are set append them into the div1 element
                div1.append(div1a,div1b,third)
            //recap
            recap.append(div0,br,div1)
            recap.classList.add("part1")
            //div2 
            div2.classList.add("part2")
            if(div2.children[0] !== undefined){while(div2.children[0] !== undefined){div2.removeChild(div2.children[0])}}
            jobRequirements(index).forEach((language,lindex)=>{
                button.innerText = language
                div2.append(button.cloneNode(true))

            })
        //section
        section.append(recap,hr,div2)
    //main  
    main.append(section.cloneNode(true))
    }
)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const selectors = document.querySelectorAll("section button")
const home = document.querySelector("body > div")
let sels = [];
let notyouEl = []
let onlys = [];
let caca = [];
//taga
function filter1(){ 
    onlys.forEach(doo => {
        caca = []
        ///////////////////////
        let only;
        let victims;
        let bo;
        let ba;
        let count;
        if(onlys.every((a,b)=>{
            return a !== doo
        })){
            onlys.push(doo)
        }
        


            notyouEl = Array.from(document.querySelectorAll("section")).filter((job,ind) => { 

               only = doo
                victims = Array.from(Array.from(job.children[job.children.length-1].children).map((a,b)=>{return a.innerText}))
                bo = victims.every((a,b)=>{return a !== only})
                //test

                function ko(){ 
                    count = 0;

                    onlys.forEach((a,b)=>{

                        ba = victims.every((c,d)=>{return c !== a})
                        if(ba === true){
                            count++
                        }
                    })
                    caca.push(count)

                    if(count !== 0){
                        return true
                    }
                }
                //

                return ko()
            })
            console.log()
            notyouEl.forEach((no,ind)=>{
            no.classList.add("ban")
        })
        home.setAttribute("id","house")
        main.classList.add("main-changes")
        if(sels.every((a)=>{return a !== e.target.innerText}) || sels.length === 0){ 
            sels.push(doo)
            button.innerText = sels[sels.length-1]
            button.setAttribute("id","sbutton")
            //
            let x = document.createElement("i")
            x.classList.add("fa-sharp","fa-solid","fa-xmark")
            //
            let div = document.createElement("div")
            div.append(button.cloneNode(true),x)
            home.children[0].append(div)
            div.addEventListener("click",function(e){
                let inoo = div.children[0].innerText
                let ino = onlys.indexOf(inoo)
                onlys.splice(ino,1)
                console.log(onlys)
                cleart1()
                filter1()
            })
        }
    })
}
function cleart1(){  
    const no = document.querySelectorAll("section.ban")
    no.forEach((a)=>{
        a.classList.remove("ban")
    })
    Array.from(home.children[0].children).forEach((a)=>{
        a.remove()
    })
    sels = []
    home.removeAttribute("id","house")
    main.style.paddingTop="50px"
    }
selectors.forEach((button,index)=>{
    button.addEventListener("click",function(e){
        let a = e;
        function filter(){ 
        caca = []
        ///////////////////////
        let only;
        let victims;
        let bo;
        let ba;
        let count;
        if(onlys.every((a,b)=>{
            return a !== e.target.innerText
        })){
            onlys.push(e.target.innerText)
        }
        //////////////////////////

            notyouEl = Array.from(document.querySelectorAll("section")).filter((job,ind) => { 

                only = e.target.innerText
                victims = Array.from(Array.from(job.children[job.children.length-1].children).map((a,b)=>{return a.innerText}))
                bo = victims.every((a,b)=>{return a !== only})
                //test

                function ko(){ 
                    count = 0;
                    
                    onlys.forEach((a,b)=>{
                        
                        ba = victims.every((c,d)=>{return c !== a})
                        if(ba === true){
                            count++
                        }
                    })
                    caca.push(count)
                    
                    if(count !== 0){
                        return true
                    }
                }
                //

                return ko()
            })
            console.log()
            notyouEl.forEach((no,ind)=>{
            no.classList.add("ban")
        })
        home.setAttribute("id","house")
        main.classList.add("main-changes")
        if(sels.every((a)=>{return a !== e.target.innerText}) || sels.length === 0){ 
            sels.push(e.target.innerText)
            button.innerText = sels[sels.length-1]
            button.setAttribute("id","sbutton")
            //
            let x = document.createElement("i")
            x.classList.add("fa-sharp","fa-solid","fa-xmark")
            //
            let div = document.createElement("div")
            div.append(button.cloneNode(true),x)
            home.children[0].append(div)
            div.addEventListener("click",function(e){
                let inoo = div.children[0].innerText
                let ino = onlys.indexOf(inoo)
                onlys.splice(ino,1)
                console.log(onlys)
                cleart1()
                filter1()
            })
            //
        }
        //
    }
    filter()
    main.style.paddingTop = "50px"
    })
})
function cleart(){ 
    const no = document.querySelectorAll("section.ban")
    no.forEach((a)=>{
        a.classList.remove("ban")
    })
    Array.from(home.children[0].children).forEach((a)=>{
        a.remove()
    })
    onlys = []
    sels = []
    home.removeAttribute("id","house")
    main.style.paddingTop="50px"
    }
const clear = document.querySelector("#clear")
clear.addEventListener("click",function(){
    cleart()
})
const cbore = Array.from(document.querySelectorAll(".part1 br"))
const cborep = Array.from(document.querySelectorAll(".part1 "))
const allhr = Array.from(document.querySelectorAll("hr"))
window.addEventListener("resize",function(){
    allhr.forEach((a) =>{ 
        if(window.innerWidth > 680){
            a.removeAttribute("id")
            cbore.forEach(b=>{
                b.removeAttribute("id","no")
            })
            head.removeAttribute("src")
            head.setAttribute("src","./data/images/bg-header-desktop.svg")
        }
        else if(a.getAttribute("id") === null){
            a.setAttribute("id","noban")
            cbore.forEach(b=>{
                b.setAttribute("id","no")
            })
            head.removeAttribute("src")
            head.setAttribute("src","./data/images/bg-header-mobile.svg")
        }
    })
})

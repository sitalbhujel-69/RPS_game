const compimg = document.querySelector("#computer")
const usrimg = document.querySelector("#user")

const messagebox = document.querySelector(".message")
const choices = document.querySelectorAll(".choice")
let arr = ["rock","paper","scissors"]


function loadimg(){
    choices.forEach(choice=>{
        choice.addEventListener("click",e=>{
            if(choice.innerHTML === 'rock'){
                usrimg.src = "images/rock.png.png"
                compchoice()
                checkwinner()
            }
            else if(choice.innerHTML ==='paper'){
                usrimg.src = " images/paper.png.png"
                compchoice()
                checkwinner()
            }
            else if(choice.innerHTML ==="scissors"){
                usrimg.src = "images/scissors.png.png"
                compchoice()
                checkwinner()
            }
        })
    })
}
loadimg()
function compchoice(){
    let random = arr[Math.floor(Math.random()*3)]
    if(random ==="rock"){
        compimg.src = "images/rock.png.png"
    }
    else if(random ==="scissors"){
        compimg.src = "images/scissors.png.png"
    }
    else if(random ==="paper"){
        compimg.src ="images/paper.png.png"
    }
}

function checkwinner(){
    let win = true;
    if(compimg.src === usrimg.src){
        messagebox.innerHTML = "DRAW"
    }
    else{
        if(compimg.src=="http://127.0.0.1:3000/images/scissors.png.png"){
            win = usrimg.src =="http://127.0.0.1:3000/images/paper.png.png"?false:true
            if(win){
                messagebox.innerHTML = "YOU WIN"
            }
            else{
                messagebox.innerHTML = "COMPUTER WIN"
            }
        }
        else if(compimg.src == "http://127.0.0.1:3000/images/rock.png.png"){
            win= usrimg.src =="http://127.0.0.1:3000/images/scissors.png.png"?false:true
            if(win){
                messagebox.innerHTML = "YOU WIN"
            }
            else{
                messagebox.innerHTML = "COMPUTER WIN"
            }
        }
        else{
            win = usrimg.src =="http://127.0.0.1:3000/images/rock.png.png"?false:true
            if(win){
                messagebox.innerHTML = "YOU WIN"
            }
            else{
                messagebox.innerHTML = "COMPUTER WIN"
            }
        }
                                                                        
}
}
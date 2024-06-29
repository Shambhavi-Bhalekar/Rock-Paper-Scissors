let user_score=0;
let computer_score=0;

const score1=document.querySelector("#user_score");
const score2=document.querySelector("#computer_score");

const message= document.querySelector("button");

const choices= document.querySelectorAll(".choice");

const img1= document.getElementById("your_move");
const img2= document.getElementById("comp_move");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const user_choice= choice.getAttribute("id");
       console.log("choice was clicked", choice.getAttribute("id")); 
       game(user_choice);
       
    })
})

const compchoice=['rock', 'paper','scissor'];


let game=(user_choice)=>{
    const computer_choice= compchoice[Math.floor(Math.random()*3)];
    console.log(computer_choice);
    Image(computer_choice,user_choice);
    result(computer_choice,user_choice);
}

//chnge the image of the your move and the computer's move 
let Image=(computer_choice,user_choice)=>{
    
    user_choice==="rock"? img1.src="rock.png":(user_choice==="paper"? img1.src="paper.png" : img1.src="scissor.png")
    computer_choice==="rock"? img2.src="rock.png":(computer_choice==="paper"? img2.src="paper.png" : img2.src="scissor.png")
}

//change the content in the button attribute to tie
let draw=()=>{
    message.innerText="It's a Tie, Play Again";
    message.style.backgroundColor=" rgb(12, 8, 34)";
    message.style.border="2px solid rgb(12, 8, 34)"
}

//change the content in the button attribute to the winner name
let winner=(user_wins)=>{
    if(user_wins)
        {
            message.innerText="You Win";
            message.style.backgroundColor="rgb(25, 231, 97)";
            message.style.border="2px solid rgb(25, 231, 97)"
            user_score++;
            console.log(user_score, computer_score);
            score1.innerText=user_score;
        }
    else
    {
        computer_score++;
        message.innerText="Computer Wins, Try Again!";
        message.style.backgroundColor=" red";
        message.style.border="2px solid red"
        score2.innerText= computer_score;
    }
}

let result=(computer_choice, user_choice)=>{
    let user_wins=false;
    if(computer_choice===user_choice)
        draw();
    else{
         if (computer_choice==="rock") {
            user_choice==="paper"? user_wins=true: user_wins=false;    
     }
     else if(computer_choice==="scissor"){
             user_choice==="rock"?  user_wins=true: user_wins=false;
     }
     else if(computer_choice==="paper")
         {
             user_choice==="scissor"?  user_wins=true: user_wins=false;
         }

         winner(user_wins);
    }

}
console.log("tic tac toe");

let boxes = Array.from(document.getElementsByClassName("box"));
let turn=document.getElementsByClassName("turn");
let winning=document.getElementsByClassName("winning");
let gif=document.getElementsByClassName("gif");
const resetButton = document.querySelector('.btn');
let audioelement= new Audio('soundeffect.mp3')
// let reset=document.getElementsByClassName("btn")
var nextturn='X';

// const checkwin=()=>{
//   let boxes = Array.from(document.getElementsByClassName("box"));
//     let wins=[
//       [0,1,2,8,6,0],
//       [3,4,5,8,17,0],
//       [6,7,8,8,29,0],
//       [0,4,8,8,17,45],
//       [2,4,6,8,17,-45],
//       [0,3,6,-4,18,90],
//       [1,4,7,8,18,90],
//       [2,5,8,20,18,90],
//     ]
// wins.forEach(e=>{
//  if((boxes[e[0]].innerText===boxes[e[1]].innerText)&&(boxes[e[2]].innerText===boxes[e[1]].innerText)&&(boxes[e[0]].innerText!=='')){
//   document.querySelector('.winning').innerText= boxes[e[0]].innerText +" Won"
//   document.querySelector('.gif').getElementsByTagName('div')[0].style.height="190px";
//   document.querySelector('.line').style.width='30vw';
//   document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
// }
// else if((boxes[e[0]].innerText!==boxes[e[1]].innerText)&&(boxes[e[2]].innerText!==boxes[e[1]].innerText)&&(boxes[e[0]].innerText!=='')){
//    document.querySelector('.winning').innerText=  "Match  Draw"

//  }

// })
// }

const checkwin = () => {
  let boxes = Array.from(document.getElementsByClassName("box"));
  let wins = [
    [0, 1, 2, 8, 6, 0],
    [3, 4, 5, 8, 17, 0],
    [6, 7, 8, 8, 29, 0],
    [0, 4, 8, 8, 17, 45],
    [2, 4, 6, 8, 17, -45],
    [0, 3, 6, -4, 18, 90],
    [1, 4, 7, 8, 18, 90],
    [2, 5, 8, 20, 18, 90],
  ];

  let filledBoxes = 0;
  for (let box of boxes) {
    if (box.innerText !== '') {
      filledBoxes++;
    }
  }

  let draw = filledBoxes === boxes.length;
  wins.forEach(e => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[2]].innerText === boxes[e[1]].innerText &&
      boxes[e[0]].innerText !== ''
    ) {
      document.querySelector('.winning').innerText = boxes[e[0]].innerText + " Won";
      document.querySelector('.gif').getElementsByTagName('div')[0].style.height = "190px";
      document.querySelector('.line').style.width = '30vw';
      document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      draw = false;
    }
  });

  if (draw) {
    document.querySelector('.winning').innerText = "   Match Draw";
  }
};





for (let box of boxes) {
  box.addEventListener('click', (event) => {
    if (event.target.innerText === '') {
      audioelement.play();
      event.target.innerText =nextturn ;
    


      turndisplay();
      
      turnchange();
      checkwin();
      
    } 
  });
}

const turnchange=()=>{
  // audioelement.play();
  
    if (nextturn== 'X'){
      nextturn='O';
      
    }
    else{
      nextturn='X';
      
    }
}

const turndisplay = () => {
  if (nextturn == 'X') {
    document.querySelector('.turn').innerText = 'X turn is there';
  } else {
    document.querySelector('.turn').innerText = 'O turn is there';
  }
}

// reset.addEventListener('click',()=>{
//   let boxes = document.querySelectorAll(".box");
//   Array.from(boxes).forEach(e=>{
//     e.innerText='';
//   })
// })


resetButton.addEventListener('click', () => {
  console.log("Reset button clicked");
  let boxes = document.querySelectorAll(".box");
  Array.from(boxes).forEach(e=>{
    e.innerText='';
  })
  console.log("tell");
  nextturn='X';
  document.querySelector('.gif').getElementsByTagName('div')[0].style.height="0px";
  document.querySelector('.winning').innerText='';
  document.querySelector('.turn').innerText ='start the game again'
  document.querySelector('.line').style.width='0px';
});



        
   
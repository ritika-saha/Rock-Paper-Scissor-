document.getElementById('about').addEventListener('click',function(){
  document.querySelector('.aboutModal').style.display='flex'  
  document.querySelector('.hands').style.display='none'
})

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.aboutModal').style.display='none'
    document.querySelector('.hands').style.display='flex'
})

document.getElementById('done').addEventListener('click',function(){
    document.querySelector('.playerModal').style.display='none'
    document.querySelector('.hands').style.display='flex'
    document.querySelector('.name').textContent=document.getElementById('modalName').value
})
//////////////////////////////////////////////////////////////////////////////sikeeeeeeeeeee
let played=false
let me=0;
let comp=0;



function rock(){
 if(played===false){
   played=true;
let a=rand();
//let a=2;
if(a===0){
  document.querySelector('.paper').style.display='none';
  document.querySelector('.scissor').style.display='none';
  document.querySelector('.my').textContent=`You: ${me}`;
  document.querySelector('.comp').textContent=`Computer: ${comp}`;
  document.querySelector('.message').textContent="It's a tie 👀";
}
else if(a===1){
  document.querySelector('.rock').style.display='none';
  document.querySelector('.scissor').style.display='none';
  document.querySelector('.my').textContent=`You: ${me}`;
  comp++;
  document.querySelector('.comp').textContent=`Computer: ${comp}`;
  document.querySelector('.message').textContent='Computer won 🤖';
}
else if(a===2){
  document.querySelector('.paper').style.display='none';
  document.querySelector('.rock').style.display='none';
  me++;
  document.querySelector('.my').textContent=`You: ${me}`;
  document.querySelector('.comp').textContent=`Computer: ${comp}`;
  document.querySelector('.message').textContent='Congrats !! you won 🎉';
}
 }
}


function paper(){
  if(played===false){
  played=true;
  let a=rand();
  //let a=2;
  if(a===0){
    document.querySelector('.paper').style.display='none';
    document.querySelector('.scissor').style.display='none';
    me++;
    document.querySelector('.my').textContent=`You: ${me}`;
    document.querySelector('.comp').textContent=`Computer: ${comp}`;
    document.querySelector('.message').textContent='Congrats !! you won 🎉';
  }
  else if(a===1){
    document.querySelector('.rock').style.display='none';
    document.querySelector('.scissor').style.display='none';
    document.querySelector('.my').textContent=`You: ${me}`;
    document.querySelector('.comp').textContent=`Computer: ${comp}`;
    document.querySelector('.message').textContent="It's a tie 👀";
  }
  else if(a===2){
    document.querySelector('.paper').style.display='none';
    document.querySelector('.rock').style.display='none';
    document.querySelector('.my').textContent=`You: ${me}`;
    comp++;
    document.querySelector('.comp').textContent=`Computer: ${comp}`;
    document.querySelector('.message').textContent='Computer won 🤖';
  }
}
  }


  
function scissor(){
  if(played===false){
  played=true;
  let a=rand();
  //let a=2;
  if(a===0){
    document.querySelector('.paper').style.display='none';
    document.querySelector('.scissor').style.display='none';
    document.querySelector('.my').textContent=`You: ${me}`;
    comp++;
    document.querySelector('.comp').textContent=`Computer: ${comp}`;
    document.querySelector('.message').textContent='Computer won 🤖';
  }
  else if(a===1){
    document.querySelector('.rock').style.display='none';
    document.querySelector('.scissor').style.display='none';
    me++;
    document.querySelector('.my').textContent=`You: ${me}`;
    document.querySelector('.comp').textContent=`Computer: ${comp}`;
    document.querySelector('.message').textContent='Congrats !! you won 🎉';
  }
  else if(a===2){
    document.querySelector('.paper').style.display='none';
    document.querySelector('.rock').style.display='none';
    document.querySelector('.my').textContent=`You: ${me}`;
    document.querySelector('.comp').textContent=`Computer: ${comp}`;
    document.querySelector('.message').textContent="It's a tie 👀";
  }
}
  }




function rand(){
  return Math.ceil(Math.random()*3)-1;
}

function restart(){
  document.querySelector('.rock').style.display='flex';
  document.querySelector('.paper').style.display='flex';
  document.querySelector('.scissor').style.display='flex';
  document.querySelector('.message').textContent='Pick your Pick';
  if(played===true)
  played=false;
}

function reset(){
  window.location.reload(false);
}
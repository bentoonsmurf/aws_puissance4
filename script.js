
var h_size=7;
var v_size=6;


var board=[];

var i;
var j;
var player_turn=1;

function init_tab(){
for (i=0 ;i<v_size ; i++){
  var horizontal=[];
    for (j=0 ;j<h_size ; j++){
      
        horizontal[j]=0;
        
      
    }
    board[i]=horizontal;
}
}

function set(vertical ,horizontal, player) {
   board[vertical][horizontal]=player;
}


// Pourquoi pas mettre ça dans une fonction?
function append(parent, balise) {
  return parent.appendChild(document.createElement(balise));
}






function render(){
var div = document.querySelector('#plateau');
// On commence par vider la balise
div.innerHTML = '';

  var table=div.appendChild(
  document.createElement("table") );
  
for (i=0 ;i<v_size ; i++){
var tr = document.createElement('tr');
  table.appendChild(tr);
    for (j=0 ;j<h_size ; j++){
      var td = document.createElement('td');
      
      if(board[i][j]==0){
         td.className="";
         }
      if(board[i][j]==1){
         td.className="player1";
         } 
      if(board[i][j]==2){
         td.className="player2";
         }
      
      tr.appendChild(td);
    }
}
}
function collone_full(collone){
  if (board[0][collone]!=0){
    return 1;
  }
  else{
    return 0;
  }
}

function play(collone){
  var i;
  //console.log(board[0][collone]);
  if(collone_full(collone) == 0){
   i=0;
    
    while(( i<v_size) && (board[i][parseInt(collone)]==0) ){// v_size=7 tab[7]
      i++;
       //console.log(board[i][parseInt(collone)]);
    }
    
    //console.log(collone);
     console.log(i);
   // console.log((board[i][parseInt(collone)]!=0));
     board[i-1][collone]=player_turn;
      // i -1
      
      if(player_turn==1)
      player_turn=2;
      else
      player_turn=1;
      
    

  }
  render();
}


// main

init_tab();


play(4);
play(5);
play(4);
play(4);

console.log(board);

console.log(collone_full(4));
console.log(collone_full(5));






















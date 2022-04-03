const rock = 'rock';
const paper =  'paper';
const cut = 'cut';
var pregunta = prompt("Input your option: rock, paper or cut ");
var ramdom = (min, max) => Math.floor (Math.random() * (max-min+1))+min;
var getanumber = () => ramdom(1,10);
var number = getanumber();
function game(){
    switch (pregunta){
        case rock:
            if (number <= 5){
                console.log ('Rock have win to Cut');
            } else{
                console.log('Rock lose vs Paper');
            };
        break;
        
        case paper:
            if (number <= 5){
                console.log ('Paper have win to Rock');
            } else{
                console.log('Paper lose vs Cut');
            };
            break;
        case cut:
            if (number <= 5){
                console.log ('cut have win to paper');
                
            } else{
                console.log('Cut lose vs Rock');
            };
            break;
        }
};
game(pregunta);

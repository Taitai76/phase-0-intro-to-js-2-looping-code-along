// Code your solutions in this file
const names=['name1','name 2','name3'];

function writeCards(names, string){
    const cards=[];
    for (let i=0; i< names.length; i++){
        cards[i]=`Thank you, ${names[i]}, for the wonderful ${string} gift!`;

    }
    return cards;
}
function countDown(x){
    while (x>=0){
        console.log(x);
        x -= 1;
        
    }
}
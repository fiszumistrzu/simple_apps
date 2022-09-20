function substractFunction(amount){
let currentBalance = document.querySelector('h1 span').innerHTML;
if(document.querySelector('h1 span').innerHTML < amount ){
    alert('Not enough money')
}else{
    document.querySelector('h1 span').innerHTML = currentBalance - amount;
    }                             
}
document.querySelector('#w20').addEventListener('click', function(){
        substractFunction(20);
        });
document.querySelector('#w50').addEventListener('click', function(){
    substractFunction(50);
});
document.querySelector('#w100').addEventListener('click', function(){
    substractFunction(100);
});    
document.querySelector('#w200').addEventListener('click', function(){         
    substractFunction(200);
 });
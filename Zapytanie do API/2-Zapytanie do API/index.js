let page = 0;
document.querySelector("button").addEventListener("click", function(){
    page = page+1;
    fetch('https://swapi.dev/api/starships?page='+page)
.then(function(res){return res.json()})
.then(function(body){
    let text = document.querySelector("#doc").innerHTML;
    body.results.forEach(function(person, index){
        text = text + `${(page-1)*10 + index} ${person.name} <br />`;
    })            
    document.querySelector("#doc").innerHTML = text;
})
})
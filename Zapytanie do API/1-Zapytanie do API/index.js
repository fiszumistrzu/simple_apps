console.log(1);
let content = "";
fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
    .then(function (res) { return res.json() }) //parsowanie danych
    .then(function (body) {
        console.log(body)
        const money = body[0].rates.map(function (rate) { 
           content = content + '<option>'+rate.code+'</option>'
            return rate.code })
        console.log(content)
        document.querySelector('select').innerHTML = content;
        console.log(2);
        xd = 3;
    })
console.log(3);
function convertFunction() {
    let money = document.querySelector('input').value;
  
    let zmienna = document.querySelector('select').value;
    fetch('https://api.nbp.pl/api/exchangerates/rates/A/' + zmienna + '/?format=json')
        .then(function (res) {
            return res.json()
        })
        .then(function (xd) {
            console.log(xd)
            const Crate = xd.rates[0].mid
            console.log(Crate)
            console.log(money)
            document.querySelector('div h2').innerHTML = money * Crate + " zł";
        })
}
document.querySelector('button').addEventListener('click', function () {
    convertFunction()
})
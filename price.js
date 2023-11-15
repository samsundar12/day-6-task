let baseFee = 30
let cities = ["Madurai","Chennai","Trichy"]
let uberRates = [10,30,50]

let customerName = "sam"
let customerCity = "Madurai"
console.log("Hello",customerName+ ", Welcome to the uber Rate")
 function getRate(){
function uberRate(customerCity, index){
    let finalRate=(uberRates[index])*baseFee
    return finalRate
}
console.log(customerCity,"rate is:",uberRate(customerCity,cities.indexOf(customerCity)))

 }
 getRate(customerCity)
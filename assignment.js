function kilometerToMeter(km) {
    var meter = km * 1000;
    var x = meter.toFixed(1);
    return x;
}
var result = kilometerToMeter(8);
console.log(result);



function budgetCalculator(watch, mobile , laptop) {
    var firstProduct = watch * 50;
    var seconedProduct = mobile * 100;
    var thirdProduct = laptop * 500;
    var total = firstProduct + seconedProduct + thirdProduct;
    return total;
}
count = budgetCalculator(100,4,1);
console.log(count);


function hotelCost(day) {
    var total = 0;
    if (day <= 10){
        total = day * 100;
    }
    else if (day <= 20) {
        var cost10Day = 10 * 100;
        var remaining = day - 10;
        var cost20Day = remaining * 80;
        total = cost10Day + cost20Day;
    }
    else {
        var cost10Day = 10 * 100;
        var cost20Day = 10 * 80;
        var remaining = day - 20;
        var costAfter20Day = remaining * 50;
        total = cost10Day + cost20Day + costAfter20Day;
    }
    return total;
}
var count = hotelCost(45.5);
console.log(count);




function megaFriend (friends) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < friends.length; i++){
        if (friends[i].length > lgth) {
            var lgth = friends[i].length;
            longest = friends[i];
        }
    }
    return longest;
}
result = megaFriend(["rahatosman", "jaber" , "akib"])
console.log(result);
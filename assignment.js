// https://github.com/RAHATosman/assignment-js


// problem No- 1
function kilometerToMeter(km) {
    var x = Math.abs(km);
    var meter = x * 1000;

    return meter;
}
var result = kilometerToMeter(4);
console.log(result);


// problem No- 2
function budgetCalculator(watch, mobile , laptop) {
    var firstProduct = watch * 50;
    var seconedProduct = mobile * 100;
    var thirdProduct = laptop * 500;
    var total = Math.abs(firstProduct) + Math.abs(seconedProduct) + Math.abs(thirdProduct);
    return total;
}
count = budgetCalculator(20,20,25);
console.log(count);

// problem No- 3
function hotelCost(x) {
    var day = Math.abs(x);
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
var count = hotelCost(-7);
console.log(count);



// problem No- 4
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
result = megaFriend(["mahbub", "jaber" , "akib"])
console.log(result);
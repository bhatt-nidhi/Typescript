var number = 8;
var flag = true;
if (number == 0) {
    console.log("it is not prime number");
}
else if (number > 1) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0)
            flag = false;
    }
}
if (flag == false) {
    console.log("it is not a prime number");
}
else
    ("it is a prime number");

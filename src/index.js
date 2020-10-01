module.exports = function toReadable (num) {
        var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    var numString = num.toString();

    if (num === 0) return "zero";

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length == 2) {
        return tens[numString[0]] + " " + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return ones[numString[0]] + " hundred";
        else
            return (
                ones[numString[0]] +
                " hundred " +
                toReadable(+(numString[1] + numString[2]))
            );
    }
  
}

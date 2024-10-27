function შემოწმება(num) {
    const square = num * num;
    if (square > 100) {
        console.log("მეტია 100-ზე.");
    } else {
        console.log("ნაკლებია 100-ზე.");
    }
}

function შემოწმება2(num) {
    if (num > 50 && num < 100) {
        console.log("50-ზე მეტია.");
    } else {
        console.log("100-ზე ნაკლებია");
    }
}

function ნულიათუუარყოფითი(num) {
    if (num <= 0) {
        console.log("0-ის ტოლია.");
    } else {
        console.log("უარყოფითია");
    }
}

function პერიმეტრისშემოწმება(length, width) {
    const perimeter = 2 * (length + width);
    if (perimeter > 50) {
        console.log("პერიმეტრი 50-ზე მეტია.");
    } else {
        console.log("პერიმეტრი 50-ზე ნაკლებია.");
    }
}

შემოწმება(11);
შემოწმება2(75);
ნულიათუუარყოფითი(-5);
პერიმეტრისშემოწმება(15, 20);

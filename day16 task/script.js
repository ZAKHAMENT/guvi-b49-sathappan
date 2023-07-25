function independenceCount(callback) {
    console.log("Let's Begin The Countdown For Independence Day");

    function count() {
        setTimeout(() => {
            console.log("10");
            callback();
        }, 1000);

        setTimeout(() => {
            console.log("9");
            callback();
        }, 2000);

        setTimeout(() => {
            console.log("8");
            callback();
        }, 3000);

        setTimeout(() => {
            console.log("7");
            callback();
        }, 4000);

        setTimeout(() => {
            console.log("6");
            callback();
        }, 5000);

        setTimeout(() => {
            console.log("5");
            callback();
        }, 6000);

        setTimeout(() => {
            console.log("4");
            callback();
        }, 7000);

        setTimeout(() => {
            console.log("3");
            callback();
        }, 8000);

        setTimeout(() => {
            console.log("2");
            callback();
        }, 9000);

        setTimeout(() => {
            console.log("1");
            callback();
        }, 10000);

        setTimeout(() => {
            console.log("Happy Independence Day !!!");
            callback();
        }, 11000);
    }

    count(callback);
}

independenceCount(function () {
});
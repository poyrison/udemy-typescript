"use strict";
const Test = (sum1, sum2) => {
    const result = sum1 + sum2;
    try {
        return alert(result);
    }
    catch (err) {
        return alert(err);
    }
};

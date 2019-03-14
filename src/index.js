// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const res = {};

    if (currency >= 10000) {
        res.error = "You are rich, my friend! We don't have so much coins for exchange";
        return res;
    }

    if (currency >= 50) {
        res.H = 0;
        while (currency >= 50) {
            res.H++;
            currency -= 50;
        }
    }

    if (currency >= 25) {
        res.Q = 0;
        while (currency >= 25) {
            res.Q++;
            currency -= 25;
        }
    }

    if (currency >= 10) {
        res.D = 0;
        while (currency >= 10) {
            res.D++;
            currency -= 10;
        }
    }

    if (currency >= 5) {
        res.N = 0;
        while (currency >= 5) {
            res.N++;
            currency -= 5;
        }
    }

    if (currency >= 1) {
        res.P = 0;
        while (currency >= 1) {
            res.P++;
            currency -= 1;
        }
    }

return res;
}

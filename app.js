slowMath.add(6,2)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        return slowMath.multiply(sum, 2);
    }).then((product) => {
        console.log(`Multiplyed by 2 is ${product}`);
        return slowMath.divide(product,4);
    }).then((quotient) => {
        console.log(`Dividing by 4 is ${quotient}`);
        return slowMath.subtract(quotient, 3);
    }).then((difference) => {
        console.log(`Subtracting by 3 is ${difference}`);
        return slowMath.add(difference, 98);
    }).then((sum) => {
        console.log(`Adding 98 is ${sum}`);
        return slowMath.remainder(sum, 2);
    }).then((remainder) => {
        console.log(`Remainder divided by 2 is ${remainder}`);
        return slowMath.multiply(remainder, 50);
    }).then((quotient) => {
        console.log(`Multiplying by 50 is ${quotient}`);
        return slowMath.remainder(quotient, 40);
    }).then((remainder) => {
        console.log(`Remainder by 40 is ${remainder}`);
        return slowMath.add(remainder, 32);
    }).then((sum) => {
        console.log(`Sum of 32 is ${sum}`);
        console.log("And the final result!");
    })
    .catch((err) => {
        console.log("Something is not right!")
        console.log(err);
    });


async function doMath(x, y) {
    try {
        const a = await slowMath.add(x, y);
        const b = await slowMath.multiply(a, 2);
        const c = await slowMath.divide(b, 4);
        const d = await slowMath.subtract(c, 3);
        const e = await slowMath.add(d, 98);
        const f = await slowMath.remainder(e, 2);
        const g = await slowMath.multiply(f, 50);
        const h = await slowMath.remainder(g, 40);
        const i = await slowMath.add(h, 32);
        return console.log(`Results are ${i} `);
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}

doMath(6, 2);



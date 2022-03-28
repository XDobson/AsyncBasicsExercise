// ASYNC BASICS EXERCISE
// 1
let name1 = "Luke Skywalker";

function lukeName() {
    console.log(`Question 1`);
    console.log(name1);
}

function luke(n, callback) {
    setTimeout(() => {
        name1 = n;
        callback()
    }, 1000);
}
luke(`Mark Hamill`, lukeName);

// 2
let name2 = "Han Solo";

function hanName() {
    console.log(`Question 2`);
    console.log(name2);
}

function han(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name2 = n;
            resolve();
        }, 2000);
    });
}

han('Harrison Ford')
.then(hanName)


// 3
let name3 = "Leia Organa";

function leiaName() {
    console.log(`Question 3`);
    console.log(name3);
}

function leia(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name3 = n;
            resolve();
        }, 3000);
    });
}

async function carrieFisher() { 
    await leia("Carrie Fisher")
    leiaName();
}
carrieFisher()


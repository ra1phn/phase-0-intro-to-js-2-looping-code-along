function writeCards(names) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message);
    }
    return messages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

console.log(countDown(10));
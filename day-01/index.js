const panic = (text) => {
    const textUpperCase = text.toUpperCase();
    const panicked = textUpperCase.replaceAll(' ', ' 😱 ');

    return `${panicked}!`
}

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))
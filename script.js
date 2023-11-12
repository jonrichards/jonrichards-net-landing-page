// Define a function that returns a promise that resolves after a given number of milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Define a function that returns a random integer between a minimum and maximum value
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Define a function that generates HTML links from an array of link objects
function generateLinks(linksArray) {
    let linksHTML = '';

    for (const link of linksArray) {
        const { name, url, title } = link;
        const linkHTML = `<a href="${url}" title="${title}">${name}</a>`;
        linksHTML += linkHTML;
    }

    return linksHTML;
}

// Define an async function that simulates a typewriter effect by adding characters to an HTML element one at a time
async function typewriterEffect(inputString, elementId, cursor) {
    const element = document.getElementById(elementId);
    const min_speed = 50;
    const max_speed = 250;

    // Wait for a short period of time before starting the typewriter effect
    await sleep(max_speed * 5);

    // Add each character of the input string to the HTML element one at a time
    for (let i = 0; i < inputString.length; i++) {
        const char = document.createTextNode(inputString.charAt(i));
        element.insertBefore(char, cursor);
        await sleep(getRandomInteger(min_speed, max_speed));
    }
}

// Define an immediately invoked async function expression that simulates a command line interface
(async () => {
    // Define some variables for the command line interface
    const prompt = '<prompt>jon-richards-net$</prompt> ';
    const element1 = 'command1';
    const command1 = 'whoami';
    const element2 = 'command2';
    const command2 = 'ls -G';
    const element3 = 'command3';
    const links = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com', title: 'LinkedIn' },
        { name: 'GitHub', url: 'https://www.github.com', title: 'GitHub' }
    ];

    // Create a cursor element for the first command line interface element
    const cursor1 = document.createElement('span');
    cursor1.className = 'cursor1';
    cursor1.textContent = '|';

    // Add the cursor element to the first command line interface element and simulate typing the first command
    let element = document.getElementById(element1);
    if (element != null) {
        element.innerHTML = prompt;
        element.appendChild(cursor1);
        await typewriterEffect(command1, element1, cursor1);

        // Display the response to the first command and remove the cursor element from the first command line interface element
        document.getElementById('response1').innerHTML = 'Jon Richards';
        element.removeChild(cursor1);

        // Create a cursor element for the second command line interface element
        const cursor2 = document.createElement('span');
        cursor2.className = 'cursor2';
        cursor2.textContent = '|';

        // Add the cursor element to the second command line interface element and simulate typing the second command
        element = document.getElementById(element2);
        element.innerHTML = prompt;
        element.appendChild(cursor2);
        await typewriterEffect(command2, element2, cursor2);

        // Display the response to the second command and remove the cursor element from the second command line interface element
        document.getElementById('response2').innerHTML = generateLinks(links);
        element.removeChild(cursor2);

        // Create a cursor element for the third command line interface element
        const cursor3 = document.createElement('span');
        cursor3.className = 'cursor3';
        cursor3.textContent = '|';

        // Add the cursor element to the third command line interface element and simulate typing the third command
        element = document.getElementById(element3);
        element.innerHTML = prompt;
        element.appendChild(cursor3);
    }
})();

if (typeof exports !== 'undefined') {
    module.exports = {
        sleep,
        getRandomInteger,
        generateLinks,
        typewriterEffect
    };
}

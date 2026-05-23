const PROMPT_HTML = '<span class="prompt">jon@richards:~$</span> ';
const INITIAL_PAUSE_MS = 600;
const MIN_TYPE_SPEED_MS = 50;
const MAX_TYPE_SPEED_MS = 250;

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function sleep(ms) {
    if (REDUCED_MOTION) return Promise.resolve();
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function appendLinks(parent, linksArray) {
    for (const link of linksArray) {
        const a = document.createElement('a');
        a.href = link.url;
        a.title = link.title;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.name;
        parent.appendChild(a);
    }
}

async function typewriterEffect(inputString, element, cursor) {
    await sleep(INITIAL_PAUSE_MS);
    for (const char of inputString) {
        element.insertBefore(document.createTextNode(char), cursor);
        await sleep(getRandomInteger(MIN_TYPE_SPEED_MS, MAX_TYPE_SPEED_MS));
    }
}

async function typeCommand(elementId, command) {
    const element = document.getElementById(elementId);
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '█';
    element.innerHTML = PROMPT_HTML;
    element.appendChild(cursor);
    if (command) {
        await typewriterEffect(command, element, cursor);
        element.removeChild(cursor);
    }
}

function formatLastLogin() {
    const d = new Date();
    const dayMonth = d.toDateString().split(' ').slice(0, 3).join(' ');
    const time = d.toTimeString().slice(0, 8);
    return `Last login: ${dayMonth} ${time} on ttys001`;
}

(async () => {
    const links = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jon-richards-7b117b1a', title: 'LinkedIn' },
        { name: 'GitHub', url: 'https://github.com/jonrichards', title: 'GitHub' }
    ];

    // Static HTML carries the final content for crawlers and no-JS users;
    // wipe it before the animation so JS users see the typewriter from blank.
    for (const id of ['command1', 'response1', 'command2', 'response2', 'command3']) {
        document.getElementById(id).textContent = '';
    }

    document.getElementById('lastlogin').textContent = formatLastLogin();

    await typeCommand('command1', 'whoami');
    document.getElementById('response1').textContent = 'Jon Richards';

    await typeCommand('command2', 'ls -G');
    const response2 = document.getElementById('response2');
    response2.textContent = '';
    appendLinks(response2, links);

    await typeCommand('command3', '');
})();

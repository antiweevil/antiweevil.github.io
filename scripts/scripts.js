const r = document.querySelector(':root');
let n = 2;

const KEY_HANDLERS = {
    KeyE: () => {
        r.style.setProperty('--debug', `${n}px`);
        n = 2-n;
    },
};

document.addEventListener('keydown', (e) => {
    //e.preventDefault();

    const handler = KEY_HANDLERS[e.code];

    if (handler) {
        //handler(); // Debug only
        //return;
    }

    //console.log('Pressed a key without a handler.')
});
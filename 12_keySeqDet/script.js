const pressed = [];
const secret = 'wesbos';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secret.length - 1, pressed.length - secret.length);
    pressed.join('');
    if (pressed.join('') === secret) {
        console.log('DING! DING!');
        cornify_add();
    }
});
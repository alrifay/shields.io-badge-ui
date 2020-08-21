const options = {
    label: 'hello',
    value: 'world',
    color: '#1DA1F2',
    style: undefined,
};

function setOption(key, value) {
    options[key] = value.trim();
    console.log(options);
}

function generateImage(imageEl, imageUrlEl) {
    // https://img.shields.io/badge/Mohammed-right-blue?style=for-the-badge&logo=twitter
    let imageUrl = `https://img.shields.io/badge/${options.label}-${options.value}-${options.color.slice(1)}.svg`;
    query = '';
    if (options.style) {
        query += `style=${options.style}`;
    }
    if (query) {
        imageUrl = imageUrl + '?' + query;
    }
    imageEl.src = imageUrl;
    imageUrlEl.value = imageUrl;
}

function start() {
    const labelEl = document.getElementById('label');
    const valueEl = document.getElementById('value');
    const colorEl = document.getElementById('color');
    const styleEl = document.getElementById('style');
    const imageEl = document.getElementById('badge');
    const imageUrlEl = document.getElementById('image-url');
    const generateBtn = document.getElementById('generate');
    labelEl.value = options.label;
    valueEl.value = options.value;
    colorEl.value = options.color;
    generateImage(imageEl, imageUrlEl);
    labelEl.addEventListener('input', (e) => setOption('label', e.target.value));
    valueEl.addEventListener('input', (e) => setOption('value', e.target.value));
    colorEl.addEventListener('input', (e) => setOption('color', e.target.value));
    styleEl.addEventListener('input', (e) => setOption('style', e.target.value));
    generateBtn.addEventListener('click', () => generateImage(imageEl, imageUrlEl));
}

window.addEventListener('DOMContentLoaded', start);

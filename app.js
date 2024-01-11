const brightnessBar = document.getElementById('brightness-bar');
const contrastBar = document.getElementById('contrast-bar');
const saturationBar = document.getElementById('saturation-bar');
const hueBar = document.getElementById('hue-bar');
const blurBar = document.getElementById('blur-bar');
const image = document.querySelector('.image');

const updatesFilters = () => {
    image.style.filter = `brightness(${brightnessBar.value}%) 
    contrast(${contrastBar.value}%) 
    saturate(${saturationBar.value}%) 
    hue-rotate(${hueBar.value}deg) 
    blur(${blurBar.value}px)`;
};

[brightnessBar, contrastBar, saturationBar, hueBar, blurBar].forEach((bar) => {
    bar.addEventListener('input', updatesFilters);
})



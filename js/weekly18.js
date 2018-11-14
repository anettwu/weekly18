const bar1 = document.querySelector('#progress-bar1');
const bar2 = document.querySelector('#progress-bar2');
const bar3 = document.querySelector('#progress-bar3');
const bar4 = document.querySelector('#progress-bar4');
const designValue = 80;
const photoValue = 65;
const marketingValue = 50;
const brandingValue = 30;

function progressBar(value, bar) {
    let width = 0;
    const interval = setInterval(progress, 10);

    function progress() {
        if (width >= value) clearInterval(interval);
        else {
            width++;
            bar.style.width = `${width}%`;
        }
    }
}
// scroll
const heightSectionAbout = document.querySelector('.about').clientHeight;
const begginingSectionAbout = document.querySelector('.about').offsetTop;
const windowHeight = window.innerHeight;

function checkPositionScroll() {
    const scrollHeight = window.scrollY;
    if (scrollHeight >= begginingSectionAbout + heightSectionAbout * 0.7 - windowHeight) {
        progressBar(designValue, bar1);
        progressBar(photoValue, bar2);
        progressBar(marketingValue, bar3);
        progressBar(brandingValue, bar4);
        this.removeEventListener('scroll', checkPositionScroll)
    }
}

window.addEventListener('scroll', checkPositionScroll)
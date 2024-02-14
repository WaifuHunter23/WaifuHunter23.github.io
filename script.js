const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const YesBtn = document.querySelector('.yes-btn');
const NoBtn = document.querySelector('.no-btn');

YesBtn.addEventListener("click", () => {
    question.innerHTML = "Wiiiiii, te amo demasiado mi niña bonita :3";
    gif.src = "img2.gif"
});

NoBtn.addEventListener('mouseover', () => {
    const NoBtnRect = NoBtn.getBoundingClientRect();
    const maxX = window.innerWidth - NoBtnRect.width;
    const maxY = window.innerHeight - NoBtnRect.height;

    const ramdonX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    NoBtn.style.left = ramdonX + 'px';
    NoBtn.style.top = randomY + 'px';
})
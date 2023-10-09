'use strict';

const btnsDark = document.querySelectorAll('.btnDark');
const btnsLight = document.querySelectorAll('.btnLight');
const btnStart = document.querySelectorAll('.btnStart');

btnsDark.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.remove('btnDark');
        btn.classList.add('btnLight');
    });
    
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('btnLight');
        btn.classList.add('btnDark');
    });
});
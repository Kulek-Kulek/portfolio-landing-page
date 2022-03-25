import react from '../../../../Assets/Images/svg/react.svg';
import html from '../../../../Assets/Images/svg/html5.svg';
import angular from '../../../../Assets/Images/svg/angular.svg';
import css from '../../../../Assets/Images/svg/css.svg';
import mongodblogo from '../../../../Assets/Images/svg/mongodbleaf.svg';
import bootstrap from '../../../../Assets/Images/svg/bootstrap.svg';
import javascript from '../../../../Assets/Images/svg/javascript.svg';
import typescript from '../../../../Assets/Images/svg/typescript.svg';
import node from '../../../../Assets/Images/svg/node.svg';
import nodelogo from '../../../../Assets/Images/svg/nodelogo.svg';
import sass from '../../../../Assets/Images/svg/sass.svg';
import github from '../../../../Assets/Images/svg/github.svg';



const STACK = [react, angular, css, bootstrap, javascript, typescript, node, mongodblogo, html, nodelogo, sass, github];

export const createStackImage = () => {

    const section = document.querySelector('.welcome__section');

    const div = document.createElement('div');
    div.setAttribute('class', 'welcome__stack-wrapper');

    const img = document.createElement('img')

    img.setAttribute('src', STACK[Math.floor(Math.random() * STACK.length)]);
    img.setAttribute('class', 'welcome__stack-img');

    div.appendChild(img);


    let size = Math.random() * 150;

    div.style.width = size + 'px';
    div.style.height = size + 'px';

    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;

    div.style.top = Math.random() * sectionHeight - size + 'px';
    div.style.left = Math.random() * sectionWidth - size + 'px';

    section.appendChild(div);

    setTimeout(() => {
        img.remove();
        div.remove();
    }, 10000);
}
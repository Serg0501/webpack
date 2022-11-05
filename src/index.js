import _ from 'lodash';
import './style.scss';
import Icon from './png-icon.jpeg';

 function component() {
   const element = document.createElement('div');
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('red');

   // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

   return element;
 }

 document.body.appendChild(component());
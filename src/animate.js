import {inject} from 'aurelia-framework';
import {CssAnimator} from '../node_modules/aurelia-animator-css/dist/amd/aurelia-animator-css';
@inject(CssAnimator, Element)
export class Animate {
	constructor(animator, element){
		this.animator = animator;
		this.element = element;
	}	
	animateElement() {
	  var myElement = this.element.querySelector('.myElement');
	  this.animator.animate(myElement, 'myAnimation');
	}
}
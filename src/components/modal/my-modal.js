import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class Prompt {

   constructor(controller,index) {
      this.controller = controller;
      this.answer = null;
      this.index=controller.settings.index;

      controller.settings.centerHorizontalOnly = true;
   }

   activate(message) {
      this.message = message;
   }

   
}
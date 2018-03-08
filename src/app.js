import { inject } from 'aurelia-framework';
import { DependencyTest } from './dependency-test';
import { EventAggregator } from 'aurelia-event-aggregator';
// Path is important ||| 
import { CssAnimator } from '../node_modules/aurelia-animator-css/dist/amd/aurelia-animator-css';
import { DialogService } from 'aurelia-dialog';
import { Prompt } from './components/modal/my-modal';

@inject(DialogService)
@inject(CssAnimator, Element)
@inject(EventAggregator)
@inject(DependencyTest)

export class App {
	//#region  Router	
	configureRouter(config, router) {
		config.title = 'Aurelia';
		config.map([
			{
				route: ['', 'home'], name: 'home',
				moduleId: './components/home/home', nav: true, title: 'Home'
			},
			{
				route: 'about', name: 'about',
				moduleId: './components/about/about', nav: true, title: 'About'
			}
		]);

		this.router = router;
	}
	//#endregion

	// FOR EVENT AGREGATOR constructor(eventAggregator)
	// FOR DEPENDENCY TEST constructor(DependencyTest)
	// FOR ANIMATOR constructor(animator, element)
	constructor(dialogService, animator, element) {
		this.dialogService = dialogService;
		this.updateDate();
		setInterval(() => this.updateDate(), 1000);
		this.firstHeaderAndContent();
		this.theNum = 1234567.89;
		// FOR EVENT AGREGATOR this.eventAggregator = eventAggregator;
		this.email = "";
		this.password = "";
		this.isChecked = false;
		this.options = [
			{ id: 1, text: 'First' },
			{ id: 2, text: 'Second' },
			{ id: 3, text: 'Third' }
		];
		this.selectedOption = this.options[0];
		this.user = "EMAIL : example@example.com ||| PASSWORD : ******* ";
		this.signups=[];
		//FOR DEPENDENCY TEST console.log(DependencyTest);
		//FOR ANIMATOR 
		//this.animator = animator;
		//this.element = element;

	}

	goBack() {
		history.back();
	}

	goForward() {
		history.forward();
	}

	openModal(index) {
		this.dialogService.open({ viewModel: Prompt, model: 'Are you sure?' }).whenClosed().then(response => {
			console.log(response);

			if (!response.wasCancelled) {
				console.log('OK');
				this.signups.splice(index,1);

			} else {
				console.log('cancelled');
			}
			console.log(response.output);
		});
	}

	updateContent() {
		this.header = 'This is NEW header...';
		this.content = 'This is NEW content...';
		this.style1 = "background-color:black;border:1px solid red;width:30%;text-align:center;margin: 0px 5px 0 5px;color:white";
	}

	updateDate() {
		this.theDate = new Date();
		this.theNum = Math.random() * 100000;
	}

	firstHeaderAndContent() {
		this.header = "This is header...";
		this.content = "This is content...";
		this.style1 = "background-color:white;border:1px solid black;width:30%;text-align:center;margin: 0px 5px 0 5px;";
		this.SubmitMessage1 = " SHOW ";
		this.SubmitMessage2 = " SHOW ";
		this.SubmitMessage3 = " SHOW ";
		this.SubmitMessage4 = " Checked ";
	}

	myFunction() {
		this.SubmitMessage3 = "The function is triggered...";
	}

	delete(index){
		this.signups.splice(index,1);
	}

	signup() {
		var theNum = Math.random() * 100000;
		var myUser = { email: this.email, password: this.password ,randomNumber:theNum}
		this.user = "EMAIL : " + this.email + " ||| PASSWORD : " + this.password;
		if(this.email != "" && this.password !=""){
			this.signups.push(myUser);
			this.email="";
			this.password="";
			this.showMessage="Success !!!!";
		}else{
			if(this.email == "" && this.password !=""){
				this.showMessage="Email cann't be empty !!!";
			}else if(this.email != "" && this.password == ""){
				this.showMessage="Password cann't be empty  !!!";
			}else{
				this.showMessage="Email and Password cann't be empty  !!!";
			}
			console.error("Error ocured");
		}
	}

	submit1() {
		if (this.isChecked) {
			this.SubmitMessage1 = " Checked ";
		} else {
			this.SubmitMessage1 = " Not Checked";
		}
	}

	submit2() {
		this.SubmitMessage2 = this.selectedOption.id;
	}

}

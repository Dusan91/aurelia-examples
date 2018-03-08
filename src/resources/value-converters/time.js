import moment from '../../../node_modules/moment/moment';
export class TimeValueConverter {
  toView(value) {
	return moment(value).format(' h:mm:ss a ');
  }
}


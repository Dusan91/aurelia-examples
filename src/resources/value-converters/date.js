import moment from '../../../node_modules/moment/moment';
export class DateValueConverter {
  toView(value) {
	return moment(value).format('DD-MMMM-YYYY');
  }
}


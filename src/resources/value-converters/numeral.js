import numeral from '../../../node_modules/numeral/numeral';
export class NumeralValueConverter {
  toView(value) {
	return numeral(value).format('0,00.00');
  }
}


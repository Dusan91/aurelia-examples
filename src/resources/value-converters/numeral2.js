import numeral from '../../../node_modules/numeral/numeral';
export class Numeral2ValueConverter {
  toView(value,format) {
	return numeral(value).format(format);
  }
}


//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(data) {
    this._rows = data.split('\n').map(line => line.split(' ').map(Number));
    this._columns = this._rows[0].map((x, index) => this._rows.map(row => row[index]));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}

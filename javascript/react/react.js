//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { runInThisContext } from "vm";

class Publisher {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish() {
    this.subscribers.forEach(subscriber => {
      subscriber.subscribe(this);
    });
  }
}

export class InputCell extends Publisher {
  constructor(value) {
    super();
    this.value = value;
  }

  setValue(value) {
    this.value = value;
    this.publish();
  }
}

export class ComputeCell extends Publisher {
  constructor(inputCells, fn) {
    super();
    this.inputCells = inputCells;
    this.fn = fn;
    this.value = null;
    this.callbacks = [];
    this.inputCells.forEach(inputCell => {
      inputCell.addSubscriber(this);
    });
    this.subscribe();
  }

  setValue() {
    const newValue = this.fn(this.inputCells);
    if (this.value !== newValue) {
      this.value = newValue;
      return true;
    }
    return false;
  }

  subscribe(publisher) {
    const valueChanged = this.setValue();
    this.publish();
    if (valueChanged) {
      const inputCellsAllComputed = publisher === this.inputCells[this.inputCells.length - 1];
      if (inputCellsAllComputed) {
        this.callbacks.forEach(callback => {
          callback.callbackFunc(this);
        });
      }
    }
  }

  addCallback(cb) {
    this.callbacks.push(cb);
    cb.setValue(this);
  }

  removeCallback(cb) {
    this.callbacks = this.callbacks.filter(callback => callback !== cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.value = null;
    this.values = [];
    this.isStaticCallback = this.fn.length === 0;
  }

  setValue(cell) {
    if (this.fn.length !== 0) {
      const newValue = this.fn(cell);
      if (this.value !== newValue) {
        this.value = newValue;
        return true;
      }
    }
    return false;
  }

  callbackFunc(cell) {
    const valueChanged = this.setValue(cell);
    if (this.isStaticCallback || valueChanged) {
      this.values.push(this.fn(cell));
    }
  }
}

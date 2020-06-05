'use strict';

class MeetingRoom {
  constructor() {
    this.occupied = 0
  }

  getAvailability() {
    return this.occupied;
  }

  enter() {
    if (this.occupied == 1) {
      throw 'Meeting already occupied'
    }
    else {
      this.occupied += 1
    }
  }

  exit() {
    this.occupied
  }

  changeName(chosen_name) {
    let meetingroomname = chosen_name
    return meetingroomname
  }
};

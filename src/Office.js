class Office extends MeetingRoom {

  constructor() {
    super();
    this.addedrooms = [];
  }

  addRoom(room) {
    return this.addedrooms.push(room)
  }
  ShowAllRooms(room) {
    return this.addedrooms
  }
  showAvailableRooms(room) {
    if(this.addedrooms.length > this.occupied) {
      return 'Rooms available'
    }
    else {
      return 'Rooms occupied'
    }
  }
};

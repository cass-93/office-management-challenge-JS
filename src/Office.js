class Office {

  constructor() {
    this.addedrooms = [];
  }

  addRoom(room) {
    return this.addedrooms.push(room)
  }
  ShowAllRooms(room) {
    return this.addedrooms
  }
}

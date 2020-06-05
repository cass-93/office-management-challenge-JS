
describe('Office', function() {
  var office;

  beforeEach(function() {
    office = new Office();
    room = new MeetingRoom();
  });

  it('can have meeting rooms added', function() {
    expect(office.addRoom(room)).toEqual(1)
  });
  it ('can return all meeting rooms added', function() {
    office.addRoom(room);
    office.addRoom(room);
    expect(office.ShowAllRooms(room)).toEqual([room, room])
  });
  // it ('shows available meeting room', function () {
  //   room.getAvailability();
  //   expect(office.ShowAllRooms(room)).toEqual(0)



  });
});

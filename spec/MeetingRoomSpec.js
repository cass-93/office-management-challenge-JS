describe ('MeetingRoom', function() {
  var meetingroom;

  beforeEach(function() {
    meetingroom = new MeetingRoom();
  });

  it('has an available meeting room by default', function() {
    expect(meetingroom.getAvailability()).toEqual(0)
  });
  it('becomes unavailable by enter', function() {
    meetingroom.enter();
    expect(meetingroom.getAvailability()).toEqual(1)
  });
  it ('becomes available by exit', function() {
    meetingroom.exit();
    expect(meetingroom.getAvailability()).toEqual(0)
  })
  it ('displays an error when meeting room is already occupied', function() {
    meetingroom.enter();
    expect(function(){ meetingroom.enter(); }).toThrow('Meeting already occupied');
  })
  it ('can be named by a staff memeber', function() {
    expect(meetingroom.changeName('Aint Laurent')).toEqual('Aint Laurent');
  });
});

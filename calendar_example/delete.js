function deleteCalEvent(event_id) {
    gapi.client.load('calendar', 'v3', function() {
        var request = gapi.client.calendar.events.delete({
            'calendarId': 'xxxxxxxxxxxxxxx',
            'eventId': event_id
        });
        request.execute(function(response) {
            if(response.error || response == false){
                alert('Error');
            }
            else{
                alert('Success');               
            }
        });
    });
}
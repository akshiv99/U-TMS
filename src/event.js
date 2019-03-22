var request;

function eventCreation(rows) {
  for (var i = 0; i < rows.length; i++) {

      var event = {
        'id': rows[i].SUBJECT_CODE + " " + rows[i].COURSE_NUMBER,
        'summary': rows[i].COURSE_TITLE,
        'location': '',
        'description': rows[i].INSTRUCTOR + ", " + rows[i].METHOD + ", " + rows[i].TYPE ,
        'start': {
          'dateTime': '2019-03-18T' + rows[i].TIME_FROM.toString().substring(0, 2) + ":" + rows[i].TIME_FROM.toString().substring(2, rows[i].TIME_FROM.length) + ":00",
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2019-03-18T' + rows[i].TIME_FROM.toString().substring(0, 2) + ":" + rows[i].TIME_FROM.toString().substring(2, rows[i].TIME_FROM.length) + ":00",
          'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
          'RRULE:FREQ=WEEKLY;COUNT=2'
        ]
      };
      eventId = event.id;    

        request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        });

        request.execute(function() {
          appendPre('Event created!');
        });
      }
}


function deleteCalEvent(eventId) {
    gapi.client.load('calendar', 'v3', function() {
        var request = gapi.client.calendar.events.delete({
            'calendarId': 'primary',
            'eventId': eventId
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

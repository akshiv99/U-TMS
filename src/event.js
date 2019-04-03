var request;
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function eventCreation(rows) {
  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i]);
      var event = {
        'id': 'event275' + i,
        'summary': rows[i].COURSE_TITLE,
        'location': 'Drexel',
        'description': rows[i].INSTRUCTOR + ", " + rows[i].METHOD + ", " + rows[i].TYPE ,
        'start': {
          'dateTime': '2019-03-' + (17+weekdays.indexOf(rows[i].DAYS)) + 'T' + rows[i].TIME_FROM.toString().substring(0, 2) + ":" + rows[i].TIME_FROM.toString().substring(2, rows[i].TIME_FROM.length) + ":00",
          'timeZone': 'America/New_York'
        },
        'end': {
          'dateTime': '2019-03-' + (17+weekdays.indexOf(rows[i].DAYS)) + 'T' + rows[i].TIME_TO.toString().substring(0, 2) + ":" + rows[i].TIME_TO.toString().substring(2, rows[i].TIME_TO.length) + ":00",
          'timeZone': 'America/New_York'
        }
      };
  
      
          $('#CRN').append(rows[i].CRN + '\n');

          request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });

          request.execute(function() {
            appendPre(' ');
          });
}}

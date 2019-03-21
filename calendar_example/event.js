var request;
setTimeout( function(){
  request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });
 }, 1000
);

var event = {
  'summary': 'Google I/O 2019',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2019-03-18T09:00:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2019-03-18T17:00:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'}
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

function createCalEvent(){
  request.execute(function() {
    appendPre('Event created!');
  });
}


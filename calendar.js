// Array of event objects
const events = [
    {
      title: 'Meeting',
      date: new Date('2023-11-29T09:00:00'),
      location: 'Office',
      attendees: new Set(['John', 'Alice', 'Bob']),
      organizer: 'Jane'
    },
    {
      title: 'Lunch',
      date: new Date('2023-12-01T12:30:00'),
      location: 'Restaurant',
      attendees: new Set(['Mary', 'David']),
      organizer: 'Mike'
    },
    // Add more events here
  ];
  
  // Display events happening in the next 7 days
  const next7DaysEvents = events.filter(event => {
    const currentDate = new Date();
    const next7Days = new Date(currentDate.setDate(currentDate.getDate() + 7));
    return event.date <= next7Days;
  });
  
  console.log('Events happening in the next 7 days:');
  console.table(next7DaysEvents);
  
  // WeakMap to store event organizers
  const eventOrganizers = new WeakMap();
  events.forEach(event => {
    eventOrganizers.set(event.title, event.organizer);
  });
  
  // Function to add a new attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
      console.log(`${attendeeName} added to the ${eventTitle} event.`);
    } else {
      console.log(`Event with title ${eventTitle} not found.`);
    }
  }
  
  addAttendee('Meeting', 'Eva');
  
  // Function to convert event array to JSON string
  function eventsToJSON() {
    return JSON.stringify(events, (key, value) => {
      if (key === 'date') {
        return value.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric'
        });
      }
      return value;
    });
  }
  
  console.log('Events as JSON:');
  console.log(eventsToJSON());
  
  // Display properties and values of the first event object
  const firstEvent = events[0];
  console.log('Properties of the first event:');
  console.log(Object.keys(firstEvent));
  console.log('Values of the first event:');
  console.log(Object.values(firstEvent));
  console.log('Entries of the first event:');
  console.log(Object.entries(firstEvent));
  
  // Iterate over events array and log title and date of each event
  console.log('Title and date of each event:');
  events.forEach(event => {
    console.log(`Title: ${event.title}, Date: ${event.date.toLocaleDateString()}`);
  });
  
  // Bonus: Functionality to delete events from the array
  function deleteEvent(eventTitle) {
    const index = events.findIndex(event => event.title === eventTitle);
    if (index !== -1) {
      events.splice(index, 1);
      console.log(`Event with title ${eventTitle} deleted.`);
    } else {
      console.log(`Event with title ${eventTitle} not found.`);
    }
  }
  
  deleteEvent('Lunch');
  
  // Bonus: Function to find event with most attendees using reduce
  const eventWithMostAttendees = events.reduce((maxEvent, event) => {
    return event.attendees.size > maxEvent.attendees.size ? event : maxEvent;
  });
  
  console.log('Event with most attendees:');
  console.log(eventWithMostAttendees);
  
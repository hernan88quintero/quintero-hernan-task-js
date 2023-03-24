async function getEvents() {
    const response = await fetch('https://amazing-events.herokuapp.com/api/events');
    const data = await response.json();
    return data;
  }
  
  getEvents().then(events => {
    console.log(events);
  }).catch(error => {
    console.error(error);
  });
  
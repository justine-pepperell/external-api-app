import request from 'superagent'

const Url =
  'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NZ&city=wellington&apikey=-------------------'

const unique = (value, index, self) => {
  console.log(value)
  console.log(index)
  console.log(self)
  return self.indexOf(value) === index
}

function searchEventsWellington() {
  return request.get(Url).then((resp) => {
    // console.log(resp.body._embedded.events)
    const allEvents = resp.body._embedded.events.map((event) => {
      return { name: event.name, imgUrl: event.images[0].url }
    })
    const events = allEvents.filter(unique)
    console.log(events)
    return events
  })
}

export { searchEventsWellington }

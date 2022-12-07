
const READ_ALL_VENUE="http://localhost:8081/venue/getAllVenues";

class VenueServiceGet{

  getVenue(){
    return fetch(READ_ALL_VENUE,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res=> res.json()));
  }
};


export default new VenueServiceGet();


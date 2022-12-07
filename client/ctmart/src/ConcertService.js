import axios from "axios";

const CONCERT_BASE_URL = "http://localhost:8081/concert/getAllConcerts";

class ConcertService{
    
    getConcert(){
        return axios.get(CONCERT_BASE_URL);
    }
}

export default new ConcertService() 


const READ_ALL_PERFORMER="http://localhost:8081/performer/getAllPerformers";

class PerformerServiceGet{

  getPerformer(){
    return fetch(READ_ALL_PERFORMER,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res=> res.json()));
  }
};


export default new PerformerServiceGet();



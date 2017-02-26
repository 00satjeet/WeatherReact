var axios=require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=943a33285143114cb755809ab855fb2a&units=metric';
// api  943a33285143114cb755809ab855fb2a
//6aec5df788226eca6c397c41dd17f569
module.exports={
  getTemp:function(location){
    var encodedLocation=encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(res){
        throw new Error(res.data.message);
    });

  }
}

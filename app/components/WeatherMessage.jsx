var React =require('react');
//this.props.location  this.props.temp
/*
var WeatherMessage=React.createClass({
  render: function(){
    var {temp,location}=this.props;

    return (
      <div>
        <h3> hacen {temp} grados aqui en {location}</h3>
      </div>

    );

  }
});

*/
var WeatherMessage=(props)=>{
  var {temp,location}=props;
  return (
    <div>
      <h3> hacen {temp} grados aqui en {location}</h3>
    </div>
  );



}
module.exports=WeatherMessage;

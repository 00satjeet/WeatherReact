var React =require('react');
var Nav =require('Nav');
// div necesario , porque no puede haber dos elementos en la base
/*
var Main=React.createClass({
  render: function(){
    return (
      <div>
        <Nav/>
        <h2>  Main Component </h2>
        {this.props.children}
      </div>


    );

  }
});
*/
var Main=(props)=>{
  return (
    <div>
      <Nav/>
      <h2>  Main Component </h2>
      {props.children}
    </div>


  );
}

module.exports=Main;

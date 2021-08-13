import React from 'react';




class SearchBar extends React.Component{

state={term:"please type here !"}



onFormSubmit=(event)=>{
    event.preventDefault();
    //use that callback function passed as prop from App.
    this.props.onTheSubmit(this.state.term);
    //isko call kartay huway humnay pass kardi state so yeh wapis callback 
    //App kay pass lay jaiye ga state with callback.



}

render(){
return(

<div className="ui segment"> 

    <form onSubmit={this.onFormSubmit} className="ui form">
     <div className="field">
    <label>Image Search</label>

     <input type= "text"  
     value={this.state.term} 
     onChange={(e)=>this.setState({term:e.target.value})}/>

     </div>

    </form>
    
    
 </div>

   );


    };

};

export default SearchBar;

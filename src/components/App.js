import React from 'react';

import SearchBar  from './SearchBar';

import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component{



    
    state={images:[]};
    

//the callback function we will pass as props.
onSearchSubmit=async (term)=>{
//console.log(term);
const response=await unsplash.get('/search/photos',{
//add params in the second paramter of get function 
params:{query:term},

    

})
//what happens with the result 
//console.log(response.data.results);
this.setState({images:response.data.results});

}

    render(){

        return(

            <div className="ui container" style={{marginTop:"10px"}}>
            
            <SearchBar onTheSubmit={this.onSearchSubmit}/>

            <ImageList images={this.state.images}/>

            
            </div>
            
            
            )

    }



}

export default App;


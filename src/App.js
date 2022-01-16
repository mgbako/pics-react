
import React from "react";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
class App extends React.Component {

  state = {images: []}
  
  onFormSubmit = async (term) =>{
    console.log("onFormSubmit:", term);
    const url = `https://api.unsplash.com/search/photos`;
   
    const response = await unsplash.get(url, {
      params: {query: term}
    })
    this.setState({images: response.data.results})
    console.log(response.data.results);
  }

  render(){
    return (
      <div className="ui container" style={{marginTo: '10px'}}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <p>Found: {this.state.images.length} images</p>
        <hr />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
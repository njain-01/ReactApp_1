import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
import './App.css';
class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      duration:0,
      type:""
    };
  }

  async fetchMedia()
  {
  	var timer=(this.state.duration)*1000;
    console.log(timer)
    setTimeout(()=> {
    	axios.get("http://localhost:8081/").then(response => {
    this.setState({ src: response.data.file.src, duration:response.data.duration, type:response.data.file.type });
})
.catch(function(error) {
    console.log(error);
});

    },timer)
  }
  componentDidMount() {
  	
  	this.fetchMedia();
   
  }
  componentDidUpdate() {
    
    this.fetchMedia();
    
  }
  render(){
    if(this.state.type==="video")
    {return (
      <ReactPlayer loop={true} height='100%' width='100%' className="center" playing muted url={"http://localhost:8081/"+this.state.src}  />
    );
}
  	return (
  			<img  className="center" src={"http://localhost:8081/"+this.state.src} />
  		)
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="bg">
      	<Media/>
      </div>
    );
  }
}

export default App;

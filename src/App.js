import React,{Component} from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "LIONEL MESSI",
        bio: "The goat of football ",
        imgSrc: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/09/26/3792476-77139448-2560-1440.jpg",
        profession: "Footballeur international"
      },
      shows: false ,
      timeElapsed: 0,
    };
  }
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState(prevState => ({
          timeElapsed: prevState.timeElapsed + 1
        }));
      }, 1000); 
    }
  
    componentWillUnmount() {
      clearInterval(this.timer)
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeElapsed} = this.state;

    return (
      <div className="person">
       <button onClick={this.toggleProfile}>
          Toggle Profile {show ? 'Off' : 'On'}
        </button>
      {show && (
        <div> 
        <h1>{person.fullName}</h1>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt=""></img>
          <p>{person.profession}</p>
         </div>

      )}  
          <p>Time since mount: {timeElapsed} seconds</p>
         
      </div>
      
    );
  }
}

export default App;
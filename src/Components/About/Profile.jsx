import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "XYZ i",
        location: "Unknown",
      },
    };
   
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Abhishek-Sumn");
    const json = await data.json();
    console.log(json.name);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <>
        <h1>Profile</h1>
        <img src={this.state.userInfo.avatar_url} alt="profileimg" />
        <h3>Name:{this.state.userInfo.name}</h3>
        

      </>
    );
  }
}

export default Profile;

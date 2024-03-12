import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props);
    console.log(props);
    this.state={
       userInfo:{
        name:"Dummy",
        location:"Default",
       }
        // count:0,
        // count2:1,
    }
    console.log("child constructor");
}
async componentDidMount(){
    console.log("child did mount");
    const data= await fetch("https://api.github.com/users/alimdfaiz");
    const json =  await data.json();
    this.setState({
        userInfo:json,
    })
    console.log(json);
}


    render() {
        console.log("child rendered");
        // const {name,location} = this.props;
        // const{count,count2} = this.state;
        const {name,Location,avatar_url} = this.state.userInfo
        return(
             <div>
                                 {/* <h1>Count:{count}</h1>
                <button onClick={()=>{
this.setState({
    userInfo:json,
    count:this.state.count+1,
    count2:this.state.count2+1,
})
                }}>Count increase</button>
                <h1>Count2:{count2}</h1> */}
                {/* <h2>Name{name}</h2>
                <h3>Location:{location}</h3> */}
                <h3>{name}</h3>
                <h3>{Location}</h3>
                <img src={avatar_url}/>
               
            </div>
        )
    }
   
}
export default UserClass;
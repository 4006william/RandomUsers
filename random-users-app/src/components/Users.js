import React, {Component} from 'react'

class Users extends Component {

    state = {
        users:[]
    }

    
      
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }));
  }


    render(){
        return(
            <div>
                {this.state.users.map( (x,i) => {
                    return (
                        <div key={i} class = "eachUser">
                            <div> <h2>{x.name.first +' '+ x.name.last}</h2>  </div>
                            <div class= "profile">
                            <div class='img'><img src={x.picture.large} /></div>
                            <div><p>{x.location.city + ', ' + x.location.state 
                            + ' ' + x.location.postcode}</p></div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            
        )
    }
       
}
    

export default Users;
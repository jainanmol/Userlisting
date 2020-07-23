import React, {Component} from 'react';
import axios from 'axios';
import userData from '../users.json';
import UserPopup from './UserPopup';

class usersList extends Component{
    constructor(props){
        super(props);

        this.state={
          users:[],
          open: false,
          userList:{},
        }
    }

    componentDidMount(){
    console.log('users data', userData.members);
    if(userData.members){
      this.setState({
        users: userData.members,
      });
    }
    }

    getUserData =(data)=>{
      this.setState({
        open:true,
        userList: data,
      })
    }

    render(){
      console.log(this.state.users);
        return(
            <>
            {
              this.state.open && <UserPopup users={this.state.userList} getUserData={this.getUserData} open={this.state.open}/>
            }
             <h3>Users List</h3>
             <table className="table" style={{margin: '2%', width:'80%'}}>
              <tr className="tableHeading">
                <td className="tableCols">User Id</td>
                <td className="tableCols">User Name</td>
                <td className="tableCols">Location</td>
                <td className="activityCell">Activity Period</td>
              </tr>
                {
                  this.state.users.map(data =>{
                  return(  <tr>
                    <td>{data.id} </td>
            <td><button className="userbtn" onClick={()=>{this.getUserData(data)}}>{data.real_name}</button></td>
            <td>{data.tz}</td>
            <>{
              data.activity_periods.map(data =>{
               
               return(
               <>
                <td>
                  {data.start_time}
                </td>
                <td>
                  {data.end_time}
                  </td>
                  </>
               )
              })
                  }
                  </>
            </tr>
                  )
              })
              }
            </table>
  
            </>
        )
    }
}

export default usersList;
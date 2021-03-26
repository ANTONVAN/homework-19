import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";




class SearchEmployeeContainer extends Component {
  state = {
    search: "",
    employees: [],
    results: []
  };

    // When this component mounts, search for users"
  componentDidMount() {
    this.searchUsers();
  }

  searchUsers = query => {
    API.search()
      .then(res => this.setState({ employees: res.data.results, results: res.data.results }))
      .catch(err => console.log(err));
  };




  handleInputChange = event => {
    
    var isAnObject =  function isObject(obj)
          {
              return obj != null && obj.constructor.name === "Object"
          }


          

    const name = event.target.name;
    const value = event.target.value;
  

      const results = this.state.employees.filter(result => {

      for (var key in result) {
        

        if(isAnObject(result[key])) {
        
        }else{
          if(result[key].includes(value.toLowerCase())){

            return result;

          } 
        }
      }
    });

    
    this.setState({
      [name]: value,
      results: results
    });
  
      
  };


  /*handleTableSort = event => {
    const column = event.target;
  }*/
  

  render() {
    return (
      <div>
        <h1> User List Search</h1>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.results}/>
      </div>
    );
  }
}

export default SearchEmployeeContainer;

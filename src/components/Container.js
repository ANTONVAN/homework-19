import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
// import API from "../utils/API";

class SearchEmployeeContainer extends Component {
  state = {
    search: "",
    employees: [],
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    // this.searchGiphy("kittens");
    this.setState({
      search:"", 
      employees: [
      {name:"George", phone:"6441460506", email:"george@mail.com", dob:"15/03/1950"},
      {name:"lucas",  phone:"6441462323", email:"lucas@mail.com", dob:"15/02/1942"},
      {name:"Timothy",phone:"6441121221", email:"timothy@mail.com", dob:"12/01/1965"},
      {name:"Alfred", phone:"6441460545", email:"alfred@mail.com", dob:"29/03/1994"},
      ],

      results: [
      {name:"George", phone:"6441460506", email:"george@mail.com", dob:"15/03/1950"},
      {name:"lucas",  phone:"6441462323", email:"lucas@mail.com", dob:"15/02/1942"},
      {name:"Timothy",phone:"6441121221", email:"timothy@mail.com", dob:"12/01/1965"},
      {name:"Alfred", phone:"6441460545", email:"alfred@mail.com", dob:"29/03/1994"},
      ]
    })

  }



  handleInputChange = event => {
    
    const name = event.target.name;
    const value = event.target.value;
  

      const results = this.state.employees.filter(result => {
      for (var key in result){
        if(result[key].includes(value)){
          return result;
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

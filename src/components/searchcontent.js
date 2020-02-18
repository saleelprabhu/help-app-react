import React,{Component} from 'react';
import {connect} from 'react-redux'
// Presentation Component to display search suggestions
import Suggestions from './suggestions';
// Thunk function for http get search results
import {fetchContent} from '../redux/actions'

class SearchContent extends Component{

    constructor(props) {
        super(props);
        this.state = {formError : ''};
        this.searchText = '';
        this.searchData = this.searchData.bind(this);
      }

    render(){
      return(
        <div>
          <form className="input-group mt-4 ml-4 w-50">
              <input type="text" className="form-control" ref={(value) => this.searchText = value} placeholder="Enter text here..."/>
              <div className="input-group-append">
                  <button className="btn btn-primary" onClick={this.searchData}>Search</button>
              </div>
          </form>
          <b className="text-danger ml-4">{this.state.formError}</b>
          <Suggestions text={this.searchText} results={this.props.contentData}/>
        </div>
      );
    }

/* 
Call function on clicking search button or 'Enter' Key
- Validate if entered text is blank nad return error
- Send Get request on valid text entry - call thunk function
*/

    searchData(event){
      event.preventDefault();
      
      if(!this.searchText.value)
        this.setState({ formError: "Enter text to search" });
      else{
        this.setState({ formError: '' });
        this.props.fetchContent(this.searchText.value);
      }
    }
}

/* 
Map redux store to the component props
*/

const mapStateToProps = state => {
  return {
    contentData: state
  }
}

/* 
Apply Thunk Middleware to the component props
*/

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContent: (text) => dispatch(fetchContent(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContent);
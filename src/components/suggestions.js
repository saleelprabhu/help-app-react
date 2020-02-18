import React, {useState} from 'react';
// Link to display details of searched content
import {Link} from 'react-router-dom'
// Included to setup pagination
import Pagination from './pagination'

/* 
Function returns 
- Loading message : in case axios.get method response is not received
- Error message : in case axios.get method returns error
- Response Data [Valid Content or Empty] based on knowledge base
    No data found
    Content Array
*/

const Suggestions = (props) => {

/*
Below steps are to add Pagination for the searched posts
- Get Index of first and last posts based on current page and posts per page values
- Display only the part of entire posts according to obtained indices
- On click event of page, change the active page number, thereby updating indices and posts to be displayed
- Add Pagination object at the end of page

On pressing back button from display details - returns the first page rather than current page - needs to be fix
*/
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.results.content.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return props.results.loading ? (<li className="d-flex justify-content-between align-items-center ml-4">
            <div className="list-group-item col-4 mt-4 ml-3">Loading...</div>
          </li>) :
          props.results.error ? (<li className="d-flex justify-content-between align-items-center ml-4">
            <b className="list-group-item col-4 mt-4 ml-3 text-danger">{props.results.error}</b>
          </li>) : 
          (props.results.content.length === 0 && props.text.value !== '' && props.text.value !== undefined ) ? 
            (<li className="d-flex justify-content-between align-items-center ml-4">
            <div className="list-group-item col-8 mt-4 ml-3">No Data Found</div>
          </li>) :  (<div>
                      <ul>{
                        currentPosts.map(content => (
                        <li className="d-flex justify-content-between align-items-center mt-4" key={content.id}>
                          <div className="list-group-item col-8">
                            <Link className="navbar-brand w-10" to={'/details/' + content.id}>{content.title}</Link>
                            <div className="text-truncate">{content.content}</div>
                          </div>
                        </li>
                        ))}
                      </ul>
                      {(props.results.content.length > postsPerPage) && <Pagination postsPerPage={postsPerPage} totalPosts={props.results.content.length} paginate = {paginate}/>}
                    </div>)
}

export default Suggestions;
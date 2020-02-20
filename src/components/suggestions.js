import React, {useState} from 'react';
// Link to display details of searched content
import {Link} from 'react-router-dom'
// Included to setup pagination
import Pagination from './pagination'

const Suggestions = (props) => {

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
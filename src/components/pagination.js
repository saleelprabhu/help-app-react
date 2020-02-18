import React from 'react';

/*
Paginate component to add paging in case of multiple search results
Splits the posts per page from total posts and displays the page numbers
*/

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination m-5">
                {pageNumbers.map(number => {
                    return(
                    <li key={number} className="page-item">
                        <b className="page-link" onClick={() => paginate(number)}>{number}</b>
                    </li>
                )})}
            </ul>
        </nav>
    );
}

export default Pagination;
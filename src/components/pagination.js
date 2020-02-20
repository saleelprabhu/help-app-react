import React from 'react';

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
import React from 'react'
import _ from 'lodash'

const Pagination = (props) => {

    const { pageSize, itemsCount, currentPage, handlePageChange} = props;
    
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1)

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    {
                        pages.map(page => (
                        <li className={page === currentPage ? "page-item active": "page-item"} 
                        key={page}
                        onClick={() => handlePageChange(page)}
                        style={{ cursor:'pointer' }}
                        >
                        <span className="page-link">{page}</span>
                        </li>
                        ))
                    }
                </ul>
            </nav>        
        )
}

export default Pagination;

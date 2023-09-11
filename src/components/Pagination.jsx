import React from 'react'
import '../assets/styles/pagination.css'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    let limit = Math.ceil( totalPosts / postsPerPage)


    for (let i = 1; i <= limit; i++) {
        pages.push(i)
    }

    const sum = () => {
        setCurrentPage(currentPage + 1)
    }
    const res = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <div className='container-pagination'>
            <button  onClick={res} disabled={currentPage === 1}> ← </button>
            {
                pages.map((page, i) =>{
                    return <button key={i} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
                })
            }
            <button onClick={sum} disabled={currentPage >= limit}> → </button>
        </div>
    )
}

export default Pagination
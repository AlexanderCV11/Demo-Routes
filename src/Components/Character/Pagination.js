import React from 'react';

function Pagination({nextPage, prevPage, goToPage, page}) {

    let pageButtons =[];
    for(let i = 1; i <= pages; i++){
        pageButtons.push(<button 
                            key = {i} 
                            onClick={()=> goToPage(i)}>
                                {i}
                        </button>)
    }
    return (
        <div>
            {prevPage && (<button onClick = {prevPage}>►</button>)}
            {pageButtons}
            {prevPage && (<button onClick = {nextPage}>◄</button>)}
        </div>
    );
}

export default Pagination;
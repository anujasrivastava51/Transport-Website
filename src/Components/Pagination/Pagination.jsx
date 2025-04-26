import React from 'react'

const Pagination = () => {
  return (
    <>
       <div className="d-flex justify-content-center mt-5 mb-3">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link pagebutton" href="#" tabIndex="-1"  aria-disabled="true">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pagebutton" href="#">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link  pagebtn" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pagebutton" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pagebutton" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

    </>
  )
}

export default Pagination

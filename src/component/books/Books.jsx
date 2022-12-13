import Page1 from "./page1";
    import { NavLink} from "react-router-dom";
import './Books.css'
import {useState} from 'react'


function Books() {
  const [pageNumber, setPageNumber] = useState(1)
  const handlePageLeft = () => {
    if(pageNumber < 2)
      setPageNumber(1)
      else
        setPageNumber(pageNumber - 1)
  }
  const handlePageRight = () => {
    if(pageNumber > 9)
      setPageNumber(10)
      else
        setPageNumber(pageNumber + 1)
  }
  return (
    <>
      <div className="book">
        <div className="book__header">
          <div className="book__nav">
            <ul className="book__nav--list">
              <li className="book__nav--item">
                <NavLink className="book__nav--link" to="/books" onClick={this}>
                  Mới Nhất
                </NavLink>
              </li>
              <li className="book__nav--item">
                <NavLink className="book__nav--link" to="/books" onClick={this}>
                  Bán Chạy
                </NavLink>
              </li>
              <li className="book__nav--item">
                <NavLink className="book__nav--link" to="/books" onClick={this}>
                  Giảm Giá
                </NavLink>
              </li>
            </ul>
            <div className="book__nav--direc">
              <ul className="book__nav__direc--list">
                <li className="book__nav__direc--item" onClick={handlePageLeft}>
                
                  <i className="fa fa-angle-left btn-direc-page"></i>
                </li>
                <li className="book__nav__direc--item" onClick={handlePageLeft}>
                  {pageNumber}
                </li>
                <li className="book__nav__direc--item" onClick={handlePageRight}>
                  <i className="fa fa-angle-right btn-direc-page"></i>
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="book__container">
            <div className="book__container-subnav">
              <div className="book__container-subnav--box">
                <i className="fa-solid fa-list-ul"></i>
                <h3 className="book__container-subnav--title">Danh Muc</h3>
              </div>
              <ul className="book__container-subnav__list">
                <li className="book__container-subnav__item" >Tất Cả</li>
                <li className="book__container-subnav__item" >Tiểu Thuyết</li>
                <li className="book__container-subnav__item" >Văn Học</li>
                <li className="book__container-subnav__item" >Truyện Tranh</li>
                <li className="book__container-subnav__item" >Truyện Ngôn Tình</li>
                <li className="book__container-subnav__item" >Truyện Nước Ngoài</li>
              </ul>
            </div>
            <div id="book__container-content">
            <Page1 page={pageNumber}/>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Books;

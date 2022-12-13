import { Header, Footer } from "../../component";
import "./DefaultLayout.css";
// import Books from '../books';
function DefaultLayout({ children, onHandleLogout }) {
      return (
      <>
              <Header onLogOut={onHandleLogout}/>
              <div className='DefaultLayout--content'>
              {children}
              </div>
              <Footer />
      </>
       );

}

export default DefaultLayout;

import {Link} from 'react-router-dom';


function NavBar() {



    return (
        <>
        <Link to="/">HOME</Link>
        <Link to="/search/:name">Search</Link>
        <Link to="/countries/list">LIST</Link>
        </>
    )
}

export default NavBar;

import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Contacts from '../../pages/Contacts.js';

import {Navbar, Container} from 'react-bootstrap';
import logo from '../../Images/list.svg';

function Header() {
  return (
     <BrowserRouter>
    
    <header className="header">
     <Navbar collapseOnSelect expand="md"bg="dark" variant="dark">
                    <Container>
                <Navbar.Brand href="/">
                <img
                    src={logo}
                    height="70"
                    width="60"
                    className="d-inline-block align-top"
                    alt="Logo"
                    />
                </Navbar.Brand>

		<ul className="nav">
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/home">Home</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/favorite">Favorite</NavLink>
			</li>

      
		</ul>     </Container>
                </Navbar>
        </header>
        <main className="main">
          <div className="content">
          <Route path="/" exact={true}  />
            <Route path="/favorite" exact={true} component={Contacts} />

            
          </div>
        </main>
              
    </BrowserRouter>
  );
}

export default Header;

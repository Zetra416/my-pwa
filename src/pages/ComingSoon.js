import logo from '../logo.svg';

export default function ComingSoon () {
    
    return (
        <div class="coming-soon-page">
            <div className="App-logo">
                <img src={logo} width={"200px"} alt="logo" />
            </div>
            <div className='sidebar'>
                <ul>
                <li><img src="./assets/home.png" width={"18px"} alt="home"/><a href="/home">Homepage</a></li>
                    <li><img src="./assets/bag.png" width={"18px"} alt="bag"/><a href="/comingsoon">Sales</a></li>
                    <li><img src="./assets/box.png" width={"18px"} alt="box"/><a href="/comingsoon">Inventory</a></li>
                    <li><img src="./assets/cart.png" width={"18px"} alt="cart"/><a href="/comingsoon">Purchase</a></li>
                    <li><img src="./assets/user.png" width={"18px"} alt="user"/><a href="/comingsoon">User Management</a></li>
                    <li><img src="./assets/logout.png" width={"18px"} alt="logout"/><a href="/">Logout</a></li>
                </ul>
            </div>

            <div className='content-maintenance'>
                <div className="maintenance-title">
                    <h1>Page Under Construction</h1>
                    <p>We're working hard to bring you something awesome. Stay tuned!</p>
                </div>
            </div>
        </div>
    )
}
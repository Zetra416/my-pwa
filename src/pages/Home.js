import DonutChart from '../components/donut-chart';
import logo from '../logo.svg';



export default function Home() {
    
      
    return (
        <div className="home-page">
            <div className='sidebar'>
                <div className="App-logo">
                    <img src={logo} width={"200px"} alt="logo" />
                </div>
                <ul>
                    <li><img src="./assets/home.png" width={"18px"} alt="home"/><a href="/home">Homepage</a></li>
                    <li><img src="./assets/bag.png" width={"18px"} alt="bag"/><a href="/comingsoon">Sales</a></li>
                    <li><img src="./assets/box.png" width={"18px"} alt="box"/><a href="/comingsoon">Inventory</a></li>
                    <li><img src="./assets/cart.png" width={"18px"} alt="cart"/><a href="/comingsoon">Purchase</a></li>
                    <li><img src="./assets/user.png" width={"18px"} alt="user"/><a href="/comingsoon">User Management</a></li>
                    <li><img src="./assets/logout.png" width={"18px"} alt="logout"/><a href="/">Logout</a></li>
                </ul>
            </div>

            <div className='content'>
                <div className='home-header'>
                    <div className="user-information">
                        <img src="./assets/question.png" alt="question" width={"28px"}/>
                        <img src="./assets/message.png" alt="message" width={"28px"}/>

                        <div class="profile-icon">
                        </div>
                        <div className='name-role'>
                            <span className='username'>Roman Dimitri</span>
                            <span className='userrole'>Owner</span>
                        </div>
                    </div>
                </div>

                <div className='home-content'>
                    <div className='order-statistic'>
                        <h1 className='statistic-title'>Order Statistic</h1>
                        <div className='statistic-content'>
                            <div className='statistic-card'>
                                <div className='selling-left'>
                                    <h2 style={{fontSize: '14px', fontWeight: 600, marginTop: '12px', marginBottom: 0}}>Total Selling</h2>
                                    <h3 className='number-statistic'>890</h3>
                                </div>
                                <div className='selling-right'>
                                    <img src="./assets/arrow-up.png" alt="arrow-up" width={"20px"} paddingBottom={"4px"}/>
                                    <h3 style={{fontSize: '14px', color: '#489CFE', marginTop:"2px"}}>20.5%</h3>
                                </div>
                                
                            </div>
                            <div className='statistic-card' id="expired-inventory">
                                <h2 style={{fontSize: '14px', fontWeight: 600, marginTop: '12px', marginBottom: 0}}>Expired Inventory</h2>
                                <h3 className='number-statistic'>5</h3>
                            </div>
                            <div className='statistic-card' id='out-of-stock'>
                                <h2 style={{fontSize: '14px', fontWeight: 600, marginTop: '12px', marginBottom: 0}}>Out of stock inventory</h2>
                                <h3 className='number-statistic'>12</h3>
                            </div>
                        </div>
                    </div>

                    <div className='sales-and-purchase'>
                        <div className='left-sap'>
                            <div className='header-sap'>
                                <h1 className='statistic-title'>Sales & Purchase</h1>
                                <img src="./assets/menu-vertical.png" alt="menu-vertical" height={"24px"} width={"24px"}/>
                            </div>
                            <div className='mid-sap'>
                                <div className='indicator-chart'>
                                    <img src="./assets/arrow-diagonal.png" alt="arrow-diagonal" height={"24px"} width={"24px"}/>
                                    <span style={{color: 'white', fontWeight: 600}}>23.5%</span>
                                </div>
                                <div className="chart">
                                    <div className="bar" style={{ height: '50%', backgroundColor: '#0077be' }} title="Jan" data-value="50"></div>
                                    <div className="bar" style={{ height: '75%', backgroundColor: '#0077be' }} title="Feb" data-value="75"></div>
                                    <div className="bar" style={{ height: '90%', backgroundColor: '#0077be' }} title="Mar" data-value="90"></div>
                                    <div className="bar" style={{ height: '30%', backgroundColor: '#0077be' }} title="Apr" data-value="30"></div>
                                    <div className="bar" style={{ height: '60%', backgroundColor: '#0077be' }} title="May" data-value="60"></div>
                                    <div className="bar" style={{ height: '80%', backgroundColor: '#0077be' }} title="Jun" data-value="80"></div>
                                    <div className="bar" style={{ height: '70%', backgroundColor: '#0077be' }} title="Jul" data-value="70"></div>
                                    <div className="bar" style={{ height: '40%', backgroundColor: '#0077be' }} title="Aug" data-value="40"></div>
                                    <div className="bar" style={{ height: '55%', backgroundColor: '#0077be' }} title="Sep" data-value="55"></div>
                                    <div className="bar" style={{ height: '65%', backgroundColor: '#0077be' }} title="Oct" data-value="65"></div>
                                    <div className="bar" style={{ height: '20%', backgroundColor: '#0077be' }} title="Nov" data-value="20"></div>
                                    <div className="bar" style={{ height: '100%', backgroundColor: 'orange', color: 'red' }} title="Dec" data-value="100"></div>
                                </div>
                            </div>
                            <div className='bottom-sap'>
                                <div className='indicator-param'>
                                    <span style={{fontSize: '14px',fontWeight: '600'}}>Target</span>
                                    <div className='num-arrow'>
                                        <img src="./assets/up-tri.png" alt="up-tri" height={"12px"} width={"12px"}/> 
                                        <span className='number-indicator' style={{color: '#51E563'}}>231</span>
                                    </div>
                                </div>
                                <div className='indicator-param'>
                                    <span style={{fontSize: '14px',fontWeight: '600'}}>Last Week</span>
                                    <div className='num-arrow'>
                                        <img src="./assets/down-tri.png" alt="down-tri" height={"12px"} width={"12px"}/> 
                                        <span className='number-indicator' style={{color: 'red'}}>224</span>
                                    </div>
                                </div>
                                <div className='indicator-param'>
                                    <span style={{fontSize: '14px',fontWeight: '600'}}>Last Month</span>
                                    <div className='num-arrow'>
                                        <img src="./assets/up-tri.png" alt="up-tri" height={"12px"} width={"12px"}/> 
                                        <span className='number-indicator' style={{color: '#51E563'}}>2132</span>
                                    </div>
                                </div>
                                <div className='indicator-param'>
                                    <span style={{fontSize: '14px',fontWeight: '600'}}>This Year</span>
                                    <div className='num-arrow'>
                                        <img src="./assets/up-tri.png" alt="up-tri" height={"12px"} width={"12px"}/> 
                                        <span className='number-indicator' style={{color: '#51E563'}}>8132</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='right-sap'>
                            <div className='right-mid-card'>
                                <div style={{display:"flex", flexDirection:'column', justifyContent:"center"}}>
                                    <img src="./assets/bar-up.png" alt="bar-up" height={"64px"} width={"64px"}/>
                                </div>
                                <div className='total-text'>
                                    <span style={{fontSize: '20px', fontWeight: 600}}>Total Transaksi</span>
                                    <span style={{fontSize: '24px', fontWeight: 700}}>Rp 80.000.000</span>
                                </div>
                            </div>
                            <div className='right-mid-card'>
                                <div style={{display:"flex", flexDirection:'column', justifyContent:"center"}}>
                                    <img src="./assets/sales.png" alt="sales" height={"64px"} width={"64px"}/> 
                                </div>
                                
                                <div className='total-text'>
                                    <span style={{fontSize: '20px', fontWeight: 600}}>Sales</span>
                                    <span style={{fontSize: '24px', fontWeight: 700}}>289</span>
                                </div>
                            </div>
                            <div className='right-mid-card'>
                                <div style={{display:"flex", flexDirection:'column', justifyContent:"center"}}>
                                    <img src="./assets/hand-money.png" alt="hand-money" height={"64px"} width={"64px"}/>
                                </div>
                                <div className='total-text'>
                                    <span style={{fontSize: '20px', fontWeight: 600}}>Purchase</span>
                                    <span style={{fontSize: '24px', fontWeight: 700}}>289</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-content'>
                        <div className='inventory'>
                            <div className='inventory-header'>
                                <h1 className='inventory-title'>Inventory</h1>
                                <img src="./assets/menu-vertical.png" alt="menu-vertical" height={"24px"} width={"24px"}/>
                            </div>
                            <div className='inventory-content'>
                                <div className='list-inventory'>
                                    <span>New Order</span>
                                    <span style={{border:"1px solid #e0eaf5", width:'20px', height:'20px', borderRadius:'5px', backgroundColor:'#e0eaf5'}}>3</span>
                                </div>
                                <div className='list-inventory'>
                                    <span>Prepare Order</span>
                                    <span style={{border:"1px solid #e0eaf5", width:'20px', height:'20px', borderRadius:'5px', backgroundColor:'#e0eaf5'}}>5</span>
                                </div>
                                <div className='list-inventory'>
                                    <span>Waiting Pickup</span>
                                    <span style={{border:"1px solid #e0eaf5", width:'20px', height:'20px', borderRadius:'5px', backgroundColor:'#e0eaf5'}}>12</span>
                                </div>
                                <div className='list-inventory'>
                                    <span>Sent</span>
                                    <span style={{border:"1px solid #e0eaf5", width:'20px', height:'20px', borderRadius:'5px', backgroundColor:'#e0eaf5'}}>9</span>
                                </div>
                                <div className='list-inventory'>
                                    <span>Cancel</span>
                                    <span style={{border:"1px solid #e0eaf5", width:'20px', height:'20px', borderRadius:'5px', backgroundColor:'#e0eaf5'}}>7</span>
                                </div>
                                <div className='list-inventory'>
                                    <span>Done</span>
                                    <span style={{border:"1px solid #e0eaf5", width:'20px', height:'20px', borderRadius:'5px', backgroundColor:'#e0eaf5'}}>5</span>
                                </div>
                            </div>

                        </div>

                        <div className='donut-chart'>
                                <h1 className='chart-title'>Persentase Penjualan Obat</h1>
                                <DonutChart/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
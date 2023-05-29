import "./Navbar.css"

function Navbar(){
    return <>
        <div className="Nav" >
           <div className="Nav1 nav">
            <h2 style={{ margin:"0"}} >♣️ GEEKSTER</h2>
           </div>
           <div className="Nav2 nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
           <div className="Nav3 nav">
           <ul>
                <li><img id="fb" src="https://cdn-icons-png.flaticon.com/256/20/20673.png" alt="img1" height={"45px"}/></li>
                <li><img id="twitter" src="https://www.seekpng.com/png/detail/84-842766_logo-twitter-png-noir-twitter-icon-vector-circle.png" alt="img1" height={"45px"}/></li>
                <li><img id="insta" src="https://www.svgrepo.com/show/364604/instagram-logo-fill.svg" alt="img1" height={"45px"}/></li>
                
            </ul>
           </div>
        </div>
    </>
}

export default Navbar;
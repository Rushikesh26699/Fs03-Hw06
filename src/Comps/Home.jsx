import "./Home.css"

function Home(){
    return <>
        <div className="Home" >
         
         <div className="home1 home" >
            <h1 style={{margin:"0"}} >Header</h1>
            <h1 style={{margin:"0"}} >Footer</h1>
            <p>It is a long established fact that a reader <br/> will be  distracted by the readable content of <br/>a page when looking at its layout. The point of using <br/>Lorem Ipsum is that it has a more-or-less normal<br/> distribution of letters, as opposed to using 'Content here,<br/> content here', making it look like readable English</p>
            <div id="circle">
                <div className="circle1 cl"></div>
                <div className="circle2 cl"></div>
                <div className="circle3 cl"></div>
                
            </div>
         </div>
         <div className="home2 home" >
            <img src="https://i0.wp.com/businessday.ng/wp-content/uploads/2022/03/female.png?fit=700%2C400&ssl=1" alt="img2" height={350}/>
         </div>

        </div>
    </>
}

export default Home;
import './footer.css';


const  Footer = () => {
    return(
<div className="footer">

<div className="top">
    <div>
        <h1>Trippy</h1>
        <p>Choose your favourite destination.</p>
    </div>
    <div className="div">
        <a href="/">
            <i style={{color:'blue'}} className='fa-brands fa-facebook'></i>
        </a>
        <a href="/">
            <i style={{color:'purple'}} className='fa-brands fa-instagram'></i>
        </a>
        <a href="/">
            <i style={{color:'red'}} className='fa-brands fa-youtube'></i>
        </a>
        <a href="/">
            <i style={{color:'green'}} className='fa-brands fa-whatsapp'></i>
        </a>
    </div>
</div>

<div className="bottom">
<div>
        <h4>Community</h4>
        <a href="/">Issues</a>
        <a href="/">GitHub</a>
        <a href="/">Project</a>
        <a href="/"> Twitter</a>
    </div>
    <div>
        <h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>
    </div>
   
    <div>
        <h4>Others</h4>
        <a href="/">Terms fo Service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">License</a>
        
    </div>
    <div>
        <h4>Help</h4>
        <a href="/">Terms fo Service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">License</a>
        
    </div>
  
</div>
</div>

    )
}

export default Footer
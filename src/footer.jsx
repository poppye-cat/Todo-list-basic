import './App.css';
function Footer(){ 
    const year = new Date().getFullYear()
    return( 
    <footer className = 'booter'>
        <center>Sahil Todo-list {year}</center>
    </footer>
    
    );
}

export default Footer;
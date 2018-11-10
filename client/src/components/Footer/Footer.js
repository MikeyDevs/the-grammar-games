import React from 'react'
import "./footer.css"

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <p className = "brandname"><span className="normal">©</span>Techy <span className="normal">&&</span> <span className = "cursive">Cute</span></p>
            </footer>
        )
    }
}

export default Footer;
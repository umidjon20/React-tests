import { Component } from "react";

import "./header.css";

class Header extends Component{
    render(){
        return(
            <header className="container">
                <div className="logo">Dev.org</div>
                <button>
                    <a href="#">Click</a>
                </button>
            </header>
        )
    }
}

export default Header
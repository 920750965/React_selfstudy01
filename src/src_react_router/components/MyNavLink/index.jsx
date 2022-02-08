import React,{ Component } from "react";
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {
    render() {
        // const {title} = this.props
        return (
            // <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
            <NavLink activeclassname="atguigu" className="list-group-item" {...this.props}/>
        )
    }
}
import React, {Component, Fragment} from "react";
import classes from './Drawer.module.scss';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Auth', exact: false},
    {to: '/quiz-creator', label: 'Create quiz', exact: false},

];

class Drawer extends Component {
    clickHandler = () => {
        this.props.onClose();
    };

    renderLinks() {
        return links.map((link, idx) => {
            return (
                <li key={idx}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        });
    }

    render() {
        const cls = [classes.Drawer];

        if (!this.props.isOpen) {
            cls.push(classes.close);
        }

        return (
            <Fragment>
                <nav className={cls.join(' ')}>
                    <ul>{this.renderLinks()}</ul>
                </nav>
                {this.props.isOpen ?
                    <Backdrop onClick={this.clickHandler}/> :
                    null}
            </Fragment>
        )
    }
}

export default Drawer;

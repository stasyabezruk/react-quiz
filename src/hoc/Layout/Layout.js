import React, {Component} from "react";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class  Layout extends Component {
    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState(prevState => ({
            menu: !prevState.menu
        }))
    };

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    };

    render() {
        return (
            <div>
                <main>
                    <Drawer
                        isOpen={this.state.menu}
                        onClose={this.menuCloseHandler}
                    />

                    <MenuToggle
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;

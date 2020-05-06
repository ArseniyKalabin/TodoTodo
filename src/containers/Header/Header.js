import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/authentication';
import logo from '../../assets/img/icon.png';
import Navigation from '../../components/Layout/Navigation/Navigation';
import UserInfo from '../../components/Layout/UserInfo/UserInfo';
import classes from './Header.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Header extends Component {
    componentDidMount() {
        this.props.autoSignIn();
    }
    render() {
        return (
            <header className={classes.Header} >
                <Link to="/">
                    <img src={logo} className={classes.Logo} alt="logo" />
                </Link>
                {this.props.isLogged ? (
                    <Aux>
                        <Navigation />
                        <UserInfo
                            user={this.props.user}
                            singout={this.props.singoutHandler} />
                    </Aux>
                ) : null}
            </header>
        );
    }
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    singoutHandler: () => dispatch(actions.signOutRequest()),
    autoSignIn: () => dispatch(actions.autoSingIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
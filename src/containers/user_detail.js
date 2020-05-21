import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render () {
        //console.log('props', this.props.myActiveUser)
        const {myActiveUser} = this.props
        if (!myActiveUser){
            return (
                <div>Sélectionner un utilisateur</div>
            )
        }
        return (
            <div>
                <h1>{myActiveUser.nom}</h1>
                <h2>Rôle : {myActiveUser.role}</h2>
                <h2>Actif : {myActiveUser.active}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myActiveUser : state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail)
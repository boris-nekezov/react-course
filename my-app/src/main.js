import React from 'react';

class Main extends React.Component {
    // constructor(){

    // }
    state = {
        user: {
            username: 'Borko',
            password: 'parola'
        }

    }

    componentWillMount(){

    }

    componentDidMount(){
        // make requests
    }

    compomnentReceiveProps(nextProps, nextState){

    }

    componentWillUnmount(){}

    shouldComponentUpdate(nestPros){
        // if (user.username )
        // return boolean
    }

    changeField = (field, value) => {
        const user = this.state.user;

        user[field] = value;
        
        console.log(user);
        
        this.setState({
            user    
        })

    }

    render(){
        console.log(this.state);
        return (
            <div>
                <p>Username: {this.state.user.username}</p>
                <span>Change me: </span>
                <input onChange={(e) => this.changeField('username', e.target.value)} />

                <p>Password: {this.state.user.password}</p>
                <span>Change password: </span>
                <input onChange={(e) => this.changeField('password', e.target.value)} />
                
            </div>
        )
    }
}

export default Main;
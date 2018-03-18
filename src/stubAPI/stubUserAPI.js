import _ from 'lodash';
import session from '../sessionCache';

    class StubUserAPI {

        constructor() {
            this.users = [
                {
                    'username': 'Eric86',
                    'password': 'Eric86'
                },

                {
                    'username': 'Mick87',
                    'password': 'Mick87'
                }
            ] ; 
        }

        login(u,p) {
             let user = _.find(this.users, function(user) { return user.username === u && user.password === p; })
             if (user !== undefined)
             {
                session.setSession(true);
                session.setUser(user.username);
                return true;
             }
             return "Login Failed";
        }

        add(u,p) {
            let user = _.find(this.users, function(user) { return user.username === u})
            if(!user)
            {
                let len = this.users.length;
            let newLen = this.users.push({
                username: u, password: p });
            return newLen > len ;
            }
            else
            {
                return "Username Already exists"
            }
            
        }
    }

    export default (new StubUserAPI() );
import _ from 'lodash';
import session from './sessionCache';
import session from '../sessionCache';

    class StubGamesAPI {

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
             return false;
        }

        add(u,p) {
            let len = this.users.length;
            let newLen = this.users.push({
                username: u, password: p });
            return newLen > len ;
        }
    }

    export default (new StubGamesAPI() );
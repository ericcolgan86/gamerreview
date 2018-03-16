class SessionCache {
    constructor() {
       this.session = false ;
       this.user = null ;
    }

    setSession(login) {
       this.session = login ;
    }

    getSession() {
       return this.session;
    }

    setUser(u) {
        this.user = u ;
     }
 
     getUser() {
        return this.user;
     }

}
export default (new SessionCache() );
import { decorate, observable, action } from 'mobx';

class UserStore {
  currentUser = {}
  profile = {}

  setCurrentUser(user) {
    this.currentUser = user;  
  }

  setProfile(profile) {
    this.profile = profile;
  }
}

decorate(UserStore, {
  currentUser: observable,
  profile: observable,
  setCurrentUser: action,
  setProfile: action
})

export default new UserStore();
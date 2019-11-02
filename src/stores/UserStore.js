import { decorate, observable, action, computed } from 'mobx';

class UserStore {
  currentUser = {}
  profile = {}

  setCurrentUser(user) {
    this.currentUser = user;  
  }

  setProfile(profile) {
    this.profile = profile;
  }

  get username() {
    return `${this.profile.firstName} ${this.profile.lastName}`;
  }
}

decorate(UserStore, {
  currentUser: observable,
  profile: observable,
  setCurrentUser: action,
  setProfile: action,
  username: computed
})

export default new UserStore();
import { decorate, observable, action } from 'mobx';

class StoryStore {
  preview = {}

  setPreview(story) {
    this.preview = story;
  }
}

decorate(StoryStore, {
  preview: observable,
  setPreview: action
})

export default new StoryStore();
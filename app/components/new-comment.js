import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       user: this.get('user'),
       body: this.get('body'),
       question: this.get('question'),
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});

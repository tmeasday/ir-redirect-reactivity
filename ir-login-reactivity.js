Router.map(function() {
  this.route('login');

  this.route('list', {
    path: '/list/',
    data: function() {
      return Lists.findOne();
    }
  });
  
  this.route('home', {
    path: '/',
    action: function() {
      Lists.findOne();
      Router.go('list');
    }
  });
});

Lists = new Meteor.Collection(null);
if (Meteor.isClient) {
  Lists.insert({name: 'Tom List'});
}

if (Meteor.isClient) {
  Template.list.events({
    'click [data-change]': function() {
      // Lists.update(this._id, {$set: {foo: Random._id}});
      Lists.update(this._id, {$set: {foo: Random._id}});
    }
  });
  
  Template.login.events({
    'click [data-login]': function() {
      Router.go('home');
      // Router.go('home');
    }
  });
}

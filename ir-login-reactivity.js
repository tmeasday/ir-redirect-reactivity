if (Meteor.isClient) {
  var dep = new Tracker.Dependency;

  Router.map(function() {
    this.route('a', {
      action: function() {
        dep.depend()
        console.log('redirecting to b');
        Router.go('b')
      }
    });

    this.route('b', {
      action: function() {
        dep.depend()
        console.log('running b');
      }
    });

    change = function() {
      dep.changed();
    }
  });
}



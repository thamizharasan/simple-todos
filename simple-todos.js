Notes = new Mongo.Collection("notes");

if (Meteor.isClient) {
  Template.body.helpers({
    notes: function(){
      return Notes.find({},{sort : {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-note": function(event){
      
      event.preventDefault();

      var text = event.target.text.value;

      Notes.insert({
        text: text,
        createdAt : new Date()
      });

      event.target.text.value = "";

    }
  });

  Template.note.events({
    "click .delete": function () {
      Notes.remove(this._id);
    }
  });

}



if (Meteor.isServer) {
  
}

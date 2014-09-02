/**
 * Created by Hanssens on 02-09-2014.
 */

"use strict";

/*
 * Model
 */

var Person = Backbone.Model.extend({

    defaults: {
        // define some properties for the 'Person' object
        "name": ""
    }

});

/*
 * Collection
 */

var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

/*
 * View
 */

var AttendeeView = Backbone.View.extend({

    initialize: function() {
        this.render();

        // Important: each time something changes in the collection,
        // hook into these events
        this.collection.bind('add', this.add);
        this.collection.bind('remove', this.remove);
    },

    render: function() {

        // Locate the element to inject the (underscore.js) in
        var template = _.template($("#dynamic-rows-template").html(), {} );

        // Render the view - by loading the compiled HTML into the element ("el")
        this.$el.html(template);
    },

    events: {
        // listen to the 'click' events on the buttons
        "click #btn-add": "add",
        "click #btn-delete": "remove"
    },

    add: function() {

        console.log("Function: addNewRow()");

        // todo: add a new item (e.g. 'Person') to this.collection
    },

    remove: function(e) {

        console.log("Function: deleteRow()");

        if (this.collection.length > 1){
            // todo: delete the currently selected row from this.collection,
            // but only if there are more than 1 rows available

        }


    }


});


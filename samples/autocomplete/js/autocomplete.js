"use strict";

/*
 * Model
 */

var Customer = Backbone.Model.extend({

//    parse: function(response) {
//        // manually set the property 'id', for vanity purposes
//        response.id = response.voertuignr;
//        return response;
//    }

});

var CustomersCollection = Backbone.Collection.extend({
    model: Customer,
    url: 'data/customers.json',

    parse: function(response, options) {
        console.log(response);
        return response;
    }

/*
 * Custom Functions
 */
});

/*
 * View
 */

// define the view
var CustomerAutoCompleteView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function() {

//        // Compile the template using underscore
//        var template = _.template($("#customer-autocomplete-template").html(), {} );
//
//        // Load the compiled HTML into the Backbone "el"
//        this.$el.html( template );




        console.log("Hook into typeahead...");
        console.log(this.collection);

        var customerDataSource = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            //prefetch: '../data/films/post_1960.json',
            //remote: this.collection.models
            local: this.collection.models
        });

        $("#input-customer").typeahead({
            displayKey: "name",
            source: customerDataSource//this.collection.models
        });
    },

    events: {
        //"change select": "selectionChanged"
    },

    hookUpList: function(){

    }
});


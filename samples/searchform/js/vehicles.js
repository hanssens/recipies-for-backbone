/**
 * Created by Hanssens on 23-08-14.
 */

"use strict";

/*
 * Model
 */

var Vehicle = Backbone.Model.extend({

    parse: function(response) {
        // manually set the property 'id', for vanity purposes
        response.id = response.voertuignr;
        return response;
    }

});

/*
 * Collection
 */

var VehicleCollection = Backbone.Collection.extend({
    model: Vehicle,
    url: '/data/vehicles.json',

    parse: function(response, options) {
        return response;
    },

    /*
     * Custom Functions
     */


    listAllBrands: function() {
        console.log("Function: listAllBrands()");
        var brands = this.pluck("merk");
        return unique(brands);
    },

    listAllModelsByBrand: function(brand) {
        console.log("Function: listAllModelsByBrand():");

        var models = [];

        // filter all vehicles by brand first
        var filtered = this.where({merk: brand});

        // next, fetch the models
        filtered.forEach(function(vehicle) {
            models.push(vehicle.attributes.model);
        });

        return unique(models);
    }
});

/*
 * View
 */


// define the view
var VehicleSearchView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function() {

        // Compile the template using underscore
        var template = _.template( $("#search-template").html(), {} );

        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );
    },

    events: {
        "change select": "selectionChanged"
    },

    /*
     * Functions
     */

    selectionChanged: function(e) {

        // on brand change
        if ($(e.currentTarget).attr("id") == "input-brand") {
            // get currently selected 'brand'
            var selectedBrand = $(e.currentTarget).val();

            // fill the models, by brand
            this.fillModelsByBrand(selectedBrand);
        }
    },

    // Function: Populates the as argument provided element with a list of <option>.
    fillBrands: function(el) {

        // fetch all 'brands' as a list, through the vehiclecollection
        var brands = this.collection.listAllBrands();

        // append it to the provided (<select>) element
        brands.forEach(function(b){
            $(el).append($('<option>', { value: b, text: b }));
        });

    },

    // Function: Fills the provided element with all available years of make/built
    fillYears: function(el) {
        var years = [ 2001, 2002, 2003, 2004, 2005 ];
        years.forEach(function(y){
            $(el).append($('<option>', { value: y, text: y }));
        });
    },

    fillPrices: function(el) {
        var prices = [ 500, 1000, 1500, 2000, 2500 ];
        prices.forEach(function(p){
            $(el).append($('<option>', { value: p, text: p }));
        });
    },

    fillModelsByBrand: function(brand) {
        console.log("Function: fillModelsByBrand(), brand: " + brand);

        // fetch models by brand
        var models = this.collection.listAllModelsByBrand(brand);

        // clear all values (options), reset the list and enable it
        $('#input-model')
            .find('option')
            .remove()
            .end()
            .append('<option value="" disabled selected>Selecteer een model</option>')
            .prop('disabled', false)
        ;

        // populate the specific models
        models.forEach(function(b){
            $('#input-model').append($('<option>', { value: b, text: b }));
        });

    }

});

/*
 * General Function
 */

/// Function: Filters the unique values from the provided collection, and sorts it.
var unique = function (collection) {

    var returnValue = [];
    collection.filter(function(itm,i,a){
        if (i==a.indexOf(itm)){
            returnValue.push(itm);
        }

    });

    return returnValue.sort();
}
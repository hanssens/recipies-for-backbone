/**
 * Created by Hanssens on 23-08-14.
 */

var Vehicle = Backbone.Model.extend({

    parse: function(response) {
        // manually set the property 'id', for vanity purposes
        response.id = response.voertuignr;
        return response;
    }

});

var VehicleCollection = Backbone.Collection.extend({
    model: Vehicle,
    url: '/data/vehicles.json',

    parse: function(response) {
        return response;
    },

    /*
     * Custom Functions
     */

    listAllBrands: function() {
        //var brands = this.where({brand:})
        console.log("this:");
        console.log(this);

        var brands = this.pluck('merk');
        console.log(JSON.stringify(brands));

        return [ "Audi", "BMW", "Chrysler"];
    },

    listAllModelsByBrand: function(brand) {

        //var models = this.where({merk: brand});
        return ["X5", "5 Serie", "3 Serie"];
        //console.log(models);
        //return models;
    }
});

/*
 * VIEWS
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
            //console.log("yeah! : " + selectedBrand);
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
            .append('<option value="" disabled selected>Selecteer eerst een merk</option>')
            .prop('disabled', false)
        ;

        // populate the specific models
        models.forEach(function(b){
            $('#input-model').append($('<option>', { value: b, text: b }));
        });

    }

});
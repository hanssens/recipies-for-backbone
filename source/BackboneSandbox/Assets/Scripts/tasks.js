﻿$(function () {

    // model for: a single task
    Task = Backbone.Model.extend({
        initialize: function() {
            console.log('Single Task initialized');
            //var currentTitle = this.get("title");
            //console.log(currentTitle);
        },

        // implementing custom crud operations
        sync: function (method, model, options) {

            console.log('HTTP method called: ' + method);

            switch (method) {
                case "read":
                    console.log('HttpMethod: read called');
                    options.url = "/tasks/retrieve/" + model.get("id");
                    break;
                case "create":
                    console.log('HttpMethod: create called');
                    options.url = "/tasks/create";
                    break;
                case "update":
                    console.log('HttpMethod: update called');
                    //options.url = "/tasks/setUser.aspx";
                    break;
                case "delete":
                    console.log('HttpMethod: delete called');
                    options.url = "/tasks/delete/" + model.get("id");
                    break;
            }
        }
    });

    // model for: collection of tasks
    TaskList = Backbone.Collection.extend({        
        model: Task,
        url: '/tasks/list'
    });

    // create a new collection, and fetch the shizzle
    var collection = new TaskList();
    collection.fetch();

    // log it
    console.log(collection);
    
    // no idea what this does, yet. but i believe something with the browser's back button?
    Backbone.history.start();
});
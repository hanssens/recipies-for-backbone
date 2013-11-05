$(function () {

    // model for: a single task
    Task = Backbone.Model.extend({
        initialize: function() {
            console.log('Task initialized');
            //var currentTitle = this.get("title");
            //console.log(currentTitle);
        },

        // implementing custom crud operations
        sync: function (method, model, options) {

            console.log('HTTP method called: ' + method);

            switch (method) {
                case "read":
                    options.url = "/tasks/retrieve/" + model.get("id");
                    break;
                case "create":
                    options.url = "/tasks/create";
                    break;
                case "update":
                    //options.url = "/tasks/setUser.aspx";
                    break;
                case "delete":
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
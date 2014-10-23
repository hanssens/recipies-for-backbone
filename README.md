# Backbone.js Recipes for ASP.NET MVC

## Introduction
This bucket of code is basically a simple sandbox which demonstrates some samples on how to use **Backbone.js with an ASP.NET MVC backend**.

We do this by using the all-to-familiar Task list examples with which we try to give answers to: 

* How to use [C# models](https://github.com/hanssens/backbone/tree/master/samples/asp.net%20mvc/BackboneSandbox/Models) in Backbone.js
* Enable CRUD operations through thin and simple ActionControllers
* ... not through WebAPI
* Deviating from the REST naming conventions by using custom actions for these CRUD operations

## Ingredients

This project consist out of the following elements:

* ASP.NET MVC 5 project (compatible with VS2012/VS2013)
* Backbone.js (v1.1.0)
* Underscore.js (v1.5.2)
* jQuery (v1.10)
* Twitter Bootstrap (v3.0)

## Getting Started

As you're probably familiar with ASP.NET MVC, let's look at the basic structure of the project. 

The [Task() class](https://github.com/hanssens/backbone/blob/master/samples/asp.net%20mvc/BackboneSandbox/Models/Task.cs) is our very simple, every day C# class which is only defined here.

The foundation of our clientside<>serverside communication is the [TaskController](https://github.com/hanssens/backbone/blob/master/samples/asp.net%20mvc/BackboneSandbox/Controllers/TasksController.cs). This is responsible for exposing several Actions (JsonResult) which the [Backbone plumbing (tasks.js) on its turn implements](https://github.com/hanssens/backbone/blob/master/samples/asp.net%20mvc/BackboneSandbox/Assets/Scripts/tasks.js#L9-L31). 

Finally, its just a matter of [setting up the Backbone View](https://github.com/hanssens/backbone/blob/master/samples/asp.net%20mvc/BackboneSandbox/Views/Tasks/Overview.cshtml#L26-L82) to populate our .cshtml with the data and inject it into [a simple View Template](https://github.com/hanssens/backbone/blob/master/samples/asp.net%20mvc/BackboneSandbox/Views/Tasks/Overview.cshtml#L16-L23).

This, in a nutshell, got me started quickly. 

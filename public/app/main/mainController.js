/**
 * Created by nayab on 10/5/16.
 */
(function () {
    'use strict';

    window.app.controller('mainController', mainController);
    mainController.$inject = ['$scope'];

    function mainController($scope) {
        $scope.courses = [
            {name: "C# for Beginners", featured: false, published: new Date('2015-11-26')},
            {name: "C# for Dummies", featured: false, published: new Date('2015-11-26')},
            {name: "C# for Experts", featured: true, published: new Date('2015-11-26')},
            {name: "Express and Node", featured: false, published: new Date('2015-12-26')},
            {name: "Developing using MEAN Stack", featured: true, published: new Date('2015-01-13')},
            {name: "Build SPA using Angular", featured: false, published: new Date('2015-02-10')},
            {name: "Entity Framework - Code First", featured: true, published: new Date('2015-11-26')},
            {name: "Introduction to Identity", featured: false, published: new Date('2015-03-26')},
            {name: "Comprehensive Web API", featured: false, published: new Date('2015-05-26')},
            {name: "WCF Security Extensions", featured: true, published: new Date('2015-04-26')},
            {name: "NodeJs for .Net Developers", featured: true, published: new Date('2015-02-26')},
            {name: "Scaling Web API", featured: true, published: new Date('2015-01-26')},
            {name: "Introduction to Docker", featured: false, published: new Date('2015-11-26')},
            {name: "Getting started with ASP.NET MVC", featured: false, published: new Date('2015-06-26')},
            {name: "Persistence with MongoDB", featured: true, published: new Date('2015-07-26')},
            {name: "Big Data for Sql Developers", featured: false, published: new Date('2015-07-26')},
            {name: "How to code responsibly", featured: false, published: new Date('2015-06-26')},
            {name: "Angular Clean Code", featured: true, published: new Date('2015-08-26')},
            {name: "NodeJS Clean Code", featured: false, published: new Date('2015-11-26')},
            {name: "Importance of Immutability", featured: false, published: new Date('2015-11-26')},
            {name: "IOT with Raspberry Pi", featured: false, published: new Date('2015-11-26')},
            {name: "SPA with Angular and Web API", featured: true, published: new Date('2015-11-26')},
            {name: "Securing Web API", featured: false, published: new Date('2015-11-26')},
            {name: "Web API Hosting", featured: true, published: new Date('2015-11-26')},
            {name: "WCF Custom Bindings", featured: false, published: new Date('2015-11-26')}
        ];
    };
})();
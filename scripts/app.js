/// <reference path="../scripts/typings/isc/isc.index.d.ts" />
"use strict";
// Sample app.
var Greeter = (function () {
    function Greeter(element) {
        this.timerToken = 0;
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        if (this.timerToken == 0) {
            this.timerToken = setInterval(function () {
                _this.span.innerHTML = new Date().toUTCString();
            }, 500);
            isc.say("Timer started.");
        }
    };
    Greeter.prototype.stop = function () {
        if (this.timerToken != 0) {
            clearTimeout(this.timerToken);
            this.timerToken = 0;
            isc.say("Timer stopped.");
        }
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    // greeter.start();
    // Add a couple buttons to the 'content' DIV
    var startButton = isc.Button.create({
        title: "Start",
        htmlElement: 'content',
        click: function () {
            greeter.start();
            return true;
        }
    });
    var stopButton = isc.Button.create({
        title: "Stop",
        htmlElement: 'content',
        click: function () {
            greeter.stop();
            return true;
        }
    });
    // Add a label to the 'footer' DIV
    var labelVersion = isc.Label.create({
        contents: "Isomorphic SmartClient Version: <b>" + isc.versionNumber + "</b>",
        htmlElement: 'footer',
        autoDraw: true,
        width: 600
    });
    var countryDS = isc.DataSource.create({
        ID: "countryDS",
        dataFormat: "xml",
        recordXPath: "//country",
        fields: [
            { name: "countryCode", title: "Code", primaryKey: true, canEdit: "false" },
            { name: "countryName", title: "Country" },
            { name: "capital", title: "Capital" }
        ],
        operationBindings: [
            {
                operationType: "fetch",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_fetch.xml"
            },
            {
                operationType: "add",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_add.xml"
            },
            {
                operationType: "update",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_update.xml"
            },
            {
                operationType: "remove",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_remove.xml"
            }
        ]
    });
    //let countryDS: any;
    var grid = isc.ListGrid.create({
        ID: "countryList",
        width: 550,
        height: 224,
        alternateRecordStyles: true,
        dataSource: countryDS,
        autoFetchData: true
    });
    grid.draw();
};

# Schul_Homepage

## Description:
This is a prototype for a German school homepage with some basic functionalities,
which should be included in any school website.

This is an old-school website with lots of different .html files, one for every
page. (not a single-page-app!) This website heavily relies on Bootsstrap 4. You
will find a Bootstrap carousel, a form, tables, navbar, navs and modals.

For templates I chose handlebars, which was impressively easy to learn and
implement.

## About using this website
This website has not been finished yet. **Therefore you will find some inactive
links in the navbar.** Clicking the submit button of the form will not fire any
request.

## Known bugs
- "grunt-contrib-copy" does not acutally copy the files yet
- "grunt-contrib-htmlmin" also processes 2 html files of *node_modules*
- as mentioned the form won't fire any request
- the calendar is intentionally not connected to its backend

## Important: Missing key
- if you want to try this code with a working calendar, then you will have to
include your Google Calendar key and id in the corresponding placeholders inside *js/kalender.js*. Of course you must also use your own openweathermap API key (*home.js*) and New York Times API key (*lesestoff.js*).

## Further Information
This website is published at: [https://bastian-ger.github.io/Schul_Homepage/](https://bastian-ger.github.io/Schul_Homepage/)

DZAP Front-End Web Developer Test
=============================

__Site Viewable Here:__  
+ <a href="http://dzap-test.s3-website-us-west-2.amazonaws.com/" target=_blank">http://dzap-test.s3-website-us-west-2.amazonaws.com/</a>  


**I cloned/download the test from the following location**
+ https://github.com/dzap/test-web-developer

I used basic html, css, and minimal jquery to keep in mind simplicity and show my command of the front-end development languages.

I chose the Bootstrap framework for quick "Mobile First" exampling where I wouldn't have to recreate styling and heavy already being used in bootstrap (no need to recreate the wheel).  
I used the CDNJS Javascript and Repo for this example.  
I used handlebars for javascript templating. I created Handlebars Helpers, first a list block variation with sorting in descending order by date. Second, a Handlebars Helper with the utilization of Moment.js to change the ISO to a readable date format.
I would have <a href="http://bower.io/" target="_blank">bower</a> as a package manager and keep track of these packages in a manifest file, `bower.json`.  
Please markup the provided website PSD using HTML, CSS and Javascript. A layered Photoshop file has been provided. Please contact edrick@dzap.net if any instruction is unclear. Thank you!

**Rules and Requirements**

For the comments area
I could have used AngularJS to create this as a single page application (SPA).
I would have used the comments in app.js as a service and `ng-repeat` to loop through the comments.  
<s>I would have used lodash.js to sort the comments by date `_.sortBy(comments, "-timestamp")`.</s>


+ You may use any html/css/js library or framework.  

+ For the comments area, please accomplish the following.
    + Please use the data within the provided Javascript file to populate the comments area with this data according to the mockup. You may edit the data only to fix mistakes or malformations.
    + Please use any Javascript templating solution such as <a href="http://handlebarsjs.com/" title="Handlebars" target="_blank">Handlebars</a> to render each comment.
    + Please order the comments beginning with the most recent.
    + For tablet sizes only (768px to 1024px), please omit the comments section, and have each remaining sibling column span 50% of the parent container.
+ For the large image area, please build a simple fade-in, fade-out slideshow with Javascript. Please have it automatically rotate through the provided slideshow images. You may use a library such as jQuery. You may **not** use a prebuilt slideshow plugin like bxSlider, Cycle, or Slick.
+ Please use your judgement to make this page responsive. It doesn’t need to be anything fancy, just appropriately styled mobile and desktop versions. You may use a framework if you like, but extra consideration will be given if you can example your command of simple media queries. Bonus points for exampling a "mobile first" approach.
+ Please ensure the page is functional in IE9+. Pixel perfection is not required, but please ensure the page is functional.

**What We're Interested In**
+ Command of Languages
+ Modern Best Practices
+ Intentional and Strategic Organization of Code
+ Efficiency and Cleanliness in Code
+ Browser Compatibility
+ Attention to Detail
+ Usability

**Components Used**  
    "jquery": 2.1.4  
    "handlebars": 4.0.3  
    "bootstrap": 3.3.5  
    "moment": 2.10.6  
    "modernizr": 2.8.3


**Components Would Use**   
    "jquery": "~2.1.4",  
    "angular-resource": "~1.4.0",  
    "angular-ui-router": "~0.2.15",  
    "bootstrap-sass-official": "~3.3.4",  
	"angular-bootstrap": "~0.13.0",  
	"moment": "~2.10.3",  
	"animate.css": "~3.3.0",  
	"angular": "~1.4.0",  
    "handlebars": "~4.0.3",  
    "modernizr": "~2.8.3"  

DZAP Front-End Web Developer Test
=============================

__Site Viewable Here:__  
+ <a href="http://dzap-test.s3-website-us-west-2.amazonaws.com/" target=_blank">http://dzap-test.s3-website-us-west-2.amazonaws.com/</a>  


**I cloned/download the test from the following location**
+ https://github.com/dzap/test-web-developer

I used basic html, css, and minimal jquery to keep in mind simplicity and show my command of the front-end development languages.

I chose the Bootstrap framework for quick "Mobile First" exampling where I wouldn't have to recreate styling and heavy already being used in bootstrap (no need to recreate the wheel).  
I used the CDNJS Javascript and Repo for this example.  
I usually would have used <a href="http://bower.io/" target="_blank">bower</a> as a package manager and keep track of these packages in a manifest file, `bower.json`.  

**Rules and Requirements**

+ You may use any html/css/js library or framework.  
	+ I could have used AngularJS to create this as a single page application (SPA).
    + With AngularJS I would have moved the comments in app.js into a service that could in the future be replaced a data request and `ng-repeat` to iterate over the properties of the comments.  
      Sorting the comments by date in descending order would accomplished by the ng filter component `orderBy:'-timestamp'`.
+ For the comments area, please accomplish the following.
    + Please use the data within the provided Javascript file to populate the comments area with this data according to the mockup. You may edit the data only to fix mistakes or malformations.
    + Please use any Javascript templating solution such as <a href="http://handlebarsjs.com/" title="Handlebars" target="_blank">Handlebars</a> to render each comment.
    + Please order the comments beginning with the most recent.
    	+ I used handlebars for javascript templating. I created Handlebars Helpers, first a list block variation with sorting in descending order by date. Second, a Handlebars Helper with the utilization of Moment.js to change the ISO to a readable date format.
    	+ **NOTE:** I would create a javascript/jquery object helper in a separate js file that could be shared then utilized when needed since Handlebar Helpers are global.  
    	The first Handlebars Helper would be broken out into two Helpers. One for list block and the sorting in descending order by date as a Subexpression.
    + For tablet sizes only (768px to 1024px), please omit the comments section, and have each remaining sibling column span 50% of the parent container.
        + For tablet I omitted the comments section using Bootstrap's "Available Class" `.hidden-sm` that toggles the visibility of content across viewport breakpoints. In this case hide the comments section between widths of 768px to 992px to be exact.
        + For the corresponding viewport breakpoint I gave the remaining siblings `.col-sm-6` that would assign each 50% of column span of their parent `.row` container.
        + **NOTE:** I left the default break point of tablet size 992px. I could have change it to 1024px if necessary by going to <a href="http://getbootstrap.com/customize/#media-queries-breakpoints" target="_blank">http://getbootstrap.com/customize/#media-queries-breakpoints</a> and change @screen-md to 1200px. Then I could download a custom version of bootstrap code that would have the following breakpoint `@media (min-width: 1024px)`.
	+ For the large image area, please build a simple fade-in, fade-out slideshow with Javascript. Please have it automatically rotate through the provided slideshow images. You may use a library such as jQuery. You may **not** use a prebuilt slideshow plugin like bxSlider, Cycle, or Slick.  
		+ I created a fully CSS3 slideshow that fades in and out every 10 seconds with CSS animations that work with modern browsers. For older browsers such as IE9 that dont support CSS animations, I utilized Modernizr JS to detect if the browser supported CSS animations and if not then use jquery to create a slideshow.
		+ **Note:** Would for quickness and cross-browser compatibility would have implemented Bootstrap Javascript Carousel <a href="http://getbootstrap.com/javascript/#carousel" target="_blank">http://getbootstrap.com/javascript/#carousel</a>.
+ Please use your judgement to make this page responsive. It doesn't need to be anything fancy, just appropriately styled mobile and desktop versions. You may use a framework if you like, but extra consideration will be given if you can example your command of simple media queries. Bonus points for exampling a "mobile first" approach.
+ Please ensure the page is functional in IE9+. Pixel perfection is not required, but please ensure the page is functional.


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
    "modernizr": "~2.8.3"  

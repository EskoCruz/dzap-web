/**
 * Created by esko on 10/6/15.
 */
(function () {

	// compile our template
	var template = Handlebars.compile($("#comments-template").html());

	// add the list helper
	Handlebars.registerHelper('list', function(context, options) {
		var contextSortDesc = context.concat()
			.sort( function(a,b) { return b.timestamp - a.timestamp } );
		var ret = "<ul class='list-group'>";
		for(var i=0, j=contextSortDesc.length; i<j; i++) {
			ret = ret + "<li class='list-group-item'>" + options.fn(contextSortDesc[i]) + "</li>";
		}
		return ret + "</ul>";
	});

	//  format an date with Moment.js
	Handlebars.registerHelper('dateFormat', function(context, block) {
		if (window.moment) {
			var f = block.hash.format || "M/D/YYYY";
			return moment(new Date(context)).format(f);
		}else{
			return context;   //  return data as is.
		}
	});

	var data = {
		comments: [
			{"name":"Vito Corleone","comment":"I'm gonna make him an offer he can't refuse.","timestamp":69379200000},
			{"name":"Terry Benedict","comment":"Congratulations... You're a dead man!","timestamp":1007683200000},
			{"name":"Jessica Rabbit","comment":"I'm not bad. I'm just drawn that way.","timestamp":583113600000},
			{"name":"Martin Brody","comment":"You're gonna need a bigger boat.","timestamp":172281600000},
			{"name":"Jack Dawson","comment":"I'm the king of the world!","timestamp":882489600000},
			{"name":"The Terminator","comment":"Hasta la vista, baby.","timestamp":678326400000},
			{"name":"The Joker","comment":"Why so serious..?","timestamp":1215993600000}
		]
	};

	$('#comments').html(template(data));

})();

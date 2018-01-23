

//images for EDS float left
//#40808: New OPAC Theme, BWS Michael Cabus
$(window).load(function() {

$(".eds #userresults .table.table-striped tr").each(function () { 
   var image = $(this).find("img").parent(); container = $(image).parent(); $(container).attr("style", "float:left !important; margin-right:20px;");
});




});


/*more link for titles*/

 $(document).ready(function() {


$("#selections-toolbar").appendTo('#facetcontainer');

});

$(document).ready( function() {
 

 
 $("#selections-toolbar .checkall").before('<h4><a href="#" class="menu-collapse-toggle">Save Items</a></h4>');
 
if (window.location.href.indexOf("https://library.aarome.org") > -1) {
 
 $("#facet-itemtypes").text("Format");
 
 $("#facet-topics").text("Subjects");
  
 
}
 

/*part expanded*/

/*authors*/

$("#results #au_id ul").addClass("js-to_expand");

$("#results #au_id ul").addClass("expandmore__to_expand");

$('#results #au_id ul').attr('data-hidden', 'true');


/*heading*/

/*authors*/

$("#results #facet-authors").addClass("js-expandmore");


$('#results #facet-authors').attr('data-controls', 'expand_1');

$('#results #facet-authors').attr('aria-expanded', 'false');

/*holding branch*/


$("#results #holdingbranch_id #facet-holding-libraries").addClass("js-expandmore");


$('#results #holdingbranch_id #facet-holding-libraries').attr('data-controls', 'expand_1');

$('#results #holdingbranch_id #facet-holding-libraries').attr('aria-expanded', 'false');

$("#itype_id ul").addClass("js-to_expand");



$("#holdingbranch_id ul").addClass("js-to_expand");

$("#holdingbranch_id ul").addClass("expandmore__to_expand");

$('#holdingbranch_id ul').attr('data-hidden', 'true');


/*item types*/


$("#results #itype_id h5").addClass("js-expandmore");


$('#results #itype_id h5').attr('data-controls', 'expand_1');

$('#results #itype_id h5').attr('aria-expanded', 'false');



$("#itype_id ul").addClass("expandmore__to_expand");

$('#itype_id ul').attr('data-hidden', 'true');

 /*titles */
 
 $("#results #su-ut_id h5").addClass("js-expandmore");


$('#results #su-ut_id h5').attr('data-controls', 'expand_1');

$('#results #su-ut_id h5').attr('aria-expanded', 'false');

 $("#su-ut_id ul").addClass("js-to_expand");

$("#su-ut_id ul").addClass("expandmore__to_expand");

$('#su-ut_id ul').attr('data-hidden', 'true');


/*Locations*/



$("#results #location_id h5").addClass("js-expandmore");


$('#results #location_id h5').attr('data-controls', 'expand_1');

$('#results #location_id h5').attr('aria-expanded', 'false');



$("#location_id ul").addClass("js-to_expand");

$("#location_id ul").addClass("expandmore__to_expand");

$('#location_id ul').attr('data-hidden', 'true');


/*series*/

$("#results #se_id h5").addClass("js-expandmore");


$('#results #se_id h5').attr('data-controls', 'expand_1');

$('#results #se_id h5').attr('aria-expanded', 'false');



$("#se_id ul").addClass("js-to_expand");

$("#se_id ul").addClass("expandmore__to_expand");

$('#se_id ul').attr('data-hidden', 'true');

/*places*/

$("#results #su-geo_id h5").addClass("js-expandmore");


$('#results #su-geo_id h5').attr('data-controls', 'expand_1');

$('#results #su-geo_id h5').attr('aria-expanded', 'false');


$("#su-geo_id ul").addClass("js-to_expand");

$("#su-geo_id ul").addClass("expandmore__to_expand");

$('#su-geo_id ul').attr('data-hidden', 'true');


/*topics*/

$("#results #su-to_id h5").addClass("js-expandmore");

$('#results #su-to_id h5').attr('data-controls', 'expand_1');

$('#results #su-to_id h5').attr('aria-expanded', 'false');



$("#su-to_id ul").addClass("js-to_expand");

$("#su-to_id ul").addClass("expandmore__to_expand");

$('#su-to_id ul').attr('data-hidden', 'true');




$('.bibliocol').each(function() {

if($(this).find('span.title_resp_stmt').length != 0 )  {

var title = $(this).children(':nth-child(3)');

var author = $(title).find('span.title_resp_stmt');


$(author).addClass("js-to_expand");

$(author).addClass("expandmore__to_expand");

$(author).attr('data-hidden', 'true');

/*class="js-expandmore" data-controls="expand_1" aria-expanded="false"*/

var author_text = $(author).text();

if($.trim(author_text) != '[electronic resource]') {


$(title).after("<section class='author_statement js-expandmore' data-controls='expand_1' aria-expanded='false'>Expand</section>")

var expand = $(this).children(':nth-child(4)');

$(author).hide();

 $(expand).click(function (ev) {
               var t = ev.target
               $(author).toggle( "slow", function() {
    if ($(this).is(':visible')) {
             expand.text('Hide');
        } else {
             expand.text('Expand');
        }
  });
            });



   }

}
      });


});




/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/

$(window).load( function() {
$(".coverimages img").addClass("item-thumbnail");

/* var addTo = $("#addto").html();

console.log(addTo);

$( "#facetcontainer" ).append('<section class="save_title"><section class="heading"><h4><a class="" href="#">Save Titles</a></h4></section><h4 class="save_text">Save Selected Titles To</h4>' + addTo + '<section class="save_action"><span class="checkall"><a id="CheckAll" href="#">Select all</a></span><span class="clearall"><a id="CheckNone" href="#">Clear all</a></span></section><input class="btn btn-small" value="Save" type="submit"><span id="placehold"><input class="hold disabled" value="Place hold" type="submit"></span></section>');*/
 
 
});

$(document).ready( function() {

 
 
if (window.location.href.indexOf("/plugin/Koha/Plugin/EDS/opac/eds-search.pl") > -1) {

$("body").addClass("eds");

}
/* $( "#facetcontainer" ).append('<section class="save_title"><section class="heading"><h4><a class="" href="#">Save Titles</a></h4></section><h4 class="save_text">Save Selected Titles To</h4><select class="disabled" name="addto" id="addto"><option>Add to...</option><option value="addtocart">Cart</option><optgroup label="Public lists:"><option id="s53" value="addtolist">BWS Staff  Books</option></optgroup><option value="newlist">[ New list ]</option></select><section class="save_action"><span class="checkall"><a id="CheckAll" href="#">Select all</a></span><span class="clearall"><a id="CheckNone" href="#">Clear all</a></span></section><input class="btn btn-small" value="Save" type="submit"><span id="placehold"><input class="hold disabled" value="Place hold" type="submit"></span></section>'); */

/* var addTo = $("#addto").html();

console.log(addTo);

$( "#facetcontainer" ).append('<section class="save_title"><section class="heading"><h4><a class="" href="#">Save Titles</a></h4></section><h4 class="save_text">Save Selected Titles To</h4>' + addTo + '<section class="save_action"><span class="checkall"><a id="CheckAll" href="#">Select all</a></span><span class="clearall"><a id="CheckNone" href="#">Clear all</a></span></section><input class="btn btn-small" value="Save" type="submit"><span id="placehold"><input class="hold disabled" value="Place hold" type="submit"></span></section>');*/
 
 
});




/*restricting to search results page*/
if (window.location.href.indexOf("/cgi-bin/koha/opac-search.pl") > -1) {

 
 
if (window.outerWidth && window.outerWidth > 520) {

$(window).scroll(function(){

   /*capturing div id opac-main-search*/
  var sticky = $('#opac-main-search'),

      scroll = $(window).scrollTop();

  /*scroll position for search bar*/
  if (scroll >= 120) sticky.addClass('fixed');
  else sticky.removeClass('fixed');

  /*grab .navbar-inverse class in variable*/
  var stickytop = $('.navbar-inverse'),
  /*capture scroll*/
      scroll = $(window).scrollTop();

  if (scroll >= 20) stickytop.addClass('fixed-nav');
  else stickytop.removeClass('fixed-nav');

     /*hide moresearches*/
    var hide = $('#moresearches'),
    scroll = $(window).scrollTop();

   if (scroll >= 80) hide.addClass('hide');
   else hide.removeClass('hide');


});

}

}






//Project gutenberg detail
$("span.online_resources").ready(function(){
var pgbks_link = $("span.online_resources a[href^='http://www.gutenberg.org/etext']").attr("href");
if(pgbks_link){
$("#holdings").html('<a href="'+pgbks_link+'"><img src="http://media.bywatersolutions.com/Model/opac-guten.png" alt="Available from Project Gutenberg" /></a>');
}
});

//open library detail
$("span.online_resources").ready(function(){
var olbks_link = $("span.online_resources a[href^='http://www.openlibrary.org/books']").attr("href");
if(olbks_link){
$("#holdings").html('<a href="'+olbks_link+'"><img src="http://media.bywatersolutions.com/Model/opac-ol.png" alt="Available from the Open Library" /></a>');
}
});


//Internet Archive results
$("#userresults").ready(function(){
$("#userresults table td").each(function(i){
td = $(this);
var iabks_link = td.find("a[href^='http://www.archive.org/details']");
var linkc = iabks_link.parent();
var iabks_link = iabks_link.attr("href");
if(iabks_link){
$("td:eq("+i+") span.availability,td:eq("+i+") span.actions").hide();
linkc.html('<a class="ebook" href="'+iabks_link+'">Available from the Internet Archive</a>');
}
});
});

//Internet Archive detail
$("span.online_resources").ready(function(){
var iabks_link = $("span.online_resources a[href^='http://www.archive.org/details']").attr("href");
if(iabks_link){
$("#holdings").html('<a href="'+iabks_link+'"><img src="http://media.bywatersolutions.com/Model/opac-ia.png" alt="Available from the Internet Archive" /></a>');
}
});


(function($) {
  //set speed
  var speed = 900;
  //var container store class
  //display animation
  var container =  $('.display-animation');
  //iterate over
  container.each(function() {

    var elements = $(this).children();
    elements.each(function() {
      var elementOffset = $(this).offset();
      var offset = elementOffset.left*0.8 + elementOffset.top;
      var delay = parseFloat(offset/speed).toFixed(2);
      $(this)
      //assigning CSS
        .css("-webkit-transition-delay", delay+'s')
        .css("-o-transition-delay", delay+'s')
        .css("transition-delay", delay+'s')
      //add class animated
        .addClass('animated');
    });
  });
})(jQuery);








/*more link for titles*/

$(document).ready( function() {



$('.bibliocol').each(function() {

if($(this).find('span.title_resp_stmt').length != 0 )  {

var title = $(this).children(':nth-child(3)');

var author = $(title).find('span.title_resp_stmt');

var author_text = $(author).text();

if($.trim(author_text) != '[electronic resource]') {


$(title).after("<section class='author_statement'>Expand</section>")

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

});

$(document).ready( function() {

if (window.location.href.indexOf("http://model.bywatersolutions.com/cgi-bin/koha/opac-search.pl") > -1) {

    console.log("calling prepare List");
    prepareList();

}

if (window.location.href.indexOf("http://model.bywatersolutions.com/plugin/Koha/Plugin/EDS/opac/eds-search.pl") > -1) {

$("body").addClass("eds");

}

});

$(document).ready( function() {
if (window.location.href.indexOf("http://model.bywatersolutions.com/cgi-bin/koha/opac-search.pl") > -1) {


}

});



$( "#facetcontainer" ).append('<section class="save_title"><section class="heading"><h4><a class="" href="#">Save Titles</a></h4></section><h4 class="save_text">Save Selected Titles To</h4><select class="disabled" name="addto" id="addto"><option>Add to...</option><option value="addtocart">Cart</option><optgroup label="Public lists:"><option id="s53" value="addtolist">BWS Staff  Books</option></optgroup><option value="newlist">[ New list ]</option></select><section class="save_action"><span class="checkall"><a id="CheckAll" href="#">Select all</a></span><span class="clearall"><a id="CheckNone" href="#">Clear all</a></span></section><input class="btn btn-small" value="Save" type="submit"><span id="placehold"><input class="hold disabled" value="Place hold" type="submit"></span></section>');

/*restricting to search results page*/
if (window.location.href.indexOf("http://model.bywatersolutions.com/cgi-bin/koha/opac-search.pl") > -1) {

if (window.outerWidth && window.outerWidth > 520) {

$(window).scroll(function(){

   /*capturing div id opac-main-search*/
  var sticky = $('#opac-main-search'),

      scroll = $(window).scrollTop();

  /*scroll position for search bar*/
  if (scroll >= 80) sticky.addClass('fixed');
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

/**************************************************************/
/* Prepares the cv to be dynamically expandable/collapsible   */
/**************************************************************/
function prepareList() {
    console.log("preparing list");
    $('.menu-collapse').find('li:has(ul)').click( function(event) {

        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed')
    .children('ul').hide();

//Hack to add links inside the cv
	$('.menu-collapse a').unbind('click').click(function() {
		window.open($(this).attr('href'), '_self');
		return false;
	});

    //Create the button funtionality
    $('.menu-collapse')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().show('medium');
    })
    $('.menu-collapse')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().hide('medium');
    })



};






$.getScript("/plugin/Koha/Plugin/EDS/js/EDSScript.js");

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




/* JS for Koha CoverFlow Plugin
   This JS was added automatically by installing the CoverFlow plugin
   Please do not modify */$(document).ready(function(){$.getScript("/plugin/Koha/Plugin/Com/ByWaterSolutions/CoverFlow/jquery-flipster/src/js/jquery.flipster.min.js",function(data,textStatus,jqxhr){$("head").append("<link id='flipster-css' href='/plugin/Koha/Plugin/Com/ByWaterSolutions/CoverFlow/jquery-flipster/src/css/jquery.flipster.min.css' type='text/css' rel='stylesheet' />");$('#coverflow').load("/coverflow.pl?id=165",function(){$('.coverTest img').on("load",function(){if(this.naturalHeight==1){$(this).attr("src","http://media.bywatersolutions.com/Model/NoImage.png");}});var opt={'items':'.item','minfactor':15,'distribution':1.5,'scalethreshold':0,'staticbelowthreshold':false,'titleclass':'itemTitle','selectedclass':'selectedItem','scrollactive':true,'step':{'limit':4,'width':10,'scale':true}};$('#coverflow').flipster({});});});});
/* End of JS for Koha CoverFlow Plugin */

$(document).ready(function() {

var addTo = $("#addto").html();

console.log(addTo);

$( "#facetcontainer" ).append('<section class="save_title"><section class="heading"><h4><a class="" href="#">Save Titles</a></h4></section><h4 class="save_text">Save Selected Titles To</h4><select>' + addTo + '</select><section class="save_action"><span class="checkall"><a id="CheckAll" href="#">Select all</a></span><span class="clearall"><a id="CheckNone" href="#">Clear all</a></span></section><input class="btn btn-small" value="Save" type="submit"><span id="placehold"><input class="hold disabled" value="Place hold" type="submit"></span></section>');
});

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

function generate_key(){
    var number = Math.random();
    var key = number.toString(36).substr(2,9);
    return key;
}

function add_item_to_list(key, namedItem) {
    $("<tr><td>"
    + namedItem.name
    +"</td><td id=" + key +">"
    + namedItem.item
    +"</td><td>"
    +"<button id=" +key + ">Delete Item</button>"
    +"</td></tr>").appendTo("#itemList");
    $('button#' + key).click(function(event){
        localStorage.removeItem(key);
        $('td#'+key).addClass("strikeThrough");
    });
}

$(function(){
    var userName = prompt("Please enter your name");
    sessionStorage.setItem('userName',userName);

    for (index = 0; index < localStorage.length; index++) {
        var key = localStorage.key(index);
        var namedItem = JSON.parse(localStorage.getItem(key));
        add_item_to_list(key, namedItem);
     }

$('#submitItem').click(function(event){
    var key = generate_key();
    var item = $('#item').val();
    $('#item').val("");
    var namedItem = {};
        namedItem.name = sessionStorage.getItem('userName');
        namedItem.item = item;
    var jsonNamedItem = JSON.stringify(namedItem);
    localStorage.setItem(key,jsonNamedItem);
    add_item_to_list(key, namedItem);
});
})


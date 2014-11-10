/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
var mapAddress = {
    1: new google.maps.LatLng(35.766869, 139.511735),
    2: new google.maps.LatLng(35.774920, 139.519541),
    3: new google.maps.LatLng(35.779420, 139.499376),
    4: new google.maps.LatLng(35.771230, 139.514855),
    5: new google.maps.LatLng(35.778419, 139.538775),
    6: new google.maps.LatLng(35.776634, 139.530677),
    7: new google.maps.LatLng(35.755708, 139.522299)
};


$(document).ready(function () {
    $("#map-radio").find('.btn-primary').on('click', function () {
        setMapCommon(mapAddress[$(this).find('input').val()]);
    });
    $('.bs-example-modal-lg').on('shown.bs.modal', function (e) {
        initialize();
    });
    
    
});

function initialize() {
    setMapCommon(mapAddress[1]);
}

function setMapCommon(latLng) {

    var mapOptions = {
        zoom: 15,
        center: latLng
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        title: 'Click to zoom'
    });

}


function toShinagawa() {
    map.panTo(new google.maps.LatLng(35.629867, 139.74015));
}

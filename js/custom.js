
// dashboard pages sidebar toggle code


$(document).ready(function(){
    $("#sidebar-toggle-button").click(function(e){
      e.preventDefault();
        $(".dashboard-sidebar-wrap").toggleClass("sidebar-toggled");
        $(".dashboard-content-wrap").toggleClass("dashboard-content-toggled");
    });
   
});

// active user profile and cart dropdown

$(document).ready(function(e) {
    $(".toggle-profile-cart").click(function(){
        $(".nav-wraper.dashboard .nav-btn-wrap").slideToggle(300);
    });
});

jQuery(".dashboard-sidebar-wrap .children-items").click(function(e){
    // e.preventDefault();
    jQuery(this).toggleClass("toggled");
    jQuery(".sub-menu").slideToggle(300);
});

var allPanels_dtbl = jQuery('#dashboard-datatable .action-btn-wrap .drpdwn');
jQuery("#dashboard-datatable a.a-view-btn").click(function (){
    allPanels_dtbl.slideUp(300);
    jQuery(this).closest("#dashboard-datatable_wrapper .action-btn-wrap").find(".drpdwn").stop().slideToggle(300);
});
// profile inner dropdown button
var profile_panels = jQuery('.profile-wrap .profile-dropdown');
console.log(profile_panels);
jQuery(".profile-wrap a.profile-dropdown-btn").click(function (){
    profile_panels.slideUp(300);
    // console.log(profile_panels);
    jQuery(this).closest(".profile-wrap .profile-inner-wrap").find(".profile-dropdown").stop().slideToggle(300);
});
// $(document).ready(function(e) {
//     $(".profile-dropdown-btn").click(function(){
//         $(".profile-dropdown").slideToggle(300);
//     });
// });


// hide the profile dropdown on click outside

/* Anything that gets to the documentwill hide the dropdown */
   $(document).click(function(){
    $(".profile-dropdown").slideUp(300);
  });
  
  /* Clicks within the dropdown won't make it past the dropdown itself */
  $(".profile-dropdown-btn").click(function(e){
    e.stopPropagation();
});


// Data Tables initialization

$(document).ready( function () {
    $('#dashboard-datatable').DataTable();
});



/* Anything that gets to the documentwill hide the dropdown */
$(document).click(function(){
    $(".card-dropdown-wrap").hide();
  });
  
  /* Clicks within the dropdown won't make it past the dropdown itself */
  $(".card-btn-wrap").click(function(e){
    e.stopPropagation();
});



// profile inner dropdown button

// $(document).ready(function(e) {
//     $(".a-view-btn").click(function(){
//         $(".drpdwn").slideToggle(300);
//     });
// });


// hide the profile dropdown on click outside

/* Anything that gets to the documentwill hide the dropdown */
$(document).click(function(){
    $(".drpdwn").slideUp(300);
  });
  
  /* Clicks within the dropdown won't make it past the dropdown itself */
  $(".a-view-btn").click(function(e){
    e.stopPropagation();
});



// // increment and drecrement buttons 
// function increment() {
//     document.getElementById('demoInput').stepUp();
//  }
//  function decrement() {
//     document.getElementById('demoInput').stepDown();
//  }

// $(document).ready(function() {
//     $('.js-example-disabled-results').select2();
// });
var $disabledResults = $(".js-example-disabled-results");
$disabledResults.select2();
function show_global_error(string, url, delayInMicroSeconds) {
  url = typeof url !== "undefined" ? url : false;
  delayInMicroSeconds =
    typeof delayInMicroSeconds !== "undefined" ? delayInMicroSeconds : "3000";
  $(".error_divison").clearQueue();
  $(".error_divison")
    .html(string)
    .fadeIn()
    .delay(delayInMicroSeconds)
    .fadeOut(function () {
      if (url !== false) {
        redirect(url);
      }
    });
}
function redirect(url) {
  location.href = url;
}

/* function to check empty, condition fields */
function isFieldEmpty(field_value) {
  field_value = $.trim(field_value);
  if (field_value === "") {
    return true;
  }
  return false;
}
function isNotName(name) {
  nameregex = /^[a-zA-Z ]*$/;
  if (!nameregex.test(name)) {
    return true;
  }
  return false;
}
function isEmail(email) {
  var pattern = new RegExp(
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
  );
  if (pattern.test(email)) {
    return true;
  }
  return false;
}
function isNumber(number) {
  if (!$.isNumeric(number)) {
    return false;
  }
  return true;
}
function isPhone(phone) {
  if ($.isNumeric(phone) && phone.length > 5 && phone.length < 20) {
    return true;
  }
  return false;
}
/* function to check empty, condition fields */

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

$(document).ready(function () {
  /* active nav item code */
  var pgurl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $("nav ul li a").each(function () {
    if ($(this).attr("href") === pgurl) {
      $(this).addClass("active");
    }
  });
  $(".sidenav a").each(function () {
    if ($(this).attr("href") === pgurl) {
      $(this).addClass("active");
    }
  });

  $(".sidenav").sidenav({
    menuWidth: 200,
    edge: "left",
  });

  $("#products-sub-menu li a").click(function () {
    $(this).next("ul").slideToggle("500");
    $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
  });

  $(".collapsible").collapsible();
  $(".dropdown-trigger").dropdown({
    //      inDuration: 300,
    //      outDuration: 225,
    coverTrigger: false,
    //      constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    //      gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: "left", // Displays dropdown with edge aligned to the left of button
    //      stopPropagation: false // Stops event propagation
  });

  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window
  });
  wow.init();
});

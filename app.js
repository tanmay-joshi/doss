console.log("yay")

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzjbrIOqh1Ca2M_fu9x5NVKW1AR2iiJN-cpugBJO4mNdpSsRA2lOzBBFBfLkwGDVlH05g/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  console.log("oh", $('.mobile')[0].value.length)
  if ($('.mobile')[0].value.length == 10) {
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
    console.log("yay", document.getElementsByClassName("mobile")[0].style.display),
    document.getElementsByClassName("mobile")[0].style.display = "none",
    document.getElementById("submit-form").innerHTML = "Thanks!",
  );
  } else {
    document.getElementById("submit-form").innerHTML = "Use your correct mobile 👀",
    setTimeout(() => {
      document.getElementById("submit-form").innerHTML = "Join The Waitlist"
    }, 2500);
  }
})

$('.mobile').keypress(function(e) {
    var arr = [];
    var kk = e.which;
 
    for (i = 48; i < 58; i++)
        arr.push(i);
 
    if (!(arr.indexOf(kk)>=0))
        e.preventDefault();
});

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
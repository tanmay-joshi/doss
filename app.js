console.log("yay")

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzjbrIOqh1Ca2M_fu9x5NVKW1AR2iiJN-cpugBJO4mNdpSsRA2lOzBBFBfLkwGDVlH05g/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var ref  = sessionStorage.getItem("doss_utm_source");
  if(ref===null){ ref=""}

  console.log("oh", $('.mobile')[0].value.length)
  if ($('.mobile')[0].value.length == 10) {

    mixpanel.track("response_submitted", {
      "mobile": $('.mobile')[0].value,
      "referrer": ref
    });
    mixpanel.identify($('.mobile')[0].value);
    mixpanel.people.set({ "referrer": ref });

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    }).success(
      // do something
      console.log("yay", document.getElementsByClassName("mobile")[0].style.display),
      document.getElementsByClassName("mobile")[0].style.display = "none",
      document.getElementById("submit-form").style.display = "none",
      document.getElementById("lym").innerHTML = "Join our discord server!",
      document.getElementById("discordbtn").style.display = "block",
      
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
  mixpanel.track("join_the_waitlist_clicked");
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  mixpanel.track("modal_closed");
}

// GoatCounter analytics: cookieless, no consent banner needed.
// Set CODE to the site code from goatcounter.com (e.g. "alexandersales"). Empty = off.
(function () {
  var CODE = 'marshfalex';
  if (!CODE || location.hostname === 'localhost') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + CODE + '.goatcounter.com/count');
  document.head.appendChild(s);

  function track(name) {
    if (window.goatcounter && window.goatcounter.count)
      window.goatcounter.count({ path: name, title: document.title, event: true });
  }

  // Phone taps, quote-button clicks and form sends
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) track('click-call');
    else if (href.indexOf('product=') !== -1) track('click-quote');
  });
  // The form redirects back with ?sent=1, so count it on arrival (a count
  // fired during submit can be lost as the page unloads)
  if (/[?&]sent=1/.test(location.search))
    s.addEventListener('load', function () { track('form-sent'); });
})();

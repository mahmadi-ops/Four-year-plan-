/* "Spot a typo or error? Tell us." at the foot of every page.  The link opens the
   department's feedback form (Google Forms) with the page already filled in. */
(function () {
  var FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSfXueEwsaVoECwJaS6VWV3YBdRP8-ESllt0ygkpSCchcMoYsQ/viewform';
  var PAGE = 'entry.2122507823';
  function pageName() {
    var t = document.querySelector('.ptx-content section > .heading .title, .ptx-content .heading .title');
    var name = t ? t.textContent.trim() : document.title;
    var file = location.pathname.split('/').pop() || 'index.html';
    return name + ' (' + file + ')';
  }
  function add() {
    var host = document.querySelector('.ptx-content');
    if (!host || document.getElementById('site-feedback')) return;
    var p = document.createElement('p'); p.id = 'site-feedback';
    var a = document.createElement('a');
    a.href = FORM + '?usp=pp_url&' + PAGE + '=' + encodeURIComponent(pageName());
    a.target = '_blank'; a.rel = 'noopener';
    a.textContent = 'Spot a typo or error? Tell us.';
    p.appendChild(a); host.appendChild(p);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();

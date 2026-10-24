/* Floating "Spot a typo or error? Tell us." button on every page.  It opens the
   department's feedback form (Google Forms) with the page filled in, and on a
   planner page with a plan started, the student's plan code as well. */
(function () {
  var FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSfXueEwsaVoECwJaS6VWV3YBdRP8-ESllt0ygkpSCchcMoYsQ/viewform';
  var PAGE = 'entry.2122507823', CODE = 'entry.578657742';
  function pageName() {
    var t = document.querySelector('.ptx-content section > .heading .title, .ptx-content .heading .title');
    var name = t ? t.textContent.trim() : document.title;
    var file = location.pathname.split('/').pop() || 'index.html';
    return name + ' (' + file + ')';
  }
  function planCode() {   // the embedded planner is on the same site, so its plan can be read
    var f = document.querySelector('iframe#planner, iframe#cs-planner');
    try { var p = f && f.contentWindow.__planner; if (p && p.code && p.hasPlan()) return p.code(); } catch (e) {}
    return '';
  }
  function url() {
    var u = FORM + '?usp=pp_url&' + PAGE + '=' + encodeURIComponent(pageName());
    var c = planCode(); if (c) u += '&' + CODE + '=' + c;
    return u;
  }
  function add() {
    if (document.getElementById('site-feedback')) return;
    var a = document.createElement('a');
    a.id = 'site-feedback'; a.className = 'feedback-fab';
    a.target = '_blank'; a.rel = 'noopener'; a.href = url();
    a.setAttribute('aria-label', 'Spot a typo or error? Tell us (opens the feedback form)');
    a.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2zm7 4v5h2V7h-2zm0 7v2h2v-2h-2z"/></svg>'
      + '<span class="fab-long">Spot a typo or error? Tell us</span><span class="fab-short">Feedback</span>';
    var refresh = function () { a.href = url(); };   // pick up the plan as it is at click time
    a.addEventListener('mousedown', refresh); a.addEventListener('focus', refresh); a.addEventListener('touchstart', refresh, {passive: true});
    document.body.appendChild(a);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();

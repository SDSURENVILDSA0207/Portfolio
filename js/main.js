/**
 * Progressive enhancement with jQuery: mobile nav, smooth scroll, active states.
 */
(function ($) {
  "use strict";

  var $doc = $(document);
  var $win = $(window);
  var $header = $(".site-header");
  var $nav = $("#site-nav");
  var $toggle = $(".nav-toggle");
  var $navLinks = $(".site-nav a[href^='#']");

  function closeNav() {
    $nav.removeClass("is-open");
    $toggle.attr("aria-expanded", "false").attr("aria-label", "Open menu");
    $("body").removeClass("nav-open");
  }

  function openNav() {
    $nav.addClass("is-open");
    $toggle.attr("aria-expanded", "true").attr("aria-label", "Close menu");
    $("body").addClass("nav-open");
  }

  $toggle.on("click", function () {
    if ($nav.hasClass("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  $navLinks.on("click", function () {
    if ($win.width() <= 860) {
      closeNav();
    }
  });

  $doc.on("keyup", function (e) {
    if (e.key === "Escape") {
      closeNav();
    }
  });

  $win.on("resize", function () {
    if ($win.width() > 860) {
      closeNav();
    }
  });

  /** Smooth scroll for in-page links (respect reduced motion via CSS on html) */
  $('a[href^="#"]').on("click", function (e) {
    var id = this.getAttribute("href");
    if (!id || id === "#") {
      return;
    }
    var $target = $(id);
    if ($target.length) {
      e.preventDefault();
      var headerH = $header.outerHeight() || 0;
      var offset =
        id === "#top"
          ? 0
          : $target.offset().top - headerH - 12;
      $("html, body").animate({ scrollTop: offset }, 450);
    }
  });

  /** Footer year */
  $("#year").text(new Date().getFullYear());

  /** Subtle header shadow on scroll */
  $win.on("scroll", function () {
    if ($win.scrollTop() > 8) {
      $header.addClass("is-scrolled");
    } else {
      $header.removeClass("is-scrolled");
    }
  });
})(jQuery);

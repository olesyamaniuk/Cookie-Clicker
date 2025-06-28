$(function () {
  $(".t-g-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".t-g-gallery-list-left",
    nextArrow: ".t-g-gallery-list-right",
  });
});

// Author : Giai Vi
// Version : 1.0
// Project : Creative Themes POFO

/*----------------------------Menu Table -----------------------*/
$(document).ready(() => {
    new WOW().init();
    sliderNav.init();
    feedBackSlider.init();
    scrollUp.init();
    optionSelect.init();
    clickOptColor.init();
    featuredProduct.init();
    tabClick.init();
    searchBar.init();
    loader.init();
    popupModal.init();
});

const sliderNav = {
    init() {
        this.sliderNav();
    },
    sliderNav() {
        var owl = $(".slider.owl-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: [
                `<ion-icon name="chevron-back-outline"></ion-icon>`,
                `<ion-icon name="chevron-forward-outline"></ion-icon>`,
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
            mouseDrag: false,
            autoplayTimeout: 6000,
        });
        owl.on("changed.owl.carousel", function (e) {
            new WOW().init();
        });
    },
};

const feedBackSlider = {
    init() {
        this.feedBackSlider();
    },
    feedBackSlider() {
        $(".feedback__slider.owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: [
                `<ion-icon name="chevron-back-outline"></ion-icon>`,
                `<ion-icon name="chevron-forward-outline"></ion-icon>`,
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });
    },
};

const scrollUp = {
    init() {
        this.scrollUp();
    },
    scrollUp() {
        let btn = $(".scroll-top");
        let nav = $(".navbar");
        $(window).scroll((e) => {
            let pos = $(window).scrollTop();
            if (pos > 80) {
                btn.addClass("active");
            } else {
                btn.removeClass("active");
            }
            if (pos > 250) {
                nav.addClass("active");
            } else {
                nav.removeClass("active");
            }
        });
        if (btn) {
            btn.click((e) => {
                e.preventDefault();
                $("html, body").scrollTop(0);
            });
        }
    },
};

const optionSelect = {
    init() {
        this.optionSelect("#lang-select", ".lang-list", ".lang-list__item");
        this.optionSelect("#money-select", ".money-list", ".money-list__item");
    },
    optionSelect(opt, lst, lstItem) {
        let slt = $(opt);
        let list = $(lst);
        let listItem = $(lstItem);
        let overlay = $(".overlay");
        slt.click((e) => {
            e.stopPropagation();
            if (list.hasClass("active")) {
                overlay.removeClass("active");
                list.removeClass("active");
            } else {
                list.addClass("active");
                overlay.addClass("active");
            }
        });
        $(window).click((e) => {
            overlay = $(".overlay");
            if (e.target == overlay.get(0)) {
                overlay.removeClass("active");
                list.removeClass("active");
            }
        });
        listItem.click(function (e) {
            if ($(listItem).attr("class").split(" ")[0] == "lang-list__item") {
                let img = $(this).find("img").get(0).src;
                slt.find("img").get(0).src = img;
            }
            let cnt = $(this).find("span").text();
            slt.find("span").text(cnt);
            list.removeClass("active");
            overlay.removeClass("active");
        });
    },
};

const clickOptColor = {
    init() {
        this.clickOptColor();
    },
    clickOptColor() {
        let item = $(".color > span");
        item.click(function (e) {
            const $this = $(this).parent(".color").find("span");
            $this.each(function (idx, itm) {
                if ($(itm).hasClass("active")) {
                    $(itm).removeClass("active");
                }
            });
            $(this).addClass("active");
        });
    },
};

const featuredProduct = {
    init() {
        this.featuredProduct();
    },
    featuredProduct() {
        $(".featured__product.owl-carousel").owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            navText: [
                `<ion-icon name="chevron-back-outline"></ion-icon>`,
                `<ion-icon name="chevron-forward-outline"></ion-icon>`,
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
            },
            autoplayTimeout: 5000,
        });
    },
};

const tabClick = {
    init() {
        this.tabClick();
    },
    tabClick() {
        let tabItem = $(".exclusive__tab-item");
        let link = $(".exclusive__link > li > a");
        link.click(function (e) {
            e.preventDefault();
            link.each(function (idx, item) {
                $(item).removeClass("active");
            });
            $(this).addClass("active");
            let id = $(this).attr("id");
            tabItem.each(function (idx, item) {
                if (
                    !($(item).data("tab") == id && $(item).hasClass("active"))
                ) {
                    if (
                        $(item).hasClass("active") ||
                        $(item).hasClass("show")
                    ) {
                        $(item).removeClass("active");
                        $(item).removeClass("show");
                        $(item).fadeOut("fast");
                    }
                    if ($(item).data("tab") == id) {
                        $(item).addClass("active");
                        $(item).fadeIn();
                    }
                }
            });
        });
    },
};

const searchBar = {
    init() {
        this.searchBar();
    },
    clickAction(item, search, overlay) {
        item.click(function (e) {
            if (
                $(this)[0].classList[1] == "navbar-search__link" ||
                $(this)[0].classList[0] == "search__close"
            ) {
                e.preventDefault();
            } else if ($(this)[0].classList[0] == "search__wrap") {
                if (e.target != this) return;
            }
            search.toggleClass("active");
            overlay.toggleClass("active");
        });
    },
    searchBar() {
        let btn = $(".navbar-search__link");
        let cls = $(".search__close");
        let search = $(".search__wrap");
        let overlay = $(".search__overlay");
        this.clickAction(btn, search, overlay);
        this.clickAction(search, search, overlay);
        this.clickAction(cls, search, overlay);
        this.clickAction(overlay, search, overlay);
    },
};

const loader = {
    init() {
        this.loader();
    },
    loader() {
        $(window).on("load", function () {
            setTimeout(function () {
                $(".loader")
                    .delay(1000)
                    .fadeOut("slow")
                    .addClass("loader-loaded");
            }, 1000);
        });
    },
};

const popupModal = {
    init() {
        this.popupModal();
    },
    popupModal() {
        setTimeout(() => {
            $("#popup-modal").modal("show");
        }, 3500);
    },
};

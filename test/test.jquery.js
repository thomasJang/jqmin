describe('TEST', function () {
    var myUI;

    var tmpl = '<div data-test="1"></div>';

    jQuery(document.body).append(tmpl);

    ///
    it('css & width', function (done) {
        var $el = jQuery('[data-test="1"]');
        $el.css({width: 300});
        done($el.width() == 300 ? "" : "$el.width() = " + $el.width());
    });

    it('css & outerWidth', function (done) {
        var $el = jQuery('[data-test="1"]');
        $el.css({width: 300});
        done($el.outerWidth() == 300 ? "" : "$el.outerWidth() = " + $el.outerWidth());
    });

    it('ready', function (done) {
        jQuery(document).ready(function () {
            done();
        });
    });

    it('ready', function (done) {
        $(function () {
            done();
        });
    });

    it('resize', function (done) {
        jQuery(window).on("resize", function () {
            jQuery(window).off("resize");
            done();
        });
        jQuery(window).trigger("resize");
    });



});
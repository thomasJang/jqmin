/*
 * Copyright (c) 2017. tom@axisj.com
 * - github.com/thomasjang
 * - www.axisj.com
 */

// TODO: excluded ajax

describe('jQuery attributes', function () {
    describe('jQuery attributes/attr', function () {
        var tmpl = '<div data-test="attr"></div>';
        jQuery(document.body).append(tmpl);

        var $el = jQuery('[data-test="attr"]');

        after(function () {
            $el.remove();
        });

        it('attr', function (done) {
            done($el.attr('data-test') == "attr" ? "" : "jQuery attributes.attr error");
        });

        it('removeAttr', function (done) {
            $el.removeAttr('data-test');
            done($el.attr('data-test') == undefined ? "" : "jQuery attributes.removeAttr error");
        });
    });

    describe('jQuery attributes/classes', function () {
        var tmpl = '<div data-test="class"></div>';
        jQuery(document.body).append(tmpl);

        var $el = jQuery('[data-test="class"]');

        after(function () {
            $el.remove();
        });

        it('addClass', function (done) {
            $el.addClass('class-test');
            done($el.attr('class') == "class-test" ? "" : "jQuery attributes.addClass error");
        });

        it('hasClass', function (done) {
            done($el.hasClass('class-test') == true ? "" : "jQuery attributes.hasClass error");
        });

        it('toggleClass', function (done) {
            $el.toggleClass('class-test');
            done($el.hasClass('class-test') == false ? "" : "jQuery attributes.toggleClass error");
        });

        it('removeClass', function (done) {
            $el.removeClass('class-test');
            done($el.hasClass('class-test') == false ? "" : "jQuery attributes.removeClass error");
        });
    });

    // TODO: excluded attributes/prop

    // TODO: excluded attributes/support

    describe('jQuery attributes/val', function () {
        var tmpl = '<input type="text" data-val-test="val" value="jqmin"/>';
        jQuery(document.body).append(tmpl);

        var $el = jQuery('[data-val-test="val"]');

        after(function () {
            $el.remove();
        });

        it('get val', function (done) {
            done($el.val() == "jqmin" ? "" : "jQuery attributes.val error");
        });

        it('set val', function (done) {
            done($el.val("ax6ui").val() == "ax6ui" ? "" : "jQuery attributes.val error");
        });
    });
});

describe('jQuery core', function () {
    describe('jQuery core/ready', function () {
        // TODO: ready-no-deferred
        it('jQuery core/ready', function (done) {
            jQuery(document).ready(function () {
                done();
            });
        });

        it('jQuery core/ready', function (done) {
            $(function () {
                done();
            });
        });
    });
});

describe('jQuery css', function () {
    var tmpl = '<div data-test="css"></div>';
    jQuery(document.body).append(tmpl);

    var $el = jQuery('[data-test="css"]');

    after(function () {
        $el.remove();
    });

    // padding 안쪽 크기
    it('css & width', function (done) {
        $el.css({width: 300});
        done($el.width() == 300 ? "" : "$el.width() = " + $el.width());
    });

    // border 안쪽 크기
    it('css & innerWidth', function (done) {
        $el.css({padding: 10});
        done($el.innerWidth() == 320 ? "" : "$el.innerWidth() = " + $el.innerWidth());
    });

    // border 포함 크기
    it('css & outerWidth', function (done) {
        $el.css({border: "solid 10px black"});
        done($el.outerWidth() == 340 ? "" : "$el.outerWidth() = " + $el.outerWidth());
    });

    // padding 안쪽 크기
    it('css & height', function (done) {
        $el.css({height: 300});
        done($el.height() == 300 ? "" : "$el.height() = " + $el.height());
    });

    // border 안쪽 크기
    it('css & innerHeight', function (done) {
        $el.css({padding: 10});
        done($el.innerHeight() == 320 ? "" : "$el.innerHeight() = " + $el.innerHeight());
    });

    // border 포함 크기
    it('css & outerHeight', function (done) {
        $el.css({border: "solid 10px black"});
        done($el.outerHeight() == 340 ? "" : "$el.outerHeight() = " + $el.outerHeight());
    });

    it('css & offset', function () {
        var offset = {top: 30, left: 30};
        should.deepEqual($el.offset(offset).offset(), offset);
    });

    it('css & position', function () {
        should.deepEqual($el.position(), {top: 48, left: 30});
    });
});

describe('jQuery event', function () {
    describe('jQuery event/browser events', function () {
        it('resize', function (done) {
            jQuery(window).on("resize", function () {
                jQuery(window).off("resize");
                done();
            });
            jQuery(window).trigger("resize");
        });
    });
});
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

        it('error', function (done) {
            jQuery(window).on("error", function () {
                jQuery(window).off("error");
                done();
            });
            jQuery(window).trigger("error");
        });

        it('scroll', function (done) {
            jQuery(window).on("scroll", function () {
                jQuery(window).off("scroll");
                done();
            });
            jQuery(window).trigger("scroll");
        });

        it('load', function (done) {
            jQuery(window).on("load", function () {
                jQuery(window).off("load");
                done();
            });
            jQuery(window).trigger("load");
        });

        it('unload', function (done) {
            jQuery(window).on("unload", function () {
                jQuery(window).off("unload");
                done();
            });
            jQuery(window).trigger("unload");
        });
    });

    describe('jQuery event/document loading', function () {
        // TODO: ready-no-deferred
        it('01. ready', function (done) {
            jQuery(document).ready(function () {
                done();
            });
        });

        it('02. ready', function (done) {
            $(function () {
                done();
            });
        });

        it('03. ready', function (done) {
            jq2 = jQuery.noConflict();
            jq2(function ($) {
                $(function () {
                    done();
                });
            });
        });
    });

    describe('jQuery event/event handler attachment', function () {
        var tmpl = '<button type="button" data-test="btn">버튼</button>';
        jQuery(document.body).append(tmpl);

        var $el = jQuery('[data-test="btn"]');

        after(function(){
           $el.remove();
        });

        it('on', function (done) {
            jQuery(window).on('click', function () {
                done();
            });
            $el.trigger('click');
        });

        it('off', function (done) {
            setTimeout(function () {
                jQuery(window).off('click');
                done();
            }, 50);
        });

        it('one', function (done) {
            jQuery(window).one('click', function () {
                done();
            });
            $el.trigger('click');
        });
    });

    // TODO: excluded event/focusin

    describe('jQuery forms', function () {
        var tmpl = '<form name="test-form" data-test="form" action="#"><input type="text" name="one" value="1"/><input type="text" name="two" value="2"/></form>';
        jQuery(document.body).append(tmpl);

        var $el = jQuery('[data-test="form"]');

        after(function(){
            $el.remove();
        });

        // TODO: FAIL
        it('serialize : [FAIL] prop is not a function', function (done) {
            try {
                $el.serialize();
            }
            catch (e){
                console.log(e);
            }
            finally {
                done();
            }
        });

        // TODO: FAIL
        it('submit : [FAIL] $el.submit is not a function', function (done) {
            try {
                $el.on("submit", function () {
                    done();
                });

                $el.submit();
            }
            catch (e){

            }
            finally {
                done();
            }

        });

        it('param', function () {
            var param = {
                a: 1,
                b: 2,
                c: 3
            };

            should.deepEqual(jQuery.param(param), "a=1&b=2&c=3");
        });

        it('val', function () {
            should.deepEqual(jQuery(document.getElementsByName("two")).val(), '2');
        });
    });


});
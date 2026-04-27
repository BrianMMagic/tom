;
(function ($, window, document, undefined) {

    var pluginName = "scrollAnimations",
        defaults = {
            offset: 0.1
        };

    function ScrollAnimations(element, options) {
        if (!element) return;
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    ScrollAnimations.prototype = {

        init: function() {
            var _this = this;
            var $el = $(this.element);
            var $children = $el.find('[data-animation-child]');

            // Apply animation delays up front
            if ($children.length) {
                $children.each(function() {
                    var delay = $(this).attr('data-animation-delay');
                    if (delay) $(this).css('animation-delay', delay);
                });
            } else {
                var delay = $el.attr('data-animation-delay');
                if (delay) $el.css('animation-delay', delay);
            }

            // Replicate the original offset: fire when element top reaches
            // (offset * 100)% from the top of the viewport
            var marginBottom = '-' + Math.round(_this.options.offset * 100) + '%';

            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;

                    var $target = $(entry.target);
                    var $kids = $target.find('[data-animation-child]');

                    if ($kids.length) {
                        $target.addClass('animated');
                        $kids.each(function() {
                            $(this).addClass('animated').addClass($(this).attr('data-animation'));
                        });
                    } else {
                        $target.addClass('animated').addClass($target.attr('data-animation'));
                    }

                    observer.unobserve(entry.target);
                });
            }, {
                rootMargin: '0px 0px ' + marginBottom + ' 0px'
            });

            observer.observe(this.element);
        }

    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new ScrollAnimations(this, options));
            }
        });
    };

    if (typeof define === 'function' && define.amd) {
        define(function() { return ScrollAnimations; });
    }

})(jQuery, window, document);

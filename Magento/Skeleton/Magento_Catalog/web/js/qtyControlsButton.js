define(['jquery'], function ($) {
    'use strict';

    $.widget('mage.qtyControlsButton', {
        _create: function () {
            var $btnDecrement = $('.decrement');
            var $btnIncrement = $('.increment');
            var $valueInput = $('#qty');

            $btnDecrement.on('click', function (evt) {
                evt.preventDefault();

                var value = parseInt($valueInput.val());
                value -= 1;
                $valueInput.val(value);
            });

            $btnIncrement.on('click', function (evt) {
                evt.preventDefault();

                var value = parseInt($valueInput.val());
                value += 1;
                $valueInput.val(value);
            });

        }
    });

    return $.mage.qtyControlsButton;
});

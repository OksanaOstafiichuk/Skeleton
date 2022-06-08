define(['jquery', 'niceSelect'], function ($) {
    'use strict';

    $.widget('mage.sorter', {
        _create: function () {
            $('.sorter-options').niceSelect();
        }
    });

    return $.mage.sorter;
});

define(['jquery', 'niceSelect'], function ($) {
    'use strict';

    $.widget('Skeleton.sorter', {
        _create: function () {
            $('.sorter-options').niceSelect();
        }
    });

    return $.Skeleton.sorter;
});

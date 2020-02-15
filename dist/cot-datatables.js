"use strict";

/* global jQuery */
(function ($) {
  $.fn.cotDataTable = function () {
    this.each(function () {
      var $this = $(this);

      if ($this.is('table')) {
        var datatable = $this.data('datatable');

        if (datatable == null) {
          $this.DataTable();
        }
      }
    });
    return this;
  };
})(jQuery);
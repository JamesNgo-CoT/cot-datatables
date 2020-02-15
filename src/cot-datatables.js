/* global jQuery */

(function ($) {
	$.fn.cotDataTable = function () {
		this.each(function () {
			const $this = $(this);

			if ($this.is('table')) {

				let datatable = $this.data('datatable');

				if (datatable == null) {
					$this.DataTable();
				}
			}
		});

		return this;
	};
}(jQuery));

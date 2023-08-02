//let maxDate = new Date();
//maxDate = maxDate.setMonth(maxDate.getMonth() + 3);
//
//// Javaから渡されたdisabledDatesをJavaScriptの配列に変換
//var disabledDates = /*[[${#jsonArray(disabledDates)}]]*/ [];
//
//document.addEventListener('DOMContentLoaded', function() {
//	var disabledDateObjects = disabledDates.map(function(date) {
//		return new Date(date);
//	});
//
//	flatpickr('#fromCheckinDateToCheckoutDate', {
//		mode: "range",
//		locale: 'ja',
//		minDate: 'today',
//		maxDate: maxDate,
//		disable: disabledDateObjects,
//	});
//});

function callender(){
	let maxDate = new Date();
	maxDate = maxDate.setMonth(maxDate.getMonth() + 3);

	// Javaから渡されたdisabledDatesをJavaScriptの配列に変換
	var disabledDateObjects = disabledDates.map(function(date) {
		return new Date(date);
	});
	
		flatpickr('#fromCheckinDateToCheckoutDate', {
			mode: "range",
			locale: 'ja',
			minDate: 'today',
			maxDate: maxDate,
			disable: disabledDateObjects,
		});
}
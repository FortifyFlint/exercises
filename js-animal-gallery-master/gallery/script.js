// Add your code here
// event listener



// $('#monkey').on('click', function () {
//   // alert("Yup, it's a button.");
// 	$( ".gallery div" ).hide();
// 	$( ".monkey" ).show();
// 	$(".dog .active") .hide();
// 	// $(".button") .show ();
// });


// $('#dog').on('click', function () {
//   // alert("Yup, it's a button.");
// 	$( ".gallery div" ).hide();
// 	$( ".dog" ).show();
// });

// $('#cat').on('click', function () {
//   // alert("Yup, it's a button.");
// 	$( ".gallery div" ).hide();
// 	$( ".cat" ).show();
// });


// // or

// $(".filter-button") .on('click', function () {
// 	var animal  = this.id;

// 	$(".monkey").toggle();
// 	$("#monkey").toggleClass("active");
// });

// or

$(".filter-button") .on('click', function () {
	// var animal  = this.id;
	
	$("." + this.id).toggle();
	$("#" + this.id).toggleClass("active");
});

// $('button').on('click', 'button', function(){

// });



// $('button').val('button').appendTo('body'{

// });



// var angryGandalf = function(color) {
//     if (color === "grey") {
//      }   else if (color === "white") {
//      }   else {"You merely passed me to your demise.";
//             return "I don't think I'm Gandalf anymore.";
//         }
//      }

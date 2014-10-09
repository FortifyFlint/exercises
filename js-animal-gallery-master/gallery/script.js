// Add your code here
// event listener



$('#monkey').on('click', function () {
  // alert("Yup, it's a button.");
	$( ".gallery div" ).hide();
	$( ".monkey" ).show();
	$(".dog .active") .hide();
	// $(".button") .show ();
});

// $('#monkey').on('click', function () {
//   // alert("Yup, it's a button.");
// 	$( ".gallery div" ).show();
// });

$('#dog').on('click', function () {
  // alert("Yup, it's a button.");
	$( ".gallery div" ).hide();
	$( ".dog" ).show();
});

$('#cat').on('click', function () {
  // alert("Yup, it's a button.");
	$( ".gallery div" ).hide();
	$( ".cat" ).show();
});

$(this.id)

// or

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

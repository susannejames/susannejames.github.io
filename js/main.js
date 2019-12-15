function askQuestions() {

	var firstName=prompt('what is your first name?');
	var lastName=prompt('what is your last name?');
	var fullName = firstName+' ' + lastName;

	console.log(fullName);

	var age = prompt('how old are you?');
	age = parseInt (age);

	if (age >=18) {
			console.log('User is an adult')
	}
	else if (age>= 13) {
			console.log('User is a teenager.');
	}
	else {
		console.log('user is a child.');
	}





	var faveColour = prompt('what is your favourite colour?');
	if (faveColour==='red' ||
		faveColour==='green')

	{
		$('h1').css('color', faveColour);
	}
	if (firstName==="General" && lastName!== 'Assembly'){
			alert('Hello General')
	} else if (firstName!=="General"){
			alert('piss off')
	}

	}
//when teh page has loaded
$(function () {

	//Run askquestions when image is clicked
	$('img').on('click', askQuestions);

	//hide all teh content
	$('h3').next().hide();

	//when the user clicks on a heading
	$('h3').on('click', function () {

	//toggle the next element
	$(this).next().slideToggle(1000);
	});

});
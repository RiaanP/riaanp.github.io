var btnHtml = '<table cellpadding="0" cellspacing="0" border="0"><tr><td style="text-decoration:none;background-color:[BGCOLOR];border:[OUTLINEBORDERSIZE] solid [OUTLINEBORDERCOLOR];" align="center" valign="middle"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td width="18" height="40" style="display:none;" class="mso-only">&nbsp;</td><td><![endif]--><a href="[URL]" target="_blank" style="display:block;color:[TEXTCOLOR];text-decoration:none;font-size:[BUTTONTEXTSIZE];font-weight:bold;font-family:Arial,Verdana,sans-serif;mso-line-height-rule:exactly;line-height:17px;border-top:[BORDERSIZE] solid [BORDERCOLOR];border-bottom:[BORDERSIZE] solid [BORDERCOLOR];border-left:[BORDERSIZESIDES] solid [BORDERCOLOR];border-right:[BORDERSIZESIDES] solid [BORDERCOLOR];">[BUTTONTEXT]</a><!--[if (gte mso 9)|(IE)]></td><td width="18" style="display:none;" class="mso-only">&nbsp;</td></tr></table><![endif]--></td></tr></table>';
var output = ""; // This string will contain the final output
var replacementArr = [["[BGCOLOR]", "backgroundColor"],
	["[OUTLINEBORDERCOLOR]", "outlineBorderColor"],
	["[OUTLINEBORDERSIZE]", "outlineBorderSize"],
	["[BORDERSIZE]", "buttonSize"],
	["[BORDERSIZESIDES]", "buttonSizeSides"],
	["[BORDERCOLOR]", "borderColor"],
	["[TEXTCOLOR]", "textColor"],
	["[BUTTONTEXT]","buttonText"],
	["[BUTTONTEXTSIZE]","buttonTextSize"],
	["[URL]", "url"]]; // create cross references for INPUT names to their matching SHORTCODE

function convertValue(shortcode, input) {
	//console.log (shortcode, input);
	//console.log ($('input[name="'+input+'"]').val());
	var userInput = $('input[name="'+input+'"]').val();
	output = output.split(shortcode).join(userInput);
	//console.log (output);
}

function processInput() {
	output = btnHtml.slice(); // copy the original HTML into the output variable
	replacementArr.forEach(element => { // this loop will convert each shortcode to a value
		convertValue(element[0],element[1]);
	});

	jQuery('textarea[name="txt_output"]').val(output);
	jQuery('.actualPreview').html(output);
}

jQuery('input[name="submit"]').on("click", function(){
	processInput();
});
processInput();
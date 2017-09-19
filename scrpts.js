////////////////////////////////////////////////////////////////////
// The following demonstrates JavaScript as a "Dynamic Language". //
// That means you can add properties that are not pre-defined.    //
////////////////////////////////////////////////////////////////////

var dynamicObject = {};
dynamicObject.HiText = "Hi";
dynamicObject.Name = "Ishani Nanavaty";


function TextInputChanged(input)
{
	var page = document.getElementsByClassName("about-me")[0];
	var message = document.getElementsByClassName("footer")[0];
	alertUpdateDataFunction(page, input, message);
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function ToggleFloImageHighlight()
{
	var beachImages = document.getElementsByClassName("beach-image");
	var beachImagesHighlight = document.getElementsByClassName("beach-image-highlight");
	var beachCaptions = document.getElementsByClassName("beach-caption");

	var toggleStatus;

	if (beachImages.length > 0)
	{
		toggleStatus = "ON";
		beachImages[0].className = "beach-image-highlight";
	}
	else if (beachImagesHighlight.length > 0)
	{
		toggleStatus = "OFF";
		beachImagesHighlight[0].className = "beach-image";
	}

	beachCaptions[0].innerHTML = "I just toggled the Beach Image Higlight to: " + toggleStatus;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function MouseOverListItem(li)
{
	li.className = "list-item-highlight";
}

function MouseOutListItem(li)
{
	li.className = "";
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

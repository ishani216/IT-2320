body
{
	font-family: "Times New Roman";
	font-size: 14px;

	background: -moz-linear-gradient(left,  rgba(0,71,214,0.25) 50%, rgba(239,159,67,0.25) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, right top, color-stop(50%,rgba(0,71,214,0.25)), color-stop(100%,rgba(239,159,67,0.25))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(left,  rgba(0,71,214,0.25) 50%,rgba(239,159,67,0.25) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(left,  rgba(0,71,214,0.25) 50%,rgba(239,159,67,0.25) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(left,  rgba(0,71,214,0.25) 50%,rgba(239,159,67,0.25) 100%); /* IE10+ */
	background: linear-gradient(to right,  rgba(0,71,214,0.25) 50%,rgba(239,159,67,0.25) 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#400047d6', endColorstr='#40ef9f43',GradientType=1 ); /* IE6-9 */
}

.about-me h1, h2, h3
{
	font-family: "Serif";
	margin: 0;
}

.about-me h2, h3
{
	display: inline-block;
}

.about-me li
{
	font-style: italic;
}

.about-me .standard-paragraph
{
	width: 575px;
	margin-top: 20px;
	margin-bottom: 20px;
}

.about-me .flo-name-text
{
	font-weight: bold;
}

.about-me .flo-image-with-caption
{
	margin-left: 20px;
	height: 220px;
}

.about-me .flo-caption
{
	width: 300px;
	display: inline-block;
	vertical-align: middle;
}

.about-me .flo-image
{
	display: inline-block;
	vertical-align: middle;
	border: 2px solid orange;
	background-image: url('flo.jpg');
	background-size: 200px 200px;
	background-repeat: no-repeat;
	width: 200px;
	height: 200px;
	margin-left: 20px;
}

.about-me .projects
{
	display: table;
	border: 1px solid black;
	margin-bottom: 20px;
	margin-left: 20px;
}

.about-me .projects .project .name
{
	margin-left: 5px;
	width: 140px;
	border-right: 1px solid black;
	display: inline-block;
}

.about-me .projects .project .desc
{
	margin-left: 5px;
	display: inline-block;
}

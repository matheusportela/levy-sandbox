var vocabulary_item;
var level = 5;
var n_button;

$(document).ready(function()
{
	$.getJSON("jlpt/sample?level=5")
	.done(function(repos_data)
	{
	    vocabulary_item = repos_data;
	    document.getElementById('question').innerHTML = repos_data.kanji;
	});

	n_button = 	[	document.getElementById('n1_button'),
								document.getElementById('n2_button'),
								document.getElementById('n3_button'),
								document.getElementById('n4_button'),
								document.getElementById('n5_button')]; 
});

function submitAnswer()
{
	var answer = document.getElementById('text_answer');
	var right_or_wrong = document.getElementById('right_or_wrong')

	if(vocabulary_item.hiragana == answer.value)
		right_or_wrong.innerHTML = 'RIGHT'
	else
		right_or_wrong.innerHTML = 'WRONG'
}

function setLevel(set_level)
{
	n_button[level-1].disabled = false;

	level = set_level;

	n_button[level-1].disabled = true;

	var url = 'jlpt/sample?level='
	url = url.concat(level)

	$.getJSON(url)
	.done(function(repos_data)
	{
	    console.log(repos_data.level)
	    vocabulary_item = repos_data;
	    document.getElementById('question').innerHTML = repos_data.kanji;
	});
}
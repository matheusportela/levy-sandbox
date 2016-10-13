var vocabulary_item;

$(document).ready(function()
{
	$.getJSON("jlpt/sample")
	.done(function(repos_data)
	{
	    console.log(repos_data.kanji)
	    vocabulary_item = repos_data;
	    document.getElementById('question').innerHTML = repos_data.kanji;
	});
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
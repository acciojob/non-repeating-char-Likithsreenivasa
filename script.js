//your JS code here. If required.
let x=prompt('Enter a string')
let charCount={}
let res=null
for(let i=0;i<x.length;i++)
	{
		let char=x.charAt(i);
		if(charCount[char]>0)
		{
			charCount[char]++;
		}
		else
		{
			charCount[char]=1;
		}
	}
for(let i=0;i<x.length;i++)
	{
		let current=x.charAt(i);
		if(charCount[current]==1)
		{
			res=current;
		}
	}
alert(res);


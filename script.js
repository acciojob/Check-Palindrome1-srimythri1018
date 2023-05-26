// complete the given function

function palindrome(str){
	const arr=[];
	var ans=true;
	let n=str.lenght;
	for(let i=0;i<n;i++){
		arr.push(str.charAt[i]);
	}
	for(let i=0;i<n/2;i++)
		{
			for(let j=n-1;j>n/2;j--){
			if(arr[i]!=arr[j]){
				ans=false;
			}
			}
		}
	console.log(ans);

}
module.exports = palindrome

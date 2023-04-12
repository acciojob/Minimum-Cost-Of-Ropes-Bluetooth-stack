function calculateMinCost() {
  //your code here
	let ropes = document.querySelector("#rope-lengths").value;
	let result = document.querySelector("#result");
	let ropeLen = ropes.split(',');
	ropeLen.sort((a,b)=>{return a-b});
	// console.log(ropes, ropeLen);
	let all = [];
	ropeLen.forEach((e)=>{
		let i = parseInt(e);
		all.push(i);
	});
	let res = 0;
	while(all.length>1){
		let a = all.shift();
		let b = all.shift();
		res += a+b;
		all.push(a+b);
		all.sort((a,b)=>{return a-b});
	}
	// console.log(res);
	result.innerText = res;
	
}  

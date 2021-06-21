let arrOne = [1,2,3,4]
let arrTwo = [1,2,3,4]
function cloned (myArray){
	return clone=myArray.slice(0);
}
cloned(arrOne);
cloned(arrTwo);
console.log(cloned(arrOne));
console.log(cloned(arrTwo));

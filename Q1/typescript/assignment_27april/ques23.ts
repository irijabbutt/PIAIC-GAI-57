// 23- Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr:any[]) {
	let duplicates = [];
	let unique = new Set(arr);

	for (let value of unique) {
		if (arr.indexOf(value) !== arr.lastIndexOf(value)) {
			duplicates.push(value);
		}
	}

	console.log(duplicates);
}

findDuplicates([2, 2, "acv", "sed", "acv", 3, 5, 1, 1]);
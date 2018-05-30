const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 
find = file => obj => {
	
	if(obj.files.includes(file)){
		return true;
	}
	else if (obj.subFolders.length > 0){
		for(let sub in obj.subFolders){
			return find(file)(obj.subFolders[sub]);
		}
	}
	else {
		return false;
	}
	
	
  };
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false


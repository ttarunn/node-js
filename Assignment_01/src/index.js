const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.writeFile(fileName, fileContent);
		console.log("file created successfully!");
	}
	catch(err){
		console.log(err)
	}
};

myFileWriter("test.txt", "Hello")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		await fs.readFile(fileName);
		console.log("file read successfully!");
	}
	catch(err){
		console.log(err)
	}
};

myFileReader("test.txt")


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.appendFile(fileName, fileContent);
		console.log("file Update successfully!");
	}
	catch(err){
		console.log(err)
	}
};

myFileUpdater("test.txt", " World")

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		await fs.unlink(fileName);
		console.log("file deleted successfully!");
	}
	catch(err){
		console.log(err)
	}
}
myFileDeleter("test.txt");



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
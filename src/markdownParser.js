const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "../src/content");

//Used in a array.reduce() to get '---' indexes that separate the metadata
const getMetadataIndexes = (accumulator, currentValue, currentIndex) => {
	if (/^---/.test(currentValue)) {
		accumulator.push(currentIndex);
	}
	return accumulator;
};

const parseMetadata = ({ lines, MetadataIndexes }) => {
	let obj = {};
	if (lines.length > 0) {
		const metadata = lines.slice(MetadataIndexes[0] + 1, MetadataIndexes[1]);
		metadata.forEach((line) => {
			const keyValue = line.split(": ");
			const key = keyValue[0];
			const value = keyValue[1];
			obj[key] = value;
		});
		return obj;
	}
};
const parseContent = ({ lines, MetadataIndexes }) => {
	if (lines.length > 0) {
		const content = lines.slice(MetadataIndexes[1] + 1);
		return content.join("\n");
	}
};

const getPosts = () => {
	let postList = [];
	fs.readdir(dirPath, (err, files) => {
		if (err) {
			return console.log("Failed to list contents of directory: " + err);
		}
		for (let file of files) {
			fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
				if (err) {
					return console.log(`Failed to load file ${file}: ` + err);
				}
				const lines = contents.split("\n");
				const MetadataIndexes = lines.reduce(getMetadataIndexes, []);
				const metadata = parseMetadata({ lines, MetadataIndexes });
				const content = parseContent({ lines, MetadataIndexes });
				const date = new Date(metadata.date);
				const timestamp = date.getTime() / 1000;

				const post = {
					id: timestamp,
					title: metadata.title ? metadata.title : "title not given",
					date: metadata.date ? metadata.date : "date not given",
					author: metadata.author ? metadata.author : "author not given",
					language: metadata.language
						? metadata.language
						: "language not given",
					content: content ? content : "No content given",
				};
				postList.push(post);
				if (postList.length === files.length) {
					const sortedPostList = postList.sort((a, b) => {
						return a.id > b.id ? 1 : -1;
					});
					let data = JSON.stringify(sortedPostList);
					fs.writeFileSync("src/posts.json", data);
				}
			});
		}
	});
};

getPosts();

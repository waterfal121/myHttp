import http from "http";
console.log("hi");
console.log(process.argv);
const server = http.createServer((requset, response) => {
	response.setHeader("content-type", "text/html;charset=utf-8");
	response.end(`Hello server, 你好主機! ${process.argv[2]}`);
});

server.listen(9000, () => {
	console.log("server is running @ http://localhost:9000");
});

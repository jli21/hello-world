function helloconsole()
{
  console.log("Hello, World");
}

function hellopopup()
{
  alert("Hello, World");
}

function hellobrowser()
{
  var p = document.getElementById("hello, browser");
	p.innerHTML = "Hello, World!";
}

function hellostranger()
{
  var name = prompt("Enter your name : ", "Your name here ")
	alert ("Hello" + name)
}

let ids = [
	{
		name:"sidharth",
		pass:"1234"
	},
	{
		name:"chirag",
		pass:"abcd"
	},
	{
		name:"himanshu",
		pass:"pqrs"
	},
]

let n = 0;

let login = document.getElementById("login");
let email = document.getElementById("email");
let password = document.getElementById("pass");


login.addEventListener("click",function(){
	for(let i=0;i<ids.length;i++)
	{
		if(email.value===ids[i].name && password.value===ids[i].pass)
		{
			login.setAttribute("href","netflix2.html")
			break;
		}	

        else if(email.value!==ids[i].name || password.value!==ids[i].pass)
		{
			n++;
			if(n===ids.length)
			{
				n=0;
				alert("wrong id or password!");
			}
		}	
	}

		

	

	
})

password.addEventListener("keypress",function(a){
	for(let i=0;i<ids.length;i++)
	{
		if(email.value===ids[i].name && password.value===ids[i].pass && a.keyCode===13)
		{
			login.setAttribute("href","netflix2.html")
			break;
		}		

		else if(email.value!==ids[i].name && password.value!==ids[i].pass && a.keyCode===13)
		{
			alert("wrong username or password!");
			break;
		}
	}	
})


//sign_up

let username = document.getElementById("username");
let creatpass = document.getElementById("creatpassword");
let signup = document.getElementById("signup");

signup.addEventListener("click",function(){
	obj = {name:"0",pass:"0"};
	obj.name=username.value;
	obj.pass=creatpass.value;

	ids.push(obj);
	 console.log(ids[3]);

	 username.value="";
	 creatpass.value="";

	 alert("you have successfully signed up!")
})

<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Halamn Login</title>

<!--CSSLogin-->
  <style>
  body {

margin: 0;
padding: 0;
background:#FA8B87;
}

.loginbox{
	
	width: 360px;
	height: 480px;
	background:#fff;
	position:absolute;
    left:0; right:0;
    top:0; bottom:0;
	margin:auto;
	
	max-width:100%;
	max-height:100%;
	overflow:auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}


.logintop{
	align-content: center;
	padding: 10px;
	margin: auto 0;
	background: #FABB87;
	height: 40px;
}
.logintitle{
	line-height: 0px; 
	text-align: center;
	font-family: sans-serif;
	letter-spacing: 1px;
	color: #fff;
}

.loginlogo{

}

.loginlogo img{
	display: block; /*for the img inside your div */  
	margin-left: auto ;
	margin-right: auto ;
}

.loginbottom{
	margin-top: 70px;
    text-align:center;
}
.loginbutton{
	width: 80%;
	background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


.loginbutton:hover{
	width: 80%;
  transition: background-color 0.5s ease;
	background-color: #A33D8B; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


/*Form*/

.loginbody{
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 10px;
}
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=password], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
  </style>
  </head>
	<body>
		
		<div class="loginbox">
			<div class="logintop">
				<H3 class="logintitle">Login hi Alhammadi</H3>
			</div>
			
			<div class="loginbody">
			<div class="loginlogo">
					<img src="https://artmodjoo.com/wp-content/uploads/2017/10/logoartmodjoo.png"alt="logo">
			</div>
				
				<div class="loginbody">
				    <input type="text" id="fname" name="firstname" placeholder="Username ...">
					 <input type="password" id="fname" name="firstname" placeholder="Password ...">
				</div>
				
			</div>
				<div class="loginbottom">
				<button class="loginbutton">Login</button>
				</div>
		</div>	
	
	</body>
	
</html>

var app = require('express')();
var http = require('http').Server(app);
var port = 8280;
var mysql = require('mysql');
var bodyParser = require('body-parser');


var connection = mysql.createConnection({  
  host     : '127.0.0.1',  
  user     : 'root',  
  database : 'instaloan',
  multipleStatements: true
});  

/*
app.use(bodyParser.urlencoded({
    extended: true
}));*/

/*const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));*/

app.use((req, res, next) => {
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

  //res.header('Access-Control-Allow-Origin', '*');
  next();
});

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());





	
	


app.post('/getLoginAuthendicate', function (req, res) {
	console.log(req.body.password);
	console.log(req.body.userName);

	//var query='	select * from user where sapId='+req.body.user.sapid+' and password="'+req.body.user.password.toString()+'";select * from User_DetailTemp2';
	
	//var query='select * from user where email="sathishkumar.g1989@gmail.com" and password="sathish@1989";SELECT count(*) FROM alert WHERE readflag ="Y";';
	
	var query='select * from user where email="'+req.body.userName+'" and password="'+req.body.password+'";SELECT count(*) as count FROM alert WHERE readflag ="N";';
	
	//var query='select * from user where email="sathishkumar.g1989@gmail.com" and password="sathish@1989";';
	
	

	connection.query(query,[1,2], function(err, rows, fields)   {  
		res.contentType('application/json');
	var	response={};
		if (err){
			response.result="Failure";
			response.errorMsg="At this time unable proccess request";
			if(err.errno=="1062"){
				response.errorMsg="UserName Already Exist!!";
			}
			console.log(err)
			res.send(JSON.stringify(response));
			//throw err;  
		} else{
			console.log(rows);
				if(rows[0].length>0){
					response.result="Success";
					response.userDetail=rows[0][0];
					if(rows[0][0].admin == "N"){
						response.count = 0;
					}else{
						response.count = rows[1][0].count;
					}
				}else{
					response.result="Failure";
					response.errorMsg="Invalid username or password.";
				}
			
			
			
			res.send(JSON.stringify(response));
		}  
	  
	});  
 // res.send(JSON.stringify(response));
	
})




app.post('/saveUserDetails', function (req, res) {
	
	let firstname = req.body.firstName.toString();
	//let firstname="shylu";
  	let email =req.body.email.toString();
  	let phonenumber =req.body.phonenumber.toString();
  	let accountnumber =req.body.accountnumber.toString();
  	let password =req.body.password.toString();
  	let pancard =req.body.pancard.toString();

  	let message = firstname +' Registered with emaild id is '+email+' on ' + new Date().toString().slice(0,25);
		console.log(firstname+","+email+","+phonenumber+","+accountnumber+","+password+","+pancard+","+new Date().toString().slice(0,25));

	console.log(req.body.firstName+","+req.body.email+","+req.body.phonenumber+","+req.body.accountnumber+","+req.body.password+","+req.body.pancard+","+new Date().toString().slice(0,25));
	var query= 'INSERT INTO user (firstName, email, phonenumber, accountnumber, password, pancard, admin, date) VALUES ("'+firstname+'", "'+email+'", "'+phonenumber+'", "'+accountnumber+'", "'+password+'", "'+pancard+'", "N", current_timestamp());INSERT INTO alert (alertid, email, readflag, date,message) VALUES (NULL, "'+email+'", "N", current_timestamp(),"'+message+'")';
		console.log(query);
	connection.query(query,[1,2], function(err, rows, fields)   {  
	var response={};
		res.contentType('application/json');
		if (err){
			response.result="Failure";
			response.errorMsg="At this time unable proccess request";
			if(err.errno=="1062"){
				response.errorMsg="UserName Already Exist!!";
			}
			console.log(err)
			res.send(JSON.stringify(response));
			//throw err;  
		} else{
			response.result="Success";
			response.userDetail = {};
			response.userDetail.firstName=req.body.firstName;
			response.userDetail.email=req.body.email;
			response.userDetail.admin="N";
			response.userDetail.count=0;
			res.send(JSON.stringify(response));
		}  
	  
	});  
  
	
})

app.get('/loanDetails', function (req, res) {

console.log(req.body);

let name  = "sathish Kumar";
let email = "sathish@gmail.com";
let panNo = "ABCDS7687A";
let mobile  = "1234567890";
let loanAmt = "100000";
let typeOfLoan = "Personal Loan";
let annualIncome = "500000";
let city  = "Chennai";
let salaryrecivedBank = "SBI";
let empType = "Salary";
let vechileType = "Two wheeler";

	

let message = name +' Registered '+typeOfLoan+ ' on '+ loanAmt+ ' rs amount Mobile no is '+ mobile+ ' and email id is '+email+' on ' + new Date().toString().slice(0,25);

let query= 'INSERT INTO instantUser (name, email, panNo, mobile, loanAmt, typeOfLoan, annualIncome, city, salaryrecivedBank, empType, vechileType, date) VALUES ("'+name+'", "'+email+'", "'+panNo+'", "'+mobile+'", "'+loanAmt+'", "'+typeOfLoan+'",  "'+annualIncome+'", "'+city+'", "'+salaryrecivedBank+'", "'+empType+'", "'+vechileType+'",current_timestamp());INSERT INTO alert (alertid, email, readflag, date,message) VALUES (NULL, "'+email+'", "N", current_timestamp(),"'+message+'")';





	
	connection.query(query,[1,2], function(err, rows, fields)   {  
	var response={};
		res.contentType('application/json');
		if (err){
			response.result="Failure";
			response.errorMsg="At this time unable proccess request";
			
			console.log(err)
			res.send(JSON.stringify(response));
			//throw err;  
		} else{
			response.result="Success";
			
			res.send(JSON.stringify(response));
		}  
	  
	});  
  
	
})


app.get('/getAlertList', function (req, res) {
	
	var query= 'select * from alert;';
	
		connection.query(query,[1], function(err, rows, fields)   {  
	var response={};
		res.contentType('application/json');
		if (err){
			response.result="Failure";
			response.errorMsg="At this time unable proccess request";
			
			console.log(err)
			res.send(JSON.stringify(response));
			//throw err;  
		} else{
			response.result="Success";
			response.alertList =  [];
			var alert = {};
			for(var i=0; i<rows.length; i++){
				alert = {};
			alert.alertId = rows[i].alertid;
			alert.message = rows[i].message;
			alert.readflag = rows[i].readflag;
			
			response.alertList.push(alert);
			}

			

			
			res.send(JSON.stringify(response));
			
		}  
	  
	});  
	
});





app.get('/', function(req, res){
	console.log('Index Page on loading...');
  res.sendFile(__dirname + '/login.html');
});







http.listen(port, "192.168.18.26",function(){
  console.log('listening on *:' + port);
});

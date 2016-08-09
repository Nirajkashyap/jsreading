//BUG-464 Commented flag variable and declared it inside validate()
//var flag = false;
 var modLibAuth = false;

 // This method checks all the user in all the columns when the user clicks on 'Apply to all' checkbox
 function doIt(AuthType)
{
for(var i=0;i<document.MngProdForm.user.length;i++)
{
if (document.MngProdForm.all.checked == true)
document.MngProdForm.user[i].checked=true;
else
document.MngProdForm.user[i].checked=false;
}
}
// This method validates the data entered by the user and forms a comma separated string
function validate(AuthType)
{
var strUserNames = "";
var strPassword = "";
var strSubsAccess = "";
var strSubsEnd = "";
var strWborc ="";
var strWbKids = "";
// Added WBA for RCR for ENH-236
var strWba = "";
// Added Decouverte for ENH-18
var strDecouverte = "";
// Added Discover for ENH-31
var strDiscover = "";
// Added Tools Redesign for ENH-26

// Added Student for ENH-43
var strwbs = "";
// Added Hispanica for ENH-77
var strhispanica = "";
// Added Living Green for ENH-100
var strLivingGreen = "";
// Added Early People for ENH-100
var strEarlyPeople = "";
// ENH-106 Added Inventions
var strInventions = "";

var strRemote = "";
var strEeh ="";
var strDhp = "";
//Added for ENH-53 for updating the Lib Card Details
var insert = true;
//BUG-464 Put the flag variable inside validate
var flag = false;
//WBDP-450 - Adding for WBDP-450
var strConsumerEmail= "";
    //BUG-434 Moved the 'user' authtype before submitting username to jsp.
    if((document.getElementById("jspType").value == "edit" ) && (AuthType == "user"))
{
if(document.MngProdForm.addNewUser.checked||document.MngProdForm.addUserFile.checked)
{
if(document.MngProdForm.addNewUser.checked)
{
var strIpRangeSpanSize = "";
for(var j=0; j<document.MngProdForm.userSelect.length; j++){
strIpRangeSpanSize += document.getElementById("userSelect").options[j].text+",";
}
document.MngProdForm.userpass.value=strIpRangeSpanSize;
}
flag=true;
}
else
{
//ENH-137 Username to lowercase letters
//var objRegExp = new RegExp("([A-Z]+)");
//BUG-464 Validations for Username Password.
//If there is no Username and the user entering the Username for the first time
     	if(document.MngProdForm.TotalRecords.value == 0){

     	var newId= removeSpaces(document.MngProdForm.addUser.value);
//document.MngProdForm.addUser.value=newId;
var pwd= removeSpaces(document.MngProdForm.addPwd.value);
//document.MngProdForm.addPwd.value=pwd;
//ENH-137 Username to lowercase letters
/*if(newId.match(objRegExp)){
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username in Lowercase Letters.</b></font>';
   return false;
}*/
if((newId == "--AddNewID--") || (newId == ""))
{
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username.</b></font>';
   return false;
}
if(pwd=="--AddPassword--" || pwd=="")
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password.</b></font>';
return false;
 	}
 	if(pwd.length < 3 || pwd.length > 16 )
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
 	}
 	if(pwd.indexOf(",")!=-1 || pwd.indexOf("\"")!=-1 || pwd.indexOf("'")!=-1 )
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
 	else{
 	flag = true;
var validateuser=validateNewUserEntries();
if(validateuser==false)
{
return false;
}
/*if(validateNewUserHomePage()==false)
{
return false;
}*/
 	}
 	document.MngProdForm.addUser.value=newId;
 	document.MngProdForm.addPwd.value=pwd;
     	}
     	//If there is a single record - Validate for New,Existing,New & Existing
     	else if(document.MngProdForm.TotalRecords.value == 1){
     	var reviewUser = false;
     	if (document.MngProdForm.addUser.value == "-- Add New ID --" && document.MngProdForm.user.checked){
     	var singlePassword = removeSpaces(document.MngProdForm.password.value);
     	document.MngProdForm.password.value = singlePassword;
     	if(singlePassword == ""){

     	var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password.</b></font>';
return false;

     	}
     	if(singlePassword.length <3 || singlePassword.length >16){

     	var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
     	}
     	if(singlePassword.indexOf(",")!=-1 || singlePassword.indexOf("\"")!=-1 || singlePassword.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
     	reviewUser = true;
     	}
     	if(reviewUser==true){

if((document.MngProdForm.user.checked) && (document.MngProdForm.addUser.value == "-- Add New ID --")){
var singlePassword= removeSpaces(document.MngProdForm.password.value);
document.MngProdForm.password.value=singlePassword;
if(singlePassword==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password for : (['+document.MngProdForm.username[i].value+']).</b></font>';
 	return false;
}
if(singlePassword.length < 3 || singlePassword.length > 16)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
}
if(singlePassword.indexOf(",")!=-1 || singlePassword.indexOf("\"")!=-1 || singlePassword.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
/*if(validateLeastProductSelection()==false)
{
return false;
}
if(validateHomePage()==false)
{
return false;
}*/
flag = true;
}//if
else {
flag=false;
}
}//if reviewUser
//For new Username Password Single
else {
//if((document.MngProdForm.addUser.value == "-- Add New ID --") || document.MngProdForm.addUser.value == "" || document.MngProdForm.addPwd.value == "-- Add Password --"	|| document.MngProdForm.addPwd.value == "" || document.MngProdForm.addPwd.value == "--AddPassword--"){
var newId= removeSpaces(document.MngProdForm.addUser.value);
//document.MngProdForm.addUser.value=newId;
var pwd= removeSpaces(document.MngProdForm.addPwd.value);
//document.MngProdForm.addPwd.value=pwd;
//ENH-137 Username to Lowercase
/*if(newId.match(objRegExp)){
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username in Lowercase Letters.</b></font>';
   return false;
}*/
if((newId == "--AddNewID--") || (newId == ""))
{
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please select or enter the Username.</b></font>';
   return false;
}
else if(newId.length <3 || newId.length >128){
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Username should be Min 3 characters & Max 128 characters.</b></font>';
   return false;
}
else if(pwd=="--AddPassword--" || pwd== "" || pwd=="-- Add Password --")
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password.</b></font>';
return false;
   }
   else if(pwd.length <3 || pwd.length >16){

   	var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
   return false;

   }
   else if(pwd.indexOf(",")!=-1 || pwd.indexOf("\"")!=-1 || pwd.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
   else{
flag = true;
var validateuser=validateNewUserEntries();
if(validateuser==false)
{
return false;
}
document.MngProdForm.addUser.value=newId;
document.MngProdForm.addPwd.value=pwd;
/*if(validateNewUserHomePage()==false)
{
return false;
}*/
}
//	}//addUser addPwd
}//else reviewUser
//if both new user and existing user checked
if((document.MngProdForm.user.checked) && ((document.MngProdForm.addUser.value != "-- Add New ID --")
|| (document.MngProdForm.addPwd.value != "-- Add Password --"))){
var singlePassword= removeSpaces(document.MngProdForm.password.value);
document.MngProdForm.password.value=singlePassword;
var newId= removeSpaces(document.MngProdForm.addUser.value);
//document.MngProdForm.addUser.value=newId;
var pwd= removeSpaces(document.MngProdForm.addPwd.value);
//document.MngProdForm.addPwd.value=pwd;
if(singlePassword==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password for : (['+document.MngProdForm.username[i].value+']).</b></font>';
 	return false;
}
if(singlePassword.length < 3 || singlePassword.length > 16)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters for : (['+document.MngProdForm.username[i].value+']).</b></font>';
return false;
}
if(singlePassword.indexOf(",")!=-1 || singlePassword.indexOf("\"")!=-1 || singlePassword.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
//ENH-137 Username to Lowercase
/*if(newId.match(objRegExp)){
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username in Lowercase Letters.</b></font>';
   return false;
}*/
if((newId == "--AddNewID--") || (newId == ""))
{
var errstyle = document.getElementById("SelRecErr");
   	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username.</b></font>';
   	return false;
}
if(pwd=="--AddPassword--" || pwd=="")
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password.</b></font>';
return false;
 	}
 	if(pwd.length < 3 || pwd.length > 16 )
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
 	}
 	if(pwd.indexOf(",")!=-1 || pwd.indexOf("\"")!=-1 || pwd.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
 	else{
flag = true;
var validateuser=validateNewUserEntries();
if(validateuser==false)
{
return false;
}
document.MngProdForm.addUser.value=newId;
document.MngProdForm.addPwd.value=pwd;
/*if(validateNewUserHomePage()==false)
{
return false;
}*/
}
}
flag =true;
}//TotalRecord 1

//If Length greater than one - Validations for new,existing,new & Existing
else{
var reviewUser =false;
for(var i=0;i<document.MngProdForm.user.length;i++){
if(document.MngProdForm.user[i].checked){
reviewUser = true;
break;
}
}
//Existing Username password.
if(reviewUser==true){
for(var i=0;i<document.MngProdForm.user.length;i++){
if((document.MngProdForm.user[i].checked) && (document.MngProdForm.addUser.value == "-- Add New ID --")){
var userpassd= removeSpaces(document.MngProdForm.password[i].value);
document.MngProdForm.password[i].value=userpassd;
if(userpassd==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password for : (['+document.MngProdForm.username[i].value+']).</b></font>';
 	return false;
}
if(userpassd.length < 3 || userpassd.length > 16)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
}
if(userpassd.indexOf(",")!=-1 || userpassd.indexOf("\"")!=-1 || userpassd.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
/*if(validateLeastProductSelection()==false)
{
return false;
}
if(validateHomePage()==false)
{
return false;
}*/
}//for
}
flag = true;
}//if reviewUser

//For new Username Password
else {
if((document.MngProdForm.addUser) || (document.MngProdForm.addPwd)){
var newId= removeSpaces(document.MngProdForm.addUser.value);
//document.MngProdForm.addUser.value=newId;
var pwd= removeSpaces(document.MngProdForm.addPwd.value);
//ENH-137 Username to Lowercase
/*if(newId.match(objRegExp)){
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username in Lowercase Letters.</b></font>';
   return false;
}*/
if((newId == "--AddNewID--") || (newId == ""))
{
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please select or enter the Username.</b></font>';
   return false;
}
if(pwd=="--AddPassword--" || pwd=="")
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password.</b></font>';
return false;
   }else	{
flag = true;
var validateuser=validateNewUserEntries();
if(validateuser==false)
{
return false;
}
document.MngProdForm.addUser.value=newId;
document.MngProdForm.addPwd.value=pwd;
/*if(validateNewUserHomePage()==false)
{
return false;
}*/
}
}//addUser addPwd
}//else reviewUser
//if both new user and existing user checked
for(var i=0;i<document.MngProdForm.user.length;i++){
if((document.MngProdForm.user[i].checked) && ((document.MngProdForm.addUser.value != "-- Add New ID --") || (document.MngProdForm.addPwd.value != "-- Add Password --"))){
var userpassd= removeSpaces(document.MngProdForm.password[i].value);
document.MngProdForm.password[i].value=userpassd;
var newId= removeSpaces(document.MngProdForm.addUser.value);
//document.MngProdForm.addUser.value=newId;
var pwd= removeSpaces(document.MngProdForm.addPwd.value);
//document.MngProdForm.addPwd.value=pwd;
if(userpassd==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password for : (['+document.MngProdForm.username[i].value+']).</b></font>';
 	return false;
}
if(userpassd.length < 3 || userpassd.length > 16)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters for : (['+document.MngProdForm.username[i].value+']).</b></font>';
return false;
}
//ENH-137 Username to Lowercase
/*if(newId.match(objRegExp)){
var errstyle = document.getElementById("SelRecErr");
   errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username in Lowercase Letters.</b></font>';
   return false;
}*/
if((newId == "--AddNewID--") || (newId == ""))
{
var errstyle = document.getElementById("SelRecErr");
   	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Username.</b></font>';
   	return false;
}
if(pwd=="--AddPassword--" || pwd=="")
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the password.</b></font>';
return false;
 	}
 	if(pwd.length < 3 || pwd.length > 16 )
{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
 	}
 	if(pwd.indexOf(",")!=-1 || pwd.indexOf("\"")!=-1 || pwd.indexOf("'")!=-1)
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
 	else{
flag = true;
var validateuser=validateNewUserEntries();
if(validateuser==false)
{
return false;
}
document.MngProdForm.addUser.value=newId;
document.MngProdForm.addPwd.value=pwd;
/*if(validateNewUserHomePage()==false)
{
return false;
}*/
}
}
flag = true;
}
}
}
}
/* check for newly added url to be not null*/
     	if( (document.getElementById("jspType").value == "edit" ) && (AuthType == 'url'))
     	{
if(document.MngProdForm.addUrl.checked||document.MngProdForm.addUrlFile.checked)
{
flag=true;
if(document.MngProdForm.addUrl.checked)
{
var strIpRangeSpanSize = "";
for(var j=0; j<document.MngProdForm.urlSelect.length; j++){
strIpRangeSpanSize += document.getElementById("urlSelect").options[j].text+",";
}
document.MngProdForm.refUrls.value=strIpRangeSpanSize;
}
}
else
{
     	//If there is no URL and the user entering the url for the first time
     	if(document.MngProdForm.TotalRecords.value == 0){
     	var referrerURLS = removeSpaces(document.MngProdForm.refUrl.value);
     	document.MngProdForm.refUrl.value = referrerURLS;
     	if(referrerURLS == "--AddURL--" || referrerURLS =="" || document.MngProdForm.addUrl.value ==""){
     	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
 	return false;
     	}

     	/*if(validateNewUserHomePage()==false){

     	return false;

     	}*/
     	}
     	else if(document.MngProdForm.TotalRecords.value == 1){
     	if (!(document.MngProdForm.addUrl.checked) || !(document.MngProdForm.refUrl )){
     	var singleURL = removeSpaces(document.MngProdForm.password.value)
     	document.MngProdForm.password.value = singleURL;
     	if(singleURL ==""){

     	var errstyle = document.getElementById("SelRecErr");
     	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
     	return false;
     	}
     	reviewURL = true;
     	}
     	if(reviewURL){
     	//If the Existing record is selected,then validations follow here
if(document.MngProdForm.user.checked){
var existingURLS = removeSpaces(document.MngProdForm.password.value);
     	document.MngProdForm.password.value = existingURLS;
if(existingURLS==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
 	return false;
}
}
//flag = true;
     	}
     	else{
     	//Validations for the new URL
     	if(document.MngProdForm.addUrl.checked || document.MngProdForm.refUrl){
     	//BUG-464 validating the URLs
     	var referrerURLS = removeSpaces(document.MngProdForm.refUrl.value);
     	document.MngProdForm.refUrl.value = referrerURLS;
     	if(referrerURLS==""){
     	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
return false;
     	}
     	else if((document.MngProdForm.addUrl) && (document.MngProdForm.refUrl.value== "--AddURL--")){
     	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
return false;
     	}
     	else{
     	flag=validateNewInsertURL(document.MngProdForm.password.value,document.MngProdForm.refUrl.value);
if (flag != true)
{
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>The entry may already be in use, the record was not updated.</b></font>';
return false;
}
     	}

     	/* if(validateNewUserHomePage()==false)
{
return false;
}*/
     	}
 	}//else

 	if((document.MngProdForm.user.checked) && (document.MngProdForm.addUrl.checked)){
var existingURLS = removeSpaces(document.MngProdForm.password.value);
     	document.MngProdForm.password.value = existingURLS;
if(existingURLS==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
 	return false;
}
     	var referrerURLS = removeSpaces(document.MngProdForm.refUrl.value);
     	document.MngProdForm.refUrl.value = referrerURLS;
     	if(document.MngProdForm.addUrl){
     	if(referrerURLS=="" || referrerURLS=="--Add URL --"){
     	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL for the New Record.</b></font>';
return false;
     	}
     	flag=validateNewInsertURL(document.MngProdForm.password.value,document.MngProdForm.refUrl.value);
if (flag != true)
{
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>The entry may already be in use, the record was not updated.</b></font>';
return false;
}

     	}

 	}
 	else{
     	//flag = true;
     	// if(document.MngProdForm.addUrl.checked){
     	/*if(validateNewUserHomePage()==false)
{
return false;
}*/
//}
//else {
/*if(validateHomePage()==false)
{
return false;
}*/
//}
 	}
 	//flag = true;
 	/*if(validateHomePage()==false)
{
return false;
}*/

  }

     	//If Length greater than one - Validations for new,existing,new & Existing
     	else{
     	var reviewURL = false;
     	for(var i=0;i<document.MngProdForm.user.length;i++){
if(document.MngProdForm.user[i].checked && !(document.MngProdForm.addUrl.checked)){
reviewURL = true;
break;
}
     	}
     	if(reviewURL){
     	//If the Existing record is selected,then validations follow here
     	for(var i=0;i<document.MngProdForm.user.length;i++){
if(document.MngProdForm.user[i].checked){
var existingURLS = removeSpaces(document.MngProdForm.password[i].value);
     	document.MngProdForm.password[i].value = existingURLS;
if(existingURLS==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
 	return false;
}
}
     	}
     	flag = true;
     	}
     	else{
     	//Validations for the new URL
     	if(document.MngProdForm.addUrl.checked || document.MngProdForm.refUrl){
     	//BUG-464 validating the URLs
     	var referrerURLS = removeSpaces(document.MngProdForm.refUrl.value);
     	document.MngProdForm.refUrl.value = referrerURLS;
     	if(referrerURLS==""){
     	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
return false;
     	}
     	else if((document.MngProdForm.addUrl) && (document.MngProdForm.refUrl.value== "--AddURL--")){
     	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
return false;
     	}
     	else{
     	flag=validateNewInsertURL(document.MngProdForm.password,document.MngProdForm.refUrl.value,document.MngProdForm.user);
if (flag != true)
{
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>The entry may already be in use, the record was not updated.</b></font>';
return false;
}
     	}

     	/*if(validateNewUserHomePage()==false)
{
return false;
}*/
     	}
 	}//else

 	//If both Existing and New URL checkbox selected .
 	for(var i=0;i<document.MngProdForm.user.length;i++){
 	if((document.MngProdForm.user[i].checked) && (document.MngProdForm.addUrl.checked)){
var existingURLS = removeSpaces(document.MngProdForm.password[i].value);
     	document.MngProdForm.password[i].value = existingURLS;
if(existingURLS==""){
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL.</b></font>';
 	return false;
}
     	var referrerURLS = removeSpaces(document.MngProdForm.refUrl.value);
     	document.MngProdForm.refUrl.value = referrerURLS;
     	if(document.MngProdForm.addUrl){
     	if(referrerURLS=="" || referrerURLS=="--Add URL --"){
     	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please enter the URL for the New Record.</b></font>';
return false;
     	}
     	flag=validateNewInsertURL(document.MngProdForm.password,document.MngProdForm.refUrl.value,document.MngProdForm.user);
if (flag != true)
{
var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>The entry may already be in use, the record was not updated.</b></font>';
return false;
}
     	}

 	}
 	else{
     	// flag = true;
     	//if(document.MngProdForm.addUrl.checked){
     	/*if(validateNewUserHomePage()==false)
{
return false;
}*/
//}
//else {
/*if(validateHomePage()==false)
{
return false;
}*/
//}
 	}
     	}
     	}
     	}
     	}
if(AuthType=='lib' && modLibAuth == true) {
}
else{
if(document.MngProdForm.TotalRecords.value>=2)
{
for(var i=0;i<document.MngProdForm.user.length;i++)
{
if(document.MngProdForm.user[i].checked)
{
flag = true;
strUserNames += document.MngProdForm.username[i].value + ",";
strPassword += document.MngProdForm.password[i].value + ",";
strSubsAccess += document.MngProdForm.subs_access[i].value + ",";
if(document.MngProdForm.subsEndDt != null && document.MngProdForm.subsEndDt[i].value != ''){
strSubsEnd +=document.MngProdForm.subsEndDt[i].value+",";
}
/* Added for WBDP-450 */
if(document.MngProdForm.strConsumerEmail != null && document.MngProdForm.strConsumerEmail[i].value != ''){
strConsumerEmail += document.MngProdForm.strConsumerEmail[i].value+",";
}
if(document.MngProdForm.remote!=null)
{
if(document.MngProdForm.remote[i].checked)
strRemote += "1,";
else
strRemote += "0,";
}
strDhp += document.MngProdForm.dhp[i].value + ",";
}
}
document.MngProdForm.strusernames.value=strUserNames.substring(0,strUserNames.length-1);
document.MngProdForm.strpassword.value=strPassword.substring(0,strPassword.length-1);
if(strSubsEnd!='')
document.MngProdForm.strSubsEnd.value=strSubsEnd.substring(0,strSubsEnd.length-1);
/* Added for WBDP-450 */
if(strConsumerEmail != '')
document.MngProdForm.ConsumerEmail.value=strConsumerEmail.substring(0,strConsumerEmail.length-1);
document.MngProdForm.strRemote.value=strRemote.substring(0,strRemote.length-1);
document.MngProdForm.strdhp.value=strDhp.substring(0,strDhp.length-1);
}
//If there is only one record for the account
else if(document.MngProdForm.TotalRecords.value == 1)
{
if(document.MngProdForm.user.checked)
{
flag = true;
strUserNames = document.MngProdForm.username.value;
strPassword = document.MngProdForm.password.value;
if(document.MngProdForm.subsEndDt != null && document.MngProdForm.subsEndDt.value != ''){
strSubsEnd +=document.MngProdForm.subsEndDt.value+",";
}
/* Added for WBDP-450 */
if(document.MngProdForm.strConsumerEmail != null && document.MngProdForm.strConsumerEmail.value != ''){
strConsumerEmail +=document.MngProdForm.strConsumerEmail.value+",";
}
if(document.MngProdForm.remote!=null)
{
if(document.MngProdForm.remote.checked)
strRemote = "1";
else
strRemote = "0";
}
strDhp = document.MngProdForm.dhp.value;
document.MngProdForm.strusernames.value = strUserNames;
document.MngProdForm.strpassword.value = strPassword;
if(strSubsEnd!='')
document.MngProdForm.strSubsEnd.value=strSubsEnd;
/* Added for WBDP-450 */
if(strConsumerEmail!='')
document.MngProdForm.ConsumerEmail.value=strConsumerEmail;
document.MngProdForm.strRemote.value = strRemote;
document.MngProdForm.strdhp.value = strDhp;
}
}else{ //if there is no record
if((document.MngProdForm.addUrl && document.MngProdForm.addUrl.checked == true) || (document.MngProdForm.addLib && document.MngProdForm.addLib.checked == true) || (document.MngProdForm.addUser && document.MngProdForm.addUser.value != "--AddNewId")  || (document.MngProdForm.addIP && document.MngProdForm.addIP.checked == true)){
flag=true;
}
else
flag = false;
}
}
    // Added Tools Redesign for ENH-26
/**Added for new library checks */
if( (document.getElementById("jspType").value == "edit" ) && (AuthType == "lib"))
{
if(document.MngProdForm.addLib.checked)
{
insert = true;
flag = true;
var validatelib=validateLibrary();
if(validatelib==false)
{
return false;
}
/*if(validateNewUserHomePage()==false)
{
return false;
}*/
}
else
{
insert = false;
   if (modLibAuth == true)
   {
flag = true;
var modLength = ''+document.MngProdForm.modify.length;
if (modLength == "undefined")
{
strUserNames = document.MngProdForm.username.value;
strPassword = document.MngProdForm.password.value;
strDhp = document.MngProdForm.dhp.value;
strSubsAccess = document.MngProdForm.subs_access.value;
document.MngProdForm.strusernames.value = strUserNames;
document.MngProdForm.strpassword.value = strPassword;
document.MngProdForm.strdhp.value = strDhp;
document.MngProdForm.strsubs.value = strSubsAccess;
}
else{
for(var i=0;i<document.MngProdForm.modify.length;i++){
if(document.MngProdForm.modify[i].checked ==true){
strUserNames += document.MngProdForm.username[i].value + ",";
strPassword += document.MngProdForm.password[i].value + ",";
strSubsAccess += document.MngProdForm.subs_access[i].value + ",";
if(document.MngProdForm.remote)
{
if(document.MngProdForm.remote[i].checked)
strRemote += "1,";
else
strRemote += "0,";
}
strDhp += document.MngProdForm.dhp[i].value + ",";
  }
}
  document.MngProdForm.strusernames.value=strUserNames.substring(0,strUserNames.length-1);
document.MngProdForm.strpassword.value=strPassword.substring(0,strPassword.length-1);
document.MngProdForm.strsubs.value=strSubsAccess.substring(0,strSubsAccess.length-1);
document.MngProdForm.strdhp.value=strDhp.substring(0,strDhp.length-1);
}
var validatemodifylib=validateLibrary();
if(validatemodifylib==false)
{
return false;
}
   }
}

//ENH-53 ENDS
}
// Added Tools Redesign for ENH-26
/**Added for ipauth */
if( (document.getElementById("jspType").value == "edit" ) && (AuthType == "ip"))
{
var strIpRangeSpanSize = "";
for(var j=0; j<document.MngProdForm.ipSelect.length; j++){
strIpRangeSpanSize += document.getElementById("ipSelect").options[j].text+",";
}
document.MngProdForm.ipRangeSpans.value=strIpRangeSpanSize;
if(document.MngProdForm.addIP.checked){
    if( !(document.MngProdForm.addIPFile.checked) && (strIpRangeSpanSize == "")){
    flag = false;
    }else{
    flag = true;
    }

}

     	}
 	/* End code for ipauth */
if (!flag)
   	{
 	var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please select one of the records.</b></font>';
return false;
}
// ENH 41 enabled
//ENH-53 Added the insert variable for updating the Lib Card Details
if(document.MngProdForm.insert)
{
document.MngProdForm.insert.value = insert;
document.MngProdForm.submit();
}
else
{
if(document.MngProdForm.TotalRecords.value==0){
var errorstyle = document.getElementById("SelRecErr");
 	errorstyle.innerHTML = '<font size=2 color=red><b>Please select one of the records.</b></font>';
return false;
}
}
}
function validateNewUserHomePage()
{
var errorstyle = document.getElementById("SelRecErr");
/* ENH-41 Atleast one product must be selected for Default Home page */
//ENH-109 Added Inventions
/* ENH-41 WBORC will not be checked by default */
if((document.MngProdForm.addHP.value==1) && !(document.MngProdForm.addWBORC.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page WBORC for New User not selected.</b></font>';
return false;
}
if((document.MngProdForm.addHP.value==2) && !(document.MngProdForm.addEEH.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page EEH for New User not selected.</b></font>';
return false;
}
if((document.MngProdForm.addHP.value==6) && !(document.MngProdForm.addWBA.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page WBA for New User not selected.</b></font>';
return false;
}
if((document.MngProdForm.addHP.value==5) && !(document.MngProdForm.addKIDS.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page KIDS for New User not selected.</b></font>';
return false;
}
if((document.MngProdForm.addHP.value==9) && !(document.MngProdForm.addDiscover.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page DISCOVER for user not selected.</b></font>';
return false;
}
if((document.MngProdForm.addHP.value==8) && !(document.MngProdForm.addDCT.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page DECOUVERTE for user not selected.</b></font>';
return false;
}
//Added student for ENH-43
if((document.MngProdForm.addHP.value==10) && !(document.MngProdForm.addWbs.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page STUDENT for user not selected.</b></font>';
return false;
}
//Added Living Green for ENH-100
if((document.MngProdForm.addHP.value==11) && !(document.MngProdForm.addLivingGreen.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page LIVING GREEN for user not selected.</b></font>';
return false;
}
//Added Early People for ENH-100
if((document.MngProdForm.addHP.value==12) && !(document.MngProdForm.addEarlyPeople.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page EARLY PEOPLES for user not selected.</b></font>';
return false;
}
//ENH-106 Added Inventions
if((document.MngProdForm.addHP.value==13) && !(document.MngProdForm.addInventions.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page INVENTIONS and DISCOVERIES for user not selected.</b></font>';
return false;
}
return true;
}
/*Validates the default home page acccess selected*/
function validateHomePage()
{
var errorstyle = document.getElementById("SelRecErr");
if(document.MngProdForm.TotalRecords.value > 1){
for(var i=0;i<document.MngProdForm.user.length;i++)
{
if(document.MngProdForm.user[i].checked)
{
if((document.MngProdForm.dhp[i].value==1) && !(document.MngProdForm.wborc[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page WBORC for user: (['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp[i].value==2) && !(document.MngProdForm.eeh[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page EEH for user: (['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp[i].value==6) && !(document.MngProdForm.wba[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page WBA for user:(['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp[i].value==5) && !(document.MngProdForm.wbkid[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page KIDS for user:(['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp[i].value==9) && !(document.MngProdForm.discover[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page DISCOVER for user: (['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp[i].value==8) && !(document.MngProdForm.decouverte[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page DECOUVERTE for user: (['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
//Added student for ENH-43
if((document.MngProdForm.dhp[i].value==10) && !(document.MngProdForm.wbs[i].checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page STUDENT for user: (['+document.MngProdForm.username[i].value+']) not selected.</b></font>';
return false;
}
}
}
}else if(document.MngProdForm.TotalRecords.value == 1){
if(document.MngProdForm.user.checked)
{
           //Added hispanica for ENH-77
          // Added Early Peoples & Living Green for ENH-100
          // Added Inventions for ENH-106
if((document.MngProdForm.dhp.value==0) && !((document.MngProdForm.wborc.checked) ||(document.MngProdForm.eeh.checked)||(document.MngProdForm.wba.checked)
||(document.MngProdForm.wbkid.checked)||(document.MngProdForm.discover.checked)
||(document.MngProdForm.decouverte.checked)||(document.MngProdForm.wbs.checked) ||(document.MngProdForm.hispanica.checked)
||(document.MngProdForm.livinggreen.checked) || (document.MngProdForm.earlypeople.checked) || (document.MngProdForm.inventions.checked)))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Select atleast one product for user: (['+document.MngProdForm.username.value+']).</b></font>';
return false;
}
if((document.MngProdForm.dhp.value==1) && !(document.MngProdForm.wborc.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page WBORC for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp.value==2) && !(document.MngProdForm.eeh.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page EEH for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp.value==6) && !(document.MngProdForm.wba.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page WBA for user:(['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp.value==5) && !(document.MngProdForm.wbkid.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page KIDS for user:(['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp.value==9) && !(document.MngProdForm.discover.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page DISCOVER for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
if((document.MngProdForm.dhp.value==8) && !(document.MngProdForm.decouverte.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page DECOUVERTE for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
//Added student for ENH-43
if((document.MngProdForm.dhp.value==10) && !(document.MngProdForm.wbs.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page STUDENT for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
//Added Living Green for ENH-100
if((document.MngProdForm.dhp.value==11) && !(document.MngProdForm.livinggreen.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page LIVING GREEN for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
//Added Early People for ENH-100
if((document.MngProdForm.dhp.value==12) && !(document.MngProdForm.earlypeople.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page EARLY PEOPLE for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
//ENH-106 Added Inventions
if((document.MngProdForm.dhp.value==13) && !(document.MngProdForm.inventions.checked))
{
errorstyle.innerHTML = '<font size=2 color=red><b>Default Home Page INVENTIONS AND DISCOVERIES for user: (['+document.MngProdForm.username.value+']) not selected.</b></font>';
return false;
}
}
}
return true;
}
/*Check for none products selected*/
function validateLeastProductSelection()
{
var errorstyle = document.getElementById("SelRecErr");
var prdctflag=false;
if(document.MngProdForm.TotalRecords.value > 1){
for(var i=0;i<document.MngProdForm.user.length;i++)
{
if(document.MngProdForm.user[i].checked)
{
if(document.MngProdForm.wborc[i].checked)
{
prdctflag=true;
}
if(document.MngProdForm.eeh[i].checked)
{
prdctflag=true;
}
if(document.MngProdForm.wbkid[i].checked)
{
prdctflag=true;
}
if(document.MngProdForm.discover[i].checked)
{
prdctflag=true;
}
if(document.MngProdForm.decouverte[i].checked)
{
prdctflag=true;
}
if(document.MngProdForm.wba[i].checked)
{
prdctflag=true;
}
//Added Student for ENH-43
if(document.MngProdForm.wbs[i].checked)
{
prdctflag=true;
}
//Added Hispanica for ENH-77
if(document.MngProdForm.hispanica[i].checked)
{
prdctflag=true;
}
//Added Living Green for ENH-100
if(document.MngProdForm.livinggreen[i].checked)
{
prdctflag=true;
}
//Added Early People for ENH-100
if(document.MngProdForm.earlypeople[i].checked)
{
prdctflag=true;
}
//ENH-106 Added Inventions
if(document.MngProdForm.inventions[i].checked)
{
prdctflag=true;
}
if(prdctflag==false)
{
errorstyle.innerHTML = '<font size=2 color=red><b>Please select atleast one product for ['+document.MngProdForm.username[i].value+'].</b></font>';
return false;
}
}
}
}else if(document.MngProdForm.TotalRecords.value == 1){
if(document.MngProdForm.user.checked)
{
if(document.MngProdForm.wborc.checked)
{
prdctflag=true;
}
if(document.MngProdForm.eeh.checked)
{
prdctflag=true;
}
if(document.MngProdForm.wbkid.checked)
{
prdctflag=true;
}
if(document.MngProdForm.discover.checked)
{
prdctflag=true;
}
if(document.MngProdForm.decouverte.checked)
{
prdctflag=true;
}
if(document.MngProdForm.wba.checked)
{
prdctflag=true;
}
//Added Student fro ENH-43
if(document.MngProdForm.wbs.checked)
{
prdctflag=true;
}
//Added Hispanica for ENH-77
if(document.MngProdForm.hispanica.checked)
{
prdctflag=true;
}
//Added Living Green for ENH-100
if(document.MngProdForm.livinggreen.checked)
{
prdctflag=true;
}
//Added Early People for ENH-100
if(document.MngProdForm.earlypeople.checked)
{
prdctflag=true;
}
//ENH-106 Added Inventions
if(document.MngProdForm.inventions.checked)
{
prdctflag=true;
}
if(prdctflag==false)
{
errorstyle.innerHTML = '<font size=2 color=red><b>Please select atleast one product for ['+document.MngProdForm.username.value+'].</b></font>';
return false;
}
}
}
return true;
}
//This method is called when user clicks review button from User Name Password link from Manage Products
function validateNewUserEntries()
{
//BUG-464 Checking for blank spaces for Username & Password.
var pwd= removeSpaces(document.MngProdForm.addPwd.value);
document.MngProdForm.addPwd.value=pwd;
//BUG-464
if(document.MngProdForm.addUser.value.length < 3 || document.MngProdForm.addUser.value.length > 128)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Username should be Min 3 characters & Max 128 characters.</b></font>';
return false;
}
else if(pwd.length < 3 || pwd.length > 16)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
}
//ENDS
else
{
return true;
}
}
 // This method is called when the user clicks on 'Save' button
function doSave(AuthType)
{
var strUserNames = "";
var strPassword = "";
var strSubsAccess = "";
var strWborc ="";
//var strWbrl ="";
var strWbKids = "";
// Added WBA for RCR for ENH-236
var strWba = "";
// Added Decouverte for ENH-18
var strDecouverte = "";
// Added Discover for ENH-31
var strDiscover = "";
// Added for Tools Redesign ENH-26
var strRemote= "";
var strEeh ="";
//Added Student for ENH-43
var strwbs = "";
//Added Hispanica for ENH-77
var strhispanica = "";
//Added LivingGreen for ENH-100
var strLivingGreen = "";
//Added Early People for ENH-100
var strEarlyPeople = "";
//ENH-106 Added Inventions
var strInventions = "";
var strDhp = "";
//Added for WBDP-122
var strSubsEnd = "";
//Added for WBDP-450
var strConsumerEmail = "";
//If the user length is equal to or greater than 2 i.e. the user has checked more than one records
if(document.viewSavedProd.user)
{
if(document.viewSavedProd.user.length>=2)
{
for(var i=0;i<document.viewSavedProd.user.length;i++)
{
strUserNames += document.viewSavedProd.user[i].value + ",";
strPassword += document.viewSavedProd.password[i].value + ",";
if(document.viewSavedProd.subsEndDt != null && document.viewSavedProd.subsEndDt[i].value != ''){
strSubsEnd += document.viewSavedProd.subsEndDt[i].value + ",";
}
/* Added for WBDP-450 */
if(document.viewSavedProd.strConsumerEmail != null && document.viewSavedProd.strConsumerEmail[i].value != ''){
ConsumerEmail += document.viewSavedProd.strConsumerEmail[i].value + ",";
}
strRemote += document.viewSavedProd.remote[i].value + ",";
strDhp += document.viewSavedProd.dhp[i].value + ",";
}
document.viewSavedProd.strusernames.value = strUserNames.substring(0,strUserNames.length-1);
document.viewSavedProd.strpassword.value = strPassword.substring(0,strPassword.length-1);
if(strSubsEnd != '')
document.viewSavedProd.strSubsEnd.value = strSubsEnd.substring(0,strPassword.length-1);
/* Added for WBDP-450 */
if(strConsumerEmail != '')
document.viewSavedProd.ConsumerEmail.value = strConsumerEmail.substring(0,strConsumerEmail.length-1);
document.viewSavedProd.strRemote.value = strRemote.substring(0,strRemote.length-1);
document.viewSavedProd.strdhp.value = strDhp.substring(0,strDhp.length-1);
}
//If the user length is less than 2 i.e. there is only record for the account
else
{
strUserNames = document.viewSavedProd.user.value;
strPassword = document.viewSavedProd.password.value;
if(document.viewSavedProd.subsEndDt!=null && document.viewSavedProd.subsEndDt.value!='')
{
strSubsEnd = document.viewSavedProd.subsEndDt.value;
}
/* Added for WBDP-450 */
if(document.viewSavedProd.strConsumerEmail!=null && document.viewSavedProd.strConsumerEmail.value!='')
{
strConsumerEmail = document.viewSavedProd.strConsumerEmail.value;
}
strRemote = document.viewSavedProd.remote.value;
strDhp = document.viewSavedProd.dhp.value;
//strSubsAccess = document.viewSavedProd.subs_access.value;
document.viewSavedProd.strusernames.value = strUserNames;
document.viewSavedProd.strpassword.value = strPassword;
if(strSubsEnd!=''){
document.viewSavedProd.strSubsEnd.value =strSubsEnd;
}
/* Added for WBDP-450 */
if(strConsumerEmail!=''){
document.viewSavedProd.ConsumerEmail.value =strConsumerEmail;
}
// Added for Tools Redesign ENH-2
document.viewSavedProd.strRemote.value = strRemote;
document.viewSavedProd.strdhp.value = strDhp;
}
}
document.viewSavedProd.display.value = "save";
document.viewSavedProd.submit();
}
 function checkUser(i)
{
if(document.MngProdForm.user.length != null)
{
if(document.MngProdForm.user.length>=2)
{
document.MngProdForm.user[i].checked=true;
if (document.MngProdForm.wbkid[i].checked == true )
document.MngProdForm.user[i].checked=true;
if (document.MngProdForm.wba[i].checked == true)
document.MngProdForm.user[i].checked=true;
// Added DECOUVERTE for ENH-18
       if (document.MngProdForm.decouverte[i].checked == true)
document.MngProdForm.user[i].checked=true;
// Added DISCOVER for ENH-31
       if (document.MngProdForm.discover[i].checked == true)
document.MngProdForm.user[i].checked=true;
if (document.MngProdForm.eeh[i].checked == true)
document.MngProdForm.user[i].checked=true;
//Added for ENH-43: Remote
if (document.MngProdForm.wbs[i].checked == true)
document.MngProdForm.user[i].checked=true;
//Added for ENH-77
if (document.MngProdForm.hispanica[i].checked == true)
document.MngProdForm.user[i].checked=true;
//Added Living green & Early People for ENH-100
if (document.MngProdForm.livinggreen[i].checked == true)
document.MngProdForm.user[i].checked=true;
if (document.MngProdForm.earlypeople[i].checked == true)
document.MngProdForm.user[i].checked=true;
//ENH-106 Added Inventions
if (document.MngProdForm.inventions[i].checked == true)
document.MngProdForm.user[i].checked=true;
//Added for ENH-26: Remote
if(document.MngProdForm.remote)
{
if (document.MngProdForm.remote[i].checked == true)
document.MngProdForm.user[i].checked=true;
}
}
}else {
document.MngProdForm.user.checked=true;
if (document.MngProdForm.wbkid.checked == true)
document.MngProdForm.user.checked=true;
if (document.MngProdForm.wba.checked == true)
document.MngProdForm.user.checked=true;
       // Added DECOUVERTE for ENH-18
if (document.MngProdForm.decouverte.checked == true)
document.MngProdForm.user.checked=true;
// Added DISCOVER for ENH-31
if (document.MngProdForm.discover.checked == true)
document.MngProdForm.user.checked=true;
if (document.MngProdForm.eeh.checked == true)
document.MngProdForm.user.checked=true;
if (document.MngProdForm.wbs.checked == true)
document.MngProdForm.user.checked=true;
//Added for ENH-77
if (document.MngProdForm.hispanica.checked == true)
document.MngProdForm.user.checked=true;
//Added Living green & Early People for ENH-100
if (document.MngProdForm.livinggreen.checked == true)
document.MngProdForm.user.checked=true;
if (document.MngProdForm.earlypeople.checked == true)
document.MngProdForm.user.checked=true;
//ENH-106 Added Inventions
if (document.MngProdForm.inventions.checked == true)
document.MngProdForm.user.checked=true;
//Added for ENH-26: Remote
if(document.MngProdForm.remote)
{
if (document.MngProdForm.remote.checked == true)
document.MngProdForm.user.checked=true;
}
}
}
function selectNewUser(authtype)
{
if(authtype == 'lib')
{
//For adding new Library User
document.MngProdForm.authDig.value=document.MngProdForm.cardNum.value.length;
//	document.MngProdForm.addLib.checked=true;
}
if(authtype == 'user')
{
//For adding new User
document.MngProdForm.addUser.checked=true;
}
if(authtype == 'ip')
{
//For adding new IP
document.MngProdForm.addIP.checked=true;
}
if(authtype == 'ipfile')
{
//For adding new ipfile
document.MngProdForm.addIP.checked=true;
document.MngProdForm.addIPFile.checked=true;
}
if(authtype == 'url')
{
//For adding new Referal URL
document.MngProdForm.addUrl.checked=true;
}
}
function validateLibrary()
{
    //.. This validates the input given by the user.
    //.. the Library Number cannot be empty.
    //.. Sumbit the form by calling with action.
   	// the Library Number cannot be empty
   	//BUG-464 No blank spaces in Lib card number.
   	var cardnumber= removeSpaces(document.MngProdForm.cardNum.value);
document.MngProdForm.cardNum.value=cardnumber;
if (cardnumber == "")
{
var errstyle = document.getElementById("SelRecErr");
 errstyle.innerHTML = '<font size=2 color=red><b>Please enter Library Card Number.</b></font>';
return false;
}
//BUG-464 Assigning the cardNum length to the authDig only after removeSpaces() to cardNum
        document.MngProdForm.authDig.value=cardnumber.length;
// Length cant be null
if (document.MngProdForm.maxDig1.value == "")
{
var errstyle = document.getElementById("SelRecErr");
 errstyle.innerHTML = '<font size=2 color=red><b>Please enter the minimum length of Card Number.</b></font>';
return false;
}
// if bridge is selected then max cant be null
if (document.MngProdForm.maxDig1.value != "" &&
document.MngProdForm.bridge.value != "" &&
document.MngProdForm.maxDig2.value == "")
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Maximum length of the Card Number.</b></font>';
return false;
}

// if both value selected then bridge cant be null
if (document.MngProdForm.maxDig1.value != "" &&
document.MngProdForm.maxDig2.value != ""	&&
document.MngProdForm.bridge.value == ""
)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Please select a list value.</b></font>';
return false;
}
// max cant be less than min
if (document.MngProdForm.maxDig2.value !="")
{
if (parseInt(document.MngProdForm.maxDig1.value) >
parseInt(document.MngProdForm.maxDig2.value))
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Maximum length of the Card Number should be greater than or equal to the Minimum length of the Card Number.</b></font>';
return false;
}
}
if (document.MngProdForm.authDig.value == "" || document.MngProdForm.authDig.value == 0)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Please enter the Number of authentication Digits.</b></font>';
return false;
}
       //Added for ENH-53 to validate authentication start values
       //BUG-464 Replaced document.MngProdForm.cardNum.value to cardnumber
if (document.MngProdForm.authStart.value > cardnumber.length)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b> Authentication Start At cannot be more than length of the Card Number.</b></font>';
return false;
}
        // min value should be greater than card length value changed >= to <
        //BUG-464 Replaced document.MngProdForm.cardNum.value to cardnumber
        if(document.MngProdForm.maxDig1.value < cardnumber.length){
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Minimum Length of Card Number should not be Lesser than the length of the Card Number.</b></font>';
return false;
}
//ENH-53 ENDS
if (document.MngProdForm.authStart.value == "")
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Please enter starting authentication Digits.</b></font>';
return false;
}
        /*ENH-53 changed the authStart condition from authStart.value < 1 to authStart.value < 0 */
if (document.MngProdForm.authStart.value < 0)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Starting authentication Digits can not be less than 0.</b></font>';
return false;
}
    return true;
}
function changeValue(param)
{
var prm = param;
if(prm == 'addUser')
{
document.MngProdForm.addUser.value="";
}else if(prm == 'addPwd')
{
document.MngProdForm.addPwd.value="";
}else if(prm == 'url'){
document.getElementById('refUrl').value="";
selectNewUser('url');
}
}
function checkRemote(addRemote,i)
{
if(addRemote == 'remote')
{
if(document.MngProdForm.remote[i].value=='on')
{
 document.MngProdForm.remote[i].value='on';
}
else
{
document.MngProdForm.remote[i].value='off';
}
}
if(addRemote == 'addRemote')
{
if(document.MngProdForm.addRemote.checked== true)
{
document.MngProdForm.addRemote.value='on';
selectNewUser('user');
}
else
{
document.MngProdForm.addRemote.value='off';
}
}
}
/*
 function for adding the ip range into the box. this is used in manage products for adding a new ip.
*/
function addSelection(){
var ip1 = document.getElementById("ipStart");
var ip2 = document.getElementById("ipEnd");
var ipAddress1 = ip1.value;
var ipAddress2 = ip2.value;
var errstyle = document.getElementById("SelRecErr");
if(validateIP(ipAddress1) && validateIP(ipAddress2) && CompareIP(ipAddress1,ipAddress2))
{
var lastpos = document.MngProdForm.ipSelect.length+1;
document.MngProdForm.ipSelect.length = document.MngProdForm.ipSelect.length+1;
document.MngProdForm.ipSelect[lastpos-1].text = ip1.value + "-" + ip2.value;
ip1.value = "";
ip2.value = "";
errstyle.innerHTML = '';
}else{
errstyle.innerHTML =  '<font size=2 color=red><b>Please enter a valid IP address range.</b></font>';
}

}
/*
 Function for removing the ip from the box. this is used in manage products for removing a ipaddress from the list.
*/
function removeSelection(){
var sels = document.getElementById("ipSelect")
var index = sels.selectedIndex;
sels.options[index].text = "";
}
/*
This function is used to verify the entered ipAddress.
*/
function validateIP(IPvalue)
  {
     errorString = "";
     //theName = "IPaddress";
     var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
     var ipArray = IPvalue.match(ipPattern);
     var ip=0;
     if (IPvalue == "0.0.0.0")
        ip=1;
     if (ipArray == null)
        ip=1;
     else
      {
        for (i = 1; i <= 4; i++)
          {
             thisSegment = ipArray[i];
             if (thisSegment > 255)
              {
                ip=1;
                i = 5;
              }
             if ((i == 1) && (thisSegment <= 0))
              {
                ip=1;
                i = 5;
              }
          }
       }
      extensionLength = 3;
     if (ip==1)
       {
           return false;
        }
     return true;
   }

  /*
  This function is used to compare the ipstart and ipend address.
   */

  function CompareIP(ipStart,ipEnd){
       errorString = "";
     //theName = "IPaddress";
     var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
     var ipStartArray = ipStart.match(ipPattern);
     var ipEndArray = ipEnd.match(ipPattern);

     var ip=0;
     if (ipStart == "0.0.0.0" || ipEnd == "0.0.0.0")
        ip=1;
     if (ipStart == null || ipEnd == null)
        ip=1;
     else
      {
        for (i = 1; i <= 4; i++)
          {
             ipStartSegment = ipStartArray[i];
             ipEndSegment = ipEndArray[i];
             if (ipStartSegment > ipEndSegment)
              {
                ip=1;
                i = 5;
              }

          }
       }
       if (ip==1)
       {
           return false;
        }
     return true;
  }
/*
   This function is added for deleteing the selected records. as part of Release-19.
   */
   function deleteValidate(AuthType){
   	var errstyle = document.getElementById("SelRecErr");
   	if(document.MngProdForm.TotalRecords.value < 1){
errstyle.innerHTML =  '<font size=2 color=red><b>No Records available for delete.</b></font>';
return false;
}
else
{
var flag=false;
if(document.MngProdForm.user)
{
if(!document.MngProdForm.user.length)
{
if(document.MngProdForm.user.checked)
{
flag=true;
}
}
else{
for(var i=0;i<document.MngProdForm.user.length;i++)
{
if(document.MngProdForm.user[i].checked)
{
flag=true;
}
}
}
}
if(flag==false)
{
errstyle.innerHTML =  '<font size=2 color=red><b>No Records Selected for delete.</b></font>';
return false;
}
else
{
document.MngProdForm.authdelete.value = 'yes';
return validate(AuthType);
}
}
   }
     function doDelete(AuthType){

/* Added following code for R-20, to display the products list for removed products */
var strUserNames = "";
var strPassword = "";
var strSubsAccess = "";
var strWborc ="";
var strWbKids = "";
var strWba = "";
var strDecouverte = "";
var strDiscover = "";
var strRemote = "";
var strEeh ="";
var strDhp = "";
/* R-20, changes end here */
//If the user length is equal to or greater than 2 i.e. the user has checked more than one records
if(document.viewSavedProd.user)
{
if(document.viewSavedProd.user.length>=2)
{
for(var i=0;i<document.viewSavedProd.user.length;i++)
{
strUserNames += document.viewSavedProd.user[i].value + ",";
/* Added following code for R-20, to display the products list for removed products */
strPassword += document.viewSavedProd.password[i].value + ",";
strDhp += document.viewSavedProd.dhp[i].value + ",";
}
document.viewSavedProd.strpassword.value = strPassword.substring(0,strPassword.length-1);
document.viewSavedProd.strusernames.value = strUserNames.substring(0,strUserNames.length-1);
}
//If the user length is less than 2 i.e. there is only record for the account
else
{
strUserNames = document.viewSavedProd.user.value;
/* Added following code for R-20, to display the products list for removed products */
strPassword = document.viewSavedProd.password.value;
strDhp = document.viewSavedProd.dhp.value;
document.viewSavedProd.strpassword.value = strPassword;
document.viewSavedProd.strdhp.value = strDhp;
/* R-20, changes end here */
document.viewSavedProd.strusernames.value = strUserNames;
}
}
document.viewSavedProd.authdelete.value='yes';
document.viewSavedProd.submit();
}
/**
 * This method is added for R-20. it is used to populate the hidden variable depending on the
 * checkbox selection provided to enable the send e-mail or not.
 */
 function checkSendMail() {
 	if(document.viewSavedProd.checkEmail != null){
 	if(document.viewSavedProd.checkEmail.checked){
 	document.viewSavedProd.sendEmail.value="true";
 	}else{
 	//ENH-159 Set the sendemail value to false
 	document.viewSavedProd.sendEmail.value="false";
 	}
 	}
 }
/**
 * This method is called to populate the Library card details on selecting the modify checkbox
 * Added for ENH-53
 */
function populateLibData(cardnum, maxdigits, authdigits, startpos){

   modLibAuth = true;
document.MngProdForm.cardNum.value = cardnum;
document.MngProdForm.maxDig1.value = maxdigits.substring(0,1);
document.MngProdForm.authDig.value = authdigits;
//BUG-464 Added +(1) For display purpose as strAuthstart gets subtracted in InsertLibUser() &
//UpdateExistingLib()
document.MngProdForm.authStart.value = startpos+(1);
var i=0;
var indexPipe = maxdigits.indexOf("|");
if(indexPipe != -1){
document.MngProdForm.maxDig2.value = maxdigits.substring(maxdigits.indexOf("|")+1,maxdigits.length);
}
else{
document.MngProdForm.maxDig2.value = maxdigits.substring(maxdigits.indexOf("-")+1,maxdigits.length);
}
}
/**
 * This method is used to reset the card details on selecting the 'Add the new Library Card' checkbox
 * Added for ENH-53
 */
function resetLibData(){
document.MngProdForm.cardNum.value = "";
    document.MngProdForm.maxDig1.value = "";
document.MngProdForm.maxDig2.value = "";
document.MngProdForm.authDig.value = "";
document.MngProdForm.authStart.value = "";
}
/**
 * ENH-53 added the reset method since reset was directing the url to verify page
 */
function resetFields()
{
document.MngProdForm.display.value = "show";
return true;
}
//BUG-464 To trim the blank spaces for UserId ,Password for all auth types
function removeSpaces(inputStr)
{
  var newString="";
  if (!inputStr.length) return "";
  // Remove all spaces
  for (i=0; i< inputStr.length; i++) {
    curChar=inputStr.charAt(i);
    if (curChar !=" ") {
      newString +=curChar;
    }
  }
  return newString;
}
var NS4 = (document.layers);
var IE4 = (document.all);
var win = this;
var n   = 0;
function findInPage(str) {
var txt, i, found;
if (str == "")
return false;
//if (NS4) {
//if (!win.find(str))
//while(win.find(str, false, true))
//n++;
//else
//n++;
//if (n == 0) alert(str + " was not found on this page.");
//}
if (IE4) {
txt = win.document.body.createTextRange();
for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
txt.moveStart("character", 1);
txt.moveEnd("textedit");
}
if (found) {
txt.moveStart("character", -1);
txt.findText(str);
txt.select();
txt.scrollIntoView();
n++;
}
else {
if (n > 0) {
n = 0;
findInPage(str);
}
else
alert(str + " was not found on this page.");
}
}
else
{
if (!win.find(str)){
while(win.find(str, false, true))
n++;
}
else{

if (n==0) alert(str + " was not found on this page.");
}
}
return false;
}
function fillIPend()
{
var d;
d=document.MngProdForm.ipStart.value;
if(document.MngProdForm.ipEnd.value==''||document.MngProdForm.ipEnd.value==null)
document.MngProdForm.ipEnd.value=d.substring(0,d.lastIndexOf('.')+1);
}
function validateNewInsertURL(urls,newurls)
{
if(urls == newurls )
return false;
return true;
}
function validateNewInsertURL(urls,newurls,size)
{
var i;
for(i=0;i<size.length;i++)
{
if(urls[i].value == newurls)
return false;
}
return true;
}
//Added for WBDP-500
 //This method id used to call the method for populating IP addresses into the excel sheet
 function sendReqForSave(){
       //document.IPExport.action="ipexport";
 	document.IPExport.submit();
 }
function sendReqForUserSave(){
       //document.IPExport.action="ipexport";
 	document.UserExport.submit();
 }
function sendReqForUrlSave(){
       //document.IPExport.action="ipexport";
 	document.UrlExport.submit();
 }
function addUserSelection()
{
          var username=document.getElementById("username1");
 var password=document.getElementById("password1");
 var errstyle = document.getElementById("SelRecErr");
 if(validateUserPass(username.value,password.value))
 {
var lastpos = document.MngProdForm.userSelect.length+1;
document.MngProdForm.userSelect.length = document.MngProdForm.userSelect.length+1;
document.MngProdForm.userSelect[lastpos-1].text = username.value + "-" + password.value;
username.value = "";
password.value = "";
errstyle.innerHTML = '';
 }
  else{
errstyle.innerHTML =  '<font size=2 color=red><b>Please enter a valid username or password.</b></font>';
}
}
function removeUserSelection(){
var sels = document.getElementById("userSelect")
var index = sels.selectedIndex;
sels.options[index].text = "";
}
function validateUserPass(user,pass)
{
//BUG-464 Checking for blank spaces for Username & Password.
var pwd= removeSpaces(pass);
//BUG-464
if(user.length < 3 || user.length > 128)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Username should be Min 3 characters & Max 128 characters.</b></font>';
return false;
}
else if(pwd.length < 3 || pwd.length > 16)
{
var errstyle = document.getElementById("SelRecErr");
errstyle.innerHTML = '<font size=2 color=red><b>Password should be Min 3 characters & Max 16 characters.</b></font>';
return false;
}
if(pwd.indexOf(",")!=-1 || pwd.indexOf("\"")!=-1 || pwd.indexOf("'")!=-1 )
 	{
 	var errstyle = document.getElementById("SelRecErr");
 	errstyle.innerHTML = '<font size=2 color=red><b>Password cannot contain comma or quotes</b></font>';
 	return false;
 	}
//ENDS
else
{
return true;
}
}
function addUrlselection()
{
          var url=document.getElementById("refUrl1");
 var errstyle = document.getElementById("SelRecErr");
 if(url.value!="")
 {
var lastpos = document.MngProdForm.urlSelect.length+1;
document.MngProdForm.urlSelect.length = document.MngProdForm.urlSelect.length+1;
document.MngProdForm.urlSelect[lastpos-1].text = url.value;
url.value="";
errstyle.innerHTML = '';
}
  else{
errstyle.innerHTML =  '<font size=2 color=red><b>Please enter a valid Url.</b></font>';
}
}
function removeUrlSelection(){
var sels = document.getElementById("urlSelect")
var index = sels.selectedIndex;
sels.options[index].text = "";
}

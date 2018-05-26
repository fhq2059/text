//ȫվ����������֤
function checktopsearch()
{
        if (Jtrim(document.topsearchform.keyword.value)=='' || Jtrim(document.topsearchform.keyword.value)=='�������ѯ�ؼ���') {
                window.alert ("�������ѯ�ؼ��� ��");
				document.topsearchform.keyword.value="";
	            document.topsearchform.keyword.focus();
                return false;
        }
        return true
}

//��վ��ҳ��֤��½����02
function checkindexmemberlogin02()
{
        if (Jtrim(document.indexloginform.username.value)=='') {
                window.alert ("Please enter your member name!");
	            document.indexloginform.username.focus();
                return false;
        }
	    if (!isusername(document.indexloginform.username.value)){
	       document.indexloginform.username.focus();
           return false;
        }
		if (Jtrim(document.indexloginform.username.value).length<5||Jtrim(document.indexloginform.username.value).length>20) {
            window.alert ("Your Username must be greater than 4 and can not be over 20!")
	        document.indexloginform.username.focus();
            return false;
        }
        if (Jtrim(document.indexloginform.password.value)=='') {
                window.alert ("Please enter your password!");
	            document.indexloginform.password.focus();
                return false;
        }
        if (Jtrim(document.indexloginform.password.value).length<6||Jtrim(document.indexloginform.password.value).length>20) {
                window.alert ("Your password must be greater than five and not more than 20!");
	            document.indexloginform.password.focus();
                return false;
        }
        return true
}



//��վ��ҳ��֤��½����
function checkindexmemberlogin()
{
        if(!document.indexloginform.UserType[0].checked&&!document.indexloginform.UserType[1].checked){
                window.alert ("Please select the membership type!");
                return false;
        }
        if (Jtrim(document.indexloginform.username.value)=='') {
                window.alert ("Please enter your member name!");
	            document.indexloginform.username.focus();
                return false;
        }
	    if (!isusername(document.indexloginform.username.value)){
	       document.indexloginform.username.focus();
           return false;
        }
		if (Jtrim(document.indexloginform.username.value).length<5||Jtrim(document.indexloginform.username.value).length>20) {
            window.alert ("Your Username must be greater than 4 and can not be over 20!")
	        document.indexloginform.username.focus();
            return false;
        }
        if (Jtrim(document.indexloginform.password.value)=='') {
                window.alert ("Please enter your password!");
	            document.indexloginform.password.focus();
                return false;
        }
        if (Jtrim(document.indexloginform.password.value).length<6||Jtrim(document.indexloginform.password.value).length>20) {
                window.alert ("Your password must be greater than five and not more than 20!");
	            document.indexloginform.password.focus();
                return false;
        }
        if (Jtrim(document.indexloginform.CheckCode.value)=='') {
    		  alert("Please enter the verification code!");
    		  document.indexloginform.CheckCode.focus();
    		  return (false);
   		 }
		if (strlength(Jtrim(document.indexloginform.CheckCode.value))!= 6){
			alert("Enter the verification code is incorrect, please return to the adjustment!");
	        document.indexloginform.CheckCode.focus();
			return false;
		}
        return true
}

//��Ѷ����������֤����current
function CheckComment()
{
		if (Jtrim(document.commentform.Content.value)==""){
			alert("�������ݲ���Ϊ�գ�");
	        document.commentform.Content.focus();
			return false;
		}
		if (strlength(Jtrim(document.commentform.Content.value))<2){
			alert("�������ݲ�������2�ַ���1���֣��뷵�ص�����");
	        document.commentform.Content.focus();
			return false;
		}
		if (strlength(Jtrim(document.commentform.Content.value))>1000){
			alert("����������500���ֻ�1000�ַ����뷵�ص�����");
	        document.commentform.Content.focus();
			return false;
		}
        if (Jtrim(document.commentform.CheckCode.value)=='') {
    		  alert("��������֤�룡");
    		  document.commentform.CheckCode.focus();
    		  return (false);
   		 }
		if (strlength(Jtrim(document.commentform.CheckCode.value))!= 6){
			alert("��֤�����벻��ȷ���뷵�ص�����");
	        document.commentform.CheckCode.focus();
			return false;
		}
	document.commentform.submit();
}

//������Ϣ����������֤����current
function CheckFenLeiGuestBook()
{
		if (Jtrim(document.fenleiguestbook.Content.value)==""){
			alert("�������ݲ���Ϊ�գ�");
	        document.fenleiguestbook.Content.focus();
			return false;
		}
		if (strlength(Jtrim(document.fenleiguestbook.Content.value))<20){
			alert("�������ݲ�������10���ֻ�20�ַ����뷵�ص�����");
	        document.fenleiguestbook.Content.focus();
			return false;
		}
		if (strlength(Jtrim(document.fenleiguestbook.Content.value))>2000){
			alert("����������1000���ֻ�2000�ַ����뷵�ص�����");
	        document.fenleiguestbook.Content.focus();
			return false;
		}
        if (Jtrim(document.fenleiguestbook.CheckCode.value)=='') {
    		  alert("��������֤�룡");
    		  document.fenleiguestbook.CheckCode.focus();
    		  return (false);
   		 }
		if (strlength(Jtrim(document.fenleiguestbook.CheckCode.value))!= 6){
			alert("��֤�����벻��ȷ���뷵�ص�����");
	        document.fenleiguestbook.CheckCode.focus();
			return false;
		}
	document.fenleiguestbook.submit();
}


//������֤����current
function placehoder(){
	var keyword=Jtrim(document.searchform.keyword.value);
	var stype=Jtrim(document.searchform.stype.value);
	if(keyword==''){
		window.alert ("�����������ؼ��ʣ�");
		document.searchform.keyword.focus();
		return false;
	}
	if(stype==''||stype=='0'){
		window.alert ("�������������ͣ�");
		document.searchform.stype.focus();
		return false;
	}
	if(stype=='1'){
		document.searchform.action="/fenlei/search.asp?keyword="+keyword+"&stype="+stype;
	}else if(stype=='2'){
		document.searchform.action="/store/search.asp?keyword="+keyword+"&stype="+stype;
	}else if(stype=='3'){
		document.searchform.action="/info/search.asp?keyword="+keyword+"&stype="+stype;
	}else{
			return false;
	}
	return true
}


//������֤����
<!--
function xabizsearch()
{
var KeyWord=formsearch.KeyWord.value
if(formsearch.KeyWord.value=="�ڴ������ѯ�ؼ���")
{
	alert("��������Ҫ��ѯ�Ĺؼ���!");
	return false;
}
if(formsearch.KeyWord.value=="")
{
	alert("��������Ҫ��ѯ�Ĺؼ���!");
	return false;
}
}
//-->


//ȫվ����
<!--
function xabizallsitesearch()
{
var SearchArea=document.xabizsearch.SearchArea.value
var KeyWord=document.xabizsearch.KeyWord.value

if(document.xabizsearch.SearchArea.value==""||document.xabizsearch.SearchArea.value=="0")
{
	alert("��ѡ����������!");
	return false;
}
if(document.xabizsearch.KeyWord.value=="�����ѯ�ؼ���")
{
	alert("��������Ҫ��ѯ�Ĺؼ���!");
	return false;
}
if(document.xabizsearch.KeyWord.value=="")
{
	alert("��������Ҫ��ѯ�Ĺؼ���!");
	return false;
}
//��Ѷ����
//if(document.xabizsearch.SearchArea.value=="0"){
//	document.xabizsearch.action="http://www.chinaz.com/plus/search.php?keyword="+KeyWord+"";
//	document.xabizsearch.submit();
//}
//�̻�����
if(document.xabizsearch.SearchArea.value=="1")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
if(document.xabizsearch.SearchArea.value=="2")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
if(document.xabizsearch.SearchArea.value=="3")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
if(document.xabizsearch.SearchArea.value=="4")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
if(document.xabizsearch.SearchArea.value=="5")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
if(document.xabizsearch.SearchArea.value=="6")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
if(document.xabizsearch.SearchArea.value=="7")
location.href="/Trade/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
//��Ʒչʾ����
if(document.xabizsearch.SearchArea.value=="8")
location.href="/Product/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
//��ҵ��Ա����
if(document.xabizsearch.SearchArea.value=="9")
location.href="/Company/search.asp?SearchArea="+SearchArea+"&keyword="+KeyWord+"";
return false;
}
//-->



//�л����뺯����ʼ
var isIE = navigator.userAgent.toLowerCase().indexOf("msie")!=-1;
var GO = function(elemId){
	if(document.getElementById){
		return document.getElementById(elemId);
	}else if(document.layers){
		document.layers[elemId];
	}else{
		return eval('document.all.' + elemId);
	}
}
function Menu(mid,idx){
	for(var i=0;i<10;i++){
		if(!GO("m_"+mid+"_"+i)) break;
		GO("m_"+mid+"_"+i).className = "menuOff";
		GO("c_"+mid+"_"+i).style.display = "none";
	}
	GO("m_"+mid+"_"+idx).className = "menuOn";
	GO("c_"+mid+"_"+idx).style.display = "block";
}
//�л����뺯������





  function showdiv(divnum,divbefor,id){
	for(i=1;i<=divnum;i++){
		try{
			if(i==divbefor){
				document.getElementById(id+i).style.display="inline";
			}else{
				document.getElementById(id+i).style.display="none";
			}
		}catch(e){ }
	}
}


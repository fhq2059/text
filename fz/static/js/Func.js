<!-- Hide
function killErrors() {
return true;
}
window.onerror = killErrors;
// -->
function isusername (s)
{
         var regu = "^([a-zA-Z]+[_0-9a-zA-Z@.-]*)$"
         var re = new RegExp(regu);
         if (s.search(re) != -1) {
               return true;
         } else {
               window.alert ("��ʹ�ù淶�Ļ�Ա����")
               return false;
         }
}

	function isMobile(s) {
    //pattern: �ֻ���Ϊ���֣����ȴ��ڵ���8��С�ڵ���11
    var patrn = /^(\d{7,11})?$/;
    if (!patrn.exec(s)) return false
    return true
    }

function isemail (s)
{
        // Writen by david, we can delete the before code
        if (s.length > 50)
        {
                window.alert("email��ַ���Ȳ��ܳ���50λ!");
                return false;
        }
		s = s.toLowerCase()
//         var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$"
         //var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|name|NAME)$"
		 //Modified By Ryan Gao 2005-12-16
		 //var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[_.0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|name|NAME)$";
		 //Modified By Ryan Gao 2005-12-28 �����ʼ���ַ��β��_(��126)
		 var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|name|NAME)$";
		 var re = new RegExp(regu);
         if (s.search(re) != -1) {
               return true;
         } else {
               window.alert ("��������Ч�Ϸ���E-mail��ַ ��");
               return false;
         }
}

function isemail_E (s)
{
        // Writen by david, we can delete the before code
        if (s.length > 100)
        {
                window.alert("The Email adress should be less than 100 characters!");
                return false;
        }
//         var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$"
         //var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|name|NAME)$"
		 //Modified By Ryan Gao 2005-12-16
		 //var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|name|NAME)$";
		 //Modified By Ryan Gao 2005-12-28 �����ʼ���ַ��β��_(��126)
		 var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|name|NAME)$";
		 var re = new RegExp(regu);
         if (s.search(re) != -1) {
               return true;
         } else {
               window.alert ("Please enter a valid email address!")
               return false;
         }
}

function showClick(msg){
	if(confirm(msg)){
		event.returnValue=true;
	}else{
		event.returnValue=false;
	}
}

function showsub(ss)
{
ss=document.getElementById(ss)
 if (ss.style.display=="none")
  {ss.style.display="";

}
 else
  {ss.style.display="none";
   }
}

function Jtrim(str)
{

        var i = 0;
        var len = str.length;
        if ( str == "" ) return( str );
        j = len -1;
        flagbegin = true;
        flagend = true;
        while (( flagbegin == true) && (i< len))
        {
           if ( str.charAt(i) == " " )
                {
                  i=i+1;
                  flagbegin=true;
                }
                else
                {
                        flagbegin=false;
                }
        }

        while  ((flagend== true) && (j>=0))
        {
            if (str.charAt(j)==" ")
                {
                        j=j-1;
                        flagend=true;
                }
                else
                {
                        flagend=false;
                }
        }

        if ( i > j ) return ("");

        trimstr = str.substring(i,j+1);
        return trimstr;
}


function isValidDate( year, month, day )
{
   year  = parseInt(year,10);
   month = parseInt(month,10);
   day   = parseInt(day,10);

   if (( month==4) || (month==6) || (month==9) || (month==11) )
   { if (( day < 1) || (day > 30) )
     { alert( "������1 - 30֮��" );
       return (false);
     }
   }
   else
   { if ( month!=2 )
     { if ( (day < 1) || (day > 31 ))
       {  alert( "������1 - 31֮��" );
          return (false);
       }
     }
     else
     { // month == 2
       if ( ( year % 100 ) != 0 && (year % 4 == 0) || ( year % 100 ) == 0 && ( year % 400) == 0 )
       { if ( day > 29 )
         {  alert( "������1 - 29֮��" );
            return (false);
         }
       }
       else
       { if ( day > 28 )
         { alert( "������1 - 28֮��" );
           return (false);
         }
       }
     }
   }
 return (true);
}

function isValidDate_e( year, month, day )
{
   year  = parseInt(year,10);
   month = parseInt(month,10);
   day   = parseInt(day,10);

   if (( month==4) || (month==6) || (month==9) || (month==11) )
   { if (( day < 1) || (day > 30) )
     { alert( "Day must between 1 - 30" );
       return (false);
     }
   }
   else
   { if ( month!=2 )
     { if ( (day < 1) || (day > 31 ))
       {  alert( "Day must between 1 - 31" );
          return (false);
       }
     }
     else
     { // month == 2
       if ( ( year % 100 ) != 0 && (year % 4 == 0) || ( year % 100 ) == 0 && ( year % 400) == 0 )
       { if ( day > 29 )
         {  alert( "Day must between 1 - 29" );
            return (false);
         }
       }
       else
       { if ( day > 28 )
         { alert( "Day must between 1 - 28" );
           return (false);
         }
       }
     }
   }
 return (true);
}

function DateCompare(YearFrom, MonthFrom, YearTo, MonthTo)
{  YearFrom  = parseInt(YearFrom,10);
   MonthFrom = parseInt(MonthFrom,10);
   YearTo    = parseInt(YearTo,10);
   MonthTo   = parseInt(MonthTo,10);

   if (YearFrom > YearTo)
     { return false;}
   else
   {  if (YearFrom == YearTo)
      {  if (MonthFrom > MonthTo)
            return false;
      }
   }
   return true;
}

function CheckAll(form) {
	for (var i=0;i<form.elements.length;i++)  {
		var e = form.elements[i];
		if (e.name != 'chkall')
		e.checked = true // form.chkall.checked;
	}
}

function ContraSel(form) {
	for (var i=0;i<form.elements.length;i++){
		var e = form.elements[i];
		if (e.name != 'chkall')
		e.checked=!e.checked;
	}
}

function strlength(str){
	return str.replace(/[^\x00-\xff]/gi,'xx').length;
}
	//ȥ���ַ��еĿո�
	function trim(value) {
	    return value.replace( /^\s*/, "" ).replace( /\s*$/, "" );
	}

	//�ж��Ƿ�Ϊ��.
	function isNull(value){
		if(trim(value).length == 0){
			return true;
		}else{
			return false;
		}
	}
	//���EMAIL��ַ�Ƿ���Ч.
	function isEmail(mail){
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  		return  Check( reg, trim(mail) );
  	}

	//��֤�Ƿ�Ϊ����.
  function isInt(value){
  	var reg = /^\d+$/;
  	return Check(reg,value);
  }

  //������������Ƿ�Ϸ�.
  function isPostNO(value){
		var reg = /^\d{6}$/;
		return  Check( reg, value );
	}

	function Check( reg, str ){
		if( reg.test( str ) ){
			return true;
		}
		return false;
	}
  //��֤�Ƿ�Ϊ���֣�������С����.
  function isNumber(oNum){
  if(!oNum) return false;
  var strP=/^\d+(\.\d+)?$/;
  if(!strP.test(oNum)) return false;
  try{
  if(parseFloat(oNum)!=oNum) return false;
  }
  catch(ex)
  {
   return false;
  }
  return true;
  }

  //ˢ����֤�뺯�� add 2008-6-13
function refreshcheckcodeimg(){document.all.checkcode.src='/Include/checkcode.asp';}

/////////////////////////////////////////////////////////////////////////ͼƬ��С���ƺ��� start
//ͼƬ����������
var flag=false;
function DrawImage(ImgD,iwidth,iheight){
	//����(ͼƬ,�����Ŀ���,�����ĸ߶�)
	var image=new Image();
	image.src=ImgD.src;
	if(image.width>0 && image.height>0){
		flag=true;
		if(image.width/image.height>= iwidth/iheight){
			if(image.width>iwidth){
				ImgD.width=iwidth;
				ImgD.height=(image.height*iwidth)/image.width;
			}else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}else{
			if(image.height>iheight){
				ImgD.height=iheight;
				ImgD.width=(image.width*iheight)/image.height;
			}else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
	}
}

function bbimg(o){
	var zoom=parseInt(o.style.zoom, 10)||100;zoom+=event.wheelDelta/12;if (zoom>0) o.style.zoom=zoom+'%';
	return false;
}
function imgzoom(img,maxsize){
	var a=new Image();
	a.src=img.src
	if(a.width > maxsize * 4)
	{
		img.style.width=maxsize;
	}
	else if(a.width >= maxsize)
	{
		img.style.width=Math.round(a.width * Math.floor(4 * maxsize / a.width) / 4);
	}
	return false;
}
//ͼƬ�Զ�������ģʽ��1Ϊ���������� ��2 ����С������
var resizemode=1
function imgresize(o){
	 if (resizemode==2 || o.onmousewheel){
	 	if(o.width > 500 ){
				o.style.width='500px';
			}
			if(o.height > 800){
				o.style.height='800px';
			}
		}else{
		var parentNode=o.parentNode.parentNode
		if (parentNode){
		if (o.offsetWidth>=parentNode.offsetWidth) o.style.width='98%';
		}else{
		var parentNode=o.parentNode
		if (parentNode){
			if (o.offsetWidth>=parentNode.offsetWidth) o.style.width='98%';
			}
		}
	}
}
/////////////////////////////////////////////////////////////////////////ͼƬ��С���ƺ��� end

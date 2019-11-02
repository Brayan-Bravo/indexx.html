//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Respuesta Correcta"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que es GIT?","¿Para que sirve  GITHUB?","¿Creadores de HTML?","¿Linea de HTML5 que permite anexar los estilos css?","¿Linea de html para realizar anlcas o hipervinculos?"];
var answers1=["MUNvbnRyb2wgZGUgdmVyY2lvbmVz","MExlbmd1YWplIGRlIHByb2dyYW1hY2lvbg","MFNpc3RlbWEgb3BlcmF0aXZv","MEVzdGlsb3MgZGUgcHJvZ3JhbWFjaW9uIHdlYg"];
var answers2=["MWFsbWFjZW5hbWllbnRvIGRlIGPzZGlnbyBmdWVudGUgeSBhcmNoaXZvcyBkZSB1biBwcm95ZWN0bw","MExlbmd1YWplIGRlIHByb2dyYW1hY2lvbg","MEVzdGlsb3MgZGUgSFRNTA","MEd1aWEgZGUgcHJvZ3JhbWFjaW9uIGVuIEhUTUw"];
var answers3=["MVRpbSBCZXJuZXJzLUxlZSB5IFJvYmVydCBDYWlsaWF1","MHN0ZXBoZW4gaG9wcw","ME1hcmsgWnVja2VyYmVyZw","MEJpbGwgR2F0ZXM"];
var answers4=["MUxpbmsgcmVs","MG1ldGE","MGVzdGlsb3M","MHVs"];
var answers5=["MWEgaHJlZg","MGhpcGVy","MGJy","MGhlYWRlcg"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["Debes estudiar descripccion de GIT","ERROR estudia descripcccion GITHUB","ERROR estudiar descripccion de HTML","ERROR estudiar descripccion HTML5","ERROR estudiar descripccion html5"];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];

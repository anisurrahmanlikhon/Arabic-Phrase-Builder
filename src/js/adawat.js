function isCharTashkeel(letter){var CHARCODE_SHADDA=1617;var CHARCODE_SUKOON=1618;var CHARCODE_SUPERSCRIPT_ALIF=1648;var CHARCODE_TATWEEL=1600;var CHARCODE_ALIF=1575;if(typeof(letter)=="undefined"||letter==null)return false;var code=letter.charCodeAt(0);return(code==CHARCODE_TATWEEL||code==CHARCODE_SUPERSCRIPT_ALIF||code>=1611&&code<=1631);}
function strip_tashkeel(input){var output="";for(var i=0;i<input.length;i++){var letter=input.charAt(i);if(!isCharTashkeel(letter))
output+=letter;}
return output;}
var random_click=function(e){e.preventDefault()
$.getJSON(script+"/ajaxGet",{text:'',action:"RandomText"},function(data){if(data)document.NewForm.InputText.value=data.result;else document.NewForm.InputText.value="TZA";});}
var csv2data_click=function(e){e.preventDefault()
$.getJSON(script+")s/ajaxGet",{text:document.NewForm.InputText.value,action:"CsvToData"},function(d){$("#result").html("<pre>"+d.result+"</pre>");});}
var more_click=function(e){e.preventDefault()
$("#moresection").slideToggle();}
var vocalize_group_click=function(e){e.preventDefault()
$("#vocalizesection").slideToggle();$("#moresection").hide();}
var copy_click=function(e){e.preventDefault()
$(".txkl").change();var $temp=$("<input>");$("body").append($temp);$temp.val($("#result").text()).select();document.execCommand("copy");$temp.remove();}
var phrase_click=function(e){e.preventDefault()
if((document.NewForm.tense.value=="الأمر")&&(document.NewForm.subject.value.indexOf("أنت")==-1))
{alert("خطأ في الضمير ["+document.NewForm.subject.value+"] غير متطابق مع التصريف في الأمر");return 0;}
var prefix=get_prefix_path();$.getJSON(prefix+"/ajaxGet",{text:document.NewForm.subject.value,action:"phrase","subject":document.NewForm.subject.value,"object":document.NewForm.object.value,"verb":document.NewForm.verb.value,"time":document.NewForm.time.value,"place":document.NewForm.place.value,"tense":document.NewForm.tense.value,"voice":document.NewForm.voice.value,"auxiliary":document.NewForm.auxiliary.value,"negative":document.NewForm.negative.value,"phrase_type":document.NewForm.phrase_type.value,},function(d){$("#result").html("<div class=\'tashkeel\'>"+d.result+"</div>");});}
var sample_click=function(e){e.preventDefault()
if((document.NewForm.tense.value=="الأمر")&&(document.NewForm.subject.value.indexOf("أنت")==-1))
{alert("خطأ في الضمير ["+document.NewForm.subject.value+"] غير متطابق مع التصريف في الأمر");return 0;}
var prefix=get_prefix_path();$.getJSON(prefix+"/ajaxGet",{text:document.NewForm.subject.value,action:"sample","subject":document.NewForm.subject.value,"object":document.NewForm.object.value,"verb":document.NewForm.verb.value,"time":document.NewForm.time.value,"place":document.NewForm.place.value,"tense":document.NewForm.tense.value,"voice":document.NewForm.voice.value,"auxiliary":document.NewForm.auxiliary.value,"negative":document.NewForm.negative.value,"phrase_type":document.NewForm.phrase_type.value,},function(d){$("#result").html(d.result);});}
var random_select_click=function(e){e.preventDefault()
var item;var options=$("#verb > option");var random=Math.floor(options.length*(Math.random()%1));$("#verb > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#time > option");var random=Math.floor(options.length*(Math.random()%1));$("#time > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#place > option");var random=Math.floor(options.length*(Math.random()%1));$("#place > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#negative > option");var random=Math.floor(options.length*(Math.random()%1));$("#negative > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#auxiliary > option");var random=Math.floor(options.length*(Math.random()%1));$("#auxiliary > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#phrase_type > option");var random=Math.floor(options.length*(Math.random()%1));$("#phrase_type > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#tense > option");var random=Math.floor(options.length*(Math.random()%1));$("#tense > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#voice > option");var random=Math.floor(options.length*(Math.random()%1));$("#voice > option").attr('selected',false).eq(random).attr('selected',true);var options=$("#subject > option");var random=Math.floor(options.length*(Math.random()%1));$("#subject > option").attr('selected',false).eq(random).attr('selected',true);}
function get_prefix_path()
{var lang=get_lang();var prefix=script;if(!lang)lang="ar";prefix+="/"+lang;return prefix;}
function get_lang()
{const urlParams=new URLSearchParams(window.location.search);var lang=urlParams.get('locale');return lang;}
function draw(){var lang=get_lang();var prefix=get_prefix_path();if(!lang||lang==="ar")
$("#NewForm").css("direction","rtl");else
$("#NewForm").css("direction","ltr");$.getJSON(prefix+"/selectGet",{text:'',action:"RandomText"},function(data){if(!data)console.log("No thing, from selectGet");else
{var selectValues=data;for(x in selectValues.fields)
{var field=selectValues.fields[x];$.each(selectValues[field],function(key,value){$('#'+field).append($("<option></option>").attr("value",key).text(value));});}}});}
$().ready(function(){draw();$(document).on('click','#phrase',phrase_click);$(document).on('click','#sample',sample_click);$(document).on('click','#random_select',random_select_click);$(document).on('click','#copy',copy_click);});
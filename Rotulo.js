<script language="JavaScript" type="text/javascript">
//<![CDATA[
var txt="Esto ***** y todo esto otro........";
var espera=100;
var refresco=null;
function rotulo_title() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
refresco=setTimeout("rotulo_title()",espera);}
rotulo_title();
//]]>
</script>

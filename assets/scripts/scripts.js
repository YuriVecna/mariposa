function Banners(){
  
   var MNews = new Array(); 
       MNews[0]= '<img src="assets/img/d41b6fcf-5a00-4f54-b661-fe3b3bdced81.jfif">'
       MNews[1]= '<img src="assets/img/272530181_1599101947124134_7291529083668662262_n.jpg">'
       MNews[2]= '<img src="assets/img/87b884a6-2834-4874-9e33-a9d2c15bc308.jfif">'
       MNews[3]= '<img src="assets/img/Minha_foto_favorita_dela.jpg">'
       MNews[4]= '<img src="assets/img/Nossa1fotodiscordjuntos.jpg">'
       MNews[5]= '<img src="assets/img/72c4be20-cf23-4fdb-bce6-00d00454a868.jfif">'
       MNews[6]= '<img src="assets/img/272717937_476416427205415_126099778471173904_n.jpg">'
       MNews[7]= '<img src="assets/img/b3bbd75b-24b8-4ea8-ac70-09d8b83e7613.jfif">'
       MNews[8]= '<img src="assets/img/5.jpg">'
       MNews[9]= '<img src="assets/img/3.jpg">'
       MNews[10]= '<img src="assets/img/2.jpg">'
       MNews[11]= '<img src="assets/img/fotofamilia.jfif">'
      
       
       
   var Numero = Math.floor(Math.random()*11);
   document.write(MNews[Numero]);

}



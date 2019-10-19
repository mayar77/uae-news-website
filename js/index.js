
 var news;

var rows=document.getElementById("rowData");
var navLink =document.getElementsByClassName("nav-link"); //dh 34an a4of kol links
var category='general'
getpost();

for(i=0 ;i<navLink.length;i++)
    {
        navLink[i].addEventListener("click",function(e){
            
            category=e.target.innerHTML;//hna ktbt innerhtml bdl value 34an ad5ol gwa tag navlink
            getpost();
        })
        
        
    }

function getpost()
{
var req= new XMLHttpRequest; //dh m3naha ene b2dr a4f el 7aga mn m3ml refresh kol mra 

req.open("GET","https://newsapi.org/v2/top-headlines?country=ae&category="+category+"&apiKey=4cc8944615594158b9b3b7da2a07bd37");
//dh b3ml socket mmr ben html w ben json data elle haro7 a5odha


req.onreadystatechange=function() //dh function b3ml check en data btta5od
{
    
    if (req.readyState==4 && req.status ==200 )// btat3t status eno b3ml check 3l url
    {
          news=JSON.parse(req.response); //dh m3naha eno data 5odha mn hnak w mt7mla hna 5las w hna js bta5od data kstring fana h7wlha array
         news=news.articles;
        displayPost();
        
        
    }
}
req.send(); // dh b3d m7mlt data 5las dh ba5odha bb3tha le html

}
 function displayPost()
{
    var temp="";
    for (i=0;i<news.length;i++)
        {
            
            
            temp+=`<a style="color:black" href ="`+news[i].url+`" target="_blank"<div class="col-md-3 py-3">
                <img src="`+news[i].urlToImage+`" class="img-fluid">
                <h5 class="text-muted">`+news[i].title+`</h5>
                <p class="info">`+news[i].description+`</p>
                
                </div></a>`
            
        }
    
    rows.innerHTML=temp;
    
}




$(window).scroll(function(){
    var portfolio= $("#rowData").offset().top;  
    console.log(portfolio);
    var winNav=$(window).scrollTop();
    
    if(winNav>portfolio)
    {
        $("nav").css("backgroundColor","rgba(0,0,0,0.95)");
        
    }
    else
        {
            $("nav").css("backgroundColor","rgba(0,0,0,0.6)");
            
        }
    
})
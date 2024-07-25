var quotes = [
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”"
];

var authors = ["― Frank Zappa", "― Marcus Tullius Cicero","― Bernard M. Baruch","― William W. Purkey","― Mae West","― Mahatma Gandhi","― J.K. Rowling, Harry Potter and the Goblet of Fire","― Albert Camus","― Mark Twain","― Elbert Hubbard"];


function quote(){
    var y=Math.floor(Math.random()*10);
    var z=Math.floor(Math.random()*10);
    if(y===z){
      document.getElementById("quote").innerHTML="“Be yourself; everyone else is already taken.”";
      document.getElementById("author").innerHTML="― Oscar Wilde"; 

    }
    else{
      document.getElementById("quote").innerHTML=quotes[y];
      document.getElementById("author").innerHTML=authors[y]; 
    }
  
}
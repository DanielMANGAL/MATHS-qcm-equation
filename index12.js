
let a=0
let b=0
let c=0
let d=0
let e=0
let f=0
let i=0
let j=0
let u= 0
let L=[]
let R=[]
let G=[]
let LL=[]
let RR=[]
let temps = 10000
let nv=0


let count=0
let leftTime = temps
let timing= document.getElementById("chrono")
let clear


function generatorInequation(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
     j=randomNumber4()

  P=["a","b","c","d"]
     G=[reduce((d-b),(a-c)),reduce((a+b),(d-c)),a,randomNumber()]
    L=[a+"x",b]

    R=[c+"x",d]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    LL= L[e]+"+"+L[(e+1)%2]
    RR= R[f]+"+"+R[(f+1)%2]

    
   u= LL +" "+ "="+ " "+ RR 


   

    }




function reduce(number,denomin){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(number,denomin);
    return number/gcd +"/"+ denomin/gcd
  }

  function randomNumber4(){
    return Math.floor(Math.random()*3)
}





function randomNumber(){
    return Math.floor(Math.random()*20)-10
}























let quizData = [
    {
        question: "Quelle est la solution de l'inéquation: "+ u + " ?",
        a: G[j],
        b: G[(j+1)%4],
        c: G[(j+2)%4],
        d:  G[(j+3)%4],
        correct: reduce((d-b),(a-c)),
    },
    
];

let quiz= document.getElementById('quiz')
let answerEls = document.querySelectorAll('.answer')
let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
let elA= document.getElementById("a")
let elB= document.getElementById("b")
let elC= document.getElementById("c")
let elD= document.getElementById("d")
let rep = document.getElementById("reponse")






function niveau1(){
    
    temps= 120000
     nv=1
     document.getElementById("numero").innerHTML=nv
     messageCommencer()
     console.log(temps)
    
 }
 
  function niveau2(){
    temps=60000
      nv=2
     document.getElementById("numero").innerHTML=nv
     messageCommencer()
     
  }
  function niveau3(){
    temps=30000
     nv=3
     document.getElementById("numero").innerHTML=nv
     messageCommencer()
  }
  function niveau4(){
    temps=15000
    
     nv=4
     document.getElementById("numero").innerHTML=nv
     messageCommencer()
 
     
  }
  function niveau5(){
 
     nv=5
   temps=5000
     document.getElementById("numero").innerHTML=nv
     messageCommencer()
 
  }
 
  function restart(){
     score=0
     i=0
     loadQuiz()
     
  }
 
 function afficheReponse(){
     document.getElementById("quiz").style.display="none";
     document.getElementById("choixNiveau").style.display="none";
     document.getElementById("reponse").style.display="block";
 }
 
 function afficheQuiz(){
     document.getElementById("quiz").style.display="block";
     document.getElementById("choixNiveau").style.display="none";
     document.getElementById("reponse").style.display="none";
 
 }
 
 function afficheChoixNiveau(){
     document.getElementById("quiz").style.display="none";
     document.getElementById("choixNiveau").style.display="block";
     document.getElementById("reponse").style.display="none";
 
 }
 
  function quitter(){
     document.getElementById("quiz").style.display="none";
     document.getElementById("choixNiveau").style.display="block";
     document.getElementById("reponse").style.display="none";
     stopChrono()
   
  }
 
 
 
 
 
 function loadQuiz() {
   
        afficheQuiz()
     deselectAnswers()
 generatorInequation()
     quizData = [
         {
             question: "Quelle est la solution de l'équation: "+ u + " ?",
             a: G[j],
             b: G[(j+1)%4],
             c: G[(j+2)%4],
             d:  G[(j+3)%4],
             correct: reduce((d-b),(a-c)),
         },
         
     ];
    
 
     const currentQuizData = quizData[0]
 
    
 
     questionEl.innerText = "Quelle est la solution de l'équation: "+ u + " ?"
     a_text.innerText = currentQuizData.a
     b_text.innerText = currentQuizData.b
     c_text.innerText = currentQuizData.c
     d_text.innerText = currentQuizData.d
 
     elA.id=currentQuizData.a;
     elB.id=currentQuizData.b; 
     elC.id=currentQuizData.c;
     elD.id=currentQuizData.d;
 
 ;
 


 }
     
 



 function add(){

    if(leftTime>0){
    count++
    leftTime= (temps-count*1000)/1000
    document.getElementById("chrono").innerHTML=leftTime}
    else{
         count=0
        document.getElementById("chrono").innerHTML=leftTime
        leftTime=(temps-count*1000)/1000
        if(i<5){
            i++
            loadQuiz()
        }
        else{
            resultat()
            clearInterval(clear)
        }
        
    }
    
}


function startChrono(){
    clear=setInterval(add,1000)

}

function stopChrono(){
    clearInterval(clear)
    count=0
}

function restartChrono(){
    stopChrono()
    startChrono()
}

function tropTemps(){
    if(leftTime==0){
        if(i<5){
            i++
            loadQuiz()
            restartChrono()
        }
        else{
            afficheReponse()
        }
    }

}











 
 function start(){
 
     i=0
     score=0
 
     afficheQuiz()
     loadQuiz()
     startChrono()
    
    

 
 }
 function messageCommencer(){
     rep.innerHTML= `
     <h2>Alors prêt à tester ces connaissances ??</h2>
     <button onclick="start()">Oui ! C'est parti !</button>
 
     `
    afficheReponse()

  }

 
 
 function resultat(){
    afficheReponse()
     rep.innerHTML = `
            <h2>Tu as répondu à ${score}/${5} questions correctement</h2>
            <button onclick="messageCommencer()">Recommencer</button>
            <button id="quitter" onclick="quitter()" >Quitter</button>
 
            `
 }
 
 function balance(){
    
     if(i<5){
         i++
         loadQuiz()
        
     }
     else{
       resultat()
     }
 }
     



































 function deselectAnswers() {
     answerEls.forEach(answerEl => answerEl.checked = false)
 }
 function getSelected() {
     let answer
     answerEls.forEach(answerEl => {
         if(answerEl.checked) {
             answer = answerEl.id
      
         }
     })
     return answer
 }
 
 submitBtn.addEventListener('click', () => {
    restartChrono()
     const answer = getSelected()
     if(answer) {
       
        if(answer == quizData[0].correct) {
            score++}
        currentQuiz++
        if(i < 4) {
     
            loadQuiz()
            i++
          } 
        
        else {
             resultat()
        }
     
     }})
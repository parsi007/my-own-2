class Questionsanswer {
    constructor(){
      this.SrNoCount = 0;
      this.grade = 2;
      this.level= "Easy";
      this.question="";
      this.answer="";
    }
  
    getSrNoCount(){
    var SrNoCountRef = database.ref('SrNo');
    SrNoCountRef.on("value",(data)=>{
     SrNoCount = data.val();
      })
    }
  
    update(SrNoCount, grade,level,question,answer){
      var questionsIndex = "questions/SrNo" + this.index;
      database.ref(questionsIndex).set({
        grade:2,
        level:this.level,
        question:this.question,
        answer:this.answer,
        
      });
    }
  

  }
  
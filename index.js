// add solution here

function theBeatlesPlay(arrayMusicians, arrayInstruments){
var array=[]  
  
    for (var i = 0 ; i < arrayMusicians.length ; i++){
      array.push(arrayMusicians[i]+ " plays " + arrayInstruments[i])
    }
    return array 
}

function johnLennonFacts(facts){
    var array=[]
    i=0
  while (i< facts.length)
  {
    
    array.push(facts[i]+"!!!")
    i++
  }
  return array
}
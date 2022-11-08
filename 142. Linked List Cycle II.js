var detectCycle = function(head) {
    
    let set = new Set()     // take a new set
    while(head){  //start a loop till head has a value
        if(set.has(head)) return head   //before putting the node in the set, check if that head already exist in the set. if so, return that head
        set.add(head) //add the head in the set
        head= head.next  //move to the next node in the list
    }
    return null   //if doesnot exist, return null
};


// one line :
detectCycle=h=>{let x=new Set();while(h){if(x.has(h)) return h;x.add(h);h=h.next}return null}
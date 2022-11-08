var getIntersectionNode = function(headA, headB) {
    while(headA){
        let headBCopy = headB;
        while(headBCopy){
            if(headA === headBCopy) return headA;
            headBCopy = headBCopy.next;
        }       
        headA = headA.next;      
    }
};


///one line: 
getIntersectionNode=(s,e)=>{while(s){x=e;while(x){if(s===x)return s;x=x.next}s=s.next}}
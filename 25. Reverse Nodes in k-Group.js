reverseKGroup=(head, k)=>{
    var stack=[],node= new ListNode(-1),dummy=node;
    while(head){
        for(i=0;i<k&&head;i++){
            stack.push(head)
            head=head.next
        }
        if(stack.length===k){
            while(stack.length>0){
                dummy.next=stack.pop()
                dummy=dummy.next
            }
            dummy.next=head
        }
    }
    return node.next
    
    
};

//one liner: 
reverseKGroup=(head, k)=>{var stack=[],node= new ListNode(-1),dummy=node;while(head){for(i=0;i<k&&head;i++)
    {stack.push(head);head=head.next;}if(stack.length===k){while(stack.length>0){dummy.next=stack.pop();dummy=dummy.next;}dummy.next=head;}}return node.next;}
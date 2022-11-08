var swapPairs = function(h) {
    if(!h||!h.next)return h;
    var o=h;
    h=o.next;
    while(o&&o.next){
        var t=o.next.next;
        o.next.next=o;
        o.next=t&&t.next?t.next:t;
        o=t;
    }
    return h
}


//one liner: 

swapPairs=h=>{if(!h||!h.next)return h;var o=h;h=o.next;while(o&&o.next){var t=o.next.next;o.next.next=o;o.next=t&&t.next?t.next:t;o=t;}return h}
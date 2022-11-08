function reverseBetween(h, l, r){
    sno = new ListNode(), sno.next = h, po = sno, jz = h
    for(i=1;i<l;i++) po = jz, jz=jz.next
    front = po, back = jz
    for(i=l;i<=r;i++) [jz.next, po, jz]=[po, jz, jz.next]
    front.next=po, back.next=jz
    return sno.next
}
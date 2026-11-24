f=require('fs')
T=e=>{throw e}
J=_=>p+=P.readInt16LE(p-2)
F=('T(0);[P[p-1]<<24>>24];[P.readInt32LE(p-4)];(_,[]);[_,_];[_,$];[$,_,$];[$,_,Z];;;;;;;;;[$+_|0];[$-_|0];[Math.imul($,_)];[_?$/_|0:T(4)];[_?$%_|0:T(4)];[_?($>>>0)/(_>>>0)|0:T(4)];[_?($>>>0)%(_>>>0)|0:T(4)];[-_|0];[$&_];[$|_];[$^_];[~_];[$<<_];[$>>_];[$>>>_|0];;[+($==_)];[+($<_)];[+($>>>0<_>>>0)];;;;;;;;;;;;;'+
';(J(),[]);(_||J(),[]);(_&&J(),[]);(C.length>63&&T(7),C.push(p),p=P.readUInt16LE(p-2),[]);(p=C.pop()??T(8),[]);;;;;;;;;;;'+
';[_>>>0>255?T(6):M[_]];(_>>>0>255&&T(6),M[_]=$,[]);;;;;;;;;;;;;;;(s=Buffer.from(""+_),O.length+s.length>65536&&T(11),O.push(...s),[]);(O.length>65535&&T(11),O.push(_&255),[]);[I[q++]??-1];T(_&255)').split(';')
A=F.map(e=>/Z/.test(e)?3:/\$/.test(e)?2:+/_/.test(e))
F=F.map(e=>e&&Function('return '+e))
for(i of f.readdirSync('/input')){
P=f.readFileSync(`/input/${i}/program.bin`);I=f.readFileSync(`/input/${i}/input.bin`)
S=[];C=[];M=Array(256).fill(0);O=[];p=q=n=0
try{for(;;){
n++>=1e6&&T(10)
;(o=P[p])>=0||T(9)
F[o]||T(5)
k=o==1?1:o==2?4:o>47&&o<52?2:0
p+k>=P.length&&T(9)
a=A[o];l=S.length;l<a&&T(2)
_=S[l-1];$=S[l-2];Z=S[l-3];S.length=l-a;p+=k+1
S.push(...F[o]())
S.length>256&&T(3)}}catch(e){x=e}
d=`/output/${i}`;f.mkdirSync(d,{recursive:true})
f.writeFileSync(d+'/stdout.bin',Buffer.from(O));f.writeFileSync(d+'/exit.txt',''+x)}

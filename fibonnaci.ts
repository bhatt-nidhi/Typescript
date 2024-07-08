var n=5,i;
var f1=0,f2=1,f3;

console.log("%d %d",f1,f2);

for(i=1;i<=n-2;i++)
{
    f3=f1+f2;
    f1=f2;
    f2=f3;
    console.log("%d",f3);
    
}

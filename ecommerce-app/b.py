""" 
n , m = map(int,input().split())
a = [list(map(int,input().split())) for _ in range(n)]
def display(a):
    for _ in range(n):
        print(*a[_])
d = [[0,1],[1,0],[-1,0],[0,-1]]
def solev():
    a
b=[[a[i][j] for j in range(m)] for i in range(n)]


def solevn():
    
    for i in range(n):
        for j in range(m):
            if a[i][j]>0:
                for d1 in d:

                    x=i+d1[0]
                    y=j+d1[1]


                    if x<0 or x>=n:continue
                    elif y<0 or y>=m:continue
                    else:
                        b[x][y]=b[x][y]+a[i][j]

                b[i][j]=0        
                        
solevn()    
display(b) """              

"""a , b, c, d = map(int,input().split())
 

def phi(n):
    m=n
    s=1
    t=1
    for i in range(2,int(n**0.5)+2):
        if n%i==0:
            
            while n%i==0:
                n//=i
            m-=m//i
    if n>1:
        m-=m//n  
    return m 
def f(n,m):
    n, m = max(n,m),min(n,m)
    s=0
    for i in range(1,m+1):
        s+=phi(i)*(n//i)*(m//i)
    return s  

tn = phi(b)-phi(a-1)
tm = phi(d)-phi(c-1)  
print(f(b,d)-f(a,c))        """

x, k = map(int,input().split())

u_k =[]
q_u_k=[]


for i in range(2,k//2+1):
    if k%i==0:
        u_k+=[i]
        q_u_k+=[0]
        while k%i==0:
            k//=i
            q_u_k[-1]+=1  
print(u_k)
print(q_u_k)            
y=1            
for i in range(len(u_k)):
    
    while x % u_k[i] == 0 :
        x//=u_k[i]
        q_u_k[i]-=1
    y*=u_k[i]**(max(q_u_k[i],0))
print(u_k)
print(q_u_k)     
print(y)        
5 5 11
10 7 26
      
 

                



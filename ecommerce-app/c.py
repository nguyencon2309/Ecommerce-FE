n, m = map(int,input().split())

d=n+m+1
arr = [1]*d
s=0
def sieve():
    for i in range(2,int(d**0.5)+1):
        
        for j in range(i*i,d,i):
            
            arr[j]=0
            
sieve()
s1 =0
for i in range(2,m+1):
    s1+=arr[i]
s2=s1
for i in range(2,n+1):
    s1+=arr[i+m]-arr[i]
    s2+=s1
print(s2)                  

        
 
# 2 3 5 7 11 13 17
# 1 2 4 25 34 43 52 16 61
# 110  74
# 310  76
# 710
# 2 3 5 7 
# 1 2 4 25 34 43 52  

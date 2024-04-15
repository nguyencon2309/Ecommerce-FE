# def checkPrime(n):
#     if n<2: return "Có"
#     for i in range(2,min(int(n**0.5)+1,n)):
#         if n%i==0: return "Không"
#     return "Có" 

# n = int(input())
# for i in range(n):
#     print(i,checkPrime(i))  


# def increase(n):
#     st = str(n)
#     for i in range (len(st)-1):
#         if st[i]>st[i+1]:
#             return False
#     return True       
# def decrease(n):
#     st = str(n)
#     for i in range (len(st)-1):
#         if st[i]<st[i+1]:
#             return False
#     return True

# def findNumber(n):
#     if increase(n) or decrease(n):
#         return n 
#     st = str(n)
#     for i in range (len(st)-1):
#         if st[i]>st[i+1]:
#             break;
#     for j in range (i+1,len(st)):
#         st[j]=st[i]
#     return int(st)   

# n, k = map(int,input().split())
# arr = list(map(int,input().split()))
# arr.sort(reverse=True) 
# s = 0
# for i in range(0,n,k):
#     s+=(arr[i]-1)*2
# print(s)    

a, b, c = map(int,input().split())

c2 = a*b//(b+c)
c1 = a*c//(b+c)
f = c1+c2
if f==a:
    t=c2*c
else:
    f+=2
    
    for i in range(2):
        if c2*c>c1*b:
            c1+=1
        else :c2+=1
    t=max(c2*c,c1*b)    
print(f,t)


# a = int(input())
# arr = list(map(int,input().split()))
# arr.sort(reverse=True)
# s=0
# for i in range(a):
#     l=i+1
#     r=a-1
#     while l<r:
#         if arr[i]>=arr[l]+arr[r]:
#             r-=1
#         else :
#             s+=r-l
#             l+=1    

# print(s)
 


n = 1000000000
k = 1
n2 = n//2
k = ((-1+n//2)*n//2)
print(k)
# k1 = (0+n-1)*(n-1)//2
# t = int(input())
# 249999999500000000
# 500000000000000000
# m = 998244353
# while t:
#     t-=1
#     n, k = map(int,input().split())



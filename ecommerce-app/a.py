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
    return m      # phi(a*b) = phi(a)*phi(bs)   
            
def c(n):
    s=0
    for i in range(1,n+1):
        s+=phi(i)
    return s    
    
print(phi(1),phi(2),phi(3),phi(4),phi(5))
print(c(5)-1)
def g_cd(x,y):
    while y != 0:
        x, y = y, x % y
    return x
s=0
for i in range(1,6):
    for j in range(i+1,6):
        if g_cd(i,j)==1:
            s+=1
            
print(s)            
"""
s="112233445566778899"

arr=[0]*10
for i in s:
    arr[int(i)]+=1
s0=0
s1=0
print(arr)
for i in range(1,10):
    for j in range(i+1,10):
        if i%j==0 or j%i==0:
            s0=s0+arr[i]*arr[j]
    s0=s0+arr[i]*(arr[i]-1)//2
print(s0)

for i in range(len(s)):
    for j in range(i+1,len(s)):
        if int(s[i])%int(s[j])==0 or int(s[j])%int(s[i])==0:s1+=1
print(s1)        
"""


"""
# trò chơi tìm kho báu
import random
wa = "~"
gone = 'X'
kb = "$"
ocean = [[wa for _ in range(3)]for _ in range(3)]
x , y = random.randint(0,2), random.randint(0,2)

tt=1
def check(xi,yi):
    if xi>2 or yi>2: return 0
    
    elif ocean[xi][yi]==gone:#da di
        return 1
    elif xi==x and yi ==y:
        ocean[xi][yi]=kb
        return 3   
    elif ocean[xi][yi]==wa:#chua di, ko phai ko bau
        ocean[xi][yi]=gone
        return 2
     
def void():
    print("Các ngươi muốn lấy kho báu của ta à ...\n")
    input()
    print("Vậy thì hãy dong buồm ra khơi ...\n")
    input()
    print("Và tự mình tìm lấy")
    input()
    print("Chào mừng ngươi đến với Đại hải trình truy tìm kho báu")
    print("Hãy dong buồm ra khơi nào")
def print_DHT():
    for i in range(3):
        print(" ".join(ocean[i]))
        
    print()    
void()


while tt:
    print_DHT()
    wx, wy = map(int,input("Nhập toạ độ đi nào thuyền trưởng : ").split()) 
    c = check(wx,wy)
    if c==0:
        print("Toạ độ không hợp lệ. Hãy nhập giá trị từ 0 đến 2")
    elif c==2:
        print("Không có kho báu ở vị trí này hãy thử lại nào!") 
    elif c==1:
        print("Người đã đi qua vị trí này rồi hãy thử lại vị trí khác")       
    elif c==3:
        tt=0
        print_DHT()
        print("Chúc mừng ngươi đã tìm ra kho báu của ta!\nTất cả là của ngươi tất!")
        
"""

"""
# trò chơi con mực
# 0 la nguoi,1 la may

import random
bi=[10,10]
g=[10,10]
d=["chẵn","lẻ"]
luotchoi=1
def update():
    print("Cập nhật số bi:")
    print(f"Máy : {bi[1]} viên bi, Bạn : {bi[0]} viên bi.")
    print()
def r_d(sta,sto):
    return random.randint(sta,sto)    
while bi[0]*bi[1]>0:
    if luotchoi%2:
        sc=int(input(f"Số bi cược(từ 1 đến {bi[0]}) :"))
        print("Bạn đoán số bi trong tay đối thủ là chẫn hay lẻ")
        d=int(input("Đoán chẫn nhập 0, đoán lẻ nhập 1:"))
        
        bi_t_m = r_d(1,bi[1])
        print(f"Số bi trong tay của máy là {bi_t_m}")
        if d==bi_t_m%2:
            bi[0]+=sc
            bi[1]-=sc
            print("Bạn đoán đúng")
        else:
            print("Bạn đoán sai")
            bi[0]-=sc
            bi[1]+=sc
       
    else :
        bi_t_n = int(input(f"Số bi bạn cho vào tay(từ 1 đến {bi[0]}) :"))
        print(f"Số bi trong tay của bạn là {bi_t_n}")
        m_c = r_d(1,bi[1]) 
        md= r_d(0,1)
        s="lẻ"
        if md==0:
            s="chẵn"
        print(f"Máy đoán {s}")    
        if md==bi_t_n%2:
            bi[0]-=m_c
            bi[1]+=m_c
            print("Máy đoán đúng")
        else:
            print("Máy đoán sai")
            bi[0]+=m_c
            bi[1]-=m_c
        print(f"Máy cược: {m_c} viên bi")    
    update()
    luotchoi+=1  
print("Máy thắng" if bi[1]>bi[0] else "Bạn thắng")  
print(bi)
"""


        




"""

hs = ["a","b","c","d","e"]
fr = []
i =0 

while len(hs)>3:
    tc = input(f"{hs[i]}:")
    if tc in fr:
        print(f"{hs[i]} đã bị loại")
        del hs[i]
        i-=1
    else:
        fr+=[tc]
    i+=1
    if i> len(hs)-1:
        i=0    





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


"""
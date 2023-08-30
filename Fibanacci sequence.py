import re


a=[]
num2=input("Enter the length of the array: ")
num=int(num2)
def Positive(num):
    if num>0:
        return True
    else:
        return False

def list_num(num):
    if Positive(num) :
        if num==1 :
            a=[0]
        elif num==2:
            a=[0,1]
        elif num>2:
            a=[0,1]
            while len(a) < num :
                num1=a[len(a)-1]
                num2=a[len(a)-2]
                a.append(num1+num2)
            return a
    else :
        print ("Please enter a number more than 0 :)")

print (list_num(num))
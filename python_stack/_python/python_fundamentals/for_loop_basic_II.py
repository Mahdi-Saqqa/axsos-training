def countdown(num):

    arr = []
    for i in range(num,-1,-1):
        arr.append(i)


    return arr


def print_and_return(list):
    print(list[0])
    return list[1]



def first_plus_length(list):
    return len(list)+list[0]


def values_greater_than_second(list):
    if len(list) < 2: return False
    second=list[1]
    count=0
    newList=[]
    for i in range(len(list)):
        if list[i] > second:
            newList.append(list[i])
            count+=1
    print(count)
    return newList


def length_and_value(length,value):

    list=[]
    for i in range(length):
        list.append(value)
    return list



def bubleSortDes(arr):
    x=0
    while x==0:
        x=1
        for i in range(1,len(arr)):
            if arr[i]<arr[i-1]:
                arr[i],arr[i-1]=arr[i-1],arr[i]
                x=0
    return arr

def selectionSort(arr):
    for i in range(len(arr)):
        min=arr[i];
        t=i
        for m in range(i,len(arr)):
            if arr[m]<min:
                min=arr[m]
                t=m
            arr[i],arr[t]=arr[t],arr[i]
    return arr


arr=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print(selectionSort(arr))
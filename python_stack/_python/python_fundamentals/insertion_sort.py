def insertionSort(nums):
    for i in range(len(nums)):
        for j in range(i):
            if nums[i]<nums[j]:
                nums[i],nums[j]=nums[j],nums[i]
    return nums


nums=[8,4,2,4,6,9,4,1,4,7,6,3]
print(insertionSort(nums))
arr = [25, 10, 9, 38, 75]
length = len(arr)
for i in range(length-1):
    if arr[i] > arr[i+1]:
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
print(arr[length-1])
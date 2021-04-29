def main():
    arr = [25, 10, 9, 38, 75]
    print('Array before sorting : ')
    printArray(arr)
    arr = sortArray(arr)
    print('Array after sorting : ')
    printArray(arr)

def printArray(arr):
    for el in arr:
        print(el)

def sortArray(arr):
    length = len(arr)
    for i in range(length-1):
        minIndex = i
        for j in range(i,length-1):
            if arr[minIndex] > arr[j+1]:
                minIndex = j+1
        if i != minIndex:
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
    return arr

main()
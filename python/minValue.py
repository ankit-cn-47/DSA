def main():
    arr = [25, 10, 9, 38, 75]
    minValue = findMin(arr)
    print(minValue)

def findMin(arr):
    length = len(arr)
    minIndex = 0
    for i in range(length):
        if arr[i] < arr[minIndex] :
            minIndex = i
    return arr[minIndex]

main()
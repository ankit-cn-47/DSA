def main():
    arr = [25, 10, 9, 38, 75]
    print('before sorting')
    print(arr)
    arr = sortArray(arr)
    print('after sorting')
    print(arr)

def sortArray(arr):
    length = len(arr)
    for i in range(length):
        for j in range(length-1-i):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr

main()
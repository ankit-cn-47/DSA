package main

import "fmt"

func main() {
	var arr = []int{25, 10, 9, 38, 75}
	fmt.Println("before sort : ")
	printArray(arr)
	fmt.Println("after sort : ")
	printArray(sortArray(arr))
}

func printArray(arr []int) {
	for i := 0; i < len(arr); i++ {
		fmt.Println(arr[i])
	}
}

func sortArray(arr []int) []int {
	for i := 0; i < len(arr)-1; i++ {
		minIndex := i
		for j := i; j < len(arr)-1; j++ {
			if arr[minIndex] > arr[j+1] {
				minIndex = j + 1
			}
		}
		if i != minIndex {
			temp := arr[i]
			arr[i] = arr[minIndex]
			arr[minIndex] = temp
		}
	}
	return arr
}

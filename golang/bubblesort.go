package main

import "fmt"

func main() {
	var arr = []int{25, 10, 9, 38, 75}
	printArray(arr)
	fmt.Println("After sort")
	arr = sort(arr)
	printArray(arr)
}

func sort(arr []int) []int {
	var length = len(arr)
	var temp int
	for i := 0; i < length-1; i++ {
		for j := 0; j < length-i-1; j++ {
			if arr[j] > arr[j+1] {
				temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
	return arr
}

func printArray(arr []int) {
	var length = len(arr)
	for i := 0; i < length; i++ {
		fmt.Printf("%d, ", arr[i])
	}
	fmt.Println()
}

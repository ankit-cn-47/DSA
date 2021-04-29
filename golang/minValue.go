package main

import "fmt"

func main() {
	var arr = []int{25, 10, 9, 38, 75}
	minValue := findMin(arr)
	fmt.Printf("%d", minValue)
}

func findMin(arr []int) int {
	minIndex := 0
	length := len(arr)
	for i := 1; i < length; i++ {
		if arr[minIndex] > arr[i] {
			minIndex = i
		}
	}
	return arr[minIndex]
}

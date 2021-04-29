package main

import "fmt"

func main() {
	var arr = []int{25, 10, 9, 38, 75}
	var length = len(arr)
	for i := 0; i < length-1; i++ {
		if arr[i] > arr[i+1] {
			var temp = arr[i]
			arr[i] = arr[i+1]
			arr[i+1] = temp
		}
	}
	fmt.Printf("%d", arr[length-1])
}

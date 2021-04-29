package main

import "fmt"

func main() {
	var scores = []int{1, 2, 3, 4, 5, 6}
	var length = len(scores)
	for i := 0; i < length; i++ {
		fmt.Printf("%d\n", scores[i])
	}
}

// Given a string, return a new string with the reversed order of characters
// Examples
// reverse('apple') = 'leppa'
// reverse('hello') = 'olleh'
// reverse('Greetings!') = '!sgniteerG'
package main

import "fmt"

func main() {
	fmt.Println("Hello World")
}

// function recieves a string and returns the string reversed
func reverse(s string) string {
	var r string
	for i := range s {
		r = string(s[i]) + r
	}
	return r
}

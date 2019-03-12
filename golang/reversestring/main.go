package main

// Given a string, return a new string with the reversed order of characters
// Examples
// reverse('apple') = 'leppa'
// reverse('hello') = 'olleh'
// reverse('Greetings!') = '!sgniteerG'

import "fmt"

func main() {
	fmt.Println(recursiveReverse("hello there"))
}

// function recieves a string and returns the string reversed
func reverse(s string) string {
	var r string
	// adds the char to the string resulting in reversed order
	for i := range s {
		r = string(s[i]) + r
	}
	return r
}

func recursiveReverse(s string) string {
	if s != "" {
		// if the string is not empty return the next character
		return recursiveReverse(s[1:]) + s[:1]
	}
	// stop the recursive calls sending the reversed string
	return ""
}

package main

import "testing"

func TestIsPalindrome(t *testing.T) {
	if isPalindrome("abba") != true {
		t.Errorf("Expected true for abba, instead got %v", isPalindrome("abba"))
	}
	if isPalindrome("funny right?") != false {
		t.Errorf("Expected false for funny right?, instead got %v", isPalindrome("funnyright"))
	}

	if isPalindrome("racecar") != true {
		t.Errorf("Expected true for racecar, instead got %v", isPalindrome("racecar"))
	}

}

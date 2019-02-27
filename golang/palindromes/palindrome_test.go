package main

import "testing"

func TestIsPalindrome(t *testing.T) {
	if isPalindrome("abba") != false {
		t.Errorf("Expected false, instead got %v", isPalindrome("abba"))
	}
	if isPalindrome("funny right?") != false {
		t.Errorf("Expected false, instead got %v", isPalindrome("funnyright"))
	}

	if isPalindrome("racecar") != true {
		t.Errorf("Expected true, instead got %v", isPalindrome("racecar"))
	}

}

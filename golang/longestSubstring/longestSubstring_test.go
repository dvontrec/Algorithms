package main

import "testing"

func TestLongestSubString(t *testing.T) {
	if longestSubString("abcabcbb") != 3 {
		t.Errorf("Expected 3, instead got %v", longestSubString("abcabcbb"))
	}

	if longestSubString("bbbbb") != 1 {
		t.Errorf("Expected 3, instead got %v", longestSubString("bbbbb"))
	}

	if longestSubString("pwwkew") != 3 {
		t.Errorf("Expected 3, instead got %v", longestSubString("pwwkew"))
	}
}

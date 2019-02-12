# Radix Sort

- Find out which number has the largest number of digits

- loop from n=0 to largest digits
  - for each loop create a bucket(array) for each digit 0-9
  - place each number in the corresponding bucket based on the nth digit
- replace our existing array with values from the bucket starting with zero up to nine
- return list at the end

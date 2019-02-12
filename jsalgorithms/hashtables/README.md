# Hash Tables

## Set

- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table via seperate chaining
  - adds an array to the index

## Get

- Accepts a key
- Hashes the key
- Retrieves the value
  - retireve the array at the hash index where arr[0] == key
- If key isnt found return undefined

## Keys

- Loops through the hash table array and returns an array of keys in the table

## values

- Loops through the hash table array and returns an array of unique values in the table

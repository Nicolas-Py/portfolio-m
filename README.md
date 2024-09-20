Hosted at
https://nicolas-py.github.io/portfolio-m/

Possible tags
- structure
- style
- js
- content
- yml

## Python code for the hex values (except the git links)

```python 
def word_to_hex(word):
    # Choose a constant key for XOR (can be any byte value, 0xAA here for example)
    key = 0xAA
    
    # Convert each character to its ASCII value, apply XOR, and store the result
    xor_values = [ord(char) ^ key for char in word]
    
    # Combine the XORed values into a hex string
    hex_string = ''.join(f'{value:02X}' for value in xor_values)
    
    # Truncate or pad the hex string to ensure it's 8 digits
    if len(hex_string) > 8:
        hex_string = hex_string[:8]  # Truncate if too long
    else:
        hex_string = hex_string.ljust(8, '0')  # Pad with zeroes if too short
    
    return hex_string

# Example usage
word = "Hello"
hex_code = word_to_hex(word)
print(f"The 8-digit hex code for '{word}' is: {hex_code}")
```
// Java Program to count vowels, consonant, digits and 
// special character in a given string 
import java.io.*; 

public class GFG { 

	// Function to count number of vowels, consonant, 
	// digitsand special character in a string. 
	static void countCharacterType(String str) 
	{ 
		// Declare the variable vowels, consonant, digit 
		// and special characters 
		int vowels = 0, consonant = 0, specialChar = 0, 
			digit = 0; 
	
		// str.length() function to count number of 
		// character in given string. 
		for (int i = 0; i < str.length(); i++) { 
			
			char ch = str.charAt(i); 
	
			if ( (ch >= 'a' && ch <= 'z') || 
				(ch >= 'A' && ch <= 'Z') ) { 
	
				// To handle upper case letters 
				ch = Character.toLowerCase(ch);; 
	
				if (ch == 'a' || ch == 'e' || ch == 'i' || 
					ch == 'o' || ch == 'u') 
					vowels++; 
				else
					consonant++; 
			} 
			else if (ch >= '0' && ch <= '9') 
				digit++; 
			else
				specialChar++; 
		} 
		
		System.out.println("Vowels: " + vowels); 
		System.out.println("Consonant: " + consonant); 
		System.out.println("Digit: " + digit); 
		System.out.println("Special Character: " + specialChar); 
	} 
	
	// Driver function. 
	static public void main (String[] args) 
	{ 
		String str = "geeks for geeks121"; 
		
		countCharacterType(str); 
	} 
} 

// This code is contributed by vt_m. 

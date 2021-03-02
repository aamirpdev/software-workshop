package predictive;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

/**
 * 
 * The class PredictivePrototype builds a prototype for the T9 predictive text
 * problem
 * 
 * @version 09/02/20
 * @author Aamir Patel
 *
 */

public class PredictivePrototype {
	/**
	 * Method to convert word to its respective string StringBuffer is used rather
	 * than a String because String is immutable, and thus when appended a new
	 * object is created. This will needlessly take more time than StringBuffer
	 * which is muttable as it creates just one object. We use a HashMap which is
	 * from the collection class to store the characters(keys) and their
	 * corresponding numerical representatives (values), we can do this as each key
	 * is unique.
	 * 
	 * 
	 * @param word - a string with one word
	 * @return string of numbers referred to as the signature of the word
	 */

	public static String wordToSignature(String word) {

		HashMap<Character, String> keyMap = new HashMap<Character, String>();

		word = word.toLowerCase();

		keyMap.put('a', "2");
		keyMap.put('b', "2");
		keyMap.put('c', "2");
		keyMap.put('d', "3");
		keyMap.put('e', "3");
		keyMap.put('f', "3");
		keyMap.put('g', "4");
		keyMap.put('h', "4");
		keyMap.put('i', "4");
		keyMap.put('j', "5");
		keyMap.put('k', "5");
		keyMap.put('l', "5");
		keyMap.put('m', "6");
		keyMap.put('n', "6");
		keyMap.put('o', "6");
		keyMap.put('p', "7");
		keyMap.put('q', "7");
		keyMap.put('r', "7");
		keyMap.put('s', "7");
		keyMap.put('t', "8");
		keyMap.put('u', "8");
		keyMap.put('v', "8");
		keyMap.put('w', "9");
		keyMap.put('x', "9");
		keyMap.put('y', "9");
		keyMap.put('z', "9");

		StringBuffer s = new StringBuffer();

		for (int i = 0; i < word.length(); i++) {
			if ((word.charAt(i) >= 'a' && word.charAt(i) <= 'z')) {
				s.append(keyMap.get(word.charAt(i)));

			} else {
				s.append(' ');

			}
		}
		return s.toString();
	}

	/**
	 * Method to covert a numeric signature to corresponding words. This method
	 * searches through a text file 'words' and returns a set of possible matching
	 * words. This program requires us to open the text file and convert each word
	 * and check if it matches. We don't store dictionary in the Java program
	 * because if we imposed it within this method, the dictionary would be run
	 * every time we do this method leading to a inefficient allocation of
	 * resources.
	 * 
	 * @param signature - numeric String of numbers
	 * @return - set of words matching the signature
	 */

	public static Set<String> signatureToWords(String signature) {

		Set<String> all = new HashSet<String>();
		File file = new File("/usr/share/dict/words");
		try {

			Scanner scanner = new Scanner(file);

			while (scanner.hasNextLine()) {
				String word = scanner.nextLine();
				if (isValidWord(word)) {
					if (wordToSignature(word).equals(signature)) {
						word = word.toLowerCase();
						all.add(word);

					}
				}
			}
			scanner.close();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		return all;
	}

	// method to check if word is valid
	protected static boolean isValidWord(String word) {

		word = word.toLowerCase();
		char letter;
		for (int i = 0; i < word.length(); i++) {
			letter = word.charAt(i);
			if ((letter < 97 || letter > 122)) { // 97-122 is the char code of of alphabet from 'a' to 'z'
				return false;
			}
		}
		return true;
	}

	public static void main(String[] args) {
		System.out.println(signatureToWords("553"));
		System.out.println(signatureToWords("4273"));
		System.out.println(signatureToWords("628"));
		System.out.println(signatureToWords("283"));


	}

}

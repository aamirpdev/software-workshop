package predictive;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

/**
 * input data: 43 968 226 33247437 8447 968 273 2 256639 43648 
*java -cp . predictive/Sigs2WordsProto 43 968 226 33247437 8447 968 273 2    6.80s user 0.40s system 119% cpu 6.039 total
*
*java -cp . predictive/Sigs2WordsProto 43 968 226 33247437 8447 968 273 2   43  28.71s user 0.88s system 99% cpu 29.709 total
*now input data is original data repeated x5 
*java -cp . predictive/Sigs2WordsList 43 968 226 33247437 8447 968 273 2 25663  2.73s user 0.33s system 170% cpu 1.793 total
*
*java -cp . predictive/Sigs2WordsProto 43 968 226 33247437 8447 968 273 2   43  26.81s user 0.91s system 103% cpu 26.841 total
*
**/

/**
 * ListDictionary implements the Dictionary interface. It uses the arraylist to
 * store contents of the dictionary, this is more efficient than the prototype
 * class. Each entry of the array list has an associated pair, consisting of the
 * word been processed and it's signature.
 * 
 * @version 13/02/20
 * @author aamir patel
 * 
 */

public class ListDictionary implements Dictionary {
	private ArrayList<WordSig> dictionary;

	/**
	 * Constructor for ListDictionary takes String path to dictionary as an
	 * ArrayList. SignatureToWords rewritten as instance of ListDictionary to used
	 * the stored dictionary This is stored in sorted order in ArrayList<WordSig>,
	 * and signatureToWords performs binary search to perform lookups
	 * 
	 * @param path - path to dictionary
	 * 
	 * 
	 **/

	public ListDictionary(String path) {
		this.dictionary = new ArrayList<WordSig>();

		try {
			Scanner input = new Scanner(new File("/usr/share/dict/words"));
			while (input.hasNext()) {
				String line = input.nextLine().toLowerCase();
				if (PredictivePrototype.isValidWord(line)) {
					String s = PredictivePrototype.wordToSignature(line);
					WordSig newWordSig = new WordSig(line, s);
					dictionary.add(newWordSig);
				}
			}
			input.close();
		} catch (IOException e) {
			System.out.println("File cannot be located");
		}
		Collections.sort(dictionary);
	}

	/**
	 * Method to store the words collected
	 * 
	 * 
	 */
	public Set<String> signatureToWords(String signature) {

		Set<String> set = new HashSet<String>();

		/*
		 * Here we use binary search from the middle of array list, set the word as
		 * null. We use signature to match words from centre to both sides. If index <0,
		 * return the set. Otherwise, add words from arraylist into the set. If given
		 * signature matches word's signature, we add the word into the new set and
		 * continue, otherwise we leave the loop and go for the next index.
		 * 
		 */

		int index = Collections.binarySearch(dictionary, new WordSig(null, signature));

		if (index < 0) {
			return set;
		} else {
			set.add(dictionary.get(index).getWords());
			for (int i = index + 1; i < dictionary.size(); i++) {
				if (dictionary.get(i).getSignature().equals(signature)) {
					set.add(dictionary.get(i).getWords());
				} else {
					break;
				}
			}
			for (int j = index - 1; j < dictionary.size(); j--) {
				if (dictionary.get(j).getSignature().equals(signature)) {
					set.add(dictionary.get(j).getWords());
				} else {
					break;
				}
			}
		}
		return set;
	}

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

		StringBuffer sb = new StringBuffer("");

		for (int i = 0; i < word.length(); i++) {
			if ((word.charAt(i) >= 'a' && word.charAt(i) <= 'z')) {
				sb.append(keyMap.get(word.charAt(i)));

			} else {
				sb.append(' ');

			}
		}
		return sb.toString();
	}

	public static void main(String[] args) {

	}
}

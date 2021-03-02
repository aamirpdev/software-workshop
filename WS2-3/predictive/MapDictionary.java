package predictive;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

/**
 * MapDictionary implements map structure to store data, and implements
 * Dictionary interface. It stores dictionary contents.
 * 
 * @author aamir patel
 *
 */
public class MapDictionary implements Dictionary {

	private Map<String, Set<String>> dictionary;

	/**
	 * Constructor for the map dictionary
	 * 
	 * @param mapDictionary
	 */
	public MapDictionary(String mapDictionary) {
		dictionary = new HashMap<String, Set<String>>();

		try {
			Scanner input = new Scanner(new File("/usr/share/dict/words"));

			while (input.hasNext()) {
				String word = input.nextLine().toLowerCase();
				if (PredictivePrototype.isValidWord(word)) {
					this.addWord(word);
				}
			}
			input.close();

		} catch (FileNotFoundException e) {
			System.out.println("File not found");
		}
	}

	/**
	 * A method that converts the word to a signature, loops through the dictionary.
	 * 
	 * @param word
	 * @return
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

	/**
	 * method to add words to the treeset, will be put in dictionary.
	 * 
	 * @param word
	 */
	private void addWord(String word) {
		Set<String> words = dictionary.get(PredictivePrototype.wordToSignature(word));

		if (words != null) {
			words.add(word);
		} else {
			words = new TreeSet<String>();
			words.add(word);
			dictionary.put(PredictivePrototype.wordToSignature(word), words);
		}
	}

	public Map<String, Set<String>> getDictionary() {
		return dictionary;
	}

	@Override
	public Set<String> signatureToWords(String signature) {
		return dictionary.get(signature);
	}

	public static void main(String[] args) {
	}
}

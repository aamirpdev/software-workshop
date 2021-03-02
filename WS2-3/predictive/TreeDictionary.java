package predictive;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;

/**
 * 
 * input data: 43 968 226 33247437 8447 968 273 2 256639 43648 
 * java -cp . predictive/Sigs2WordsMap 43 968 226 33247437 8447 968 273 2 256639  3.84s user 0.53s system 189% cpu 2.309 total
 *  java -cp . predictive/Sigs2WordsTree 43 968 226 33247437 8447 968 273 2 25663  5.13s user 0.56s system 221% cpu 2.572 total
 * 
 * now input data is repeated x5
 * 
*java -cp . predictive/Sigs2WordsMap 43 968 226 33247437 8447 968 273 2 256639  3.61s user 0.53s system 183% cpu 2.247 total
* java -cp . predictive/Sigs2WordsTree 43 968 226 33247437 8447 968 273 2 25663  5.14s user 0.58s system 216% cpu 2.643 total
 * TreeDictionary implements Dictionary interface and uses Tree structure to
 * store data.
 * 
 * 
 * @author aamir patel
 */

public class TreeDictionary implements Dictionary {

	private TreeDictionary[] subtrees;
	private Set<String> set;

	/**
	 * This constructor of the class takes in String path as an argument We use 8
	 * values as there's 8 keys representing characters on the T9
	 * 
	 * @param String path - path to file
	 */
	public TreeDictionary(String path) {
		this.subtrees = new TreeDictionary[8];
		this.set = new HashSet<>();
		try {
			Scanner sc = new Scanner(new File("/usr/share/dict/words"));
			while (sc.hasNextLine()) {
				String tem = sc.nextLine().toLowerCase();
				if (PredictivePrototype.isValidWord(tem))
					add(tem);
			}
			sc.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 
	 * Constructor takes no arguments and initiates field variables. We have 8 null
	 * elements initially.
	 * 
	 */
	public TreeDictionary() {
		this.subtrees = new TreeDictionary[8];
		this.set = new HashSet<>();
	}

	/**
	 * 
	 * This method matches word of type String and stores it in subtrees matching
	 * its prefix. If subtreee is null, it creates a new tree and stores it there.
	 * If not null, it stores the word in the set.
	 * 
	 * @param String word - word to be added to tree
	 */
	public void add(String word) {
		TreeDictionary td = this;
		String signature = PredictivePrototype.wordToSignature(word);
		int sl = signature.length();
		for (int i = 0; i < sl; i++) {
			// sorting which node to store character
			int node = signature.charAt(i) - '2'; // index 0-7
			if (td.subtrees[node] == null) {
				td.subtrees[node] = new TreeDictionary();
				td.subtrees[node].set.add(word);
				td = td.subtrees[node];
			} else {
				td.subtrees[node].set.add(word);
				td = td.subtrees[node];
			}
		}

	}

	/**
	 * This method trims words to specified prefix length
	 * 
	 * @param type Set<String> set, the set that needs to be trimmed
	 * @param sl   type Integer, the length of the trimmed words
	 * @return a set to be output
	 */
	public Set<String> trim(Set<String> set, int sl) {
		Set<String> newSet = new HashSet<>();
		Iterator<String> it = set.iterator();
		while (it.hasNext()) {
			newSet.add(it.next().substring(0, sl));
		}
		return newSet;
	}

	/**
	 * This method overrides itself in the dictionary interface, using the tree to
	 * look up the signature
	 * 
	 * @param signature type String, the signature that needs to be checked
	 * @return a set containing all the prefixes of required words
	 */
	@Override
	public Set<String> signatureToWords(String signature) {
		for (int i = 0; i < signature.length(); i++) {
			if (signature.charAt(i) < '2' || signature.charAt(i) > '9')
				throw new IllegalArgumentException();
		}

		try {
			TreeDictionary td = this;
			int sl = signature.length();
			for (int i = 0; i < sl; i++) {
				int node = signature.charAt(i) - '2';
				td = td.subtrees[node];
			}
			return trim(td.set, sl);
		} catch (ArrayIndexOutOfBoundsException c) {
			System.out.println("Signature of wrong format");
			return new HashSet<>();
		} catch (NullPointerException e) {
			System.out.println("Word isn't present in the dictionary");
			return new HashSet<>();
		}
	}

	public static void main(String[] args) {

	}

}
package predictive;

import java.io.FileNotFoundException;
import java.util.Iterator;

/**
 * command line program to call TreeDictionary
 */
public class Sigs2WordsTree {

	public static void main(String[] args) throws FileNotFoundException {

		TreeDictionary td = new TreeDictionary("words");
		for (String a : args) {
			Iterator<String> it = td.signatureToWords(a).iterator();
			System.out.print(a + " ");
			while (it.hasNext()) {
				String dwords = it.next();
				System.out.print(dwords + " ");
			}
			System.out.println("\n");
		}
	}

}

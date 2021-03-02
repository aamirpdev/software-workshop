package predictive;


//command line program to test ListDictionary by calling upon the method
public class Sigs2WordsList {

	/**
	 * @param args - signatures input
	 */
	public static void main(String[] args) {
		ListDictionary dictionary = new ListDictionary("/usr/share/dict/words");
		for (int i = 0; i < args.length; i++) {
			System.out.println(args[i] + ": " + dictionary.signatureToWords(args[i]));
		}
	}
}

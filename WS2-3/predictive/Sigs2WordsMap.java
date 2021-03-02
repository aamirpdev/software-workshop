package predictive;

/**
 * command line program to run MapDictionary
 * 
 * @author aamir patel
 *
 */
public class Sigs2WordsMap {

	/**
	 * 
	 * @param args - signature input to be converted to words
	 */
	public static void main(String[] args) {

		Dictionary d = new MapDictionary("/Users/aamirp/Downloads/words");
		for (int i = 0; i < args.length; i++) {
			System.out.println(args[i] + ": " + d.signatureToWords(args[i]));
		}
	}
}

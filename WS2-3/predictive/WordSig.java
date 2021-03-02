package predictive;

/**
 * WordSig class pairs two elements word and signature, and specifies how
 * objects of this class can be compared by implementing the Comparable
 * interface
 * 
 * @author aamir patel
 *
 */

public class WordSig implements Comparable<WordSig> {

	private String words;
	private String signature;

	/**
	 * constructor for the class
	 * 
	 * @param words
	 * @param signature
	 */
	public WordSig(String words, String signature) {
		this.words = words;
		this.signature = signature;
	}

	public String getWords() {
		return words;
	}

	public String getSignature() {
		return signature;
	}

	/**
	 * CompareTo method comparing words and signatures and returning the values 
	 */
	
	@Override
	public int compareTo(WordSig ws) {
		return this.signature.compareTo(ws.signature);
		
		/*
		 * if (this.signature.length() < ws.signature.length()){ 
		 * return -1; 
		 * } else if (this.signature.length() < ws.signature.length()) { 
		 * return 1; 
		 * } else {
		 * return this.signature.compareTo(ws.signature); }
		 */
	}

	/**
	 * returning the words and signature in a presentable way
	 */
	public String toString() {
		return "Signature: " + signature + "Words: " + words;
	}
}

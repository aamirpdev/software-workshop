
package predictive;

//this is a command line program to call the wordToSignature method from PredictivePrototype

public class Words2SigProto {

	public static void main(String[] args) {

		for (int i = 0; i < args.length; i++) {
			System.out.println(PredictivePrototype.wordToSignature(args[i]));

		}
	}

}
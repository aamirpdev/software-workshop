
/**
 * Exercise 2 involves writing a java method which takes converts units from the Imperial System returns the corresponding weight in kilograms 
 * @Aamir Patel
 * @version 2019-10-05
 * 
 */

public class ex2a{
/**
 * imperialToKg converts units given in the imperial system into the corresponding metric system
 * @param ton
 * @param hundredweight
 * @param quarter
 * @param stone
 * @param pound
 * @param ounce
 * @param drachm
 * @param grain
 * @return the mass in kilograms
 */
	
	public static double imperialToKg(double ton, double hundredweight, double quarter, double stone, double pound, double ounce, double drachm, double grain) {
		return (ton * 2240 + hundredweight * 112 + quarter * 28 + pound + stone * 14 + ounce * 1/16 + drachm * 1/256 + grain * 1/7000) * 0.45359237;
	}		
				
	public static void main(String [] args) {
        System.out.println("Person's weight: " + imperialToKg(0,0,0,11,6,0,0,0));
		
	}
}

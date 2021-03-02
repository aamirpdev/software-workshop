/**
 * The class contains the static method coldest which computes the first index
 * of the non-empty one-dimensional array of type double[] with the lowest
 * temperature
 * 
 * @version 2019-11-02
 * @author Aamir Patel
 * 
 *
 */

public class Temperature {
	/**
	 * The method finds the index with the minimum value of a non-empty
	 * one-dimensional array of type double[]]
	 * 
	 * @param temperatures A non-empty array of type double[]
	 * @return The index of the array with the minimum value in the array, where
	 *         index 0 of the array is value 1
	 */
	public static int coldest(double[] temperatures) {
		int coldestDay = 0;

		for (int i = 1; i < temperatures.length; i++) {

			if (temperatures[i] < temperatures[coldestDay]) {
				coldestDay = i;
			}
		}

		return coldestDay + 1;
	}

	/**
	 * A main method to test the method for a value
	 * 
	 */
	public static void main(String[] args) {
		double[] temperatures = new double[365];

		temperatures[231] = -21;

		System.out.println(Temperature.coldest(temperatures));
	}
}

/**
 * Exercise 4 involves initialising two integer values i and j, then switching their values 
 * @Aamir Patel
 * @version 2019-10-05
 * 
 */
public class Swap {
/**
 * swaps i and j 
 * @param i 1st variable
 * @param j 2nd variable
 * 
 */
	public static void 
	swap(int i, int j) {
		i = j;
		j = i;
	}
public static void main(String [] args) {
	int i = 2;
	int k = 6;
	System.out.println("Original i : " + i + " k: " +k);
	swap (i,k);
	System.out.println("After swapping i: " + k + " k: " + i);    //modified from the initial code here
}
}

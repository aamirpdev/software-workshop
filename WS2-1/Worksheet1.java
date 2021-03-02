/**
 * @author - Aamir Patel This class contains the solution for Worksheet1
 */

public class Worksheet1 {

	// Exercise 1
	/**
	 * 
	 * recursive method to calculate power of integer m to n by recursively
	 * multiplying m itself n times
	 * 
	 * @param m - integer m
	 * @param n - integer n (power)
	 * @return m^n
	 */

	static int power(int m, int n) {
		if (n == 0)
			return 1;
		else {
			return m * power(m, n - 1);
		}
	}

	/**
	 * 
	 * faster recursive method to calculator the power of integer m to n using power
	 * rules, two separate cases: 1) for odd powers, m^n=m*m^(n-1) 2) for even
	 * powers, m^n=(m^(n/2))^2
	 * 
	 * @param m - integer m
	 * @param n - integer n (power)
	 * @return m^n
	 */
	static int fastPower(int m, int n) {
		if (n == 0) {
			return 1;
		}
		int powerOfHalfN = fastPower(m, n / 2);

		if (n % 2 == 1)

		{
			return m * powerOfHalfN * powerOfHalfN;

		} else {
			return powerOfHalfN * powerOfHalfN;
		}

	}

	// Exercise 2
	/**
	 * method to negative sign of integers in a list
	 * 
	 * @param a - list of integers
	 * @return negated list
	 */
	static List<Integer> negateAll(List<Integer> a) {
		if (a.isEmpty()) {
			throw new IllegalArgumentException();
		}
		if (a.getTail().isEmpty()) {
			return new List(-a.getHead(), new List());
		} else {
			return new List(-a.getHead(), negateAll(a.getTail()));
		}
	}

	// Exercise 3
	/**
	 * method to return position of integer x in List a
	 * 
	 * @param x - integer to find
	 * @param a - list
	 * @return position of x in a
	 */
	static int find(int x, List<Integer> a) {
		if (a.isEmpty()) {
			throw new IllegalArgumentException();
		} else if (a.getHead() == x) {
			return 0;
		} else
			return 1 + find(x, a.getTail());
	}

	// Exercise 4
	/**
	 * method to check if list integer values are all even
	 * 
	 * @param a - list
	 * @return boolean true or false
	 */
	static boolean allEven(List<Integer> a) {
		if (a.isEmpty()) {
			throw new IllegalArgumentException();
		} else if (a.getHead() % 2 == 0) {
			if (a.getTail().isEmpty()) {
				return true;
			} else {
				return (allEven(a.getTail()));
			}
		} else if (a.getHead() % 2 == 1) {
			return false;
		} else {
			return false;
		}
	}

	// Exercise 5
	/**
	 * method to return even numbers of a given list of integers a
	 * 
	 * @param a - list to inspect
	 * @return list of even numbers in list a
	 */
	static List<Integer> evenNumbers(List<Integer> a) {
		if (a.isEmpty()) {
			throw new IllegalArgumentException();
		} else if (a.getTail().isEmpty()) {
			if (a.getHead() % 2 == 0) {
				return new List(a.getHead(), new List());
			} else {
				return new List();
			}
		} else if (a.getHead() % 2 == 0) {
			return new List(a.getHead(), evenNumbers(a.getTail()));
		} else {
			return evenNumbers(a.getTail());
		}
	}

	// Exercise 6
	/**
	 * method for boolean test to see if list is sorted in descending order
	 * 
	 * @param a - list
	 * @return boolean value
	 */
	static boolean sorted(List<Integer> a) {
		if (a.isEmpty()) {
			throw new IllegalArgumentException();
		} else if (a.getTail().isEmpty()) {
			return true;
		} else if (a.getTail().getTail().isEmpty()) {
			return a.getHead() >= a.getTail().getHead();
		} else {
			return a.getHead() >= a.getTail().getHead() && sorted(a.getTail());
		}
	}

	// Exercise 7
	/**
	 * method to merge two sorted list into one sorted list
	 * 
	 * @param a - List a
	 * @param b - List b
	 * @return merged sorted list of a and b
	 */
	static List<Integer> merge(List<Integer> a, List<Integer> b) {
		if (a.isEmpty() && b.isEmpty()) {
			throw new IllegalArgumentException();
		} else if (!a.isEmpty() && b.isEmpty()) {
			return a;
		} else if (a.isEmpty() && !b.isEmpty()) {
			return b;
		} else if (a.getHead() < b.getHead()) {
			return new List(b.getHead(), merge(a, b.getTail()));
		} else {
			return new List(a.getHead(), merge(a.getTail(), b));
		}
	}

	// Exercise 8
	/**
	 * method to return sorted list a with no duplicate values
	 * 
	 * @param a - list
	 * @return sorted list a with no duplicate values
	 */

	static List<Integer> removeDuplicates(List<Integer> a) {
		if (a.isEmpty()) {
			throw new IllegalArgumentException();
		} else if (a.getTail().isEmpty()) {
			return a;
		} else if (a.getHead() != a.getTail().getHead()) {
			return new List(a.getHead(), removeDuplicates(a.getTail()));
		} else {
			return removeDuplicates(new List(a.getHead(), a.getTail().getTail()));
		}
	}

}

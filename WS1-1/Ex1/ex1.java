
/**
 * Exercise 1 involves writing a java method which takes in the radius as an argument and returns the corresponding circle's area
 * @Aamir Patel
 * @version 2019-10-05
 */public class ex1 {
/** areaCircle computes the area of the circle with the given radius as an argument
 * @param radius
 * @return pi * radius * radius
 */
	public static double areaCircle(double radius) {
		return Math.PI * radius * radius;
	}
	public static void main (String [] args) {
		double radius = 0;
		System.out.println("The area of a circle with radius: " + radius + " is " +areaCircle(radius));
		System.out.println("The area of a circle with radius: 5 is " +areaCircle(5));
		System.out.println("The area of a circle with radius: 10 is " +areaCircle(10));
		
	}

}

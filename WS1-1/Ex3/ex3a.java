
/**
 * Exercise 3a involves writing a java method which calculates the angle between the hour hand and the minute hand on a traditional analogue clock, in a counterclockwise fashion
 * @Aamir Patel
 * @version 2019-10-05
 */

public class ex3a {
/**
 * timeToAngle computes the angle between the hour and minute hand, in a counter clockwise fashion
 * @param hours hour of the analogue clock
 * @param minutes minute of the analogue clock
 * @param hourAngle angle of the hour hand 
 * @param minuteAngle angle of the minute hand 
 * @return integer value in degrees
 */
	 public static int timeToAngle(int hours, int minutes){
	       int hour = hours % 12; //hours in a 12hr system rather than 24hr to make our code easier
	       int minute = minutes;

	       double hourAngle = 0.5 * (60 * hour + minutes);
	       double minuteAngle = 6 * minute ;
	       double value = hourAngle - minuteAngle;
	       int angle = (int) value;
	       return 360 - Math.abs(Math.min(angle, 360 - angle)); //a mistake has been made here as my code doesn't print 90 and 30 for the second and fourth times I test in the system.out.println
	    }
	public static void main(String[]args){
	    System.out.println(timeToAngle(9, 00));
	    System.out.println(timeToAngle(3, 00));
	    System.out.println(timeToAngle(18, 00));
	    System.out.println(timeToAngle(01, 00));
	    System.out.println(timeToAngle(02, 30));
	    System.out.println(timeToAngle(04, 41));





	  }
	}
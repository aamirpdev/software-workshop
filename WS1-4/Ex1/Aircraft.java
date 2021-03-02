/**
 * 
 * Aircraft is a class to store data of an aircraft with fields passenger number
 * and max speed of type int
 * 
 * @version 2019-11-17
 * @author Aamir Patel
 * 
 *
 */
public class Aircraft {
	int passengerNumber;
	int maxSpeed;

	/**
	 * Constructor for class Aircraft
	 * 
	 * @param passengerNumber Number of passengers on aircraft
	 * @param maxSpeed        Maximum speed of the aircraft
	 */
	public Aircraft(int passengerNumber, int maxSpeed) {
		this.passengerNumber = passengerNumber;
		this.maxSpeed = maxSpeed;
	}

	/**
	 * Accessor methods to get details of the aircraft
	 */

	/**
	 * 
	 * @return the number of passengers on the aircraft
	 */
	public int getPassengerNumber() {
		return passengerNumber;
	}

	/**
	 * 
	 * @return maximum speed of aircraft
	 */
	public int getMaxSpeed() {
		return maxSpeed;
	}

	public void setPassengerNumber(int passengerNumber) {
		this.passengerNumber = passengerNumber;
	}

	/**
	 * Now we write methods to set the data of the aircraft, so called setters
	 */

	/**
	 * 
	 * @param maxSpeed maximum speed of aircraft
	 */
	public void setMaxSpeed(int maxSpeed) {
		this.maxSpeed = maxSpeed;
	}

	/**
	 * the toString method defines how to print the data of the aircraft
	 */
	public String toString() {
		return "The passenger number of this aircraft is " + passengerNumber + " people. "
				+ "The maximum speed of this aircraft is " + maxSpeed;
	}
}
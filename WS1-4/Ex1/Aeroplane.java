/**
 * 
 * Aeroplane is a class to store data of an aeroplane with fields passenger number
 * and max speed of type int, and fuel consumption of type double. The class makes use
 * of inheritance, as it's a subclass of the Aircraft class.
 * 
 * @version 2019-11-17
 * @author Aamir Patel
 * 
 *
 */

/**
 * 
 * Class aeroplane uses the same fields as the class Aircraft and adds it own
 * field of fuel consumption type double
 *
 */
public class Aeroplane extends Aircraft {
	double fuelConsumption;

	/**
	 * Constructor of Aeroplane, we invoke the base class Aircraft
	 * 
	 * @param passengerNumber number of passengers on aeroplane
	 * @param maxSpeed        maximum speed of aeroplane
	 * @param fuelConsumption amount of fuel consumed
	 */
	public Aeroplane(int passengerNumber, int maxSpeed, double fuelConsumption) {
		super(passengerNumber, maxSpeed);
		this.fuelConsumption = fuelConsumption;
	}

	/**
	 * getter method for fuel consumption
	 * 
	 * @return amount of fuel consumed
	 */
	public double getFuelConsumption() {
		return fuelConsumption;
	}

	/**
	 * setter method for fuel consumption
	 * 
	 * @param fuelConsumption sets fuel consumption
	 */
	public void setFuelConsumption(double fuelConsumption) {
		this.fuelConsumption = fuelConsumption;
	}

	/**
	 * toString method returns how to print our data regarding our aeroplane
	 */
	public String toString() {
		return "The fuel consumption of this aeroplane is " + fuelConsumption;
	}
}

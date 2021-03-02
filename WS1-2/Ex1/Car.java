/**
 * Car is a class to store car data with the fields make, price, maxSpeed,
 * colour make and colour of type String price and maxSpeed of type int
 * 
 * @author Aamir Patel
 * @version 2019-10-18
 */
public class Car {
	String make;
	private int price;
	private int maxSpeed;
	private String colour;

	/**
	 * Car is a constructor reusing all four field variables as parameters
	 * 
	 * @param make     The make of the car
	 * @param price    The price of the car.
	 * @param maxSpeed The maximum speed of the car.
	 * @param colour   The colour of the car.
	 */
	public Car(String make, int price, int maxSpeed, String colour) {
		this.make = make;
		this.price = price;
		this.maxSpeed = maxSpeed;
		this.colour = colour;
	}

	/*
	 * Now we write methods to get the details of a cars
	 * so called accessor methods.
	 */
	
    /** 
     *  @return the make of a car as a String
     */
	public String getMake() {
		return make;
	}
	
	 /** 
     *  @return the the price of a car as int
     */
	public int getPrice() {
		return price;
	}
	
	 /** 
     *  @return the maximum speed of a car as int
     */
	public int getMaxSpeed() {
		return maxSpeed;
	}
	
	 /** 
     *  @return the colour of a car as a String
     */
	public String getColour() {
		return colour;
	}

    /** toString defines how to print a Car
     *  
     *  @return  the car's data in a readable format
     */
	@Override
	public String toString() {
		return "The make of the car is: " + make + ". It has a price of: " + price + ". It's maximum speed is: "
				+ maxSpeed + ". It's colour is: " + colour;

	}

	/* Now we write methods to set the parts of a car,
     * so called setters.
     */

    /** 
     *  sets the make of a Car
     * @param make the new make of the car.
     */
	public void setMake(String make) {
		this.make = make;
	}
	
	/**
     *   @param price The new price of the car.
     */
	public void setPrice(int price) {
		this.price = price;
	}

	/**
     *   @param maxSpeed The new maximum speed of the car.
     */
	public void setMaxSpeed(int maxSpeed) {
		this.maxSpeed = maxSpeed;
	}

	/**
     *   @param colour The new colour of the car.
     */
	public void setColour(String colour) {
		this.colour = colour;
	}
}

/**
 *   Good is a class to store data of a goods item e.g. milk, 
 *   with the fields name of type String, 
 *   netPrice of type double 
 *   @author Aamir Patel
 *   @version   2019-10-19
 */

public class Good {
	private String name;
	private double netPrice;
	
    /**
     *   Constructor reuses both field variables as parameters
     *   @param name The name of the good
     *   @param netPrice The net price of the good.
     */	
	public Good(String name,
				double netPrice) {
	this.name = name;
	this.netPrice = netPrice;
	}
	
	
    /* Now we write methods to get the details of a Good,
     * so called accessor methods.
     */
	
    /**
     *   getter for the name
     *   @return The name of the good
     */
	public String getName() {
		return name;
	}
	
    /**
     *   getter for the net price
     *   @return The net price of the good
     */
	public double getNetPrice() {
		return netPrice;
	}
	
	
    /* Now we write methods to set the details of the good,
     * so called setters.
     */
	
    /** 
     *  @param name The new name of a good
     */
	public void setName(String name) {
		this.name = name;
	}

    /** 
     *  @param netPrice The new price of a good
     */
	public void setNetPrice(double netPrice) {
		this.netPrice = netPrice;
	}
	
	
	final static double VAT_RATE = 20; //a fixed VAT rate of 20% is stored in VAT_RATE
	
	public double grossPrice() {
		/**
		 * This method grossPrice is used to calculate the gross price of a good when we input the net price
		 * This is the net price with vat rate
		 * @param netPrice The net price of a good
		 * @param VAT_RATE The vat rate
		 * @return The gross price which is the net price with vat rate
		 */
		
		return netPrice + (netPrice * (VAT_RATE/100));
		
	}
	

	public void discount(double rate) {
		/**
		 * This method discount is used to reduce the price of a good by a given rate between 0-100%
		 * @param discount The value of the discount
		 * @param rate The rate we want to reduce the price of a good by as a percentage
		 * @param netPrice The new price of the good with the discount calculated
		 */
		double discount = netPrice * (rate/100);
		netPrice = netPrice - discount;
		
	}
	
    /** toString defines how to print a good
     *  
     *  @param price The gross price of the good to two decimal places using String.format 
     *  @return  the good's data is a readable format, giving the name and the gross price  
     */
	
	@Override
	public String toString() {
		String price = String.format("%.2f", grossPrice()); 
		return "The " + name + " has a gross price of \u00A3" + price + ".";
	}
	
	
	public static void main(String[] args) {
		Good milk = new Good("Milk", 0.50);
		//This creates a Good with "Milk" as the name, and net price of 0.50
		
		System.out.println(milk); 
		//This prints the good's name "milk" and the gross price of the good which is to be calculated
		
		milk.discount(20); //Reduces the price of milk by 20%
		System.out.println(milk); //Prints out the new gross price of the milk with the discount rate
		
	}
	
}

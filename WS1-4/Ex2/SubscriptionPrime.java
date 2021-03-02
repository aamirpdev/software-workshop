/**
 *
 *
 * @version 2019-11-17
 * @author Aamir Patel
 * 
 *         class SubscriptionPrime is a subclass of subscription making use of
 *         their fields and methods with the additional field
 *         address of type String and implements all of the methods of
 *         SubscriptionPrimeInterface
 *
 */

public class SubscriptionPrime extends Subscription implements SubscriptionPrimeInterface {
	public String address;

	/**
	 * 
	 * @param a title of subscription
	 * @param b email of subscription
	 * @param c cost of subscription
	 * @param d address of subscription
	 */
	public SubscriptionPrime(String a, String b, int c, String d) {
		super(a, b, c);
		address = d;
	}

	/**
	 * getter method
	 * 
	 * @return address of subscription which subscription is to be sent
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * Standard toString method to represent the object in a human readable form.
	 * 
	 * @return The address the subscription is sent to
	 */
	public String toString() {
		return address;
	}
}

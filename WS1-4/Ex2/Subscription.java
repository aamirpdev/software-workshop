/**
 * class Subscription implements the subscription interface provided. It
 * contains the constructor of Subscription, getter and toString method based on
 * the interfaces three variables
 * 
 * @Version 2019-11-19
 * @Author Aamir Patel
 * 
 */
public class Subscription implements SubscriptionInterface {

	/**
	 *
	 * 
	 * @param title title of subscription
	 * @param email email addresss associated with subscription
	 * @param cost  cost of the subscription
	 */

	public String title;
	public String email;
	public int cost;

	/**
	 * constructor of subscription
	 * 
	 * @param a title of subscription
	 * @param b email associated with subscription
	 * @param c cost of subscription
	 */
	public Subscription(String a, String b, int c) {
		title = a;
		email = b;
		cost = c;
	}

	/**
	 * getter/accessor method for our subscription class
	 * 
	 */

	/**
	 * @return title title of subscription
	 */

	public String getTitle() {
		return title;
	}

	/**
	 * 
	 * @return email email associated with subscription
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * This is a getter for the cost of the subscription.
	 * 
	 * @return cost - the cost of the subscription given as an integer.
	 */
	public int getCost() {
		return cost;
	}

	/**
	 * toString method to print the information of our subscription class
	 * 
	 * @return the title, email and the cost of a subscription.
	 */

	public String toString() {
		return "The title of the subscription is: " + title + " " + "The email associated with thesubscription is: "
				+ email + " " + "The cost of the subscription is: " + cost;
	}
}

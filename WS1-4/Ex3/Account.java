/**
 * 
 * class Account is an abstract and implements Account interface. Contains
 * fields name, salutation, email, password of type String and loggedin of type
 * boolean.
 * 
 * @version 2019-11-18
 * @author Aamir Patel
 */

public abstract class Account implements AccountInterface {
	String name;
	String salutation;
	String email;
	String password;
	boolean loggedIn;

	/**
	 * constructor Account creates aaccount with name, salutation, email and
	 * password
	 * 
	 * @param name       name of account
	 * @param salutation salutation of account e.g Mr, Mrs
	 * @param email      email of account
	 * @param password   password of account
	 */

	public Account(String name, String salutation, String email, String password) {
		this.name = name;
		this.salutation = salutation;
		this.email = email;
		this.password = password;
	}

	/**
	 * method to check password of account when user logs in
	 * 
	 * @param password input password by account holder compared with password
	 *                 stored. If password input by account user is correct,
	 *                 variable loggedIn set to true. Otherwise, if password input
	 *                 doesn't match the system's password, loggedIn is set to false
	 *                 and a prompt is issued to the account user that the wrong
	 *                 password has been provided.
	 */

	public void login(String password) {
		if (checkPassword(password)) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
			System.out.println("You have input the incorrect password. Please try again.");
		}
	}

	/**
	 * Accessor methods for our class
	 */

	/**
	 * @return login status
	 */
	public boolean getLoggedIn() {
		return loggedIn;
	}

	/**
	 * 
	 * @return account name
	 */
	public String getName() {
		return name;
	}

	/**
	 * 
	 * @return The account salutation
	 */
	public String getSalutation() {
		return salutation;
	}

	/**
	 * 
	 * @return email of account
	 */

	public String getEmail() {
		return email;
	}

	/**
	 * 
	 * @return The account's password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Setter for the class
	 */

	/**
	 * @param loggedIn the new loggedin status of account
	 */

	public void setLoggedIn(boolean loggedIn) {
		this.loggedIn = loggedIn;
	}

	/**
	 * method for when account is logged out, loggedin is set to false
	 */
	public void logout() {
		setLoggedIn(false);
	}

	/**
	 * 
	 * @param password the new account password
	 */

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * 
	 * @param password provided password which we compare with this object
	 * @return boolean value true or false, if password input matches system,
	 *         boolean value returned is true, otherwise false
	 */
	public boolean checkPassword(String password) {
		return this.getPassword().equals(password);
	}

	/**
	 * 
	 * toString method returns Account information in a readable way for a human
	 * 
	 * @return name, salutation, email of account
	 */
	public String toString() {
		return "Account user's name is " + salutation + " " + name + " and email address is " + email;
	}

	/**
	 * method to change account password First checks whether account inputs correct
	 * 'old' password before allowing account holder to input 'new' password
	 * 
	 * @param oldPassword password that account holder intends to change
	 * @param newPassword password account holder would like to change to
	 */
	public void changePassword(String oldPassword, String newPassword) {
		if (checkPassword(oldPassword)) {
			System.out.println("You can now change your password. What would you like to change your password to: ");
			setPassword(newPassword);
		} else {
			System.out.println("You have input the incorrect password. Please try again.");
		}
	}
}

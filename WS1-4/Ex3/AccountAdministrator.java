import java.util.*;

/**
 * subclass AccountAdministrator extends Account class and implements
 * AccountAdministratorInterface. Subclass had field variable ArrayList<Account>
 * of type accounts. 
 * This is an admin account
 * 
 * @version 2019-11-17
 * @author Aamir Patel
 * 
 */
public class AccountAdministrator extends Account implements AccountAdministratorInterface{
	private ArrayList<Account> accounts;

	/**
	 * constructor for admin account
	 * 
	 * @param name       name of account holder
	 * @param salutation salutation of the account holder
	 * @param email      email of the account holder
	 * @param password   password of the account holder
	 */

	public AccountAdministrator(String name, String salutation, String email, String password) {
		super(name, salutation, email, password);
		this.accounts = new ArrayList<>();
	}

	/**
	 * Accessor (gettor) for accounts in arraylist
	 * 
	 * @return accounts in array list
	 */
	
	public ArrayList<Account> getAccounts() {
		return accounts;
	}

	/**
	 * method for creating a new account, first we test if account is logged in 
	 * 
	 * @param account the new account 
	 */
	public void addAccount(Account account) {
		if (loggedIn == true) {
			accounts.add(account);
		} else {
			System.out.println("Log into your account.");
		}

	}

	/**
	 * method to reset account. Account must be logged in and failed log in attempts times is set to 0.
	 * 
	 * @param account  account to be reset
	 * @param password password for the newly reset account
	 */
	public void resetAccount(Account account, String password) {
		if (loggedIn == true) {
			account.setPassword(password);
			if (account instanceof AccountStandard) {
				((AccountStandard) account).setFailedLoginAttempts(0);
			}
		}
	}

	/**
	 * method to login to account
	 * 
	 * @param input password by account holder compared with password
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
			System.out.println("You have input the wrong password. Please try again.");
		}
	}

	/**
	 * toString method allows output to user to be in a readable way for humans
	 * 
	 * @return name, saluation and email address of account holder
	 */
	public String toString() {
		return "Account user's name is " + salutation + " " + name + " and email address is " + email;
	}
}

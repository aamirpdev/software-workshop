import java.util.*;

/**
 * AccountStandard subclass extends Account class and implements
 * AccountStandardInterface provided. AccountStandard represents a standard
 * account which has field variables balance and failedloginattempts of type
 * int, and titles bought of type arraylist<musictitle> which is an array list
 * of music titles bought
 *
 * @version 2019-11-18
 * @author Aamir Patel
 *
 */

public class AccountStandard extends Account implements AccountStandardInterface {
	int balance;
	ArrayList<MusicTitle> titlesBought;
	int failedLogInAttempts;

	public static final int MAXIMAL_LOGIN_ATTEMPTS = 3; // max of three incorrect login attempts

	/**
	 * constructor for standard account inherited from account with additional
	 * fields
	 * 
	 * @param balance             balance of account holder
	 * @param failedloginattempts no of failed login attempts of account holder
	 * @param titlesbought        no. of music titles bought by account holder
	 */
	public AccountStandard(String name, String salutation, String email, String password) {
		super(name, salutation, email, password);
		this.balance = 0;
		this.failedLogInAttempts = 0;
		this.titlesBought = new ArrayList<>();
	}

	/**
	 * Getter for the class
	 */

	/**
	 * 
	 * @return balace of account
	 */
	public int getBalance() {
		return balance;
	}

	/**
	 * 
	 * @return no. of failed login attempts
	 */
	public int getFailedLoginAttempts() {
		return failedLogInAttempts;
	}

	/**
	 * 
	 * @return array list of music titles bought
	 */
	public ArrayList<MusicTitle> getTitlesBought() {
		return titlesBought;
	}

	/**
	 * method for login of user into standard account
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
			failedLogInAttempts = 0;
		} else {
			setLoggedIn(false);
			failedLogInAttempts = failedLogInAttempts + 1;
			System.out.println("You have input the incorrect password. Please try again.");
		}

		// if account holder inputs more than 3 incorrect passwords, account is locked
		if (failedLogInAttempts >= MAXIMAL_LOGIN_ATTEMPTS) {
			setLoggedIn(false);
			System.out.println(
					"You are now locked out of your account, please contact our customer services department.");
		}
	}

	/**
	 * method to deposit money into your account balance
	 * 
	 * @param amount amount of money deposited
	 */
	public void deposit(int amount) {
		if (amount > 0) {
			setBalance(getBalance() + amount);
		}
	}

	/**
	 * Setter for the standard account
	 * 
	 */

	/**
	 * @param balance new balance of account
	 */
	public void setBalance(int balance) {
		this.balance = balance;
	}

	/**
	 * 
	 * @param failedLoginAttempts new number of failed login attempts
	 */
	public void setFailedLoginAttempts(int failedLoginAttempts) {
		this.failedLogInAttempts = failedLoginAttempts;
	}

	/**
	 * method for standard account holder to buy music title
	 * 
	 * @param musicTitle music title account holder wants to buy
	 */
	public void buy(MusicTitle musicTitle) {

		if (loggedIn == true && balance >= musicTitle.getPrice()) {
			titlesBought.add(musicTitle);
			setBalance(getBalance() - musicTitle.getPrice());
		} else if (loggedIn == true) {
			System.out.println("Your account doesn't have the required funds. Please deposit to continue.");
		} else {
			System.out.println("Log into your account");
		}
	}

	/**
	 * toString method prints AccountStandard data into readable output for human
	 * 
	 * @return name, salutation, balance and email of account holder
	 */
	public String toString() {
		return "Account user's name is " + salutation + " " + name + " and email address is " + email
				+ "Balance of account is" + balance;
	}
}
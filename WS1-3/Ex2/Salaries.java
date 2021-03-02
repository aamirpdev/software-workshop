
/**
 * The class stores employees salaries in a 2-dimensional 
 * array of type double and contains the methods:
 * add - which adds the salaries of one employee to the field variable allSalaries
 * average - computes average salary for an employee
 * averageSalaries - storing average salaries of all employees with at least one non-zero monthly salary
 * not3TimesHigher - checks whether for each employee with at least one non-zero monthly salary
 * their average salary isn't 3 times  higher than the overall average salary of all employees
 * 
 * @author Aamir Patel
 * @version 2019-11-03
 * 
 */



import java.util.ArrayList;

public class Salaries {
	private ArrayList<double[]> allSalaries;

	/**
	 * Salaries is a constructor for the list of Salaries
	 */
	public Salaries() {
		allSalaries = new ArrayList<double[]>();
	}

	/**
	 * method add, adds the salaries of one employee to the field variable
	 * allSalaries
	 * 
	 * @param employeeSalaries, a list of an employees monthly salaries
	 */
	public void add(double[] employeeSalaries) {
		allSalaries.add(employeeSalaries);
	}

	/**
	 * method sum, summation of elements in the array list
	 * 
	 * @param list, list of elements
	 * @return total, the list elements summed
	 */
	public static double sum(double[] list) {
		double total = 0;
		for (int i = 0; i < list.length; i++) {
			total += list[i];
		}

		return total;
	}

	/**
	 * method average, returns the average salary for an employee per month
	 * 
	 * @param employeeSalaries, array of doubles, each index represents employees
	 *                          salaries in that month
	 * @return the average salary of the employee
	 */
	public static double average(double[] employeeSalaries) {
		double months = 0;
		for (int i = 0; i < employeeSalaries.length; i++) {
			if (employeeSalaries[i] != 0) {
				months++;
			}
		}

		if (months == 0) {
			throw new IllegalArgumentException("This employee didn't earn any money");
		}

		return sum(employeeSalaries) / months;
	}

	/**
	 * method averageSalaries, calculates average salary for each employee in the
	 * variable allSalaries
	 * 
	 * @return ArrayList list of average salaries for all employees with at least
	 *         one monthly salary greater than 0
	 */
	public ArrayList<Double> averageSalaries() {
		ArrayList<Double> average = new ArrayList<Double>();
		for (int i = 0; i < allSalaries.size(); i++) {
			try {
				average.add(average(allSalaries.get(i)));
			} catch (IllegalArgumentException e) {
				System.out.println("Warning, attempted to add employee with no earnings");
			}
		}

		return average;
	}

	/**
	 * method not3TimesHigher checks for each employee whether its salary average is
	 * 3 times greater than the overall salary average
	 * 
	 * @return true or false to the method
	 */
	public boolean not3TimesHigher() {
		ArrayList<Double> averages = averageSalaries();
		double total = 0;
		double employees = 0;

		if (allSalaries.size() == 1) {
			return true;
		}

		for (double i : averages) {
			total += i;
			employees++;
		}

		for (double i : averages) {
			double av = 3 * ((total - i) / (employees - 1));
			if (i > av) {
				return false;
			}
		}

		return true;
	}
	
	/**
	 * 
	 * main method to test our methods for a few values
	 */
	public static void main(String[] args) {

	    double[] chris = {120, 240,212,350};
	    double[] mary = {550, 120, 515,800};
	    double[] randy = {900, 0 , 500, 0};

	  
	    Salaries groupOne = new Salaries();
	    
	    groupOne.add(chris);
	    groupOne.add(mary);
	    groupOne.add(randy);

	    System.out.println(groupOne.averageSalaries());
	    System.out.println(groupOne.not3TimesHigher());
	  }
	}

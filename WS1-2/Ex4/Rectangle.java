/**
 * 
 * The issue was, we defined the perimeter as a field variable of a rectangle,
 * rather than as a method which is calculated as a result of the width and
 * height. Consequently, the original code will output the perimeter as 12 for
 * any width and height which is obviously wrong.
 * 
 * I corrected this by eliminating the field variable perimeter, as it's a
 * function of width and height, and I adjusted the code accordingly, such as
 * removing the setter for the perimeter etc
 * 
 * 
 *
 * We define a rectangle by the two field variables width, height, each of type
 * double. Furthermore, we write getters and setters for the two fields as well
 * as a toString method. We test it in a main method. *
 * 
 * @version 2019-10-20
 * @author Aamir Patel
 */
public class Rectangle {
	private double width;
	private double height;

	/**
	 * 
	 * @param width  The width of the rectangle.
	 * @param height The height of the rectangle.
	 */
	public Rectangle(double width, double height) {
		this.width = width;
		this.height = height;

	}

	/**
	 * Getter for the width.
	 * 
	 * @return The width of the rectangle is returned.
	 */
	public double getWidth() {
		return width;
	}

	/**
	 * Getter for the height.
	 * 
	 * @return The height of the rectangle is returned.
	 */
	public double getHeight() {
		return height;
	}

	/**
	 * Getter for the perimeter.
	 * 
	 * @return The perimeter of the rectangle is returned.
	 */
	public double getPerimeter() {
		return 2 * (width + height);
	}

	/**
	 * Setter for the width. The width of the rectangle is updated. * @param width
	 * The new width of the updated rectangle.
	 * 
	 */
	public void setWidth(double width) {
		this.width = width;
	}

	/**
	 * Setter for the height. The height of the rectangle is updated.
	 * 
	 * @param height The new height of the updated rectangle.
	 */
	public void setHeight(double height) {
		this.height = height;
	}


	/**
	 * @return A human readable description of the rectangle in form of the two
	 *         field variables specifying it.
	 */
	public String toString() {
		return "The rectangle has a width of " + width + ", a height of " + height + ", and a perimeter of "
				+ getPerimeter() + ".";
	}
	
	/*
	 * main method with a test of the setHeight setter and the * toString method.
	 */
	public static void main(String[] args) {
		Rectangle r = new Rectangle(2, 4);
		System.out.println(r);
		r.setHeight(5);
		System.out.println(r);
	}
}
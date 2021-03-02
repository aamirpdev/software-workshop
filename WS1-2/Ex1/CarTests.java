import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;

/**
 *  The class contains 24 tests to test the constructor, the getters,
 *  and the setters in the Car class.
 *
 *  @author Aamir Patel
 *  @version 2019-10-20
 */
public class CarTest {
	
	private Car c1;
	private Car c2;
	private Car c3;

	
	@BeforeEach
	public void beforeEach() {
            //    public Car(String make, int price, int maxSpeed, String colour){

            c1 = new Car("Ferrari", 250000, 210, "red");
            c2 = new Car("Nissan", -10000, 130, "green");
            c3 = new Car("", 2099, 99, "black");
       
	}
	
	// testing getter for make
	@Test
	public void testMake1() {
		String expected = "Ferrari";
		String actual = c1.getMake();
		assertEquals(expected, actual, "error in getMake");
	}
	@Test
	public void testMake2() {
		String expected = "Nissan";
		String actual = c2.getMake();
		assertEquals(expected, actual, "error in getMake");
	}
	@Test
	public void testMake3() {
		String expected = "";
		String actual = c3.getMake();
		assertEquals(expected, actual, "error in getMake");
	}

	
	// testing getter for price
	@Test
	public void testPrice1() {
		int expected = 250000;
		int actual = c1.getPrice();
		assertEquals(expected, actual, "error in getPrice");
	}
	@Test
	public void testPrice2() {
		int expected = -10000;
		int actual = c2.getPrice();
		assertEquals(expected, actual, "error in getPrice");
	}
	@Test
	public void testPrice3() {
		int expected = 2099;
		int actual = c3.getPrice();
		assertEquals(expected, actual, "error in getPrice");
	}

	// testing getter for maxSpeed
	@Test
	public void testmaxSpeed1() {
		int expected = 210;
		int actual = c1.getMaxSpeed();
		assertEquals(expected, actual, "error in getMaxSpeed");
	}
	@Test
	public void testmaxSpeed2() {
		int expected = 130;
		int actual = c2.getMaxSpeed();
		assertEquals(expected, actual, "error in getMaxSpeed");
	}
	@Test
	public void testmaxSpeed3() {
		int expected = 99;
		int actual = c3.getMaxSpeed();
		assertEquals(expected, actual, "error in getMaxSpeed");
	}


	// testing getter for colour
	@Test
	public void testColour1() {
		String expected = "red";
		String actual = c1.getColour();
		assertEquals(expected, actual, "error in getColour");
	}
	@Test
	public void testColour2() {
		String expected = "green";
		String actual = c2.getColour();
		assertEquals(expected, actual, "error in getColour");
	}
	@Test
	public void testColour3() {
		String expected = "black";
		String actual = c3.getColour();
		assertEquals(expected, actual, "error in getColour");
	}


	// testing setter for make
	@Test
	public void testSetMake1() {
		c1.setMake("Toyota");
		String expected = "Toyota";
		String actual = c1.getMake();
		assertEquals(expected, actual, "error in setMake");
	}
	@Test
	public void testSetMake2() {
		c2.setMake("Aston Martin");
		String expected = "Aston Martin";
		String actual = c2.getMake();
		assertEquals(expected, actual, "error in setMake");
	}
	@Test
	public void testSetMake3() {
		c3.setMake("Tesla");
		String expected = "Tesla";
		String actual = c3.getMake();
		assertEquals(expected, actual, "error in setMake");
	}


    	// testing setter for price
	@Test
	public void testSetPrice1() {
		c1.setPrice(-490);
		int expected = -490;
		int actual = c1.getPrice();
		assertEquals(expected, actual, "error in setPrice");
	}
	@Test
	public void testSetPrice2() {
		c2.setPrice(0);
		int expected = 0;
		int actual = c2.getPrice();
		assertEquals(expected, actual, "error in setPrice");
	}
	@Test
	public void testSetPrice3() {
		c3.setPrice(1200);
		int expected = 1200;
		int actual = c3.getPrice();
		assertEquals(expected, actual, "error in setPrice");
	}


    // testing setter for maxSpeed
	@Test
	public void testSetMaxSpeed1() {
		c1.setMaxSpeed(100);
		int expected = 100;
		int actual = c1.getMaxSpeed();
		assertEquals(expected, actual, "error in setMaxSpeed");
	}
	@Test
	public void testSetMaxSpeed2() {
		c2.setMaxSpeed(0);
		int expected = 0;
		int actual = c2.getMaxSpeed();
		assertEquals(expected, actual, "error in setMaxSpeed");
	}
	@Test
	public void testSetMaxSpeed3() {
		c3.setMaxSpeed(120);
		int expected = 120;
		int actual = c3.getMaxSpeed();
		assertEquals(expected, actual, "error in setMaxSpeed");
	}


    	// testing setter for setColour
	@Test
	public void testSetColour1() {
		c1.setColour("orange");
		String expected = "orange";
		String actual = c1.getColour();
		assertEquals(expected, actual, "error in setColour");
	}
	@Test
	public void testSetColour2() {
		c2.setColour("");
		String expected = "";
		String actual = c2.getColour();
		assertEquals(expected, actual, "error in setColour");
	}
	@Test
	public void testSetColour3() {
		c3.setColour("white");
		String expected = "white";
		String actual = c3.getColour();
		assertEquals(expected, actual, "error in setColour");
	}


}

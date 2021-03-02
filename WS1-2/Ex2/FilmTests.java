import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/**
 * Public tests for the Film class.
 * 
 * @author Aamir Patel
 * @version 2019-10-20
 */
public class FilmTests {

	private Date date;
	private Film adAstra;

	@BeforeEach
	public void init() {
		date = new Date(18, "September", 2019);
		adAstra = new Film("Ad Astra", date, 123);
	}

	@Test
	public void test1() {
		int expectedDay = 18;
		int actualDay = adAstra.getReleaseDate().getDay();
		assertEquals(expectedDay, actualDay, "failure in test1: " + " expected day does not equal the actual day");
	}

	@Test
	public void test2() {
		String expectedMonth = "September";
		String actualMonth = adAstra.getReleaseDate().getMonth();
		assertEquals(expectedMonth, actualMonth,
				"failure in test2: " + " expected month does not equal the actual month");
	}

	@Test
	public void test3() {
		int expectedYear = 2019;
		int actualYear = adAstra.getReleaseDate().getYear();
		assertEquals(expectedYear, actualYear, "failure in test3: " + " expected year does not equal the actual year");
	}

	@Test
	public void test4() {
		Date updatedReleaseDate = new Date(03, "October", 2020);
		adAstra.setReleaseDate(updatedReleaseDate);

		String expectedDate = "3 October 2020";
		String actualDate = adAstra.getReleaseDate().toString();

		assertEquals(expectedDate, actualDate, "failure in test4: " + " expected date does not equal the actual date");
	}

	@Test
	public void test5() {
		Date updatedReleaseDate = new Date(10, "March", 2030);
		Film ironman = new Film("Iron Man", updatedReleaseDate, 180);
		ironman.setReleaseDate(new Date(28, "December", 2019));

		boolean expected = false;
		boolean actual = adAstra.getReleaseDate() == updatedReleaseDate;

		assertEquals(expected, actual, "failure in test7: " + " expected value date does not equal the actual value");

		assertFalse(ironman.getTitle().equals(adAstra.getTitle()),
				"failure in test5: " + " titles of the two films should not be the same");

		assertTrue(!ironman.getTitle().equals(adAstra.getTitle()),
				"failure in test5: " + " titles of the two films should not be the same");

		assertTrue(ironman.getReleaseDate().getDay() != adAstra.getReleaseDate().getDay(),
				"failure in test5: " + " Days of the two films should not be equal to each other");

		assertTrue(ironman.getReleaseDate().getYear() == adAstra.getReleaseDate().getYear(),
				"failure in test5: " + " Years of the two films should be equal to each other");
	}

	@Test
	public void test6() {
		Date updatedReleaseDate = new Date(29, "February", 2020);
		Film batman = new Film("Batman", updatedReleaseDate, 190);
		batman.setReleaseDate(new Date(2, "January", 2020));

		boolean expected = false;
		boolean actual = adAstra.getReleaseDate() == updatedReleaseDate;

		assertEquals(expected, actual, "failure in test7: " + " expected value date does not equal the actual value");

		assertFalse(batman.getTitle().equals(adAstra.getTitle()),
				"failure in test6: " + " titles of the two films should not be the same");

		assertTrue(!batman.getTitle().equals(adAstra.getTitle()),
				"failure in test6: " + " titles of the two films should not be the same");

		assertTrue(batman.getReleaseDate().getDay() != adAstra.getReleaseDate().getDay(),
				"failure in test6: " + " Days of the two films should not be equal to each other");
		

	}
	
}

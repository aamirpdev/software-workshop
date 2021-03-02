import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

/**
 * @author - Aamir Patel This class contains the test cases for Worksheet1
 *         solutions.
 */

public class Worksheet1Test {
	private Worksheet1 w;
	private List empty, l1, l2, l3;

	@BeforeEach
	public void beforeEach() {
		w = new Worksheet1();
		empty = new List();
		l1 = new List(1, new List(-3, new List(2, new List(5, new List()))));
		l2 = new List(3, new List(4, new List(7, new List(-10, new List()))));
		l3 = new List(22, new List(-4, new List(-8, new List())));

	}

	// test for question 1
	@Test
	public void test1() {
		int p1 = w.power(3, 0);
		int p2 = w.power(3, 5);
		int p3 = w.fastPower(5, 3);
		int fp1 = w.fastPower(3, 0);
		int fp2 = w.fastPower(3, 5);
		int fp3 = w.fastPower(5, 3);

		assertEquals(p1, 1, "error made in power ");
		assertEquals(p2, 243, "error made in power ");
		assertEquals(p3, 125, "error made in power ");
		assertEquals(p1, fp1, "error: power  does not equal fastPower ");
		assertEquals(p3, fp3, "error: power  does not equal fastPower ");
		assertEquals(p2, fp2, "error: power  does not equal fastPower ");

	}

	// test for question 2
	@Test
	public void test2() {
		List l1Negated = new List(-1, new List(3, new List(-2, new List(-5, new List()))));
		List l2Negated = new List(-3, new List(-4, new List(-7, new List(10, new List()))));

		assertEquals(w.negateAll(l1), l1Negated, "failure in negateAll ");
		assertEquals(w.negateAll(l2), l2Negated, "error in negateAll ");
		assertThrows(IllegalArgumentException.class, () -> {
			w.negateAll(empty);
		});
	}

	// test for question 3
	@Test
	public void test3() {
		assertEquals(w.find(1, l1), 0, "error in find");
		assertEquals(w.find(7, l2), 2, "error in find");

		assertThrows(IllegalArgumentException.class, () -> {
			w.find(15, l1);
		});
		assertThrows(IllegalArgumentException.class, () -> {
			w.find(0, l2);
		});

	}

	// test for question 4
	@Test
	public void test4() {
		assertTrue(w.allEven(l3), "error in allEven");

		assertThrows(IllegalArgumentException.class, () -> {
			w.allEven(empty);
		});

	}

	// test for question 5
	@Test
	public void test5() {
		assertEquals(w.evenNumbers(l1), new List(2, new List()), "error in evenNumbers");

		assertThrows(IllegalArgumentException.class, () -> {
			w.evenNumbers(empty);
		});
	}

	// test for question 6
	@Test
	public void test6() {
		assertTrue(w.sorted(l3), "error in sorted");

		assertThrows(IllegalArgumentException.class, () -> {
			w.sorted(empty);
		});
	}

	// test for question 7
	@Test
	public void test7() {
		l1 = new List(5, new List(4, new List(2, new List(1, new List()))));
		l2 = new List(10, new List(3, new List(1, new List(-10, new List()))));
		List mergedList = new List(10, new List(5,
				new List(4, new List(3, new List(2, new List(1, new List(1, new List(-10, new List()))))))));

		assertEquals(w.merge(l1, l2), mergedList, "error in merge");

	}

	// test for question 8
	@Test
	public void test8() {
		l1 = new List(5, new List(4, new List(4,
				new List(1, new List(0, new List(0, new List(-1, new List(-4, new List(-4, new List())))))))));
		l2 = new List(5, new List(4, new List(1, new List(0, new List(-1, new List(-4, new List()))))));

		assertEquals(w.removeDuplicates(l1), l2, "error in removeDuplicates");

	}
}

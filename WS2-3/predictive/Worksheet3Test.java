package predictive;

import static org.junit.Assert.assertEquals;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

public class Worksheet3Test {
	Set<String> exp1 = new HashSet<>(); // 553
	Set<String> exp2 = new HashSet<>(); // 4273
	Set<String> exp3 = new HashSet<>(); // 628
	Set<String> exp4 = new HashSet<>(); // 283
	Set<String> exp5 = new HashSet<>(); // 4663

	// Preparing expected output results.
	@Before
	public void setUp() throws Exception {
		exp1.add("jle");
		exp1.add("lld");
		exp2.add("iare");
		exp2.add("ibrd");
		exp2.add("hard");
		exp2.add("hase");
		exp2.add("gard");
		exp2.add("hare");
		exp2.add("gare");
		exp2.add("gape");
		exp3.add("mau");
		exp3.add("nat");
		exp3.add("ncv");
		exp3.add("ocu");
		exp3.add("mat");
		exp3.add("oct");
		exp3.add("nav");
		exp3.add("oau");
		exp3.add("obv");
		exp3.add("nau");
		exp3.add("oat");
		exp3.add("mcu");
		exp4.add("avd");
		exp4.add("bud");
		exp4.add("bve");
		exp4.add("aud");
		exp4.add("ave");
		exp4.add("bvd");
		exp4.add("atf");
		exp4.add("bte");
		exp4.add("buf");
		exp4.add("ctd");
		exp4.add("cue");
		exp4.add("ate");
		exp4.add("auf");
		exp4.add("cud");
		exp4.add("ctf");
		exp4.add("cte");
		exp5.add("inoe");
		exp5.add("inod");
		exp5.add("hood");
		exp5.add("inme");
		exp5.add("ione");
		exp5.add("ioof");
		exp5.add("good");
		exp5.add("hond");
		exp5.add("hooe");
		exp5.add("imme");
		exp5.add("inne");
		exp5.add("inof");
		exp5.add("gnof");
		exp5.add("gond");
		exp5.add("gooe");
		exp5.add("hone");
		exp5.add("hoof");
		exp5.add("gone");
		exp5.add("goof");
		exp5.add("home");
		exp5.add("honf");
		exp5.add("gome");
		exp5.add("gonf");
	}

	@Test
	public void Test1() throws Exception {
		assertEquals(PredictivePrototype.wordToSignature("hell"), "4355");
		assertEquals(PredictivePrototype.wordToSignature("hello World HELLO jav4"), "43556 96753 43556 528 ");
		assertEquals(PredictivePrototype.wordToSignature("c"), "2");
		assertEquals(PredictivePrototype.wordToSignature("(*#"), "   ");
		assertEquals(PredictivePrototype.signatureToWords("553"), exp1);
		assertEquals(PredictivePrototype.signatureToWords("4273"), exp2);
		assertEquals(false, PredictivePrototype.isValidWord("ghk.i"));

	}

	@Test
	public void Test2() throws Exception {
		ListDictionary ld = new ListDictionary("words");
		assertEquals(ld.signatureToWords("553"), exp1);
		assertEquals(ld.signatureToWords("4273"), exp2);
		try {
			ld.signatureToWords("463a!bc");
		} catch (IllegalArgumentException e) {
			System.out.println("Signature of wrong format");
		}
	}

	@Test
	public void Test3() throws Exception {
		MapDictionary map = new MapDictionary("words");
		assertEquals(map.signatureToWords("553"), exp1);
		assertEquals(map.signatureToWords("628"), exp3);
		MapDictionary md = new MapDictionary("words");
		Map<String, Set<String>> map1 = md.getDictionary();
		Set<String> set = map1.get("33");
		set.add("test");
		map1.put("22", set);
		assertEquals(map1.get("33"), md.getDictionary().get("33"));
		try {
			md.signatureToWords("))dsd4");
		} catch (IllegalArgumentException e) {
			System.out.println("Signature of wrong format");
		}
	}

	@Test
	public void Test4() throws Exception {
		TreeDictionary tree = new TreeDictionary("words");
		assertEquals(tree.signatureToWords("4663"), exp5);
	}

}

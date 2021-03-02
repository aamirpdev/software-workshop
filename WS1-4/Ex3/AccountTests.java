import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.util.ArrayList;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/**
 * 
 * @author Aamir Patel
 * @version 2019-11-15
 */
public class AccountTests {

  private MusicTitle musicTitle1, musicTitle2, musicTitle3;
  private AccountStandard customerAlex;
  private AccountAdministrator root;

  @BeforeEach
  public void init() {
    musicTitle1 = new MusicTitle("Reading Festival", "Green Day", 18);
    musicTitle2 = new MusicTitle("Lemonade", "Beyonce", 19);
    musicTitle3 = new MusicTitle("Believe", "Justin Bieber", 23);

    ArrayList<MusicTitleInterface> testList = new ArrayList<>();
    testList.add(musicTitle1);
    testList.add(musicTitle2);
    testList.add(musicTitle1);

    Account testCustomer = new AccountStandard("Alex", "Mr", "Alex@Alex.org", "corn");

    customerAlex = new AccountStandard("Alex", "Mr", "Alex@Alex.org", "corn");
    root = new AccountAdministrator("Christina", "Mrs", "root@admin.net", "rootpassword");
  }

  // testing musicTitle1's getTitle()
  @Test
  public void test1() {
    String expectedTitle = "Reading Festival";
    String actualTitle = musicTitle1.getTitle();
    assertEquals(expectedTitle, actualTitle, "title should be: " + expectedTitle);
  }

  // testing musicTitle1's getArtist()
  @Test
  public void test2() {
    String expectedArtist = "Green Day";
    String actualArtist = musicTitle1.getArtist();
    assertEquals(expectedArtist, actualArtist, "artist should be: " + expectedArtist);
  }

  // testing musicTitle1's getPrice()
  @Test
  public void test3() {
    int expectedPrice = 18;
    int actualPrice = musicTitle1.getPrice();
    assertEquals(expectedPrice, actualPrice, "artist should be: " + expectedPrice);
  }

  // testing customerAlex's getName()
  @Test
  public void test4() {
    String expectedName = "Alex";
    String actualName = customerAlex.getName();
    assertEquals(expectedName, actualName, "name should be: " + expectedName);
  }

  // testing customerAlex's getSalutation()
  @Test
  public void test5() {
    String expectedSalutation = "Mr";
    String actualSalutation = customerAlex.getSalutation();
    assertEquals(expectedSalutation, actualSalutation,
        "salutation should be: " + expectedSalutation);
  }

  // testing customerAlex's getEmail()
  @Test
  public void test6() {
    String expectedEmail = "Alex@Alex.org";
    String actualEmail = customerAlex.getEmail();
    assertEquals(expectedEmail, actualEmail, "email should be: " + expectedEmail);
  }

  // testing customerAlex's getBalance()
  @Test
  public void test7() {
    int expectedBalance = 0;
    int actualBalance = customerAlex.getBalance();
    assertEquals(expectedBalance, actualBalance, "balance should be: " + expectedBalance);
  }

  // testing customerAlex's getTitlesBought()
  @Test
  public void test8() {
    ArrayList<MusicTitle> expectedPurchaseList = new ArrayList<>();
    ArrayList<MusicTitle> actualPurchaseList = customerAlex.getTitlesBought();
    for (int i = 0; i < actualPurchaseList.size(); i++) {
      assertEquals(expectedPurchaseList.get(i), actualPurchaseList.get(i));
    }
  }

  // testing customerAlex's getFailedLoginAttempts()
  // @Test
  // public void test9() {
  // int expectedFailedLoginAttempts = 0;
  // int actualFailedLoginAttempts = 0;
  // assertEquals(expectedFailedLoginAttempts, actualFailedLoginAttempts,
  // "failed login attempts should be: " + expectedFailedLoginAttempts);
  // }

  // testing MAXIMAL_LOGIN_ATTEMPTS
  @Test
  public void test10() {
    int expectedMaximalLoginAttempts = 3;
    int actualMaximalLoginAttempts = AccountStandard.MAXIMAL_LOGIN_ATTEMPTS;
    assertEquals(expectedMaximalLoginAttempts, actualMaximalLoginAttempts,
        "failed login attempts should be: " + expectedMaximalLoginAttempts);
  }

  // testing MAXIMAL_LOGIN_ATTEMPTS
  @Test
  public void test11() {
    int expectedMaximalLoginAttempts = 3;
    int actualMaximalLoginAttempts = AccountStandard.MAXIMAL_LOGIN_ATTEMPTS;
    assertEquals(expectedMaximalLoginAttempts, actualMaximalLoginAttempts,
        "failed login attempts should be: " + expectedMaximalLoginAttempts);
  }

  // customerAlex logs in successfully and tries to make a purchase, which
  // fails due to insufficient funds
  @Test
  public void test12() {
    customerAlex.login("corn");
    assertTrue(customerAlex.getLoggedIn());

    customerAlex.buy(musicTitle1);
    ArrayList<MusicTitle> actualPurchaseList = customerAlex.getTitlesBought();
    assertTrue(actualPurchaseList.isEmpty());
  }

  // customerAlex logs in unsuccessfully
  @Test
  public void test13() {
    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(1, customerAlex.getFailedLoginAttempts());

    customerAlex.buy(musicTitle1);
    ArrayList<MusicTitle> actualPurchaseList = customerAlex.getTitlesBought();
    assertTrue(actualPurchaseList.isEmpty());
  }

  // customerAlex tries to log in twice unsuccessfully
  @Test
  public void test14() {
    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(1, customerAlex.getFailedLoginAttempts());

    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(2, customerAlex.getFailedLoginAttempts());

    customerAlex.buy(musicTitle1);
    ArrayList<MusicTitle> actualPurchaseList = customerAlex.getTitlesBought();
    assertTrue(actualPurchaseList.isEmpty());
  }

  // customerAlex completes a purchase successfully
  @Test
  public void test15() {
    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(1, customerAlex.getFailedLoginAttempts());

    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(2, customerAlex.getFailedLoginAttempts());

    customerAlex.login("corn");
    assertTrue(customerAlex.getLoggedIn());

    assertEquals(0, customerAlex.getFailedLoginAttempts());

    customerAlex.deposit(20);
    customerAlex.buy(musicTitle1);

    String expectedMusicTitle = "Reading Festival";
    String actualMusicTitle = customerAlex.getTitlesBought().get(0).getTitle();
    assertEquals(expectedMusicTitle, actualMusicTitle);

    String expectedArtist = "Green Day";
    String actualArtist = customerAlex.getTitlesBought().get(0).getArtist();
    assertEquals(expectedArtist, actualArtist);

    int expectedPrice = 18;
    int actualPrice = customerAlex.getTitlesBought().get(0).getPrice();
    assertEquals(expectedPrice, actualPrice);

    int expectedBalance = 2;
    int actualBalance = customerAlex.getBalance();
    assertEquals(expectedBalance, actualBalance);

    customerAlex.logout();
    assertFalse(customerAlex.getLoggedIn());

    customerAlex.deposit(20);
    expectedBalance = 22;
    actualBalance = customerAlex.getBalance();
    assertEquals(expectedBalance, actualBalance);

    customerAlex.buy(musicTitle2);
    int expectedPurchaseListSize = 1; // still 1
    int actualPurchaseListSize = customerAlex.getTitlesBought().size();

    assertEquals(expectedPurchaseListSize, actualPurchaseListSize);
  }

  // customerAlex enters wrong password three times, admin tries to reset the
  // password without logging in
  @Test
  public void test16() {
    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(1, customerAlex.getFailedLoginAttempts());

    customerAlex.login("cOrrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(2, customerAlex.getFailedLoginAttempts());

    customerAlex.login("c0rn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(3, customerAlex.getFailedLoginAttempts());

    root.resetAccount(customerAlex, "seed");
    String expectedPassword = "corn";
    assertTrue(customerAlex.checkPassword(expectedPassword));

    int expectedFailedLoginAttempts = 3;
    int actualFailLoginAttempts = customerAlex.getFailedLoginAttempts();
    assertEquals(expectedFailedLoginAttempts, actualFailLoginAttempts);
  }

  // customerAlex enters wrong password three times, admin manages to log in successfully, and
  // resets customer Alex' account successfully.
  @Test
  public void test17() {
    customerAlex.login("cOrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(1, customerAlex.getFailedLoginAttempts());

    customerAlex.login("cOrrn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(2, customerAlex.getFailedLoginAttempts());

    customerAlex.login("c0rn");
    assertFalse(customerAlex.getLoggedIn());

    assertEquals(3, customerAlex.getFailedLoginAttempts());

    root.login("rootpasssword");
    assertFalse(root.getLoggedIn());

    root.login("rootpassword");
    assertTrue(root.getLoggedIn());

    root.addAccount(customerAlex);
    String expectedAccountName = "Alex";
    String actualAccountName = root.getAccounts().get(0).getName();
    assertEquals(expectedAccountName, actualAccountName);
    assertTrue(!root.getAccounts().isEmpty());

    root.resetAccount(customerAlex, "seed");
    System.out.println(root);
    String expectedPassword = "seed";
    assertTrue(customerAlex.checkPassword(expectedPassword));

    int expectedFailedLoginAttempts = 0;
    int actualFailLoginAttempts = customerAlex.getFailedLoginAttempts();
    assertEquals(expectedFailedLoginAttempts, actualFailLoginAttempts);

    customerAlex.login("seed");
    // assertTrue(customerAlex.getLoggedIn());

    customerAlex.deposit(100);
    customerAlex.buy(musicTitle1);
    customerAlex.buy(musicTitle2);
    customerAlex.buy(musicTitle3);

    int expectedPurchaseListSize = 3;
    int actualPurchaseListSize = customerAlex.getTitlesBought().size();
    assertEquals(expectedPurchaseListSize, actualPurchaseListSize);

    String expectedTitle = "Believe";
    String expectedArtist = "Justin Bieber";
    int expectedPrice = 23
    		;

    String actualTitle = customerAlex.getTitlesBought().get(2).getTitle();
    String actualArtist = customerAlex.getTitlesBought().get(2).getArtist();
    int actualPrice = customerAlex.getTitlesBought().get(2).getPrice();
    assertEquals(expectedTitle, actualTitle);
    assertEquals(expectedArtist, actualArtist);
    assertEquals(expectedPrice, actualPrice);

    int expectedBalance = 40;
    int actualBalance = customerAlex.getBalance();
    assertEquals(expectedBalance, actualBalance);
  }

  // admin resets deputy's account successfully
  @Test
  public void test18() {
    Account deputy = new AccountAdministrator("Chris", "Mr", "chris@sysadmin.org", "cry123");
    deputy.login("ccry123");
    assertFalse(deputy.getLoggedIn());

    deputy.login("crry123");
    assertFalse(deputy.getLoggedIn());

    deputy.login("cry1123");
    assertFalse(deputy.getLoggedIn());

    root.login("rootpassword");
    assertTrue(root.getLoggedIn());

    root.addAccount(deputy);
    root.resetAccount(deputy, "cry1235");

    String expectedPassword = "cry1235";
    String actualPassword = root.getAccounts().get(0).getPassword();
    assertEquals(expectedPassword, actualPassword);

    assertFalse(deputy.getLoggedIn());
    deputy.login("cry1235");
    assertFalse(!deputy.getLoggedIn());

    deputy.changePassword("cry1235", "cry1242");
    deputy.logout();
    assertFalse(deputy.getLoggedIn());

    deputy.login("cry1242");
    assertTrue(deputy.getLoggedIn());
  }


}

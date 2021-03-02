/**
 * musictitle class implements musictitle interface provided. class uses field
 * variables title and artist of type string, price of type int
 *
 * @version 2019-11-17
 * @author Aamir Patel
 */

public class MusicTitle implements MusicTitleInterface {
	String title;
	String artist;
	int price;

	/**
	 * constructor for class
	 * 
	 * 
	 * @param title  title of the music title
	 * @param artist artist of the music title
	 * @param price  price of the music title
	 */
	public MusicTitle(String title, String artist, int price) {
		this.title = title;
		this.artist = artist;
		this.price = price;
	}

	/**
	 * getters for class
	 */

	/**
	 * @return title of music title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * 
	 * @return artist of music title
	 */
	public String getArtist() {
		return artist;
	}

	/**
	 * 
	 * @return price of music title
	 */
	public int getPrice() {
		return price;
	}

	/**
	 * 
	 * toString method prints values of class in readable format for humans
	 * 
	 * @return title, artist, price of music title
	 */
	public String toString() {
		return "The title of the music song is " + title + "The artist of the music title is  " + artist
				+ " and the price of the music title is" + price;
	}
}

/**
 *   Film is a class to store film data with the fields title of type String, 
 *   releaseDate of type Date, and length of type int.
 *   @author Aamir Patel
 *   @version   2019-10-19
 */
public class Film {
	private String title;
	private Date releaseDate;
	private int length;
	
	   /** Film is a constructor reusing all three field variables as parameters
     *  @param  title The name of the film 
     *  @param  releaseDate The release date of the film
     *  @param 	length The length of the film in minutes
     */
	public Film (String title, Date releaseDate, int length) {
		this.title = title;
		this.releaseDate = releaseDate;
		this.length = length;
	}
	
    /* Now we write methods to get the parts of a film,
     * so called accessor methods.
     */

    /** 
     *  @return the title of a Film as a String
     */
	public String getTitle() {
		return title;
	}
	
	/** 
     *  @return the release date of a Film as a Date
     */
	public Date getReleaseDate() {
		return releaseDate;
	}
	
	/** 
     *  @return the length of a Film as an int
     */
	public int getLength() {
		return length;
	}
	
    /* Now we write methods to set the parts of a film,
     * so called setters.
     */
	
	/** 
     *  @return sets the release date of Film
     */
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	
    /** toString defines how to print a Film
     *  
     *  @return  the Film data is a readable format
     */
	@Override
	public String toString() {
		return "The title of the film is: " + title + ". The release date is: " + releaseDate + ". The length of the movie is: " + length;
			
				
	}
	
	public static void main(String[] args) {
		
		Date releaseDate = new Date(18, "September", 2019);
		// This creates a releaseDate initially on the "18 September 2019"
		
		Film adAstra = new Film("Ad Astra", releaseDate, 123);
		// This creates a Film
        // initial name Ad Astra
		// initial releaseDate as above comment (line 73)
		// initial length of 123 minutes
	}
}

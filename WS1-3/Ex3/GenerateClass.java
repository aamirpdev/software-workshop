
/**
 * This class generates from the field variable a constructor, setters and getters
 * and creates a rudimentary class
 * @author Aamir Patel
 * @version 2019-11-03
 */

import java.io.FileWriter;
import java.io.IOException;

public class GenerateClass {

	private String classname;
	private String[] variableNames;
	private String[] variableTypes;

	/**
	 * GenerateClass is constructor for the class
	 * 
	 * @param classname, classname as a String
	 * @param variableNames, list of field variable names
	 * @param variableTypes, list of field variable types
	 */
	public GenerateClass(String classname, String[] variableNames, String[] variableTypes) {
		this.classname = classname;
		this.variableNames = variableNames;
		this.variableTypes = variableTypes;
	}

	/**
	 * method makeFields, returns a string with a declaration of the corresponding field variables
	 * @return String, with the declaration of the corresponding field variables
	 */
	
	public String makeFields() {
		String s = "";
		for (int i = 0; i < variableNames.length; i++) {
			s += "  private " + variableTypes[i] + " " + variableNames[i] + ";\n" ;
		}
		return s + "\n";
	}

	/**
	 * method makeConstructor, returns a String with a corresponding constructor
	 * @return a String with a corresponding constructor
	 */
	public String makeConstructor() {
		String s = "  public " + classname + "(";

		if (variableNames.length == 0) {
			return s + "){}\n";
		}

		for (int i = 0; i < variableNames.length; i++) {
			s += variableTypes[i] + " " + variableNames[i] + ", ";
		}

		s = s.substring(0, s.length() - 2);

		s += "){";

		for (int i = 0; i < variableNames.length; i++) {
			s += "\n    this." + variableNames[i] + " = " + variableNames[i] + ";";
		}
		
		s += "\n  ";
		
		s += "}\n";
		
		return s;
	}

	/**
	 * method makeGetters, returns a string with all getters in order given by variableNames/varaibleTypes 
	 * @return a String with all getters in order given by variableNames/varaibleTypes 
	 */
	
	public String makeGetters() {
		String s = "";
		for (int i = 0; i < variableNames.length; i++) {
			s += "  public " + variableTypes[i] + " get" + variableNames[i].substring(0, 1).toUpperCase()
					+ variableNames[i].substring(1, variableNames[i].length()) + "(){\n" + "    return "
					+ variableNames[i] + ";\n  }\n";
		}

		return s;
	}

	/**
	 * 
	 * @return a String with all setters
	 */
	public String makeSetters() {
		String s = "";
		
		for (int i = 0; i < variableNames.length; i++) {
			s += "  public void set" + variableNames[i].substring(0, 1).toUpperCase()
					+ variableNames[i].substring(1, variableNames[i].length()) + "(" + variableTypes[i] + " "
					+ variableNames[i] + "){\n" + "    this." + variableNames[i] + " = " + variableNames[i]
					+ ";\n  }\n";
		}
		
	
		return s;
	}

	/**
	 * method writeFile creates rudimentary class using the makeFields,
	 * makeConstructor, makeGetters and makeSetters methods previously created
	 */
	
	public void writeFile() {
		String s = "public class " + classname + "{\n" + makeFields() + makeConstructor()
		+ makeGetters()+ makeSetters() + "}" ;

		try {
			FileWriter myWriter = new FileWriter(classname + ".java");
			myWriter.write(s);
			myWriter.close();
			
		} 
		
		catch (IOException e) {
			System.out.println("You have made an error.");
		}
		
	}
	
}
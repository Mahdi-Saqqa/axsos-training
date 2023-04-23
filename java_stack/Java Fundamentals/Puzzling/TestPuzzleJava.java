import java.util.Arrays;
import java.util.ArrayList;
public class TestPuzzleJava {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);	
    	System.out.println(generator.getRandomLetter());   
    	System.out.println(PuzzleJava.getRandomLetter());   
    	System.out.println(generator.getNewPasswordSet(8));
		System.out.println(PuzzleJava.generatePassword());
		int [] shuffle = {4,5,7,9,1};
        System.out.println(Arrays.toString(generator.shuffleArray(shuffle)));

	}
}

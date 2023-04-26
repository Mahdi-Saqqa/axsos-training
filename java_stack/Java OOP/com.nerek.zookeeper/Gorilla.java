public class Gorilla extends Mammal {
    
    public void throwThings(){
        System.out.println("Gorilla throw");
        this.energyLevel-=5;
        System.out.println("Gorilla energy level: "+this.energyLevel);

    }
    public void eatBanana(){
        System.out.println("Gorilla eat banana");
        this.energyLevel+=10;
        System.out.println("Gorilla energy level: "+this.energyLevel);

    }
    public void climp(){
        System.out.println("Gorilla Climb");
        this.energyLevel-=10;
        System.out.println("Gorilla energy level: "+this.energyLevel);
    }
}

public class Bat  extends Mammal {
    public Bat(){
        System.out.println("I'm a bat");
        super.energyLevel=300;
    }
    public void fly(){
        System.out.println("I'm flying");
        energyLevel-=50;
        System.out.println("I have "+energyLevel+" energy left");
    }
    public void eatHuman(){
        System.out.println("I'm eating Human");
        energyLevel+=25;
        System.out.println("I have "+energyLevel+" energy left");
    
    }
    public void attackTown(){
        System.out.println("I'm attacking Town");
        energyLevel-=100;
        System.out.println("I have "+energyLevel+" energy left");
    }
}
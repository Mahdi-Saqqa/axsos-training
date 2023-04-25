package com.nerek.caranddriver;

public class Diver extends Car {
    
    public void driving(){
        if(gas>0){
            gas-=1;
            System.out.println("Remaining Gas: "+gas+"/10");
        }
        if(gas<=0){
            System.out.println("Game Over");
        }
    }
    public void boosters(){
        if (gas>=3){
            gas-=3;
            System.out.println("Remaining Gas: "+gas+"/10");
            if(gas<=0){
                System.out.println("Game Over");
            }
        }
        else{
            System.out.println("No enought Gas");
            System.out.println("Remaining Gas: "+gas+"/10");

        }
    }
    public void refueling(){
        if(gas>8){
            System.out.println("Car already fueled");
            System.out.println("Remaining Gas: "+gas+"/10");
        }
        else{
            gas+=2;
            System.out.println("You fueled the car and have : "+gas+"/10");
        }
    }

}

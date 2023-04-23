import java.util.ArrayList;


public class Order{
    private String name;
    private boolean ready=false;
    ArrayList<Item> items=new ArrayList<Item>();

    Order(){
        this.name="Guest";
    }

    Order(String name){
        this.name=name;
    }

    void addItem (Item item){
            this.items.add(item);
    }
    void addItem(Item item,int number){
        for(int i=1;i<=number;i++){
            this.items.add(item);
        }
    }

    void setReady(){
        this.ready=true;
    }
    String getStatusMessage(){
        if(this.ready){
            return "Your order is ready";
        }
        else{
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    double getOrderTotal(){
        double total=0;
        for(Item item:items){
            total+=item.getPrice();
        }
        return total;
    }

    void display(){
        System.out.println("Custemer Name: "+this.name);
        for(Item item:items){
            System.out.println(item.getName()+" _ $"+item.getPrice());
        }
        System.out.println("Total: $"+this.getOrderTotal());
    }

}
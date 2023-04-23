import java.util.ArrayList;


public class Order{
    String name;
    double total;
    boolean ready;
    ArrayList<Item> items=new ArrayList<Item>();

    public Order(String name){
        this.name=name;
        this.ready=false;
        this.total=0;
    }
    public void addItemToOrder(Item item){
        this.items.add(item);
        total=total+item.price;
    }
    public void addItemToOrder(Item item,int number){
        for(int i=1;i<=number;i++){
            this.items.add(item);
            total=total+item.price;
        }
    }
    public void finishOrder(){
        System.out.println(String.format("%s order is ready now and totale is $%.2f",this.name,this.total));
        this.ready=true;

    }


}
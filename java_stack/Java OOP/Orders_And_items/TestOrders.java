import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        // Menu items
        
        // Order variables -- order1, order2 etc.
        Item item1 = new Item("Mocha", 12);
        Item item2 = new Item("Latte", 15);
        Item item3 = new Item("Drip Coffee", 18);
        Item item4 = new Item("Capuccino", 10);
        Order order1 =new Order("Cindhuri");
        Order order2 =new Order("Jimmy");
        Order order3 =new Order("Noah");
        Order order4 =new Order("Sam");
        order2.addItemToOrder(item1);
        order3.addItemToOrder(item4);
        order4.addItemToOrder(item2);
        order4.addItemToOrder(item2, 2);
        order4.finishOrder();
        order2.finishOrder();


    }
}

public class TestOrders {
    public static void main(String[] args) {

        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order("Hussam");
        Order order4 = new Order("Mahdi");
        Order order5 = new Order("Shadeed");
        Item item1 = new Item("Mocha", 12);
        Item item2 = new Item("Latte", 15);
        Item item3 = new Item("Drip Coffee", 18);
        Item item4 = new Item("Capuccino", 10);
        order1.addItem(item1);
        order1.addItem(item2);
        order2.addItem(item2);
        order2.addItem(item3);
        order3.addItem(item3);
        order3.addItem(item4);
        order4.addItem(item4);
        order4.addItem(item1);
        order5.addItem(item1);
        order5.addItem(item3);
        order1.setReady();
        order3.setReady();
        order4.setReady();
        order1.getStatusMessage();
        order2.getStatusMessage();
        order3.getStatusMessage();
        System.out.println(order1.getOrderTotal());
        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();

    }
}

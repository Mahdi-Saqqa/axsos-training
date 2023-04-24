import java.util.ArrayList;

class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;
    public CoffeeKiosk(){
        menu = new ArrayList<Item>();
        orders = new ArrayList<Order>();
    }
    public void addMenuItem(String itemName,double itemPrice){
        Item newItem = new Item(itemName, itemPrice);
        menu.add(newItem);
        newItem.setIndex(menu.indexOf(newItem));
    }
    public void displayMenu(){
        for(Item item:menu){
            System.out.println(item.getIndex()+" -- "+item.getName() +" -- "+item.getPrice());
        }
    }

    public void newOrder() {
        
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
    	// Your code:
        // Create a new order with the given input string
        Order newOrder = new Order(name);
        orders.add(newOrder);
        // Show the user the menu, so they can choose items to add.
        this.displayMenu();
    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");

        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {

            // Get the item object from the menu, and add the item to the order
            Item item = menu.get(Integer.parseInt(itemNumber));
            newOrder.addItem(item);
            System.out.println("Please enter a menu item index or q to quit:");

            itemNumber = System.console().readLine();
            // Ask them to enter a new item index or q again, and take their input

        }
        // After you have collected their order, print the order details 
    	// as the example below. You may use the order's display method.
        newOrder.display();
        
    }
}


import java.util.ArrayList;

public class CafeUtil {
    public static int getStreakGoal(){
        int sum=0;
        for(int i=1;i<=10;i++){
            sum=sum+i;
        }
        return sum;
    }
    public static double getOrderTotal(double[] prices){
        double total=0;
        for(Double item : prices){
            total=total+item;
        }
        return total;
    }
    public static void displayMenu(ArrayList<String> menuItems){
        int i=0;
        for(String item : menuItems){
            System.out.println(i+" "+item);
            i++;
        }
    }
    public static void addCustomer(ArrayList<String> customers){
        String userName="s";
        while(!userName.equals("q")) {
            System.out.println("Please enter your name:");
            userName = System.console().readLine();
            System.out.println("Hello, "+userName);
            int num = customers.size();
            System.out.println(String.format("There are %d people in front of you", num));
            for(String item : customers){
                System.out.print(item+" | ");
            }
            customers.add(userName);
        }
    }
    public static void printPriceChart(String product, double price, int maxQuantity){
        double pricesum=0;
        System.out.println(product);
        for(int i=1;i<=maxQuantity;i++){
            pricesum=pricesum+price;
            System.out.println(String.format("%d - $%.2f",i,pricesum));
            pricesum-=0.5;
        }
    }
    public static boolean displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices){
        int i=0;
        for(String item : menuItems){
            System.out.println(i+" "+item+" $"+prices.get(i));
            i++;
        }
        return true;
    }
}

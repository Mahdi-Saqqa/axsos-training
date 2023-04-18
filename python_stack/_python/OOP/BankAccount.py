class BankAccount:
    def __init__(self,amount=0,rate=0.01):
        self.balance=amount
        self.interest=rate
        
    def withdrawal(self,amount):
        if self.balance>=amount:
            self.balance -=amount
        else:
            print('Insufficient funds: Charging a $5 fee')
            self.balance -=5
        return self
        
    def deposit(self,amount):
        self.balance+=amount    
        return self
    def display_account_info(self):
        print('Account Balance: $',self.balance)
        print('Interest Rate: ',self.interest)
        return self
    def yield_interest(self):
        if self.balance >0:
            self.balance+=(self.balance*self.interest)
        return self
        

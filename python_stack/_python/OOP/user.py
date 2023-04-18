from BankAccount import BankAccount
class user:
    def __init__(self,name,email,starting_balance):
        self.name=name
        self.email=email
        self.account=[BankAccount(rate=0.02,amount=starting_balance)]
        
    def withdrawal(self,amount,account_number=0):
        self.account[account_number].balance -=amount
        return self
        
    def deposit(self,amount,account_number=0):
        self.account[account_number].balance+=amount
        return self

    def transfer_money(self, other_user, amount,account_number=0):
        if self.account[account_number].balance >=amount:
            self.account[account_number].balance -=amount
            other_user.account[0].balance+=amount
        else:print('insuficunt balance')
        return self

    def display_user_balance(self,account_number=0):
        print(self.account[account_number].balance)
        return self

    def add_account(self,amount):
        self.account.append(BankAccount(rate=0.02, amount=amount))
        return self
    
    
mahdi=user('mahdi','mahdi.saqqa@gmail.com',200)

mussa=user('mussa','mussa.yamak@gmail.comn',600)

hussam=user('husssam','hussam@gmail.com',4000)


mahdi.deposit(400,0).deposit(700,0).deposit(1200,0).withdrawal(2000,0).display_user_balance(0)

mussa.deposit(700,0).deposit(40000,0).withdrawal(32000,0).withdrawal(4000,0).display_user_balance(0)

hussam.deposit(40000,0).withdrawal(2000,0).withdrawal(4000,0).withdrawal(12000,0).display_user_balance(0)

hussam.display_user_balance(0)
mahdi.add_account(amount=500)
mahdi.transfer_money(hussam,800,1)
mahdi.display_user_balance(1)


class Underscore:
    def map(self, iterable, callback):
        # your code here
        for i in range(len(iterable)):
            iterable[i] = callback(iterable[i])
        return iterable
    def find(self, iterable, callback):
        # your code here
        for i in range(len(iterable)):
            if callback(iterable[i]):
                return iterable[i]
        return False
    
    def filter(self, iterable, callback):
        # your code
        arr=[]
        for i in range(len(iterable)):
            if callback(iterable[i]):
                arr.append(iterable[i])
        return arr
    def reject(self, iterable, callback):
        # your code
        arr=[]
        for i in range(len(iterable)):
            if callback(iterable[i]):
                pass
            else:
                arr.append(iterable[i])
        return arr
        
# you just created a library with 4 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
double=_.map([1, 2, 3, 4, 5, 6], lambda x: x * 2)
found=_.find([1, 2, 3, 4, 5, 6], lambda x: x % 2==0)
odds = _.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
# should return [2, 4, 6] after you finish implementing the code above
print(odds)


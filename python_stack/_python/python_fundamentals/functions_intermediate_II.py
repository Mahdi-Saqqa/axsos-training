""" 
1_
x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]


x[1][0]=15
students[0]['last_name']='bryant'
sports_directory['soccer'][0]='Andres'
z[0]['y']=30
print(x)
print(students)
print(sports_directory)
print(z)
"""


"""
2_ 
def iterateDictionary(students):
    for student in (students):
        print('first_name - '+student['first_name']+', last_name - '+student['last_name'])
        
        
        
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary(students)  """


""" 
3_
def iterateDictionary2(key_name, some_list):
    for dict in some_list:
        print(dict[key_name])



students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students) """


""" 
4_
def printInfo(dojos):
    for key,value in dojos.items():
        print(len(value),key)
        for i in value:
            print(i)

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo) """
// Brighter Path — lesson content
// Question types:
//   mc   : {t:'mc', q, code?, opts:[...], a:index, hint?}
//   type : {t:'type', q, code?, a:[accepted answers], kb?:'it'|'tr'|'ru', hint?}
window.CONTENT = {

python: {
  name: 'Python', icon: 'icon_python.png', landmark: 'landmark_python.png', color: '#f5c542',
  units: [
    { title: 'Python Basics', topics: ['print', 'variables', 'data types'], lessons: [
      { title: 'print & strings', qs: [
        {t:'mc', q:'What does this print?', code:'print("Hi" + " " + "cat")', opts:['Hi cat','Hicat','Hi + cat','error'], a:0},
        {t:'mc', q:'What does this print?', code:'print("ab" * 3)', opts:['ababab','ab3','abab','error'], a:0, hint:'Multiplying a string repeats it.'},
        {t:'type', q:'Write the code to print the number 42 (no quotes needed).', a:['print(42)'], hint:'print( ... )'},
        {t:'mc', q:'What does this print?', code:'print(len("hello"))', opts:['5','4','6','hello'], a:0},
        {t:'mc', q:'Which line prints a blank line?', opts:['print()','print(" ")','print(blank)','blank()'], a:0},
      ]},
      { title: 'variables', qs: [
        {t:'mc', q:'What does this print?', code:'x = 5\nx = x + 2\nprint(x)', opts:['7','5','x + 2','52'], a:0},
        {t:'mc', q:'Which is NOT a valid variable name?', opts:['2cats','cats2','_cats','cats_2'], a:0, hint:'Names cannot start with a digit.'},
        {t:'mc', q:'What does this print?', code:'a = "3"\nb = "4"\nprint(a + b)', opts:['34','7','"3""4"','error'], a:0, hint:'Both are strings, so + joins them.'},
        {t:'mc', q:'What does this print?', code:'a, b = 1, 2\na, b = b, a\nprint(a, b)', opts:['2 1','1 2','2 2','error'], a:0},
        {t:'type', q:'Assign the string cat to a variable called pet.', a:['pet = "cat"',"pet = 'cat'",'pet="cat"',"pet='cat'"], hint:'Strings need quotes.'},
      ]},
      { title: 'data types', qs: [
        {t:'mc', q:'What is type(3.0)?', opts:['float','int','str','double'], a:0},
        {t:'mc', q:'What does this print?', code:'print(7 / 2)', opts:['3.5','3','4','3.0'], a:0, hint:'/ always gives a float.'},
        {t:'mc', q:'What does this print?', code:'print(7 // 2, 7 % 2)', opts:['3 1','3.5 1','3 0','1 3'], a:0, hint:'// floors, % is the remainder.'},
        {t:'mc', q:'What does this print?', code:'print(int("12") + 1)', opts:['13','121','"13"','error'], a:0},
        {t:'mc', q:'What does this print?', code:'print(bool(0), bool(""), bool("0"))', opts:['False False True','False False False','True True True','False True True'], a:0, hint:'A non-empty string is truthy, even "0".'},
      ]},
      { title: 'string tricks', qs: [
        {t:'mc', q:'What does this print?', code:'s = "python"\nprint(s[0], s[-1])', opts:['p n','p y','n p','error'], a:0},
        {t:'mc', q:'What does this print?', code:'s = "python"\nprint(s[1:4])', opts:['yth','ytho','pyt','yt'], a:0, hint:'Slice stops BEFORE the end index.'},
        {t:'mc', q:'What happens?', code:'s = "cat"\ns[0] = "b"\nprint(s)', opts:['TypeError','bat','cat','bcat'], a:0, hint:'Strings are immutable.'},
        {t:'mc', q:'What does this print?', code:'s = "cat"\nt = s.upper()\nprint(s, t)', opts:['cat CAT','CAT CAT','cat cat','CAT cat'], a:0, hint:'.upper() returns a NEW string; s is unchanged.'},
        {t:'mc', q:'What does this print?', code:'print("a,b,c".split(","))', opts:["['a', 'b', 'c']","'a' 'b' 'c'","a b c","('a','b','c')"], a:0},
      ]},
      { title: 'input & f-strings', qs: [
        {t:'mc', q:'input() always returns which type?', opts:['str','int','float','depends'], a:0},
        {t:'mc', q:'What does this print?', code:'name = "Allie"\nprint(f"Hi {name}!")', opts:['Hi Allie!','Hi {name}!','Hi name!','error'], a:0},
        {t:'mc', q:'What does this print?', code:'n = 3\nprint(f"{n * 2} cats")', opts:['6 cats','{n * 2} cats','3 * 2 cats','error'], a:0},
        {t:'mc', q:'Which converts the user input to a number?', opts:['int(input())','input(int())','input().int()','number(input())'], a:0},
        {t:'mc', q:'What does this print?', code:'print(round(2.675, 2))', opts:['2.67','2.68','2.7','3'], a:0, hint:'Floating point surprise: 2.675 is stored slightly below 2.675.'},
      ]},
    ]},
    { title: 'Control Flow', topics: ['conditionals', 'loops', 'functions'], lessons: [
      { title: 'if / elif / else', qs: [
        {t:'mc', q:'What does this print?', code:'x = 10\nif x > 5:\n    print("big")\nelif x > 8:\n    print("huge")\nelse:\n    print("small")', opts:['big','huge','big huge','small'], a:0, hint:'Only the first true branch runs.'},
        {t:'mc', q:'What does this print?', code:'x = 0\nif x:\n    print("yes")\nelse:\n    print("no")', opts:['no','yes','0','error'], a:0},
        {t:'mc', q:'What does this print?', code:'a = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)', opts:['True False','True True','False False','False True'], a:0, hint:'== compares values, is compares identity.'},
        {t:'mc', q:'What does this print?', code:'print(3 < 5 < 4)', opts:['False','True','error','4'], a:0, hint:'Chained comparison: 3<5 and 5<4.'},
        {t:'mc', q:'What does this print?', code:'print(not 1 == 2)', opts:['True','False','error','None'], a:0},
      ]},
      { title: 'for loops', qs: [
        {t:'mc', q:'What does this print?', code:'for i in range(3):\n    print(i, end=" ")', opts:['0 1 2','1 2 3','0 1 2 3','1 2'], a:0},
        {t:'mc', q:'What does this print?', code:'total = 0\nfor n in [1, 2, 3]:\n    total += n\nprint(total)', opts:['6','123','3','0'], a:0},
        {t:'mc', q:'What does this print?', code:'for i in range(1, 10, 4):\n    print(i, end=" ")', opts:['1 5 9','1 4 8','1 5','0 4 8'], a:0},
        {t:'mc', q:'What does this print?', code:'for c in "hey":\n    print(c.upper(), end="")', opts:['HEY','hey','H E Y','error'], a:0},
        {t:'mc', q:'What does this print?', code:'for i in range(5):\n    if i == 2:\n        break\n    print(i, end=" ")', opts:['0 1','0 1 2','0 1 3 4','2'], a:0},
      ]},
      { title: 'while & loop traps', qs: [
        {t:'mc', q:'What does this print?', code:'n = 3\nwhile n > 0:\n    n -= 1\nprint(n)', opts:['0','-1','3','1'], a:0},
        {t:'mc', q:'What does this print?', code:'for i in range(3):\n    pass\nprint(i)', opts:['2','3','0','error'], a:0, hint:'The loop variable survives after the loop.'},
        {t:'mc', q:'What does this print?', code:'nums = [1, 2, 3]\nfor n in nums:\n    n = n * 2\nprint(nums)', opts:['[1, 2, 3]','[2, 4, 6]','[1, 2, 3, 2, 4, 6]','error'], a:0, hint:'Rebinding n does not touch the list.'},
        {t:'mc', q:'What does this print?', code:'for i in range(3):\n    if i == 1:\n        continue\n    print(i, end=" ")', opts:['0 2','0 1 2','0','1'], a:0},
        {t:'mc', q:'What does this print?', code:'for i in range(2):\n    print(i)\nelse:\n    print("done")', opts:['0 1 done (on 3 lines)','0 1','done','error'], a:0, hint:'for-else runs else when the loop was not broken.'},
      ]},
      { title: 'functions', qs: [
        {t:'mc', q:'What does this print?', code:'def add(a, b=2):\n    return a + b\nprint(add(3))', opts:['5','3','error','32'], a:0},
        {t:'mc', q:'What does this print?', code:'def f():\n    print("hi")\nx = f()\nprint(x)', opts:['hi then None','hi','None','hi then hi'], a:0, hint:'No return means the function returns None.'},
        {t:'mc', q:'What does this print?', code:'def f(x):\n    x = x + 1\nn = 5\nf(n)\nprint(n)', opts:['5','6','error','None'], a:0, hint:'Ints are immutable; x is a local name.'},
        {t:'mc', q:'What does this print?', code:'def f(lst):\n    lst.append(9)\nn = [1]\nf(n)\nprint(n)', opts:['[1, 9]','[1]','[9]','error'], a:0, hint:'Lists are mutable and shared through the parameter (aliasing).'},
        {t:'mc', q:'What does this print?', code:'def f(x, y):\n    return x * y\nprint(f(y=2, x=3))', opts:['6','error','23','32'], a:0},
      ]},
    ]},
    { title: 'Collections', topics: ['lists', 'dicts', 'comprehensions'], lessons: [
      { title: 'list aliasing', qs: [
        {t:'mc', q:'What does this print?', code:'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)', opts:['[1, 2, 3, 4]','[1, 2, 3]','error','[4]'], a:0, hint:'b = a makes b another name for the SAME list.'},
        {t:'mc', q:'What does this print?', code:'a = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)', opts:['[1, 2, 3]','[1, 2, 3, 4]','error','[]'], a:0, hint:'a[:] makes a copy.'},
        {t:'mc', q:'What does this print?', code:'a = [1, 2]\nb = a\na = a + [3]\nprint(b)', opts:['[1, 2]','[1, 2, 3]','error','[3]'], a:0, hint:'a + [3] builds a NEW list; b still points at the old one.'},
        {t:'mc', q:'What does this print?', code:'a = [1, 2]\nb = a\na += [3]\nprint(b)', opts:['[1, 2, 3]','[1, 2]','error','[3]'], a:0, hint:'+= on a list mutates in place (extend).'},
        {t:'mc', q:'What does this print?', code:'x = [[0] * 2] * 2\nx[0][0] = 9\nprint(x)', opts:['[[9, 0], [9, 0]]','[[9, 0], [0, 0]]','[[9, 9], [0, 0]]','error'], a:0, hint:'The outer * copies references to the same inner list.'},
      ]},
      { title: 'list methods', qs: [
        {t:'mc', q:'What does this print?', code:'a = [3, 1, 2]\nb = a.sort()\nprint(b)', opts:['None','[1, 2, 3]','[3, 1, 2]','error'], a:0, hint:'.sort() sorts in place and returns None.'},
        {t:'mc', q:'What does this print?', code:'a = [3, 1, 2]\nb = sorted(a)\nprint(a, b)', opts:['[3, 1, 2] [1, 2, 3]','[1, 2, 3] [1, 2, 3]','[3, 1, 2] None','error'], a:0},
        {t:'mc', q:'What does this print?', code:'a = [1, 2, 3, 4]\nprint(a[::-1])', opts:['[4, 3, 2, 1]','[1, 2, 3, 4]','[1, 3]','error'], a:0},
        {t:'mc', q:'What does this print?', code:'a = [1, 2, 3]\na.pop()\nprint(a, len(a))', opts:['[1, 2] 2','[2, 3] 2','[1, 2, 3] 3','[1, 2] 3'], a:0},
        {t:'mc', q:'What does this print?', code:'a = [1, 2, 3]\nprint(a.index(2), 5 in a)', opts:['1 False','2 False','1 True','2 True'], a:0},
      ]},
      { title: 'comprehension order', qs: [
        {t:'mc', q:'What does this print?', code:'print([x * 2 for x in range(4)])', opts:['[0, 2, 4, 6]','[2, 4, 6, 8]','[0, 1, 2, 3]','[2, 4, 6]'], a:0},
        {t:'mc', q:'What does this print?', code:'print([x for x in range(6) if x % 2 == 0])', opts:['[0, 2, 4]','[1, 3, 5]','[2, 4]','[0, 2, 4, 6]'], a:0, hint:'Order is: expression, for, if.'},
        {t:'mc', q:'Which is the correct order for a comprehension?', opts:['[expr for x in xs if cond]','[for x in xs expr if cond]','[expr if cond for x in xs]','[if cond expr for x in xs]'], a:0},
        {t:'mc', q:'What does this print?', code:'print([a + b for a in "xy" for b in "12"])', opts:["['x1', 'x2', 'y1', 'y2']","['x1', 'y1', 'x2', 'y2']","['xy12']","error"], a:0, hint:'The first for is the OUTER loop.'},
        {t:'mc', q:'What does this print?', code:'print(["odd" if x % 2 else "even" for x in range(3)])', opts:["['even', 'odd', 'even']","['odd', 'even', 'odd']","error","['even', 'even', 'even']"], a:0, hint:'if/else BEFORE the for is a conditional expression, not a filter.'},
      ]},
      { title: 'dictionaries', qs: [
        {t:'mc', q:'What does this print?', code:'d = {"a": 1, "b": 2}\nprint(d["b"])', opts:['2','1','b','error'], a:0},
        {t:'mc', q:'What does this print?', code:'d = {"a": 1}\nprint(d.get("z", 0))', opts:['0','None','error','1'], a:0},
        {t:'mc', q:'What does this print?', code:'d = {}\nd["x"] = 1\nd["x"] += 1\nprint(d)', opts:["{'x': 2}","{'x': 1}","{'x': 11}","error"], a:0},
        {t:'mc', q:'What does this print?', code:'d = {"a": 1, "b": 2}\nfor k in d:\n    print(k, end="")', opts:['ab','12','a1b2','error'], a:0, hint:'Iterating a dict gives its keys.'},
        {t:'mc', q:'What does this print?', code:'d = {"a": 1, "b": 2}\nprint(list(d.items())[0])', opts:["('a', 1)","['a', 1]","a","1"], a:0},
      ]},
    ]},
  ]
},

sql: {
  name: 'SQL', icon: 'icon_sql.png', landmark: 'landmark_sql.png', color: '#9db4d6',
  table: 'cats(id, name, age, colour, city)',
  units: [
    { title: 'SELECT Basics', topics: ['SELECT', 'WHERE', 'ORDER BY'], lessons: [
      { title: 'SELECT', qs: [
        {t:'mc', q:'Which query returns every column of the cats table?', opts:['SELECT * FROM cats;','SELECT all FROM cats;','GET * FROM cats;','SELECT cats;'], a:0},
        {t:'type', q:'Write a query that returns only the name column from cats.', a:['select name from cats','select name from cats;'], hint:'SELECT column FROM table;'},
        {t:'mc', q:'Which returns name and age?', opts:['SELECT name, age FROM cats;','SELECT name age FROM cats;','SELECT (name and age) FROM cats;','SELECT name + age FROM cats;'], a:0},
        {t:'mc', q:'SQL keywords like SELECT are…', opts:['case-insensitive','always uppercase','always lowercase','only valid in uppercase'], a:0},
        {t:'mc', q:'What does SELECT DISTINCT colour FROM cats; do?', opts:['Lists each colour once','Lists the first colour','Counts the colours','Sorts by colour'], a:0},
      ]},
      { title: 'WHERE', qs: [
        {t:'mc', q:'Which returns cats older than 3?', opts:['SELECT * FROM cats WHERE age > 3;','SELECT * FROM cats IF age > 3;','SELECT * WHERE age > 3 FROM cats;','SELECT * FROM cats age > 3;'], a:0},
        {t:'mc', q:'How do you compare a text value?', opts:["WHERE colour = 'white'",'WHERE colour = white','WHERE colour == "white"','WHERE colour IS white'], a:0, hint:'Text goes in single quotes.'},
        {t:'type', q:'Return all columns of cats living in Milan (city is text).', a:["select * from cats where city = 'milan'","select * from cats where city = 'milan';","select * from cats where city='milan'","select * from cats where city='milan';"], hint:"WHERE city = '...'"},
        {t:'mc', q:'Which means "not equal" in SQL?', opts:['<>','=!','!==','NOT ='], a:0, hint:'!= also works in most databases.'},
        {t:'mc', q:'Cats aged 2 to 5 inclusive:', opts:['WHERE age BETWEEN 2 AND 5','WHERE age IN 2..5','WHERE 2 < age < 5','WHERE age FROM 2 TO 5'], a:0},
      ]},
      { title: 'AND, OR, LIKE', qs: [
        {t:'mc', q:'White cats older than 2:', opts:["WHERE colour = 'white' AND age > 2","WHERE colour = 'white', age > 2","WHERE colour = 'white' & age > 2","WHERE colour = 'white' OR age > 2"], a:0},
        {t:'mc', q:'Which cats does this match?', code:"WHERE name LIKE 'M%'", opts:['Names starting with M','Names containing M','Names ending with M','Exactly "M%"'], a:0, hint:'% matches any number of characters.'},
        {t:'mc', q:'Which cats does this match?', code:"WHERE name LIKE '_ia'", opts:['3-letter names ending in ia','Names containing ia','Names ending in ia','Names starting with _'], a:0, hint:'_ matches exactly one character.'},
        {t:'mc', q:'Cats in Rome or Milan:', opts:["WHERE city IN ('Rome', 'Milan')","WHERE city = 'Rome', 'Milan'","WHERE city = ('Rome' OR 'Milan')","WHERE city HAS ('Rome','Milan')"], a:0},
        {t:'mc', q:'Cats with no recorded city:', opts:['WHERE city IS NULL','WHERE city = NULL','WHERE city == NULL',"WHERE city = ''"], a:0, hint:'NULL is never equal to anything; use IS NULL.'},
      ]},
      { title: 'ORDER BY & LIMIT', qs: [
        {t:'mc', q:'Oldest cats first:', opts:['ORDER BY age DESC','ORDER BY age ASC','SORT BY age DESC','ORDER age DOWN'], a:0},
        {t:'mc', q:'Default order of ORDER BY is…', opts:['ascending','descending','random','insertion order'], a:0},
        {t:'mc', q:'Only the first 3 rows:', opts:['... LIMIT 3;','... TOP 3;','... FIRST 3;','... ROWS 3;'], a:0, hint:'LIMIT is SQLite/MySQL/Postgres syntax.'},
        {t:'type', q:'Return the names of all cats, youngest first.', a:['select name from cats order by age','select name from cats order by age;','select name from cats order by age asc','select name from cats order by age asc;'], hint:'ORDER BY age'},
        {t:'mc', q:'Correct clause order?', opts:['SELECT … FROM … WHERE … ORDER BY … LIMIT','SELECT … WHERE … FROM … ORDER BY','FROM … SELECT … WHERE','SELECT … ORDER BY … WHERE … FROM'], a:0},
      ]},
    ]},
    { title: 'Counting & Grouping', topics: ['COUNT', 'GROUP BY', 'aliases'], lessons: [
      { title: 'aggregates', qs: [
        {t:'mc', q:'How many cats are there?', opts:['SELECT COUNT(*) FROM cats;','SELECT SUM(*) FROM cats;','SELECT COUNT FROM cats;','SELECT TOTAL(cats);'], a:0},
        {t:'mc', q:'Average age of cats:', opts:['SELECT AVG(age) FROM cats;','SELECT MEAN(age) FROM cats;','SELECT AVERAGE(age) FROM cats;','SELECT age / COUNT(*) FROM cats;'], a:0},
        {t:'mc', q:'Oldest age in the table:', opts:['SELECT MAX(age) FROM cats;','SELECT TOP(age) FROM cats;','SELECT age DESC FROM cats;','SELECT LAST(age) FROM cats;'], a:0},
        {t:'mc', q:'Which counts only rows where city is not NULL?', opts:['COUNT(city)','COUNT(*)','COUNT(NOT NULL)','COUNT(city IS NOT NULL)'], a:0},
        {t:'type', q:'Return the total (sum) of all ages.', a:['select sum(age) from cats','select sum(age) from cats;'], hint:'SUM(column)'},
      ]},
      { title: 'GROUP BY', qs: [
        {t:'mc', q:'Number of cats per city:', opts:['SELECT city, COUNT(*) FROM cats GROUP BY city;','SELECT city, COUNT(*) FROM cats;','SELECT COUNT(city) FROM cats ORDER BY city;','SELECT city GROUP BY COUNT(*) FROM cats;'], a:0},
        {t:'mc', q:'Filter groups AFTER grouping with…', opts:['HAVING','WHERE','FILTER','GROUP WHERE'], a:0},
        {t:'mc', q:'Cities with more than 2 cats:', opts:['... GROUP BY city HAVING COUNT(*) > 2','... WHERE COUNT(*) > 2 GROUP BY city','... GROUP BY city WHERE COUNT(*) > 2','... GROUP BY city IF COUNT(*) > 2'], a:0},
        {t:'mc', q:'Rename a result column to n:', opts:['SELECT COUNT(*) AS n FROM cats;','SELECT COUNT(*) = n FROM cats;','SELECT n := COUNT(*) FROM cats;','SELECT COUNT(*) CALL n FROM cats;'], a:0},
        {t:'mc', q:'Average age per colour, highest first:', opts:['SELECT colour, AVG(age) AS a FROM cats GROUP BY colour ORDER BY a DESC;','SELECT colour, AVG(age) FROM cats ORDER BY AVG DESC GROUP BY colour;','SELECT AVG(age) FROM cats GROUP BY colour DESC;','SELECT colour AVG(age) FROM cats GROUP colour;'], a:0},
      ]},
      { title: 'changing data', qs: [
        {t:'mc', q:'Add a new cat:', opts:["INSERT INTO cats (name, age) VALUES ('Mia', 2);","ADD cats ('Mia', 2);","INSERT cats VALUES name='Mia';","NEW ROW cats ('Mia', 2);"], a:0},
        {t:'mc', q:'Make Mia one year older:', opts:["UPDATE cats SET age = age + 1 WHERE name = 'Mia';","UPDATE cats age = age + 1 WHERE name = 'Mia';","SET cats.age += 1 WHERE name = 'Mia';","CHANGE cats SET age + 1 WHERE name = 'Mia';"], a:0},
        {t:'mc', q:'What does this do?', code:'DELETE FROM cats;', opts:['Deletes ALL rows','Deletes the table','Deletes one row','Syntax error'], a:0, hint:'No WHERE = every row. Be careful!'},
        {t:'mc', q:'Remove the whole table:', opts:['DROP TABLE cats;','DELETE TABLE cats;','REMOVE cats;','TRUNCATE cats;'], a:0},
        {t:'mc', q:'Create a small table:', opts:['CREATE TABLE toys (id INTEGER, name TEXT);','MAKE TABLE toys (id, name);','CREATE toys (id INTEGER, name TEXT);','NEW TABLE toys id name;'], a:0},
      ]},
    ]},
  ]
},

r: {
  name: 'R', icon: 'icon_r.png', landmark: 'landmark_r.png', color: '#6f9fe0',
  units: [
    { title: 'R Basics', topics: ['assignment', 'vectors', 'functions'], lessons: [
      { title: 'assignment', qs: [
        {t:'mc', q:'The usual assignment operator in R is…', opts:['<-','=:','->>',':='], a:0, hint:'= also works, but <- is idiomatic.'},
        {t:'mc', q:'What does this print?', code:'x <- 5\nx <- x * 2\nprint(x)', opts:['[1] 10','10','[1] 5','error'], a:0, hint:'R prints [1] before a vector\'s first element.'},
        {t:'mc', q:'How do you write a comment in R?', opts:['# comment','// comment','-- comment','/* comment */'], a:0},
        {t:'mc', q:'What is class(3)?', opts:['"numeric"','"integer"','"int"','"double"'], a:0, hint:'Plain numbers are doubles, class "numeric". 3L would be integer.'},
        {t:'mc', q:'What does this print?', code:'paste("Hi", "cat")', opts:['[1] "Hi cat"','[1] "Hicat"','Hi cat','error'], a:0},
      ]},
      { title: 'vectors', qs: [
        {t:'mc', q:'Create a vector 1, 2, 3:', opts:['c(1, 2, 3)','[1, 2, 3]','vector(1, 2, 3)','{1, 2, 3}'], a:0},
        {t:'mc', q:'What does this print?', code:'x <- c(1, 2, 3)\nx * 2', opts:['[1] 2 4 6','[1] 1 2 3 1 2 3','[1] 6','error'], a:0, hint:'Arithmetic is vectorised.'},
        {t:'mc', q:'What does this print?', code:'x <- c(10, 20, 30)\nx[1]', opts:['[1] 10','[1] 20','[1] 0','error'], a:0, hint:'R indexes from 1!'},
        {t:'mc', q:'What does this print?', code:'1:5', opts:['[1] 1 2 3 4 5','[1] 1 5','[1] 1 2 3 4','error'], a:0},
        {t:'mc', q:'What does this print?', code:'x <- c(1, 2, 3, 4)\nsum(x[x > 2])', opts:['[1] 7','[1] 2','[1] 10','[1] 3 4'], a:0, hint:'x > 2 is a logical mask.'},
      ]},
      { title: 'functions & types', qs: [
        {t:'mc', q:'Length of the vector c(4, 5, 6):', opts:['length(c(4,5,6))','len(c(4,5,6))','size(c(4,5,6))','count(c(4,5,6))'], a:0},
        {t:'mc', q:'What does this print?', code:'c(1, "a", TRUE)', opts:['[1] "1" "a" "TRUE"','[1] 1 a TRUE','error','[1] 1 NA 1'], a:0, hint:'A vector has ONE type, so everything becomes character.'},
        {t:'mc', q:'Define a function that doubles x:', opts:['dbl <- function(x) x * 2','function dbl(x) { x * 2 }','def dbl(x): x * 2','dbl(x) <- x * 2'], a:0},
        {t:'mc', q:'What does this print?', code:'mean(c(2, 4, 6))', opts:['[1] 4','[1] 12','[1] 3','error'], a:0},
        {t:'mc', q:'What does this print?', code:'x <- c(1, NA, 3)\nsum(x)', opts:['[1] NA','[1] 4','[1] 0','error'], a:0, hint:'NA spreads unless you use na.rm = TRUE.'},
      ]},
      { title: 'data frames', qs: [
        {t:'mc', q:'Create a data frame with columns name and age:', opts:['data.frame(name = c("Mia","Tom"), age = c(2, 5))','table(name, age)','df(name, age)','frame(name = ..., age = ...)'], a:0},
        {t:'mc', q:'Get the age column of df:', opts:['df$age','df.age','df["age"][0]','df->age'], a:0},
        {t:'mc', q:'First 6 rows of df:', opts:['head(df)','top(df)','df[6]','first(df, 6)'], a:0},
        {t:'mc', q:'Rows where age > 3:', opts:['df[df$age > 3, ]','df[age > 3]','df.filter(age > 3)','df[, df$age > 3]'], a:0, hint:'df[rows, cols]'},
        {t:'mc', q:'Number of rows in df:', opts:['nrow(df)','length(df)','rows(df)','count(df)'], a:0, hint:'length(df) gives the number of columns.'},
      ]},
    ]},
  ]
},

italian: {
  name: 'Italiano', icon: 'flag_it.png', landmark: 'landmark_it.png', color: '#e86b6b', kb: 'it',
  units: [
    { title: 'Pronomi & Anche', topics: ['object pronouns', 'anche', 'ci / ne'], lessons: [
      { title: 'pronomi diretti', qs: [
        {t:'mc', q:'Compro il pane. → ___ compro.', opts:['Lo','La','Li','Gli'], a:0},
        {t:'mc', q:'Vedi Maria? — Sì, ___ vedo.', opts:['la','lo','le','gli'], a:0},
        {t:'mc', q:'Mangi le mele? — Sì, ___ mangio tutte.', opts:['le','li','la','ne'], a:0},
        {t:'type', q:'Rewrite with a pronoun: "Chiamo i ragazzi."', a:['li chiamo','li chiamo.'], kb:'it', hint:'i ragazzi → li'},
        {t:'mc', q:'Where does the pronoun go with an infinitive? "Voglio vedere il film."', opts:['Voglio vederlo / Lo voglio vedere','Voglio lo vedere','Lo voglio vederlo','Vogliolo vedere'], a:0},
      ]},
      { title: 'pronomi indiretti', qs: [
        {t:'mc', q:'Telefono a Marco. → ___ telefono.', opts:['Gli','Lo','Le','Li'], a:0, hint:'a Marco → gli (to him)'},
        {t:'mc', q:'Scrivo a Giulia. → ___ scrivo.', opts:['Le','La','Gli','Lo'], a:0, hint:'a Giulia → le (to her)'},
        {t:'mc', q:'Regalo un libro ai bambini. → ___ regalo un libro.', opts:['Gli','Li','Le','Loro lo'], a:0, hint:'Modern Italian uses gli for "to them".'},
        {t:'mc', q:'___ piace la pizza. (a noi)', opts:['Ci','Ne','Vi','Li'], a:0},
        {t:'type', q:'Rispondi con un pronome: "Dai il libro a me?" → "Sì, ___ do il libro." (write the whole sentence)', a:['sì, ti do il libro','si, ti do il libro','sì ti do il libro','ti do il libro','sì, ti do il libro.'], kb:'it', hint:'a me → ti (when I answer, "to you")'},
      ]},
      { title: 'pronomi + passato', qs: [
        {t:'mc', q:'Hai visto le chiavi? — Sì, ___ ho ___.', opts:['le / viste','le / visto','li / visti','la / vista'], a:0, hint:'The participle agrees with lo/la/li/le.'},
        {t:'mc', q:'Hai comprato il pane? — Sì, ___ ho ___.', opts:["l' / comprato","lo / comprati","l' / comprata","li / comprato"], a:0},
        {t:'mc', q:'Hai chiamato Anna? — Sì, ___ ho chiamat___.', opts:["l' / a","la / o","le / a","l' / o"], a:0},
        {t:'mc', q:'Hai parlato a Luca? — Sì, ___ ho parlato.', opts:['gli','lo','le','li'], a:0, hint:'Indirect pronouns: no agreement.'},
        {t:'type', q:'Answer with a pronoun: "Hai mangiato la pasta?" → "Sì, …" (use l\' + agreement)', a:["sì, l'ho mangiata","si, l'ho mangiata","l'ho mangiata","sì l'ho mangiata","sì, l'ho mangiata."], kb:'it'},
      ]},
      { title: 'anche', qs: [
        {t:'mc', q:'"I also speak Italian" (I, in addition to others):', opts:['Anche io parlo italiano.','Io parlo anche italiano.','Io parlo italiano anche.','Io anche parlo italiano.'], a:0, hint:'anche goes right BEFORE the word it refers to.'},
        {t:'mc', q:'"I speak Italian too" (Italian, plus other languages):', opts:['Parlo anche italiano.','Anche parlo italiano.','Parlo italiano anche.','Anche io parlo italiano.'], a:0},
        {t:'mc', q:'"Me too!"', opts:["Anch'io!",'Io anche!','Anche me!','Pure io anche!'], a:0},
        {t:'mc', q:'Which is wrong?', opts:['Vengo anche.','Vengo anche io.','Anche Marco viene.','Viene anche Marco.'], a:0, hint:'anche cannot end a sentence like English "too".'},
        {t:'type', q:'Translate: "She also likes cats." (Le piacciono i gatti + anche → the cats are the added thing)', a:['le piacciono anche i gatti','le piacciono anche i gatti.'], kb:'it'},
      ]},
      { title: 'ci e ne', qs: [
        {t:'mc', q:'Vai a Roma? — Sì, ___ vado domani.', opts:['ci','ne','lo','vi'], a:0, hint:'ci replaces a place (there).'},
        {t:'mc', q:'Quanti caffè bevi? — ___ bevo tre.', opts:['Ne','Li','Ci','Lo'], a:0, hint:'ne = of them.'},
        {t:'mc', q:'Hai bisogno di aiuto? — Sì, ___ ho bisogno.', opts:['ne','ci','lo','ci ne'], a:0, hint:'ne replaces di + something.'},
        {t:'mc', q:'Pensi al futuro? — Sì, ___ penso spesso.', opts:['ci','ne','lo','gli'], a:0, hint:'pensare a → ci'},
        {t:'type', q:'Answer: "Quante sorelle hai?" → "___ ho due." (write the full answer)', a:['ne ho due','ne ho due.'], kb:'it'},
      ]},
    ]},
    { title: 'Il Futuro', topics: ['-are stems', 'irregular futures', 'usage'], lessons: [
      { title: 'futuro -are', qs: [
        {t:'mc', q:'parlare → io ___', opts:['parlerò','parlarò','parlero','parlarrò'], a:0, hint:'-are becomes -er- in the future stem.'},
        {t:'mc', q:'mangiare → tu ___', opts:['mangerai','mangiarai','mangierai','mangarai'], a:0, hint:'-giare drops the i: manger-.'},
        {t:'mc', q:'cercare → noi ___', opts:['cercheremo','cerceremo','cercaremo','cercharemo'], a:0, hint:'-care adds h to keep the hard sound.'},
        {t:'type', q:'Write the future: "lavorare" → "loro …"', a:['lavoreranno'], kb:'it', hint:'-are → -er- + anno'},
        {t:'type', q:'Write the future: "pagare" → "lei …"', a:['pagherà'], kb:'it', hint:'-gare adds h.'},
      ]},
      { title: 'futuro irregolare', qs: [
        {t:'mc', q:'essere → io ___', opts:['sarò','esserò','serò','sarrò'], a:0},
        {t:'mc', q:'avere → tu ___', opts:['avrai','averai','avrei','avarai'], a:0},
        {t:'mc', q:'andare → noi ___', opts:['andremo','anderemo','andaremo','andiamo'], a:0},
        {t:'mc', q:'venire → loro ___', opts:['verranno','veniranno','venranno','vieneranno'], a:0},
        {t:'type', q:'Write the future: "fare" → "lui …"', a:['farà'], kb:'it'},
      ]},
      { title: 'usare il futuro', qs: [
        {t:'mc', q:'"Domani ___ a Firenze."', opts:['andremo','andiamo (only)','andavamo','siamo andati'], a:0},
        {t:'mc', q:'Future of probability: "Che ore sono?" — "___ le tre."', opts:['Saranno','Sono state','Erano','Sarebbero'], a:0, hint:'The future can express a guess.'},
        {t:'mc', q:'"Quando ___ a casa, ti chiamerò."', opts:['arriverò','arrivo','arriverei','arrivi'], a:0, hint:'After quando in a future sentence, Italian uses the future too.'},
        {t:'mc', q:'"Se ___ bel tempo, andremo al mare."', opts:['farà','fa','farebbe','fare'], a:0},
        {t:'type', q:'Translate: "Next year I will study Russian." (L\'anno prossimo …)', a:["l'anno prossimo studierò russo","l'anno prossimo studierò il russo","l'anno prossimo studierò russo.","l'anno prossimo studierò il russo."], kb:'it', hint:'studiare → studierò'},
      ]},
    ]},
  ]
},

turkish: {
  name: 'Türkçe', icon: 'flag_tr.png', landmark: 'landmark_tr.png', color: '#d94a4a', kb: 'tr',
  units: [
    { title: 'Başlangıç', topics: ['greetings', 'special letters', 'vowel harmony'], lessons: [
      { title: 'selamlar', qs: [
        {t:'mc', q:'"Hello" in Turkish:', opts:['Merhaba','Teşekkürler','Evet','Güle güle'], a:0},
        {t:'mc', q:'"Thank you":', opts:['Teşekkür ederim','Merhaba','Lütfen','Hayır'], a:0},
        {t:'mc', q:'"Yes" and "No":', opts:['Evet / Hayır','Hayır / Evet','Var / Yok','Tamam / Yok'], a:0},
        {t:'mc', q:'"Good morning":', opts:['Günaydın','İyi geceler','İyi akşamlar','Hoşça kal'], a:0},
        {t:'type', q:'Type "please" in Turkish.', a:['lütfen'], kb:'tr', hint:'Use the ü button below.'},
      ]},
      { title: 'özel harfler', qs: [
        {t:'mc', q:'Which letter is the dotless i?', opts:['ı','i','İ','î'], a:0},
        {t:'mc', q:'"ş" sounds like…', opts:['sh in "ship"','s in "sun"','z in "zoo"','ch in "chip"'], a:0},
        {t:'mc', q:'"c" in Turkish sounds like…', opts:['j in "jam"','c in "cat"','s in "sun"','ch in "chair"'], a:0},
        {t:'mc', q:'"ğ" (yumuşak g)…', opts:['lengthens the vowel before it, almost silent','sounds like g in "go"','sounds like y always','sounds like h'], a:0},
        {t:'type', q:'Type the word for "tea" (it starts with ç).', a:['çay'], kb:'tr', hint:'ç + ay'},
      ]},
      { title: 'ünlü uyumu', qs: [
        {t:'mc', q:'Back vowels in Turkish are:', opts:['a ı o u','e i ö ü','a e i o','ı i u ü'], a:0},
        {t:'mc', q:'Plural of "ev" (house):', opts:['evler','evlar','evlér','evlır'], a:0, hint:'e is a front vowel → -ler'},
        {t:'mc', q:'Plural of "kitap" (book):', opts:['kitaplar','kitapler','kitaplur','kitaplır'], a:0, hint:'a is a back vowel → -lar'},
        {t:'mc', q:'Plural of "gül" (rose):', opts:['güller','güllar','gülar','güler'], a:0},
        {t:'type', q:'Make "kedi" (cat) plural.', a:['kediler'], kb:'tr', hint:'i is front → -ler'},
      ]},
      { title: 'sayılar', qs: [
        {t:'mc', q:'"bir, iki, üç" =', opts:['1, 2, 3','2, 3, 4','1, 3, 5','0, 1, 2'], a:0},
        {t:'mc', q:'"beş" =', opts:['5','4','6','10'], a:0},
        {t:'mc', q:'"on" =', opts:['10','1','on/off','100'], a:0},
        {t:'mc', q:'"on iki" =', opts:['12','21','102','2'], a:0, hint:'on (10) + iki (2)'},
        {t:'type', q:'Type "four" in Turkish.', a:['dört'], kb:'tr'},
      ]},
      { title: 'ben, sen, o', qs: [
        {t:'mc', q:'"I am a student" → "Ben öğrenci___."', opts:['yim','yım','im','sın'], a:0, hint:'öğrenci ends in i (front, unrounded) → -yim'},
        {t:'mc', q:'"You are tired" → "Sen yorgun___."', opts:['sun','sın','sin','sün'], a:0, hint:'u is back rounded → -sun'},
        {t:'mc', q:'"O doktor." means:', opts:['He/She is a doctor.','I am a doctor.','You are a doctor.','They are doctors.'], a:0},
        {t:'mc', q:'"Nasılsın?" means:', opts:['How are you?','What is your name?','Where are you?','Who are you?'], a:0},
        {t:'type', q:'Answer "Nasılsın?" with "I\'m fine" → "İyi___" (write the whole word).', a:['iyiyim','İyiyim'], kb:'tr', hint:'iyi + -yim'},
      ]},
    ]},
    { title: 'Var ve Yok', topics: ['var / yok', 'locative -de', 'question mı'], lessons: [
      { title: 'var / yok', qs: [
        {t:'mc', q:'"There is a cat" =', opts:['Kedi var.','Kedi yok.','Kedi mi?','Kedi değil.'], a:0},
        {t:'mc', q:'"There is no milk" =', opts:['Süt yok.','Süt var.','Süt değil.','Süt hayır.'], a:0},
        {t:'mc', q:'"Is there water?" =', opts:['Su var mı?','Su mı var?','Var su?','Su yok mu?'], a:0},
        {t:'mc', q:'"Param yok." means:', opts:["I have no money.","I have money.","Money is here.","Money?"], a:0, hint:'param = my money'},
        {t:'type', q:'Say "There is bread." (bread = ekmek)', a:['ekmek var','ekmek var.'], kb:'tr'},
      ]},
      { title: 'nerede? -de/-da', qs: [
        {t:'mc', q:'"in the house" = ev___', opts:['de','da','te','ta'], a:0},
        {t:'mc', q:'"at school" = okul___', opts:['da','de','ta','te'], a:0, hint:'u is a back vowel → -da'},
        {t:'mc', q:'"in the book" = kitap___', opts:['ta','da','te','de'], a:0, hint:'After p, ç, t, k, s, ş, h, f the d becomes t.'},
        {t:'mc', q:'"Kedi nerede?" means:', opts:['Where is the cat?','What is the cat?','Is there a cat?','Whose cat?'], a:0},
        {t:'type', q:'Say "The cat is in the garden." (garden = bahçe)', a:['kedi bahçede','kedi bahçede.'], kb:'tr', hint:'bahçe ends in e → -de'},
      ]},
      { title: 'soru: mı mi mu mü', qs: [
        {t:'mc', q:'"Türk müsün?" means:', opts:['Are you Turkish?','You are Turkish.','Turkish, please.','Is it Turkish?'], a:0},
        {t:'mc', q:'"Evet, güzel ___?" (Is it beautiful?)', opts:['mi','mı','mu','mü'], a:0, hint:'güzel: e → mi'},
        {t:'mc', q:'"Çay ___?" (Tea?)', opts:['mı','mi','mu','mü'], a:0},
        {t:'mc', q:'"Doktor ___?"', opts:['mu','mı','mi','mü'], a:0},
        {t:'type', q:'Ask "Is it cold?" (cold = soğuk)', a:['soğuk mu','soğuk mu?'], kb:'tr', hint:'u → mu'},
      ]},
    ]},
  ]
},

russian: {
  name: 'Русский', icon: 'flag_ru.png', landmark: 'landmark_ru.png', color: '#5b7fd1', kb: 'ru',
  units: [
    { title: 'Алфавит', topics: ['Cyrillic letters', 'reading', 'greetings'], lessons: [
      { title: 'friendly letters', qs: [
        {t:'mc', q:'Cyrillic "К" sounds like…', opts:['k','r','n','h'], a:0},
        {t:'mc', q:'Cyrillic "М" sounds like…', opts:['m','t','w','sh'], a:0},
        {t:'mc', q:'Cyrillic "Т" sounds like…', opts:['t','g','m','l'], a:0},
        {t:'mc', q:'Read: "ТОМ"', opts:['tom','tam','tim','tum'], a:0},
        {t:'mc', q:'Read: "МАМА"', opts:['mama','wawa','nana','mawa'], a:0},
      ]},
      { title: 'false friends', qs: [
        {t:'mc', q:'Cyrillic "Р" sounds like…', opts:['r','p','b','d'], a:0, hint:'Looks like P, sounds like R.'},
        {t:'mc', q:'Cyrillic "Н" sounds like…', opts:['n','h','i','p'], a:0, hint:'Looks like H, sounds like N.'},
        {t:'mc', q:'Cyrillic "В" sounds like…', opts:['v','b','w','f'], a:0},
        {t:'mc', q:'Cyrillic "С" sounds like…', opts:['s','k','c (as in cat)','ch'], a:0},
        {t:'mc', q:'Read: "СПОРТ"', opts:['sport','kport','cpopt','sroft'], a:0},
      ]},
      { title: 'new shapes', qs: [
        {t:'mc', q:'Cyrillic "Д" sounds like…', opts:['d','a','l','zh'], a:0},
        {t:'mc', q:'Cyrillic "Л" sounds like…', opts:['l','d','a','n'], a:0},
        {t:'mc', q:'Cyrillic "П" sounds like…', opts:['p','n','r','t'], a:0},
        {t:'mc', q:'Cyrillic "И" sounds like…', opts:['ee (as in see)','n','u','i as in eye'], a:0},
        {t:'mc', q:'Read: "ЛИМОН"', opts:['limon (lemon)','dimon','lumon','linon'], a:0},
      ]},
      { title: 'more letters', qs: [
        {t:'mc', q:'Cyrillic "Б" sounds like…', opts:['b','v','g','6'], a:0},
        {t:'mc', q:'Cyrillic "Г" sounds like…', opts:['g','r','t','l'], a:0},
        {t:'mc', q:'Cyrillic "У" sounds like…', opts:['oo (as in moon)','y','u as in cut','i'], a:0},
        {t:'mc', q:'Cyrillic "Е" sounds like…', opts:['ye','e as in bed','i','a'], a:0},
        {t:'mc', q:'Read: "БАНАН"', opts:['banan (banana)','vanan','banah','6ahah'], a:0},
      ]},
      { title: 'hissing letters', qs: [
        {t:'mc', q:'Cyrillic "Ш" sounds like…', opts:['sh','w','shch','ch'], a:0},
        {t:'mc', q:'Cyrillic "Ч" sounds like…', opts:['ch','4','y','sh'], a:0},
        {t:'mc', q:'Cyrillic "Ж" sounds like…', opts:['zh (s in "measure")','x','j as in jam','z'], a:0},
        {t:'mc', q:'Cyrillic "Я" sounds like…', opts:['ya','r','ja as in jam','a'], a:0},
        {t:'mc', q:'Read: "ШКОЛА"', opts:['shkola (school)','wkola','chkola','shkoda'], a:0},
      ]},
      { title: 'приветствия', qs: [
        {t:'mc', q:'"Привет" means:', opts:['Hi','Bye','Please','Thanks'], a:0},
        {t:'mc', q:'"Спасибо" means:', opts:['Thank you','Sorry','Hello','Goodbye'], a:0},
        {t:'mc', q:'"Да" / "Нет" =', opts:['Yes / No','No / Yes','Hi / Bye','Please / Thanks'], a:0},
        {t:'mc', q:'"Пока" means:', opts:['Bye (informal)','Hello','Please','Good night'], a:0},
        {t:'type', q:'Type "yes" in Russian (use the Cyrillic keys below).', a:['да'], kb:'ru'},
      ]},
    ]},
    { title: 'Первые слова', topics: ['I / you', 'this is', 'questions'], lessons: [
      { title: 'я, ты, это', qs: [
        {t:'mc', q:'"Я" means:', opts:['I','you','he','this'], a:0},
        {t:'mc', q:'"Это кот." means:', opts:['This is a cat.','The cat is here.','I have a cat.','A cat?'], a:0, hint:'Russian has no "is" or "a" in the present.'},
        {t:'mc', q:'"Ты студент?" means:', opts:['Are you a student?','I am a student.','He is a student.','Student, you?'], a:0},
        {t:'mc', q:'"Я не знаю." means:', opts:["I don't know.","I know.","I don't want.","I see."], a:0},
        {t:'type', q:'Type "this" in Russian.', a:['это'], kb:'ru'},
      ]},
      { title: 'вопросы', qs: [
        {t:'mc', q:'"Кто это?" means:', opts:['Who is this?','What is this?','Where is this?','Why this?'], a:0},
        {t:'mc', q:'"Что это?" means:', opts:['What is this?','Who is this?','Where?','How?'], a:0},
        {t:'mc', q:'"Где кот?" means:', opts:['Where is the cat?','Who is the cat?','What cat?','The cat is here.'], a:0},
        {t:'mc', q:'"Как дела?" means:', opts:['How are you?','What is your name?','Where are you?','How old are you?'], a:0},
        {t:'type', q:'Type "who" in Russian.', a:['кто'], kb:'ru'},
      ]},
      { title: 'меня зовут', qs: [
        {t:'mc', q:'"Меня зовут Аня." means:', opts:['My name is Anya.','I love Anya.','Anya calls me.','I am calling Anya.'], a:0},
        {t:'mc', q:'"Как тебя зовут?" means:', opts:["What's your name?","How are you?","Where are you from?","How old are you?"], a:0},
        {t:'mc', q:'"Очень приятно" means:', opts:['Nice to meet you','Very good','See you soon','Excuse me'], a:0},
        {t:'mc', q:'"Извините" means:', opts:['Excuse me / sorry','Thank you','Goodbye','Please'], a:0},
        {t:'type', q:'Type "hi" (informal) in Russian.', a:['привет'], kb:'ru'},
      ]},
    ]},
  ]
},
};

window.KEYBOARDS = {
  it: ['à','è','é','ì','ò','ù'],
  tr: ['ç','ğ','ı','İ','ö','ş','ü'],
  ru: ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'],
};

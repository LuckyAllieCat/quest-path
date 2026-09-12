// Brighter Path — extra units (loaded after content.js)
(() => {
const C = window.CONTENT;

/* ================= PYTHON ================= */
C.python.units.push(
  { title: 'Tuples, Sets & Traps', topics: ['tuples', 'sets', 'mutability'], lessons: [
    { title: 'tuples', qs: [
      {t:'mc', q:'What does this print?', code:'t = (1, 2, 3)\nprint(t[0], len(t))', opts:['1 3','0 3','1 2','error'], a:0},
      {t:'mc', q:'What happens?', code:'t = (1, 2)\nt[0] = 9', opts:['TypeError','(9, 2)','(1, 2)','(9, 9)'], a:0, hint:'Tuples are immutable.'},
      {t:'mc', q:'What is type((5))?', opts:['int','tuple','list','set'], a:0, hint:'A one-item tuple needs a comma: (5,).'},
      {t:'mc', q:'What does this print?', code:'a, b, c = "xyz"\nprint(b)', opts:['y','x','xyz','error'], a:0, hint:'Unpacking works on any sequence.'},
      {t:'mc', q:'What does this print?', code:'t = (1, [2, 3])\nt[1].append(4)\nprint(t)', opts:['(1, [2, 3, 4])','error','(1, [2, 3])','(1, 2, 3, 4)'], a:0, hint:'The tuple is immutable, but the list inside it is not.'},
    ]},
    { title: 'sets', qs: [
      {t:'mc', q:'What does this print?', code:'print(len({1, 2, 2, 3, 3}))', opts:['3','5','2','error'], a:0},
      {t:'mc', q:'What does this print?', code:'print({1, 2} | {2, 3})', opts:['{1, 2, 3}','{2}','{1, 3}','{1, 2, 2, 3}'], a:0, hint:'| is union, & is intersection.'},
      {t:'mc', q:'What does this print?', code:'print({1, 2, 3} & {2, 3, 4})', opts:['{2, 3}','{1, 2, 3, 4}','{1, 4}','error'], a:0},
      {t:'mc', q:'How do you make an EMPTY set?', opts:['set()','{}','[]','()'], a:0, hint:'{} is an empty dict.'},
      {t:'mc', q:'What does this print?', code:'s = set("hello")\nprint(len(s))', opts:['4','5','1','error'], a:0, hint:'h e l o — the second l is dropped.'},
    ]},
    { title: 'is vs ==', qs: [
      {t:'mc', q:'What does this print?', code:'a = "cat"\nb = "cat"\nprint(a == b)', opts:['True','False','error','None'], a:0},
      {t:'mc', q:'What does this print?', code:'a = [1]\nb = [1]\nprint(a is b)', opts:['False','True','error','None'], a:0, hint:'Two separate list objects.'},
      {t:'mc', q:'The right way to test for None:', opts:['if x is None:','if x == None:','if x = None:','if None in x:'], a:0},
      {t:'mc', q:'What does this print?', code:'a = None\nprint(a is None, a == 0)', opts:['True False','True True','False False','error'], a:0},
      {t:'mc', q:'What does this print?', code:'x = []\nprint(bool(x), x is None)', opts:['False False','False True','True False','error'], a:0},
    ]},
    { title: 'default argument trap', qs: [
      {t:'mc', q:'What does this print?', code:'def f(x, lst=[]):\n    lst.append(x)\n    return lst\nprint(f(1))\nprint(f(2))', opts:['[1] then [1, 2]','[1] then [2]','[1, 2] then [1, 2]','error'], a:0, hint:'The default list is created ONCE and shared between calls.'},
      {t:'mc', q:'The safe way to write a default list:', opts:['def f(x, lst=None):\n    if lst is None: lst = []','def f(x, lst=[]):','def f(x, lst=list):','def f(x, lst=()):\n    lst.append(x)'], a:0},
      {t:'mc', q:'What does this print?', code:'def f(n=5):\n    return n * 2\nprint(f(), f(1))', opts:['10 2','5 1','10 10','error'], a:0},
      {t:'mc', q:'What does this print?', code:'def f(*args):\n    return len(args)\nprint(f(1, 2, 3))', opts:['3','1','error','(1, 2, 3)'], a:0},
      {t:'mc', q:'What does this print?', code:'def f(**kw):\n    return kw\nprint(f(a=1))', opts:["{'a': 1}","(a=1)","['a']","error"], a:0},
    ]},
  ]},
  { title: 'Errors & Classes', topics: ['try / except', 'classes', 'imports'], lessons: [
    { title: 'try / except', qs: [
      {t:'mc', q:'What does this print?', code:'try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print("oops")', opts:['oops','error','0','inf'], a:0},
      {t:'mc', q:'What does this print?', code:'try:\n    x = int("a")\nexcept ValueError:\n    x = -1\nprint(x)', opts:['-1','a','error','0'], a:0},
      {t:'mc', q:'What does this print?', code:'try:\n    print("a")\nfinally:\n    print("b")', opts:['a then b','a','b','error'], a:0, hint:'finally always runs.'},
      {t:'mc', q:'What error does this raise?', code:'d = {"a": 1}\nprint(d["b"])', opts:['KeyError','IndexError','ValueError','NameError'], a:0},
      {t:'mc', q:'What error does this raise?', code:'lst = [1, 2]\nprint(lst[5])', opts:['IndexError','KeyError','TypeError','ValueError'], a:0},
    ]},
    { title: 'classes', qs: [
      {t:'mc', q:'What does this print?', code:'class Cat:\n    def __init__(self, name):\n        self.name = name\nc = Cat("Mia")\nprint(c.name)', opts:['Mia','name','Cat','error'], a:0},
      {t:'mc', q:'The first parameter of a method is called…', opts:['self','this','me','cls'], a:0},
      {t:'mc', q:'What does this print?', code:'class Cat:\n    legs = 4\nprint(Cat.legs)', opts:['4','error','legs','None'], a:0, hint:'legs is a class attribute.'},
      {t:'mc', q:'What does this print?', code:'class Cat:\n    def speak(self):\n        return "meow"\nprint(Cat().speak())', opts:['meow','error','speak','None'], a:0},
      {t:'mc', q:'What does this print?', code:'class Cat:\n    def __init__(self):\n        self.n = 0\na = Cat(); b = a\nb.n = 5\nprint(a.n)', opts:['5','0','error','None'], a:0, hint:'b is another name for the same object.'},
    ]},
    { title: 'imports & modules', qs: [
      {t:'mc', q:'Import the math module and use pi:', opts:['import math\nmath.pi','include math\npi','import pi from math','using math'], a:0},
      {t:'mc', q:'What does this print?', code:'from math import sqrt\nprint(sqrt(16))', opts:['4.0','4','16','error'], a:0, hint:'sqrt returns a float.'},
      {t:'mc', q:'What does this print?', code:'import random\nx = random.randint(1, 1)\nprint(x)', opts:['1','0','random','error'], a:0, hint:'randint includes both ends.'},
      {t:'mc', q:'Give a module a short name:', opts:['import pandas as pd','import pandas pd','as pd import pandas','pandas = import'], a:0},
      {t:'mc', q:'What does this print?', code:'print(__name__)', opts:['__main__','main','error','__name__'], a:0, hint:'When a file is run directly, __name__ is "__main__".'},
    ]},
    { title: 'exam mix', qs: [
      {t:'mc', q:'What does this print?', code:'s = "abc"\nprint(s[::-1] * 2)', opts:['cbacba','abcabc','cba','error'], a:0},
      {t:'mc', q:'What does this print?', code:'x = [1, 2, 3]\ny = x\nx = x[1:]\nprint(y)', opts:['[1, 2, 3]','[2, 3]','[1]','error'], a:0, hint:'Slicing creates a new list; y still points at the old one.'},
      {t:'mc', q:'What does this print?', code:'print(sum(i for i in range(4)))', opts:['6','10','4','error'], a:0},
      {t:'mc', q:'What does this print?', code:'d = {}\nfor c in "aab":\n    d[c] = d.get(c, 0) + 1\nprint(d)', opts:["{'a': 2, 'b': 1}","{'a': 1, 'b': 1}","{'a': 2}","error"], a:0},
      {t:'mc', q:'What does this print?', code:'print("3" * 2 + str(3 * 2))', opts:['336','66','"3""3"6','error'], a:0},
    ]},
  ]}
);

/* ================= SQL ================= */
C.sql.units.push(
  { title: 'Joins', topics: ['INNER JOIN', 'LEFT JOIN', 'subqueries'], lessons: [
    { title: 'INNER JOIN', qs: [
      {t:'mc', q:'Tables: cats(id, name, owner_id) and owners(id, name). Which lists each cat with its owner\'s name?', opts:['SELECT cats.name, owners.name FROM cats JOIN owners ON cats.owner_id = owners.id;','SELECT cats.name, owners.name FROM cats, owners;','SELECT name FROM cats JOIN owners;','SELECT * FROM cats + owners;'], a:0},
      {t:'mc', q:'JOIN without a qualifier means…', opts:['INNER JOIN','LEFT JOIN','CROSS JOIN','FULL JOIN'], a:0},
      {t:'mc', q:'INNER JOIN returns…', opts:['only rows with a match in both tables','all rows from the left table','all rows from both tables','only unmatched rows'], a:0},
      {t:'mc', q:'Give a table a short alias:', opts:['FROM cats c JOIN owners o ON c.owner_id = o.id','FROM cats AS c, owners AS o WHERE','FROM cats(c) JOIN owners(o)','FROM c cats JOIN o owners'], a:0},
      {t:'type', q:'Join cats to owners (cats.owner_id = owners.id) and return all columns.', a:['select * from cats join owners on cats.owner_id = owners.id','select * from cats join owners on cats.owner_id = owners.id;','select * from cats inner join owners on cats.owner_id = owners.id','select * from cats inner join owners on cats.owner_id = owners.id;'], hint:'SELECT * FROM cats JOIN owners ON …'},
    ]},
    { title: 'LEFT JOIN', qs: [
      {t:'mc', q:'LEFT JOIN returns…', opts:['all left rows, plus matches from the right (NULL if none)','only matched rows','all right rows only','the left table sorted'], a:0},
      {t:'mc', q:'Cats WITHOUT an owner:', opts:['SELECT c.name FROM cats c LEFT JOIN owners o ON c.owner_id = o.id WHERE o.id IS NULL;','SELECT c.name FROM cats c JOIN owners o ON c.owner_id = o.id WHERE o.id IS NULL;','SELECT name FROM cats WHERE owner = NULL;','SELECT name FROM cats WHERE NOT owner;'], a:0, hint:'After a LEFT JOIN, unmatched right-side columns are NULL.'},
      {t:'mc', q:'Count cats per owner, including owners with zero cats:', opts:['SELECT o.name, COUNT(c.id) FROM owners o LEFT JOIN cats c ON c.owner_id = o.id GROUP BY o.name;','SELECT o.name, COUNT(*) FROM owners o JOIN cats c ON c.owner_id = o.id GROUP BY o.name;','SELECT name, COUNT(cats) FROM owners;','SELECT COUNT(*) FROM owners, cats;'], a:0, hint:'COUNT(c.id) ignores NULLs, so zero-cat owners get 0.'},
      {t:'mc', q:'RIGHT JOIN is the same as…', opts:['a LEFT JOIN with the tables swapped','an INNER JOIN','a CROSS JOIN','a UNION'], a:0},
      {t:'mc', q:'What does ON do in a JOIN?', opts:['Says which columns must match','Sorts the result','Filters after grouping','Renames a table'], a:0},
    ]},
    { title: 'subqueries', qs: [
      {t:'mc', q:'Cats older than the average age:', opts:['SELECT name FROM cats WHERE age > (SELECT AVG(age) FROM cats);','SELECT name FROM cats WHERE age > AVG(age);','SELECT name FROM cats HAVING age > AVG(age);','SELECT name, AVG(age) FROM cats WHERE age > AVG;'], a:0, hint:'Aggregates cannot go in WHERE directly.'},
      {t:'mc', q:'Cats whose owner lives in Rome (owners has a city column):', opts:["SELECT name FROM cats WHERE owner_id IN (SELECT id FROM owners WHERE city = 'Rome');","SELECT name FROM cats WHERE owner_id = (SELECT city FROM owners);","SELECT name FROM cats WHERE city = 'Rome';","SELECT name FROM cats IN owners WHERE city = 'Rome';"], a:0},
      {t:'mc', q:'The oldest cat\'s name:', opts:['SELECT name FROM cats WHERE age = (SELECT MAX(age) FROM cats);','SELECT name FROM cats WHERE age = MAX(age);','SELECT MAX(name) FROM cats;','SELECT name FROM cats ORDER BY MAX(age);'], a:0, hint:'ORDER BY age DESC LIMIT 1 also works.'},
      {t:'mc', q:'A subquery in FROM must have…', opts:['an alias','a LIMIT','an ORDER BY','a GROUP BY'], a:0},
      {t:'mc', q:'Which is true?', opts:['A subquery in parentheses runs first, then the outer query uses its result','Subqueries always return one row','Subqueries cannot use WHERE','Subqueries replace JOIN entirely'], a:0},
    ]},
    { title: 'many tables', qs: [
      {t:'mc', q:'Tables: cats, owners, cities(id, name). owners.city_id → cities.id. Cat name with city name:', opts:['SELECT c.name, ci.name FROM cats c JOIN owners o ON c.owner_id = o.id JOIN cities ci ON o.city_id = ci.id;','SELECT c.name, ci.name FROM cats c JOIN cities ci ON c.owner_id = ci.id;','SELECT name, name FROM cats, owners, cities;','SELECT c.name FROM cats c JOIN owners JOIN cities;'], a:0},
      {t:'mc', q:'Both tables have a column called name. To show cats.name only, write…', opts:['SELECT cats.name','SELECT name','SELECT name.cats','SELECT [cats].name'], a:0, hint:'Ambiguous column names must be qualified.'},
      {t:'mc', q:'Combine the rows of two SELECTs with the same columns:', opts:['UNION','JOIN','MERGE','CONCAT'], a:0},
      {t:'mc', q:'UNION vs UNION ALL:', opts:['UNION removes duplicates, UNION ALL keeps them','UNION ALL removes duplicates','They are identical','UNION ALL sorts the result'], a:0},
      {t:'mc', q:'Which query is wrong?', opts:['SELECT c.name FROM cats c JOIN owners o;','SELECT c.name FROM cats c JOIN owners o ON c.owner_id = o.id;','SELECT c.name FROM cats c LEFT JOIN owners o ON c.owner_id = o.id;','SELECT c.name FROM cats c CROSS JOIN owners o;'], a:0, hint:'A JOIN needs ON (unless it is a CROSS JOIN).'},
    ]},
  ]},
  { title: 'Functions & Logic', topics: ['text functions', 'CASE', 'NULL handling'], lessons: [
    { title: 'text functions', qs: [
      {t:'mc', q:'Uppercase the name column:', opts:['SELECT UPPER(name) FROM cats;','SELECT name.upper() FROM cats;','SELECT CAPS(name) FROM cats;','SELECT name UPPER FROM cats;'], a:0},
      {t:'mc', q:'Number of characters in name:', opts:['LENGTH(name)','LEN(name)','SIZE(name)','COUNT(name)'], a:0, hint:'SQL Server uses LEN, most others LENGTH.'},
      {t:'mc', q:'Join name and city with a space (standard SQL):', opts:["name || ' ' || city","name + ' ' + city","name & ' ' & city","JOIN(name, ' ', city)"], a:0, hint:'CONCAT(name, \' \', city) also works in most databases.'},
      {t:'mc', q:'First 3 letters of name:', opts:['SUBSTR(name, 1, 3)','name[0:3]','LEFT3(name)','SUBSTR(name, 0, 2)'], a:0, hint:'SQL positions start at 1.'},
      {t:'mc', q:'Remove spaces around a value:', opts:['TRIM(name)','STRIP(name)','CLEAN(name)','CUT(name)'], a:0},
    ]},
    { title: 'CASE', qs: [
      {t:'mc', q:'Label cats as kitten or adult:', opts:["SELECT name, CASE WHEN age < 1 THEN 'kitten' ELSE 'adult' END FROM cats;","SELECT name, IF age < 1 'kitten' ELSE 'adult' FROM cats;","SELECT name, CASE age < 1 : 'kitten' FROM cats;","SELECT name, WHEN age < 1 THEN 'kitten' FROM cats;"], a:0},
      {t:'mc', q:'CASE must end with…', opts:['END','STOP','ESAC','CLOSE'], a:0},
      {t:'mc', q:'If no WHEN matches and there is no ELSE, CASE returns…', opts:['NULL','0','an error',"''"], a:0},
      {t:'mc', q:'Count white cats using CASE:', opts:["SUM(CASE WHEN colour = 'white' THEN 1 ELSE 0 END)","COUNT(colour = 'white')","SUM(colour = 'white')","COUNT(CASE colour 'white')"], a:0},
      {t:'mc', q:'Which is valid?', opts:["CASE WHEN age > 5 THEN 'old' WHEN age > 2 THEN 'mid' ELSE 'young' END","CASE age > 5 THEN 'old' ELSE 'young'","CASE WHEN age > 5 'old' ELSE 'young' END","WHEN age > 5 THEN 'old' END CASE"], a:0},
    ]},
    { title: 'NULL handling', qs: [
      {t:'mc', q:'What is NULL = NULL?', opts:['NULL (unknown)','TRUE','FALSE','error'], a:0},
      {t:'mc', q:'Replace a NULL city with "unknown":', opts:["COALESCE(city, 'unknown')","city OR 'unknown'","IFNULL city 'unknown'","city ?? 'unknown'"], a:0, hint:'COALESCE returns the first non-NULL value.'},
      {t:'mc', q:'Does WHERE city <> \'Rome\' include rows where city is NULL?', opts:['No','Yes','Only in MySQL','Only with DISTINCT'], a:0, hint:'Comparisons with NULL are never true.'},
      {t:'mc', q:'AVG(age) when some ages are NULL…', opts:['ignores the NULL rows','treats NULL as 0','returns NULL','errors'], a:0},
      {t:'mc', q:'Cats that DO have a city:', opts:['WHERE city IS NOT NULL','WHERE city != NULL','WHERE NOT city = NULL','WHERE city <> NULL'], a:0},
    ]},
  ]}
);

/* ================= R ================= */
C.r.units.push(
  { title: 'Data Wrangling', topics: ['logic', 'apply & loops', 'dplyr'], lessons: [
    { title: 'logic & ifelse', qs: [
      {t:'mc', q:'What does this print?', code:'x <- c(1, 5, 10)\nx > 4', opts:['[1] FALSE  TRUE  TRUE','[1] TRUE','[1] 5 10','error'], a:0},
      {t:'mc', q:'What does this print?', code:'ifelse(c(1, 8) > 5, "big", "small")', opts:['[1] "small" "big"','[1] "big" "small"','[1] "small"','error'], a:0, hint:'ifelse is vectorised.'},
      {t:'mc', q:'What does this print?', code:'x <- 3\nif (x > 2) "yes" else "no"', opts:['[1] "yes"','[1] "no"','yes','error'], a:0},
      {t:'mc', q:'"And" for whole vectors is…', opts:['&','&&','AND','and'], a:0, hint:'&& is for single values only.'},
      {t:'mc', q:'What does this print?', code:'sum(c(TRUE, FALSE, TRUE))', opts:['[1] 2','[1] TRUE','[1] 3','error'], a:0, hint:'TRUE counts as 1.'},
    ]},
    { title: 'loops & apply', qs: [
      {t:'mc', q:'What does this print?', code:'for (i in 1:3) print(i * 2)', opts:['[1] 2 / [1] 4 / [1] 6 (three lines)','[1] 2 4 6','[1] 6','error'], a:0},
      {t:'mc', q:'What does this print?', code:'sapply(1:3, function(x) x^2)', opts:['[1] 1 4 9','[1] 1 2 3','[1] 14','error'], a:0},
      {t:'mc', q:'Apply mean to each column of a data frame:', opts:['sapply(df, mean)','mean(df)','for col in df: mean','df.mean()'], a:0},
      {t:'mc', q:'What does this print?', code:'x <- c(2, 4)\nx[3] <- 6\nx', opts:['[1] 2 4 6','error','[1] 2 4','[1] 6'], a:0, hint:'R grows the vector.'},
      {t:'mc', q:'seq(0, 10, by = 5) gives…', opts:['[1]  0  5 10','[1] 0 10','[1] 5 10','[1] 0 5'], a:0},
    ]},
    { title: 'strings & factors', qs: [
      {t:'mc', q:'What does this print?', code:'nchar("kedi")', opts:['[1] 4','[1] 1','[1] "4"','error'], a:0},
      {t:'mc', q:'What does this print?', code:'toupper("cat")', opts:['[1] "CAT"','CAT','[1] cat','error'], a:0},
      {t:'mc', q:'What does this print?', code:'paste0("a", "b")', opts:['[1] "ab"','[1] "a b"','[1] a b','error'], a:0, hint:'paste0 has no separator.'},
      {t:'mc', q:'A factor is…', opts:['a categorical variable with fixed levels','a decimal number','a list of functions','a matrix'], a:0},
      {t:'mc', q:'What does this print?', code:'f <- factor(c("b", "a", "b"))\nlevels(f)', opts:['[1] "a" "b"','[1] "b" "a" "b"','[1] "b" "a"','error'], a:0, hint:'Levels are sorted alphabetically by default.'},
    ]},
    { title: 'dplyr basics', qs: [
      {t:'mc', q:'Keep rows where age > 3 with dplyr:', opts:['filter(df, age > 3)','select(df, age > 3)','df[age > 3]','where(df, age > 3)'], a:0},
      {t:'mc', q:'Keep only the name and age columns:', opts:['select(df, name, age)','filter(df, name, age)','df$name$age','columns(df, name, age)'], a:0},
      {t:'mc', q:'The pipe operator sends the left result into the next function:', opts:['%>% (or |>)','->','>>','::'], a:0},
      {t:'mc', q:'Add a column age_months:', opts:['mutate(df, age_months = age * 12)','add(df, age_months = age * 12)','df + age_months','select(df, age_months = age * 12)'], a:0},
      {t:'mc', q:'Average age per colour with dplyr:', opts:['df %>% group_by(colour) %>% summarise(m = mean(age))','df %>% mean(age) %>% group_by(colour)','summarise(df, colour, mean)','group(df, colour) %>% avg(age)'], a:0},
    ]},
  ]},
  { title: 'Plots & Stats', topics: ['base plots', 'ggplot2', 'summary stats'], lessons: [
    { title: 'base plots', qs: [
      {t:'mc', q:'Scatter plot of y against x:', opts:['plot(x, y)','scatter(x, y)','draw(x, y)','graph(y ~ x)'], a:0},
      {t:'mc', q:'Histogram of a vector v:', opts:['hist(v)','plot(v, type = "hist")','bar(v)','histogram(v)'], a:0},
      {t:'mc', q:'Bar chart of counts of a factor f:', opts:['barplot(table(f))','bar(f)','plot(f, bars = TRUE)','hist(f)'], a:0},
      {t:'mc', q:'Add a title to a base plot:', opts:['plot(x, y, main = "Cats")','plot(x, y, title = "Cats")','title = "Cats"','plot(x, y).title("Cats")'], a:0},
      {t:'mc', q:'Draw a line instead of points:', opts:['plot(x, y, type = "l")','plot(x, y, line = TRUE)','lineplot(x, y)','plot(x, y, "line")'], a:0},
    ]},
    { title: 'ggplot2', qs: [
      {t:'mc', q:'Load ggplot2:', opts:['library(ggplot2)','import ggplot2','use ggplot2','require ggplot2()'], a:0},
      {t:'mc', q:'Start a ggplot of age vs weight from df:', opts:['ggplot(df, aes(x = age, y = weight))','ggplot(df, x = age, y = weight)','ggplot(age, weight)','gg(df$age, df$weight)'], a:0},
      {t:'mc', q:'Add points to a ggplot:', opts:['+ geom_point()','+ points()','+ geom_scatter()','+ add_points()'], a:0},
      {t:'mc', q:'Colour points by a column colour:', opts:['aes(x = age, y = weight, colour = colour)','aes(x = age, y = weight), colour = colour','geom_point(colour = df$colour)','colour(colour)'], a:0, hint:'Mappings to data go inside aes().'},
      {t:'mc', q:'Layers in ggplot are joined with…', opts:['+','%>%','&','->'], a:0},
    ]},
    { title: 'summary stats', qs: [
      {t:'mc', q:'Median of c(1, 3, 100):', opts:['[1] 3','[1] 34.67','[1] 100','[1] 1'], a:0},
      {t:'mc', q:'Standard deviation function:', opts:['sd(x)','std(x)','stdev(x)','var(x)^2'], a:0},
      {t:'mc', q:'summary(x) shows…', opts:['min, quartiles, median, mean, max','only the mean','a histogram','the data type'], a:0},
      {t:'mc', q:'Correlation between x and y:', opts:['cor(x, y)','corr(x, y)','correlation(x, y)','cov(x, y)'], a:0},
      {t:'mc', q:'Frequency table of a vector v:', opts:['table(v)','count(v)','freq(v)','summary(v)'], a:0},
    ]},
  ]}
);

/* ================= ITALIAN ================= */
C.italian.units.push(
  { title: 'Passato e Imperfetto', topics: ['passato prossimo', 'imperfetto', 'riflessivi'], lessons: [
    { title: 'essere o avere?', qs: [
      {t:'mc', q:'Ieri (io) ___ andato al mare.', opts:['sono','ho','ero','avevo'], a:0, hint:'Verbs of movement take essere.'},
      {t:'mc', q:'Maria ___ mangiato una pizza.', opts:['ha','è','era','aveva'], a:0},
      {t:'mc', q:'Noi ___ arrivati tardi.', opts:['siamo','abbiamo','eravamo','avevamo'], a:0},
      {t:'mc', q:'Le ragazze sono ___ a casa.', opts:['rimaste','rimasto','rimasti','rimasta'], a:0, hint:'With essere the participle agrees: -e for feminine plural.'},
      {t:'type', q:'Write the passato prossimo: "lei / partire"', a:['è partita','lei è partita'], kb:'it', hint:'partire → essere + partita'},
    ]},
    { title: 'participi irregolari', qs: [
      {t:'mc', q:'fare → ho ___', opts:['fatto','fato','facuto','faciuto'], a:0},
      {t:'mc', q:'leggere → ho ___', opts:['letto','leggiuto','legato','leggito'], a:0},
      {t:'mc', q:'aprire → ho ___', opts:['aperto','aprito','apruto','aperito'], a:0},
      {t:'mc', q:'venire → sono ___', opts:['venuto','venito','vento','venuti'], a:0},
      {t:'type', q:'Write the participio passato of "scrivere".', a:['scritto'], kb:'it'},
    ]},
    { title: "l'imperfetto", qs: [
      {t:'mc', q:'Da bambina (io) ___ sempre al parco.', opts:['giocavo','ho giocato','giocherò','giocai'], a:0, hint:'Habit in the past → imperfetto.'},
      {t:'mc', q:'essere → noi ___', opts:['eravamo','eramo','siamo stati','essevamo'], a:0},
      {t:'mc', q:'Mentre ___, è arrivato Luca.', opts:['dormivo','ho dormito','dormo','dormirò'], a:0, hint:'Background action → imperfetto; interruption → passato prossimo.'},
      {t:'mc', q:'fare → loro ___', opts:['facevano','favano','fecero','hanno fatto'], a:0},
      {t:'type', q:'Write the imperfetto: "tu / avere"', a:['avevi','tu avevi'], kb:'it'},
    ]},
    { title: 'passato vs imperfetto', qs: [
      {t:'mc', q:'Ieri ___ freddo, così ___ a casa.', opts:['faceva / sono rimasta','ha fatto / rimanevo','faceva / rimanevo','ha fatto / sono rimasta'], a:0, hint:'Description → imperfetto; single completed action → passato prossimo.'},
      {t:'mc', q:'L\'anno scorso ___ in Italia tre volte.', opts:['sono andata','andavo','andrò','andassi'], a:0, hint:'Counted, completed events → passato prossimo.'},
      {t:'mc', q:'Quando ___ piccolo, ___ paura del buio.', opts:['ero / avevo','sono stato / ho avuto','ero / ho avuto','sono stato / avevo'], a:0},
      {t:'mc', q:'Which is correct?', opts:['Mentre cucinavo, ho sentito un rumore.','Mentre ho cucinato, sentivo un rumore.','Mentre cucinavo, sentivo un rumore ieri alle tre.','Mentre ho cucinato, ho sentito un rumore.'], a:0},
      {t:'type', q:'Translate: "I was sleeping when you called." (dormire / chiamare, tu)', a:['dormivo quando hai chiamato','dormivo quando mi hai chiamato','dormivo quando mi hai chiamata','dormivo quando hai chiamato.'], kb:'it'},
    ]},
    { title: 'riflessivi al passato', qs: [
      {t:'mc', q:'Stamattina (io, f.) ___ alle sette.', opts:['mi sono svegliata','mi ho svegliato','mi sono svegliato','sono svegliata'], a:0, hint:'Reflexive verbs always take essere.'},
      {t:'mc', q:'Loro ___ presto.', opts:['si sono alzati','si hanno alzato','sono alzati','si alzavano ieri'], a:0},
      {t:'mc', q:'Marco ___ le mani.', opts:['si è lavato','si ha lavato','è lavato','si è lavate'], a:0},
      {t:'mc', q:'Come ___ (tu, f.) ieri sera?', opts:['ti sei divertita','ti hai divertito','sei divertita','ti sei divertito'], a:0},
      {t:'type', q:'Write: "we (f.) got dressed" (vestirsi)', a:['ci siamo vestite','noi ci siamo vestite'], kb:'it'},
    ]},
  ]},
  { title: 'Condizionale e Congiuntivo', topics: ['condizionale', 'vorrei / potrei', 'congiuntivo'], lessons: [
    { title: 'condizionale presente', qs: [
      {t:'mc', q:'mangiare → io ___', opts:['mangerei','mangiarei','mangerò','mangierei'], a:0, hint:'Same stem as the future + -ei.'},
      {t:'mc', q:'essere → tu ___', opts:['saresti','sarai','sarei','esseresti'], a:0},
      {t:'mc', q:'avere → noi ___', opts:['avremmo','avremo','averemmo','avrebbero'], a:0, hint:'Double m: avremmo (conditional) vs avremo (future).'},
      {t:'mc', q:'volere → loro ___', opts:['vorrebbero','vorranno','volerebbero','vorrei'], a:0},
      {t:'type', q:'Write the condizionale: "lei / potere"', a:['potrebbe','lei potrebbe'], kb:'it'},
    ]},
    { title: 'usare il condizionale', qs: [
      {t:'mc', q:'Polite request in a café:', opts:['Vorrei un caffè, per favore.','Voglio un caffè.','Vorrò un caffè.','Volevo un caffè adesso.'], a:0},
      {t:'mc', q:'"Could you help me?"', opts:['Potresti aiutarmi?','Puoi aiutarmi? (only)','Potrai aiutarmi?','Potevi aiutarmi?'], a:0},
      {t:'mc', q:'"You should study more."', opts:['Dovresti studiare di più.','Devi studiare di più.','Dovrai studiare di più.','Dovevi studiare di più.'], a:0},
      {t:'mc', q:'"I would go, but I have no time."', opts:['Andrei, ma non ho tempo.','Andrò, ma non ho tempo.','Andavo, ma non ho tempo.','Vado, ma non avrei tempo.'], a:0},
      {t:'type', q:'Translate: "I would like to travel." (viaggiare)', a:['vorrei viaggiare','mi piacerebbe viaggiare','vorrei viaggiare.'], kb:'it'},
    ]},
    { title: 'congiuntivo presente', qs: [
      {t:'mc', q:'Penso che Marco ___ ragione.', opts:['abbia','ha','avrà','avesse'], a:0, hint:'pensare che + congiuntivo'},
      {t:'mc', q:'Spero che tu ___ bene.', opts:['stia','stai','starai','stavi'], a:0},
      {t:'mc', q:'È importante che voi ___ in tempo.', opts:['arriviate','arrivate','arriverete','arrivavate'], a:0},
      {t:'mc', q:'Which sentence does NOT need the congiuntivo?', opts:['So che Anna è a casa.','Credo che Anna sia a casa.','Non penso che Anna sia a casa.','Voglio che Anna sia a casa.'], a:0, hint:'sapere expresses certainty → indicativo.'},
      {t:'type', q:'Write the congiuntivo presente: "essere" → "che loro …"', a:['siano','che loro siano'], kb:'it'},
    ]},
  ]}
);

/* ================= TURKISH ================= */
C.turkish.units.push(
  { title: 'Şimdiki Zaman', topics: ['-iyor', 'negative', 'questions'], lessons: [
    { title: '-iyor forms', qs: [
      {t:'mc', q:'gelmek (to come) → "I am coming" = gel___', opts:['iyorum','iyor','ıyorum','uyorum'], a:0, hint:'Stem gel- + iyor + um'},
      {t:'mc', q:'bakmak (to look) → "you are looking" = bak___', opts:['ıyorsun','iyorsun','uyorsun','ıyorum'], a:0, hint:'a is back → -ıyor'},
      {t:'mc', q:'okumak (to read) → "he/she is reading" = oku___', opts:['yor','uyor','iyor','yorum'], a:0, hint:'Stem ends in a vowel: oku + yor.'},
      {t:'mc', q:'"Biz gidiyoruz." means:', opts:['We are going.','We went.','We will go.','We are coming.'], a:0},
      {t:'type', q:'Write "I am drinking" (içmek).', a:['içiyorum'], kb:'tr', hint:'iç + iyor + um'},
    ]},
    { title: 'negative -miyor', qs: [
      {t:'mc', q:'"I am not coming" = gel___', opts:['miyorum','meiyorum','mıyorum','miyor'], a:0, hint:'Negative -me/-ma becomes -mi/-mı before -yor.'},
      {t:'mc', q:'"She is not working" (çalışmak) = çalış___', opts:['mıyor','miyor','mayor','muyor'], a:0},
      {t:'mc', q:'"Anlamıyorum." means:', opts:["I don't understand.","I understand.","I am listening.","I don't know."], a:0},
      {t:'mc', q:'"They are not eating" (yemek) = ye___', opts:['miyorlar','mıyorlar','miyorler','yorlar'], a:0},
      {t:'type', q:'Write "I am not sleeping" (uyumak).', a:['uyumuyorum'], kb:'tr', hint:'uyu + mu + yor + um (u is back rounded)'},
    ]},
    { title: 'questions', qs: [
      {t:'mc', q:'"Are you coming?" =', opts:['Geliyor musun?','Geliyorsun mu?','Mi geliyorsun?','Geliyor mu?'], a:0, hint:'The question particle goes between -iyor and the person ending.'},
      {t:'mc', q:'"Is she working?" =', opts:['Çalışıyor mu?','Çalışıyor mı?','Çalışıyor mi?','Çalışmı yor?'], a:0},
      {t:'mc', q:'"Ne yapıyorsun?" means:', opts:['What are you doing?','Where are you going?','Who are you?','Why are you here?'], a:0},
      {t:'mc', q:'"Nereye gidiyorsun?" means:', opts:['Where are you going?','What are you doing?','When are you going?','Where are you?'], a:0},
      {t:'type', q:'Ask "Are you listening?" (dinlemek).', a:['dinliyor musun','dinliyor musun?'], kb:'tr', hint:'dinle → dinli + yor; then "musun"'},
    ]},
    { title: 'common verbs', qs: [
      {t:'mc', q:'"istemek" means:', opts:['to want','to eat','to go','to see'], a:0},
      {t:'mc', q:'"görmek" means:', opts:['to see','to hear','to give','to take'], a:0},
      {t:'mc', q:'"Seni seviyorum." means:', opts:['I love you.','I see you.','I want you.','I know you.'], a:0},
      {t:'mc', q:'"Türkçe öğreniyorum." means:', opts:['I am learning Turkish.','I speak Turkish.','I am teaching Turkish.','I know Turkish.'], a:0},
      {t:'type', q:'Write "I am learning" (öğrenmek).', a:['öğreniyorum'], kb:'tr'},
    ]},
  ]},
  { title: 'Benim, Senin', topics: ['possessive', 'accusative -i', 'time'], lessons: [
    { title: 'possessive endings', qs: [
      {t:'mc', q:'"my cat" = kedi___', opts:['m','im','ım','si'], a:0, hint:'After a vowel, "my" is just -m.'},
      {t:'mc', q:'"your house" = ev___', opts:['in','ın','n','im'], a:0},
      {t:'mc', q:'"his/her book" = kitab___', opts:['ı','i','sı','si'], a:0, hint:'kitap → kitab- (p softens) + ı (back vowel).'},
      {t:'mc', q:'"our teacher" = öğretmen___', opts:['imiz','ımız','miz','umuz'], a:0},
      {t:'type', q:'Write "my name" (ad).', a:['adım'], kb:'tr', hint:'ad + ım'},
    ]},
    { title: 'accusative -i', qs: [
      {t:'mc', q:'"I see the cat" = Kedi___ görüyorum.', opts:['yi','i','ı','yı'], a:0, hint:'Definite object + buffer y after a vowel.'},
      {t:'mc', q:'"I am reading the book" = Kitab___ okuyorum.', opts:['ı','i','yı','u'], a:0},
      {t:'mc', q:'"I am drinking tea" (not a specific tea):', opts:['Çay içiyorum.','Çayı içiyorum.','Çayi içiyorum.','Çayın içiyorum.'], a:0, hint:'Indefinite objects take no ending.'},
      {t:'mc', q:'"Seni" means:', opts:['you (object)','your','with you','to you'], a:0},
      {t:'type', q:'Write "I love Istanbul" (İstanbul, sevmek).', a:["istanbul'u seviyorum","i̇stanbul'u seviyorum","istanbulu seviyorum","İstanbul'u seviyorum"], kb:'tr', hint:'İstanbul\'u (apostrophe after proper nouns) + seviyorum'},
    ]},
    { title: 'saat kaç?', qs: [
      {t:'mc', q:'"Saat kaç?" means:', opts:['What time is it?','How many hours?','What is the clock?','How old are you?'], a:0},
      {t:'mc', q:'"Saat üç." =', opts:["It's three o'clock.","It's three thirty.","Three hours.","At three."], a:0},
      {t:'mc', q:'"Saat dört buçuk." =', opts:['4:30','4:15','4:45','4:00'], a:0, hint:'buçuk = half past'},
      {t:'mc', q:'"Pazartesi" is…', opts:['Monday','Sunday','Friday','Saturday'], a:0},
      {t:'type', q:'Write "today" in Turkish.', a:['bugün'], kb:'tr'},
    ]},
  ]}
);

/* ================= RUSSIAN ================= */
C.russian.units.push(
  { title: 'Род и число', topics: ['gender', 'plurals', 'colours'], lessons: [
    { title: 'gender', qs: [
      {t:'mc', q:'Nouns ending in a consonant are usually…', opts:['masculine','feminine','neuter','plural'], a:0},
      {t:'mc', q:'"книга" (book) is…', opts:['feminine','masculine','neuter','plural'], a:0, hint:'-а → feminine'},
      {t:'mc', q:'"окно" (window) is…', opts:['neuter','masculine','feminine','plural'], a:0, hint:'-о → neuter'},
      {t:'mc', q:'"мой / моя / моё" — which goes with "кот"?', opts:['мой кот','моя кот','моё кот','мои кот'], a:0},
      {t:'mc', q:'"___ мама" (my mum)', opts:['моя','мой','моё','мои'], a:0},
    ]},
    { title: 'plurals', qs: [
      {t:'mc', q:'кот → ___', opts:['коты','котa','котов','котыи'], a:0},
      {t:'mc', q:'книга → ___', opts:['книги','книгы','книгa','книгов'], a:0, hint:'After г, к, х: -и not -ы.'},
      {t:'mc', q:'окно → ___', opts:['окна','окны','окни','окно'], a:0},
      {t:'mc', q:'"студенты" means:', opts:['students','a student','student\'s','study'], a:0},
      {t:'type', q:'Make "стол" (table) plural.', a:['столы'], kb:'ru'},
    ]},
    { title: 'colours & adjectives', qs: [
      {t:'mc', q:'"красный" means:', opts:['red','blue','green','black'], a:0},
      {t:'mc', q:'"белый кот" =', opts:['white cat','black cat','big cat','small cat'], a:0},
      {t:'mc', q:'"большой" means:', opts:['big','small','good','new'], a:0},
      {t:'mc', q:'The adjective for a feminine noun: "___ книга" (new)', opts:['новая','новый','новое','новые'], a:0, hint:'Adjectives agree: -ая for feminine.'},
      {t:'mc', q:'"хороший день" =', opts:['a good day','a bad day','a long day','a new day'], a:0},
    ]},
    { title: 'numbers 1–10', qs: [
      {t:'mc', q:'"один, два, три" =', opts:['1, 2, 3','2, 3, 4','1, 3, 5','0, 1, 2'], a:0},
      {t:'mc', q:'"пять" =', opts:['5','4','6','9'], a:0},
      {t:'mc', q:'"десять" =', opts:['10','9','7','100'], a:0},
      {t:'mc', q:'"семь" =', opts:['7','6','8','3'], a:0},
      {t:'type', q:'Type "two" in Russian.', a:['два'], kb:'ru'},
    ]},
  ]},
  { title: 'Первые глаголы', topics: ['знать / говорить', 'хочу / люблю', 'где / куда'], lessons: [
    { title: 'я знаю, ты знаешь', qs: [
      {t:'mc', q:'знать (to know) → "я ___"', opts:['знаю','знаешь','знает','знают'], a:0},
      {t:'mc', q:'"ты ___" (you know)', opts:['знаешь','знаю','знает','знаем'], a:0},
      {t:'mc', q:'"он/она ___" (knows)', opts:['знает','знаю','знаешь','знают'], a:0},
      {t:'mc', q:'"Мы говорим по-русски." means:', opts:['We speak Russian.','We learn Russian.','We are Russian.','We like Russian.'], a:0},
      {t:'type', q:'Type "I understand" (понимать → я …).', a:['понимаю','я понимаю'], kb:'ru'},
    ]},
    { title: 'хочу и люблю', qs: [
      {t:'mc', q:'"Я хочу чай." means:', opts:['I want tea.','I like tea.','I drink tea.','I have tea.'], a:0},
      {t:'mc', q:'"Я люблю кошек." means:', opts:['I love cats.','I have cats.','I want cats.','I see cats.'], a:0},
      {t:'mc', q:'"Мне нравится Москва." means:', opts:['I like Moscow.','I am in Moscow.','I want Moscow.','Moscow likes me.'], a:0, hint:'нравится = "is pleasing to me"'},
      {t:'mc', q:'"Ты хочешь кофе?" means:', opts:['Do you want coffee?','Do you like coffee?','Do you have coffee?','Is this coffee?'], a:0},
      {t:'type', q:'Type "I want" in Russian.', a:['хочу','я хочу'], kb:'ru'},
    ]},
    { title: 'где и куда', qs: [
      {t:'mc', q:'"Где ты?" means:', opts:['Where are you?','Where are you going?','Who are you?','How are you?'], a:0},
      {t:'mc', q:'"Куда ты идёшь?" means:', opts:['Where are you going?','Where are you?','What are you doing?','When are you going?'], a:0, hint:'где = location, куда = direction'},
      {t:'mc', q:'"Я дома." means:', opts:['I am at home.','I am going home.','My house.','I have a house.'], a:0},
      {t:'mc', q:'"Я иду домой." means:', opts:['I am going home.','I am at home.','I want a home.','I live at home.'], a:0},
      {t:'type', q:'Type "where" (location) in Russian.', a:['где'], kb:'ru'},
    ]},
  ]}
);
})();

// Brighter Path — third layer (loaded after content2.js). Always APPEND units; never reorder, so saved progress keeps its lesson ids.
(() => {
const C = window.CONTENT;

/* ================= PYTHON ================= */
C.python.units.push(
  { title: 'Files & Iteration Tools', topics: ['with open', 'enumerate / zip', 'lambda & sorted'], lessons: [
    { title: 'reading files', qs: [
      {t:'mc', q:'The recommended way to open a file:', opts:['with open("a.txt") as f:\n    data = f.read()','f = open("a.txt")\ndata = f.read()  # never closed','open("a.txt").read().close()','read(open("a.txt"))'], a:0, hint:'with closes the file automatically.'},
      {t:'mc', q:'f.readlines() returns…', opts:['a list of lines (with \\n at the end)','one big string','a list of words','the first line'], a:0},
      {t:'mc', q:'What does this do?', code:'with open("a.txt", "w") as f:\n    f.write("hi")', opts:['Creates/overwrites a.txt with "hi"','Appends "hi" to a.txt','Reads "hi" from a.txt','error'], a:0, hint:'"w" overwrites, "a" appends.'},
      {t:'mc', q:'Loop over a file line by line:', opts:['for line in f:','for line in f.lines:','while f.next():','for line in open:'], a:0},
      {t:'mc', q:'What does this print?', code:'line = "cat\\n"\nprint(line.strip())', opts:['cat','cat\\n','cat (with a blank line)','error'], a:0, hint:'.strip() removes whitespace including \\n.'},
    ]},
    { title: 'enumerate & zip', qs: [
      {t:'mc', q:'What does this print?', code:'for i, c in enumerate("ab"):\n    print(i, c)', opts:['0 a then 1 b','1 a then 2 b','a 0 then b 1','error'], a:0},
      {t:'mc', q:'What does this print?', code:'for a, b in zip([1, 2], ["x", "y"]):\n    print(a, b)', opts:['1 x then 2 y','1 2 then x y','(1, x) (2, y)','error'], a:0},
      {t:'mc', q:'What does this print?', code:'print(list(zip([1, 2, 3], "ab")))', opts:["[(1, 'a'), (2, 'b')]","[(1, 'a'), (2, 'b'), (3, None)]","error","[1, 'a', 2, 'b']"], a:0, hint:'zip stops at the shortest.'},
      {t:'mc', q:'Start enumerate at 1:', opts:['enumerate(xs, 1)','enumerate(xs, start=0)','enumerate(1, xs)','enumerate(xs) + 1'], a:0},
      {t:'mc', q:'What does this print?', code:'d = dict(zip("ab", [1, 2]))\nprint(d["b"])', opts:['2','1','b','error'], a:0},
    ]},
    { title: 'lambda & sorted', qs: [
      {t:'mc', q:'What does this print?', code:'f = lambda x: x * 2\nprint(f(4))', opts:['8','4','lambda','error'], a:0},
      {t:'mc', q:'Sort words by length:', opts:['sorted(words, key=len)','sorted(words, len)','words.sort(len)','sorted(len(words))'], a:0},
      {t:'mc', q:'What does this print?', code:'pairs = [(1, "b"), (2, "a")]\nprint(sorted(pairs, key=lambda p: p[1]))', opts:["[(2, 'a'), (1, 'b')]","[(1, 'b'), (2, 'a')]","['a', 'b']","error"], a:0},
      {t:'mc', q:'Sort descending:', opts:['sorted(xs, reverse=True)','sorted(xs, desc=True)','sorted(xs)[::1]','sorted(-xs)'], a:0},
      {t:'mc', q:'What does this print?', code:'print(max(["aa", "b", "ccc"], key=len))', opts:['ccc','aa','b','error'], a:0},
    ]},
    { title: 'generators-lite', qs: [
      {t:'mc', q:'What does this print?', code:'g = (x * x for x in range(3))\nprint(list(g))', opts:['[0, 1, 4]','(0, 1, 4)','[1, 4, 9]','error'], a:0, hint:'Round brackets make a generator expression.'},
      {t:'mc', q:'What does this print?', code:'print(any(x > 2 for x in [1, 2, 3]))', opts:['True','False','[False, False, True]','error'], a:0},
      {t:'mc', q:'What does this print?', code:'print(all(x > 0 for x in []))', opts:['True','False','error','None'], a:0, hint:'all() of nothing is True.'},
      {t:'mc', q:'What does this print?', code:'def gen():\n    yield 1\n    yield 2\nprint(sum(gen()))', opts:['3','1','[1, 2]','error'], a:0},
      {t:'mc', q:'A generator can be iterated…', opts:['once','twice','any number of times','never'], a:0},
    ]},
  ]},
  { title: 'Pandas Basics', topics: ['DataFrame', 'filtering', 'groupby'], lessons: [
    { title: 'DataFrame', qs: [
      {t:'mc', q:'The usual pandas import:', opts:['import pandas as pd','import pd','from pandas import *','pandas.import()'], a:0},
      {t:'mc', q:'Read a CSV file:', opts:['pd.read_csv("cats.csv")','pd.open("cats.csv")','pd.csv("cats.csv")','pd.load("cats.csv")'], a:0},
      {t:'mc', q:'First 5 rows of df:', opts:['df.head()','df.top()','df[:5]()','df.first(5)'], a:0},
      {t:'mc', q:'The age column of df:', opts:['df["age"]','df.column("age")','df->age','df[age]'], a:0},
      {t:'mc', q:'Number of rows and columns:', opts:['df.shape','df.size()','len(df.columns)','df.dims'], a:0},
    ]},
    { title: 'filtering', qs: [
      {t:'mc', q:'Rows where age > 3:', opts:['df[df["age"] > 3]','df.where(age > 3)','df[age > 3]','df.filter("age > 3")'], a:0},
      {t:'mc', q:'Two conditions:', opts:['df[(df["age"] > 3) & (df["colour"] == "white")]','df[df["age"] > 3 and df["colour"] == "white"]','df[df.age > 3 && df.colour == "white"]','df[age > 3, colour == "white"]'], a:0, hint:'Use & and | with brackets, not and/or.'},
      {t:'mc', q:'Select columns name and age:', opts:['df[["name", "age"]]','df["name", "age"]','df.cols("name", "age")','df[name, age]'], a:0},
      {t:'mc', q:'Sort by age, oldest first:', opts:['df.sort_values("age", ascending=False)','df.sort("age", desc=True)','df.order_by("age")','sorted(df, "age")'], a:0},
      {t:'mc', q:'Rows with a missing city:', opts:['df[df["city"].isna()]','df[df["city"] == None]','df[df["city"] is None]','df.missing("city")'], a:0},
    ]},
    { title: 'summaries', qs: [
      {t:'mc', q:'Average age:', opts:['df["age"].mean()','mean(df["age"])','df.mean("age")','df["age"].avg()'], a:0},
      {t:'mc', q:'Count of cats per colour:', opts:['df["colour"].value_counts()','df.count("colour")','df.groupby("colour")','df["colour"].count_values()'], a:0},
      {t:'mc', q:'Mean age per city:', opts:['df.groupby("city")["age"].mean()','df.mean("age", by="city")','df["age"].groupby().mean("city")','df.group("city").age.mean'], a:0},
      {t:'mc', q:'Quick statistics for every numeric column:', opts:['df.describe()','df.stats()','df.summary()','df.info()'], a:0},
      {t:'mc', q:'Add a column age_months:', opts:['df["age_months"] = df["age"] * 12','df.add("age_months", age * 12)','df.age_months = 12','df.insert(age * 12)'], a:0},
    ]},
  ]}
);

/* ================= SQL ================= */
C.sql.units.push(
  { title: 'Window Functions', topics: ['ROW_NUMBER', 'PARTITION BY', 'LAG / LEAD'], lessons: [
    { title: 'OVER ()', qs: [
      {t:'mc', q:'A window function…', opts:['computes a value across related rows WITHOUT collapsing them','always uses GROUP BY','returns one row per group','only works on dates'], a:0},
      {t:'mc', q:'Number every cat by age, oldest first:', opts:['SELECT name, ROW_NUMBER() OVER (ORDER BY age DESC) FROM cats;','SELECT name, ROW_NUMBER(age DESC) FROM cats;','SELECT name, COUNT(*) OVER age FROM cats;','SELECT name, NUMBER() FROM cats ORDER BY age;'], a:0},
      {t:'mc', q:'Each cat with the overall average age beside it:', opts:['SELECT name, age, AVG(age) OVER () FROM cats;','SELECT name, age, AVG(age) FROM cats;','SELECT name, age, AVG(age) FROM cats GROUP BY name;','SELECT name, AVG(age) OVER name FROM cats;'], a:0},
      {t:'mc', q:'RANK() vs ROW_NUMBER():', opts:['RANK gives ties the same number and skips; ROW_NUMBER never ties','They are identical','ROW_NUMBER skips numbers on ties','RANK only works with PARTITION BY'], a:0},
      {t:'mc', q:'DENSE_RANK() with ages 5, 5, 3 gives…', opts:['1, 1, 2','1, 1, 3','1, 2, 3','2, 2, 3'], a:0},
    ]},
    { title: 'PARTITION BY', qs: [
      {t:'mc', q:'Number cats within each city:', opts:['ROW_NUMBER() OVER (PARTITION BY city ORDER BY age)','ROW_NUMBER() OVER (GROUP BY city)','ROW_NUMBER() BY city','PARTITION city ROW_NUMBER()'], a:0},
      {t:'mc', q:'Oldest cat per city (one row each):', opts:['SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM cats) t WHERE rn = 1;','SELECT city, MAX(age), name FROM cats GROUP BY city;','SELECT * FROM cats WHERE age = MAX(age) GROUP BY city;','SELECT TOP 1 * FROM cats PARTITION BY city;'], a:0, hint:'Filter on the window column from a subquery.'},
      {t:'mc', q:'Each cat\'s age as a share of its city\'s total:', opts:['age * 1.0 / SUM(age) OVER (PARTITION BY city)','age / SUM(age) GROUP BY city','age / SUM(age)','SUM(age) OVER city / age'], a:0},
      {t:'mc', q:'Can you use a window function in WHERE?', opts:['No, wrap it in a subquery or CTE','Yes, always','Only with RANK','Only in MySQL'], a:0},
      {t:'mc', q:'A running total of ages ordered by id:', opts:['SUM(age) OVER (ORDER BY id)','SUM(age) GROUP BY id','RUNNING_SUM(age)','SUM(age) OVER ()'], a:0},
    ]},
    { title: 'LAG, LEAD, CTEs', qs: [
      {t:'mc', q:'The previous row\'s age (ordered by id):', opts:['LAG(age) OVER (ORDER BY id)','PREV(age)','LEAD(age) OVER (ORDER BY id)','age - 1'], a:0},
      {t:'mc', q:'LEAD(age, 2) returns…', opts:['the age two rows ahead','the age two rows behind','age + 2','the second-largest age'], a:0},
      {t:'mc', q:'A CTE (common table expression) starts with…', opts:['WITH','CTE','DEFINE','TEMP'], a:0},
      {t:'mc', q:'Which is a valid CTE?', opts:['WITH old AS (SELECT * FROM cats WHERE age > 5) SELECT name FROM old;','WITH old = SELECT * FROM cats; SELECT name FROM old;','CTE old (SELECT * FROM cats) SELECT * FROM old;','SELECT * FROM cats AS WITH old;'], a:0},
      {t:'mc', q:'Why use a CTE?', opts:['To name an intermediate result and keep the query readable','To make queries faster automatically','To create a permanent table','To replace JOIN'], a:0},
    ]},
  ]},
  { title: 'Design & Dates', topics: ['keys', 'dates', 'transactions'], lessons: [
    { title: 'keys', qs: [
      {t:'mc', q:'A PRIMARY KEY is…', opts:['a unique, non-NULL identifier for each row','the first column','a sorted column','a column with the most data'], a:0},
      {t:'mc', q:'A FOREIGN KEY…', opts:['references a primary key in another table','is a key from another database','is always text','must be NULL'], a:0},
      {t:'mc', q:'Create owners with an id primary key:', opts:['CREATE TABLE owners (id INTEGER PRIMARY KEY, name TEXT);','CREATE TABLE owners (id KEY, name TEXT);','CREATE TABLE owners PRIMARY id (name TEXT);','CREATE owners (id INTEGER UNIQUE NULL);'], a:0},
      {t:'mc', q:'Which constraint stops duplicate emails?', opts:['UNIQUE','NOT NULL','DEFAULT','CHECK'], a:0},
      {t:'mc', q:'An INDEX mainly…', opts:['speeds up lookups on a column','stores the data twice for safety','sorts the table permanently','removes duplicates'], a:0},
    ]},
    { title: 'dates', qs: [
      {t:'mc', q:'The ISO date format SQL prefers:', opts:["'2026-09-11'","'11/09/2026'","'Sep 11 2026'","'11-09-26'"], a:0},
      {t:'mc', q:'Cats born after 2020:', opts:["WHERE born > '2020-12-31'","WHERE born > 2020","WHERE YEAR born > 2020","WHERE born.year > 2020"], a:0},
      {t:'mc', q:'Today\'s date in SQLite / Postgres:', opts:["DATE('now') / CURRENT_DATE","TODAY()","GETDATE","NOW"], a:0},
      {t:'mc', q:'Get the year from a date (Postgres/MySQL):', opts:['EXTRACT(YEAR FROM born)','born.year','YEAR_OF(born)','SUBSTR(born)'], a:0, hint:'MySQL also has YEAR(born); SQLite uses strftime(\'%Y\', born).'},
      {t:'mc', q:'Cats born in the last 30 days (Postgres):', opts:["WHERE born >= CURRENT_DATE - INTERVAL '30 days'","WHERE born >= TODAY - 30","WHERE born > NOW() - 30d","WHERE DATEDIFF(born) < 30"], a:0},
    ]},
    { title: 'transactions', qs: [
      {t:'mc', q:'A transaction groups statements so they…', opts:['all succeed or all roll back','run faster','run in parallel','skip constraints'], a:0},
      {t:'mc', q:'Start / save / undo a transaction:', opts:['BEGIN / COMMIT / ROLLBACK','START / SAVE / UNDO','OPEN / CLOSE / CANCEL','BEGIN / END / DELETE'], a:0},
      {t:'mc', q:'You ran DELETE FROM cats; inside a transaction by mistake. What saves you?', opts:['ROLLBACK;','COMMIT;','UNDO;','Nothing'], a:0},
      {t:'mc', q:'ACID stands for Atomicity, Consistency, Isolation and…', opts:['Durability','Dependency','Distribution','Density'], a:0},
      {t:'mc', q:'Preview what a DELETE would remove:', opts:['Run the same WHERE with SELECT first','Run DELETE and check the count','Use DELETE ... PREVIEW','Use SHOW DELETE'], a:0},
    ]},
  ]}
);

/* ================= R ================= */
C.r.units.push(
  { title: 'Tidy Data', topics: ['arrange / distinct', 'joins', 'pivoting'], lessons: [
    { title: 'arrange & distinct', qs: [
      {t:'mc', q:'Sort df by age, oldest first (dplyr):', opts:['arrange(df, desc(age))','arrange(df, -age, desc = TRUE)','sort(df, age)','order(df$age)'], a:0},
      {t:'mc', q:'Unique colours in df:', opts:['distinct(df, colour)','unique(df)','df$colour[unique]','select(df, unique(colour))'], a:0},
      {t:'mc', q:'Count rows per colour:', opts:['count(df, colour)','n(df, colour)','table(df)','length(df$colour)'], a:0},
      {t:'mc', q:'Rename age to years:', opts:['rename(df, years = age)','rename(df, age = years)','df$years <- df.age','colnames(df, "years")'], a:0},
      {t:'mc', q:'Base R equivalent of arrange(df, age):', opts:['df[order(df$age), ]','sort(df$age)','df[sort(age)]','order(df)'], a:0},
    ]},
    { title: 'joins in dplyr', qs: [
      {t:'mc', q:'Keep all cats, add owner info where it exists:', opts:['left_join(cats, owners, by = "owner_id")','inner_join(cats, owners)','merge(cats)','join(cats, owners, all = TRUE)'], a:0},
      {t:'mc', q:'Only rows that match in both:', opts:['inner_join','left_join','full_join','anti_join'], a:0},
      {t:'mc', q:'Cats WITHOUT an owner:', opts:['anti_join(cats, owners, by = "owner_id")','left_join(cats, owners) %>% filter(is.na(owner))','inner_join(cats, owners)','semi_join(cats, owners)'], a:0},
      {t:'mc', q:'Key columns have different names (owner_id vs id):', opts:['by = c("owner_id" = "id")','by = "owner_id = id"','on = owner_id == id','by = list(owner_id, id)'], a:0},
      {t:'mc', q:'Stack two data frames with the same columns:', opts:['bind_rows(a, b)','bind_cols(a, b)','c(a, b)','join(a, b)'], a:0},
    ]},
    { title: 'pivoting', qs: [
      {t:'mc', q:'Wide → long (tidyr):', opts:['pivot_longer(df, cols = c(jan, feb), names_to = "month", values_to = "n")','pivot_wider(df, jan, feb)','melt_longer(df)','gather_wide(df)'], a:0},
      {t:'mc', q:'Long → wide:', opts:['pivot_wider(df, names_from = month, values_from = n)','pivot_longer(df, month)','spread_long(df)','widen(df, month)'], a:0},
      {t:'mc', q:'Tidy data means…', opts:['each variable is a column, each observation a row','no missing values','all columns numeric','sorted rows'], a:0},
      {t:'mc', q:'Split "2026-09" into year and month columns:', opts:['separate(df, ym, into = c("year", "month"), sep = "-")','split(df$ym, "-")','divide(df, ym)','strsplit(df)'], a:0},
      {t:'mc', q:'Drop rows with any NA:', opts:['drop_na(df)','na.omit(df) (also works)','both of these','remove(df, NA)'], a:2, hint:'drop_na is tidyr, na.omit is base R.'},
    ]},
  ]},
  { title: 'Modelling Basics', topics: ['lm', 't.test', 'reading output'], lessons: [
    { title: 'linear model', qs: [
      {t:'mc', q:'Fit weight on age:', opts:['lm(weight ~ age, data = df)','lm(age -> weight, df)','lm(df$weight, df$age)','model(weight, age)'], a:0},
      {t:'mc', q:'See coefficients and p-values of model m:', opts:['summary(m)','print(m$p)','coefficients(m, p = TRUE)','m.summary'], a:0},
      {t:'mc', q:'The slope 0.5 for age means…', opts:['each extra year is linked to +0.5 weight on average','weight is always 0.5','age explains 50% of weight','the fit is bad'], a:0},
      {t:'mc', q:'R-squared of 0.8 means…', opts:['80% of the variance in weight is explained by the model','the slope is 0.8','80% of rows fit','the p-value is 0.8'], a:0},
      {t:'mc', q:'Predict for new data:', opts:['predict(m, newdata = data.frame(age = 4))','m(4)','predict(4, m)','forecast(m, 4)'], a:0},
    ]},
    { title: 't-test & p-values', qs: [
      {t:'mc', q:'Compare mean weight of white vs black cats:', opts:['t.test(weight ~ colour, data = df)','ttest(df$weight, df$colour)','compare(weight, colour)','anova(weight)'], a:0},
      {t:'mc', q:'p = 0.03 at the usual 0.05 threshold means…', opts:['the difference is statistically significant','there is a 3% chance the result is right','the effect is large','the means are equal'], a:0},
      {t:'mc', q:'A 95% confidence interval that includes 0 suggests…', opts:['no significant difference','a large effect','an error in the data','the test failed'], a:0},
      {t:'mc', q:'Correlation of 0.9 means…', opts:['a strong positive linear relationship','x causes y','a weak relationship','the slope is 0.9'], a:0},
      {t:'mc', q:'Set the random seed for reproducibility:', opts:['set.seed(42)','seed(42)','random.seed = 42','srand(42)'], a:0},
    ]},
  ]}
);

/* ================= ITALIAN ================= */
C.italian.units.push(
  { title: 'Pronomi Combinati', topics: ['me lo, te la', 'glielo', 'con il passato'], lessons: [
    { title: 'me lo, te la', qs: [
      {t:'mc', q:'"Mi dai il libro?" → "Sì, ___ do."', opts:['te lo','ti lo','me lo','te il'], a:0, hint:'mi + lo → me lo; when answering "to you" it becomes te lo.'},
      {t:'mc', q:'"Ci porti le chiavi?" → "Sì, ___ porto."', opts:['ve le','ci le','ve li','vi le'], a:0},
      {t:'mc', q:'Indirect + direct pronoun order is…', opts:['indirect first, then direct (me lo)','direct first (lo me)','either order','they never combine'], a:0},
      {t:'mc', q:'"Mi presti la penna?" → "___ presto volentieri."', opts:['Te la','Te lo','Ti la','Me la'], a:0},
      {t:'type', q:'Answer with combined pronouns: "Mi mandi la foto?" → "Sì, ___ mando." (write the whole answer)', a:['sì, te la mando','si, te la mando','te la mando','sì te la mando','sì, te la mando.'], kb:'it'},
    ]},
    { title: 'glielo', qs: [
      {t:'mc', q:'"Dai il libro a Marco?" → "Sì, ___ do."', opts:['glielo','gli lo','lo gli','gliela'], a:0, hint:'gli/le + lo → glielo (one word).'},
      {t:'mc', q:'"Regali i fiori a Anna?" → "Sì, ___ regalo."', opts:['glieli','gliele','glielo','le li'], a:0},
      {t:'mc', q:'"Dici la verità ai tuoi genitori?" → "Sì, ___ dico."', opts:['gliela','glielo','la gli','gliele'], a:0},
      {t:'mc', q:'glielo is used for…', opts:['to him AND to her (and to them)','only to him','only to her','only to them'], a:0},
      {t:'type', q:'Answer: "Porti le birre a Luca?" → "Sì, ___ porto."', a:['sì, gliele porto','si, gliele porto','gliele porto','sì gliele porto','sì, gliele porto.'], kb:'it'},
    ]},
    { title: 'con il passato', qs: [
      {t:'mc', q:'"Hai dato il libro a Marco?" → "Sì, ___ ho dat___."', opts:["gliel' / o","glielo / o","gliel' / a","gli l' / o"], a:0, hint:'The participle agrees with the DIRECT pronoun (lo → -o).'},
      {t:'mc', q:'"Mi hai mandato le foto?" → "Sì, ___ ho mandat___."', opts:['te le / e','te li / i','te le / o','ti le / e'], a:0},
      {t:'mc', q:'"Ci hai portato la torta?" → "Sì, ___ ho portat___."', opts:["ve l' / a","ve la / o","vi l' / a","ve lo / a"], a:0},
      {t:'mc', q:'Which is wrong?', opts:['Te lo ho detto.','Te l\'ho detto.','Gliel\'ho detto.','Ve l\'ho detto.'], a:0, hint:'lo + ho → l\'ho (elision is standard).'},
      {t:'type', q:'Answer: "Hai spedito la lettera a Giulia?" → "Sì, ___ ho spedit___." (write the whole answer)', a:["sì, gliel'ho spedita","si, gliel'ho spedita","gliel'ho spedita","sì gliel'ho spedita","sì, gliel'ho spedita."], kb:'it'},
    ]},
    { title: 'con infinito e imperativo', qs: [
      {t:'mc', q:'"Voglio dirtelo." means…', opts:['I want to tell it to you.','I want to tell you.','I want you to tell me.','I want it.'], a:0, hint:'Pronouns attach to the infinitive: dire + te + lo.'},
      {t:'mc', q:'"Give it (il libro) to me!" (tu)', opts:['Dammelo!','Dai me lo!','Dammilo!','Me lo dai!'], a:0, hint:'da\' + me + lo → dammelo (double m).'},
      {t:'mc', q:'"Tell it (la verità) to him!" (tu)', opts:['Digliela!','Dille la!','Dilla gli!','Digliele!'], a:0},
      {t:'mc', q:'"Non ___ dire!" (don\'t tell it to me, tu)', opts:['me lo','dirmelo','melo','lo mi'], a:0, hint:'Negative tu imperative = non + infinitive; pronouns can go before or attach (non dirmelo).'},
      {t:'type', q:'Translate: "Can you send it (la mail) to me?" → "Puoi ___?" (attach the pronouns to the infinitive)', a:['puoi mandarmela','puoi mandarmela?','puoi inviarmela','puoi inviarmela?'], kb:'it'},
    ]},
  ]},
  { title: 'Imperativo e Ipotesi', topics: ['imperativo', 'Lei formale', 'periodo ipotetico'], lessons: [
    { title: 'imperativo tu / voi', qs: [
      {t:'mc', q:'parlare → (tu) ___!', opts:['Parla','Parli','Parlare','Parlate'], a:0, hint:'-are verbs: tu imperative ends in -a.'},
      {t:'mc', q:'prendere → (tu) ___!', opts:['Prendi','Prenda','Prende','Prendete'], a:0},
      {t:'mc', q:'finire → (voi) ___!', opts:['Finite','Finisci','Finiscate','Finiscono'], a:0},
      {t:'mc', q:'"Don\'t run!" (tu)', opts:['Non correre!','Non corri!','Non corra!','Non correte!'], a:0, hint:'Negative tu imperative uses the infinitive.'},
      {t:'type', q:'Write the tu imperative of "andare" (short form).', a:["va'",'vai',"va’"], kb:'it', hint:"va' or vai"},
    ]},
    { title: 'imperativo Lei', qs: [
      {t:'mc', q:'Formal: "Come in!" (entrare, Lei)', opts:['Entri!','Entra!','Entrare!','Entrate!'], a:0, hint:'Lei imperative = congiuntivo presente.'},
      {t:'mc', q:'Formal: "Excuse me" (scusare, Lei)', opts:['Scusi','Scusa','Scusate','Scusare'], a:0},
      {t:'mc', q:'Formal: "Wait a moment" (aspettare, Lei)', opts:['Aspetti un attimo','Aspetta un attimo','Aspettate un attimo','Aspettare un attimo'], a:0},
      {t:'mc', q:'Formal: "Tell me" (dire, Lei)', opts:['Mi dica','Dimmi','Mi dice','Dica mi'], a:0, hint:'With Lei, pronouns go BEFORE the verb.'},
      {t:'type', q:'Write the Lei imperative of "venire" → "___ qui!"', a:['venga','venga qui','venga qui!'], kb:'it'},
    ]},
    { title: 'se + futuro / condizionale', qs: [
      {t:'mc', q:'Real condition: "Se ___ tempo, ti chiamo / chiamerò."', opts:['ho / avrò','avrei','avessi','abbia'], a:0},
      {t:'mc', q:'Hypothetical: "Se avessi tempo, ___ in Italia."', opts:['andrei','andrò','vado','andassi'], a:0, hint:'se + congiuntivo imperfetto, then condizionale.'},
      {t:'mc', q:'"If I were you…"', opts:['Se fossi in te…','Se sarei te…','Se ero te…','Se sia te…'], a:0},
      {t:'mc', q:'Which is wrong?', opts:['Se avrei soldi, comprerei una casa.','Se avessi soldi, comprerei una casa.','Se ho soldi, compro una casa.','Se avrò soldi, comprerò una casa.'], a:0, hint:'Never condizionale after se.'},
      {t:'type', q:'Translate: "If I had a cat, I would be happy." (avere / essere felice)', a:['se avessi un gatto, sarei felice','se avessi un gatto sarei felice','se avessi un gatto, sarei felice.'], kb:'it'},
    ]},
  ]}
);

/* ================= TURKISH ================= */
C.turkish.units.push(
  { title: 'Geçmiş Zaman', topics: ['-di past', 'negative -medi', 'questions'], lessons: [
    { title: '-di forms', qs: [
      {t:'mc', q:'gelmek → "I came" = gel___', opts:['dim','dım','dum','düm'], a:0, hint:'e is front unrounded → -di + m'},
      {t:'mc', q:'bakmak → "you looked" = bak___', opts:['tın','dın','tin','dun'], a:0, hint:'k is voiceless → -tı; a is back → ı'},
      {t:'mc', q:'okumak → "she read" = oku___', opts:['du','dı','di','tu'], a:0},
      {t:'mc', q:'görmek → "we saw" = gör___', opts:['dük','dik','duk','tük'], a:0, hint:'ö is front rounded → ü'},
      {t:'type', q:'Write "I ate" (yemek).', a:['yedim'], kb:'tr'},
    ]},
    { title: 'negative -medi', qs: [
      {t:'mc', q:'"I did not come" = gel___', opts:['medim','madım','miyorum','mem'], a:0},
      {t:'mc', q:'"She did not work" (çalışmak) = çalış___', opts:['madı','medi','mıyor','mamış'], a:0},
      {t:'mc', q:'"Gitmedik." means:', opts:["We didn't go.","We went.","We aren't going.","They didn't go."], a:0},
      {t:'mc', q:'"Anlamadım." means:', opts:["I didn't understand.","I don't understand.","I understood.","You didn't understand."], a:0},
      {t:'type', q:'Write "I did not see" (görmek).', a:['görmedim'], kb:'tr'},
    ]},
    { title: 'past questions', qs: [
      {t:'mc', q:'"Did you come?" =', opts:['Geldin mi?','Geldi misin?','Mi geldin?','Geldin mü?'], a:0, hint:'In the past tense, the question particle comes AFTER the person ending.'},
      {t:'mc', q:'"Did she see?" =', opts:['Gördü mü?','Gördü mi?','Gör müdü?','Gördü mı?'], a:0},
      {t:'mc', q:'"Ne yaptın?" means:', opts:['What did you do?','What are you doing?','What will you do?','Who did it?'], a:0},
      {t:'mc', q:'"Dün" means…', opts:['yesterday','today','tomorrow','now'], a:0},
      {t:'type', q:'Ask "Did you eat?" (yemek).', a:['yedin mi','yedin mi?'], kb:'tr'},
    ]},
    { title: 'vardı / yoktu', qs: [
      {t:'mc', q:'"There was a cat" =', opts:['Kedi vardı.','Kedi var.','Kedi yoktu.','Kedi vardır.'], a:0},
      {t:'mc', q:'"There was no time" =', opts:['Zaman yoktu.','Zaman yok.','Zaman vardı.','Zaman değildi.'], a:0},
      {t:'mc', q:'"Hava güzeldi." means:', opts:['The weather was nice.','The weather is nice.','The weather will be nice.','The weather was bad.'], a:0, hint:'Adjective + -di = "was".'},
      {t:'mc', q:'"I was tired" = Yorgun___', opts:['dum','dım','dim','muyum'], a:0},
      {t:'type', q:'Write "It was cold." (soğuk)', a:['soğuktu','soğuktu.'], kb:'tr', hint:'k is voiceless → -tu'},
    ]},
  ]},
  { title: 'Gelecek ve İstek', topics: ['-ecek future', '-mek istiyorum', '-ebilmek'], lessons: [
    { title: 'future -ecek', qs: [
      {t:'mc', q:'gelmek → "I will come" = gel___', opts:['eceğim','ecekim','acağım','eceğm'], a:0, hint:'-ecek + im → k softens to ğ: geleceğim'},
      {t:'mc', q:'bakmak → "you will look" = bak___', opts:['acaksın','eceksin','acaksin','acağsın'], a:0},
      {t:'mc', q:'okumak → "she will read" = oku___', opts:['yacak','acak','yecek','yacağ'], a:0, hint:'Buffer y after a vowel.'},
      {t:'mc', q:'"Yarın gideceğiz." means:', opts:['We will go tomorrow.','We went yesterday.','We are going today.','We will come tomorrow.'], a:0},
      {t:'type', q:'Write "I will learn" (öğrenmek).', a:['öğreneceğim'], kb:'tr'},
    ]},
    { title: '-mek istiyorum', qs: [
      {t:'mc', q:'"I want to go" =', opts:['Gitmek istiyorum.','Gidiyorum istiyorum.','İstiyorum gitmek.','Git istiyorum.'], a:0, hint:'Infinitive + istiyorum.'},
      {t:'mc', q:'"Do you want to eat?" =', opts:['Yemek istiyor musun?','Yemek istiyorsun mu?','Yiyorsun mu istiyor?','Ye istiyor musun?'], a:0},
      {t:'mc', q:'"I don\'t want to work" =', opts:['Çalışmak istemiyorum.','Çalışmıyorum istiyorum.','Çalışmak istiyorum değil.','Çalışmamak istiyorum.'], a:0},
      {t:'mc', q:'"Çay istiyorum." means:', opts:['I want tea.','I am drinking tea.','I like tea.','Tea, please?'], a:0},
      {t:'type', q:'Write "I want to sleep" (uyumak).', a:['uyumak istiyorum','uyumak istiyorum.'], kb:'tr'},
    ]},
    { title: '-ebilmek (can)', qs: [
      {t:'mc', q:'"I can come" = gel___', opts:['ebilirim','abilirim','ebilim','ebiliyorum'], a:0},
      {t:'mc', q:'"You can look" = bak___', opts:['abilirsin','ebilirsin','abilirsın','abilsin'], a:0},
      {t:'mc', q:'"I can\'t swim" (yüzmek) =', opts:['Yüzemem.','Yüzebilmem.','Yüzmebilirim.','Yüzemiyorum değil.'], a:0, hint:'Negative ability: stem + -eme/-ama + m.'},
      {t:'mc', q:'"Türkçe konuşabiliyor musun?" means:', opts:['Can you speak Turkish?','Do you speak Turkish?','Will you speak Turkish?','Did you speak Turkish?'], a:0},
      {t:'type', q:'Write "I can read" (okumak).', a:['okuyabilirim'], kb:'tr', hint:'oku + y + abil + ir + im'},
    ]},
  ]}
);

/* ================= RUSSIAN ================= */
C.russian.units.push(
  { title: 'Где ты живёшь?', topics: ['в / на + prepositional', 'жить', 'countries'], lessons: [
    { title: 'в Москве', qs: [
      {t:'mc', q:'"in Moscow" = в Москв___', opts:['е','а','у','ы'], a:0, hint:'Prepositional case: -а → -е'},
      {t:'mc', q:'"at school" = в школ___', opts:['е','а','у','ой'], a:0},
      {t:'mc', q:'"in the park" = в парк___', opts:['е','а','ом','у'], a:0},
      {t:'mc', q:'"at work" uses which preposition?', opts:['на работе','в работе','у работе','к работе'], a:0, hint:'на with events/activities and some places: на работе, на почте, на улице.'},
      {t:'mc', q:'"Я в кафе." means:', opts:['I am in a café.','I want a café.','I am going to a café.','This is a café.'], a:0, hint:'Foreign words like кафе, метро never change.'},
    ]},
    { title: 'жить', qs: [
      {t:'mc', q:'"я ___" (live)', opts:['живу','живёшь','живёт','живём'], a:0},
      {t:'mc', q:'"ты ___" (live)', opts:['живёшь','живу','живёт','живут'], a:0},
      {t:'mc', q:'"они ___" (live)', opts:['живут','живём','живёте','живёт'], a:0},
      {t:'mc', q:'"Где ты живёшь?" means:', opts:['Where do you live?','Where are you going?','Where do you work?','Where are you from?'], a:0},
      {t:'type', q:'Type "I live" in Russian.', a:['живу','я живу'], kb:'ru'},
    ]},
    { title: 'страны', qs: [
      {t:'mc', q:'"Я из Англии." means:', opts:['I am from England.','I live in England.','I love England.','I am going to England.'], a:0, hint:'из + genitive = from'},
      {t:'mc', q:'"Италия" → "в ___" (in Italy)', opts:['Италии','Италие','Италия','Италию'], a:0, hint:'-ия → -ии'},
      {t:'mc', q:'"Турция" is…', opts:['Turkey','Tunisia','Tuscany','Tokyo'], a:0},
      {t:'mc', q:'"Ты откуда?" means:', opts:['Where are you from?','Where are you?','Where are you going?','Who are you?'], a:0},
      {t:'type', q:'Type "Russia" in Russian.', a:['россия','Россия'], kb:'ru'},
    ]},
  ]},
  { title: 'Каждый день', topics: ['daily verbs', 'days & time', 'идти / ехать'], lessons: [
    { title: 'утром, днём, вечером', qs: [
      {t:'mc', q:'"утром" means:', opts:['in the morning','in the evening','at night','at noon'], a:0},
      {t:'mc', q:'"Я работаю." means:', opts:['I work.','I walk.','I read.','I rest.'], a:0},
      {t:'mc', q:'читать (to read) → "она ___"', opts:['читает','читаю','читаешь','читают'], a:0},
      {t:'mc', q:'"Вечером я смотрю телевизор." means:', opts:['In the evening I watch TV.','In the morning I watch TV.','I want a TV.','I have a TV in the evening.'], a:0},
      {t:'type', q:'Type "I read" (читать → я …).', a:['читаю','я читаю'], kb:'ru'},
    ]},
    { title: 'дни недели', qs: [
      {t:'mc', q:'"понедельник" is…', opts:['Monday','Sunday','Saturday','Thursday'], a:0},
      {t:'mc', q:'"суббота и воскресенье" =', opts:['Saturday and Sunday','Friday and Saturday','Sunday and Monday','Tuesday and Wednesday'], a:0},
      {t:'mc', q:'"в среду" means:', opts:['on Wednesday','in the middle','on Tuesday','at noon'], a:0, hint:'в + accusative for "on <day>".'},
      {t:'mc', q:'"Сколько времени?" means:', opts:['What time is it?','How much time do you have?','How long?','When?'], a:0},
      {t:'type', q:'Type "today" in Russian.', a:['сегодня'], kb:'ru'},
    ]},
    { title: 'идти и ехать', qs: [
      {t:'mc', q:'идти is used for going…', opts:['on foot','by vehicle','by plane only','home only'], a:0},
      {t:'mc', q:'ехать is used for going…', opts:['by vehicle','on foot','abroad only','fast'], a:0},
      {t:'mc', q:'"Я иду в школу." means:', opts:['I am walking to school.','I am at school.','I drive to school.','I like school.'], a:0, hint:'в + accusative for direction.'},
      {t:'mc', q:'"Мы едем в Москву." means:', opts:['We are travelling to Moscow.','We live in Moscow.','We are walking in Moscow.','We are from Moscow.'], a:0},
      {t:'type', q:'Type "I am going (on foot)" (идти → я …).', a:['иду','я иду'], kb:'ru'},
    ]},
  ]}
);
})();

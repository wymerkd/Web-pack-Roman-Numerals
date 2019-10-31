# Roman Numeral Translator



|Specs|Input|Output|
|-|-|-|
|Number are separated by place holder value|3124|"3","1,"2,"4"|
|The sum must be < 4,000|4000|alert: Please pick a number under 4,000|
|Add value of all symbols| 3124| {(MMM)=3,000 + (C)=100 + (XX)=20 + (IV)=4} total = 3,124/MMMCXXIV|
|There may not be > 3 of the same symbol in a row.|40 | NOT XXXX |
|Switch to subtraction if sum of place holder value requires > 3 symbols| 40| XL|
|You can only subtract one symbol from each placeholder|800 | NOT CCM, instead DCCC|
|You may subtract I, X, and C. Not V, L, or D.| 450|NOT LD, instead CDL |
|The numerator must be either 1/5 or 1/10 the denominator| 99|NOT IC, instead DCCCXCIX |

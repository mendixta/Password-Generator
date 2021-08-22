# Password Generator 

# Summary:
For this assignment, we were asked to modify starter code to create a working password generator that will create a random password for the user based on certain critera that they've picked. The password criteria can include:
* uppercase or lowercase letters 
* special characters, like: $,@,*,or !
* or numbers
We were asked to only modify the JavaScript in order to get a full functioning, password generator. The end result was this: 

# Working with the Starter Code 
Since JavaScript is still very much new in my mind, working with not much starter code was a big obstacle, meaning that google was my best friend in this assignment. As well as the all knowing site being my homework buddy, I also used the mini-project (Rock, Paper, Scissors Game) that we created together as a class as an example/guide.

* Starting off, the generator needed to be able to create a password using uppercase and lowercase letters, numbers, and special characters. One of the first things that I did, was add all of the possible variables that could be used in the generator in order to create a safe and secure password using ' var '. 
    * example: var numbers = "1,2,3,4,5,6,7,8,9,0," (These are the numbers that can be used.)
      * This was done with all of the special case variables, as well as all the letter (uppercase and lowercase).

    * At the end of the assignment, I removed the commas because whenever a password was generated, it would include more commas than any variables, numbers, or special characters. 

* Refrencing the R,P,S game that we created in class, I was familiar in how to use window.promts in order to alert the user to enter the requirements for the password.
  * With a simple google search, I leared that you can use the "confirm" function in order to create promts which we can connect to var without having the user to enter anything, like a yes or no question promt. Using var again, we can use it to connect the variables to this confirm prompt to ask the user "Hey, would you like your password to have letters, numbers, or special characters?"

* Creating the promts was the easy bit, it was actually getting the code to actually work and create a password the hard part believe it or not. With the help of google once again, I learned a lot of new JavaScript functions that could be used in the code. 
  * 'isNan': also known as 'is not a number', this was used along with an alert window prompt that would trigger an alert if the user entered anything but a number, or anything that WAS NOT between the numbers 8 through 128. 
  * += : 'additon assignment', which adds the value of the right operand to a variable and assigns the result to the variable.

* Using Math.floor and Math.random in reference to the R,P,S game that we created in class, I was finally able to generate a password using the required criteria. It only took a couple of google searches and a lot of experimenting to finally get the code to work, of course.



# Screenshot / Final Product: 


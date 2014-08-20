#Lesson 4 - Twitter bootstrap

![image](http://i.imgur.com/RpE7nCs.jpg)

## Before class

### Objective

Students will be able to use the basics of Twitter bootstrap's CSS offerings.

### Key points

* Twitter bootstrap is a CSS and JavaScript library.
* Twitter bootstrap contains a collection of styles that we can apply to our own HTML elements.
* Twitter bootstrap makes it easier to create a simple and clean looking page.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../3-css/lessons/3-div/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Library
* Twitter bootstrap

### References

* http://getbootstrap.com/css/
* http://www.bootply.com/new#
* http://www.sitepoint.com/understanding-twitter-bootstrap-3/

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about Twitter bootstrap. This is important because bootstrap lets us create simple and clean looking web pages without spending a lot of time. It connects to what we've previously learned because we will able to use CSS classes written by others to style our pages.

What's CSS? How is it different than HTML? What's a CSS class? How about ID? When do we use one versus the other?

### Introduction of new material ("I do")

####Getting started

**Twitter bootstrap** is a CSS and JavaScript library written by former Twitter employees. A **library** is a body of code that others have written to make our lives easier. Rather than writing our own CSS which takes time, we can use Bootstrap's styles in our HTML pages. 

For this unit, we will only look at the CSS aspects of Bootstrap.

#####Installation

We first need to bring Bootstrap into our project. We do this by using the ``<link>`` tag in the ``<head>...</head>`` section of our page. Starting from scratch, our HTML code should look something like this:

```
<html>
  <head>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <title>My first bootstrap page!</title>
  </head>
  <body>
    Hello world!
  </body>
</html>
```
Note the link where the Bootstrap CSS file is located. Another website is hosting this file for us. This is convenient because we don't have to download the file and store it in our own project.

####Deep dive

Let's take a look at a single element before the inclusion of Bootstrap and afterwards. Consider the following code:

```
<html>
  <head>
    <title>Hello world!</title>
  </head>
  <body>
    <button type="button" class="btn btn-default">Click me</button>
  </body>
</html>
```

Click [here](http://jsbin.com/tuqarosujofu/1/) to see what this code looks like. Using the chrome browser, right click on the button and click on "Inspect element". Look at the right side of the new screen. It should look something like:

![image](http://i.imgur.com/Aq8CQOp.jpg)



### Guided practice ("We do")

Now we're going to work with strings together. 

`var dory = "Hey, look, balloons. It is a party.";`

1. How do I print out the length of the string?
2. How do I print out the first and last character of the string?
3. How do I print out the index of the letter "b"?
4. How do I separate the first sentence from the second? I want each sentence in its own variable and then I want to print each of those two variables.
5. How do I print the sentence in upper case form? In lower case?
6. How do I replace the word "balloons" with the word "sprinkles" and print it?
7. How do I add the sentence "Like it's 1999.    " to the end of the string and print it?
8. How do I remove the white space at the end of the sentence and print it?


### Independent practice ("You do")

Consider the following string:

``var buzz = "This is an intergalactic emergency. I need to commandeer your vessel to Sector 12.";``

1. Print out the length of the string.
2. Print out the first and last character of the string.
3. Print out the index of the letter "g".
4. Separate the first sentence from the second. Put each sentence in its own variable and then print each of those two variables.
5. Print the sentence in upper case form. Again in lower case.
6. Replace the word "vessel" with the word "pixie" and print it.
7. Add the sentence "Who's in charge here?    " to the end of the string and print it.
8. Remove the white space at the end of the sentence and print it.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about strings. This is important because strings are used to store words and sentences that humans use to talk. Next, we will learn about conditionals.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.

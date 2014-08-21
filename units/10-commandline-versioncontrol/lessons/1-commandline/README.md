#Lesson 2 - Command line

![image](http://i.imgur.com/FJ5Hsq0.jpg)

## Before class

### Objective

Students will understand the basic CRUD (create, read, update, and delete) commands in the terminal. 

### Key points

* A terminal is a way to talk to a computer using commands.
* Commands specify the action you want the computer to do for you.
* Folders can contain folders and/or files. Taken in total, this forms a file hierarchy.
* Commands are like functions: they take in parameters as input and sometimes return something as output.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../10-commandline-versioncontrol/lessons/1-commandline/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Terminal
* Command
* Path / directory
* Directory structure / hierarchy

### References

* http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about the command line. This is important because the command line enables us to work in an environment without a visual interface. 

What are files? What are folders? How do I view them in Windows? How about Mac? How do I go about copying a file? How about a folder? When I copy a folder, what happens to everything inside of it? How about if I want to rename a file? And delete a file?

When we perform any of the above operations in Windows or Mac, the operating system is translating our actions into command lines. Let's take a deeper look.

### Introduction of new material ("I do")

#### Basics

The **terminal** is a place where we talk to a computer. In the terminal, we issue **commands** to the computer. These commands are instructions that we would like the computer to do for us. Typically, if the command was executed successfully, the computer will not respond with anything.

##### Directory

When I open Cloud9 and click on Window->New Terminal, I see something like:

![image](http://i.imgur.com/cDz2k3f.jpg)

Let's ignore the part in green and focus on the blue. It says:

```
/home/ubuntu/workspace
```
This is the current **directory** (or path) that I am in. A directory a way to locate a file or folder. In this case, I am in the "workspace" folder which is inside the "ubuntu" folder which is inside the "home" folder. 

##### Running a command

I'm going to go back to Cloud9 and type in the command ``pwd``. After this, I press the "Enter" key. 

```
dopeboy@demo:/home/ubuntu/workspace $ pwd
/home/ubuntu/workspace
dopeboy@demo:/home/ubuntu/workspace $ 
```
This command instructed the computer to print the directory that I am in (which is same thing as the text in green). After it finished printing it out, it made a new line in anticipation of my next command.

#### List files and folders

How do we find all the files and folders in the directory we are in?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `ls` command lists all the files and folders in the directory I am in. In my case, I have three files.

#### Copy a file

How do we copy a file?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ cp hello.js duplicate_hello.js
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  duplicate_hello.js  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `cp` command copies a file. Notice that two filenames were supplied to the command. We can think of these filenames as *parameters* to the command. In this case, the first parameter is the name of the file we want to copy. The second parameter is what we want the new file to be named. 

The second `ls` command was used to verify that the file was indeed copied.

#### Remove a file

How do we remove a file?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  duplicate_hello.js  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ rm duplicate_hello.js 
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `rm` command can take in one parameter: the name of the file you wish to remove.

#### Create a folder

How do we create a folder?

```
dopeboy@demo:/home/ubuntu/workspace $ mkdir pikachu
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js  pikachu/
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `mkdir` command can take in one parameter: the name of the folder you wish to create.

Notice that when we run the `ls` command, "pikachu" has a forward slash (/) at the end of it. This is the terminal's way of telling us that "pikachu" is a folder, not a file.


### Guided practice ("We do")



### Independent practice ("You do")



#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about Git. This is important because Git is an essential tool for working on code in a team setting.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.

# Nitrous Setup Guide

This guide will explain how to (1) create a Github account, (2) create a Nitrous account, and (3) create a workspace in Nitrous that clones a Github repository.

## Background

### What is Nitrous?

Nitrous is an integrated development environment (IDE) in the cloud. More at their [home page](https://www.nitrous.io/).

### What is Github?

GitHub is a web based hosting platform. GitHub can be used as a publishing tool, a version control system or a way to collaborate on a project with several friends. GitHub allows you to have local and cloud based copies of your projects.

## Setup

### Create Github account

1. Go <a href = "https://github.com/join" target = "_blank">here</a> and fill out the form. For the email address, use your school email address. Write down your password so that you don't forget it.
2. You will see a screen telling you about the different plans Github offers. Make sure the free plan is selected and then click on the green "Finish sign up" button in the bottom of the page.

### Create Nitrous account

1. Go  <a href = "https://nitrous.io" target = "_blank">here</a> and click on the Github link below the green button:
<br/>![image](http://i.imgur.com/h8cOV0A.png)

2. Log into Github if you aren't already. Click on the green "Authorize application" button at the bottom of the page.

3. You'll be asked to create an account on nitrous. The username box is already filled in; do not change this. Fill in the password box **with the same password you used for your Github account**. Then click the "Sign up" button at the bottom.

4. You'll be asked to create a box. Click on the "PHP" box on the far right. Copy the following text: ``https://github.com/ScriptEdcurriculum/curriculum.git`` and paste it into the "Download a Github repo" box. Your screen should look like this:<br/>![image](http://i.imgur.com/WiKOIj7.png)<br/>Then click on the orange "Create box" button. 

5. Wait a couple seconds for your box to be created. Click on the orange buttons until you are taken to a new screen. 

6. Within your `workspace` folder, you should see a `curriculum` folder. These contain lesson plans, homeworks, and projects. Work with your instruction to find the folder you should be in.

7. The `www` folder is where you will create your own work. As a test, right click on the `www` folder, click on "New File", name your new file `index.html`, enter in the text "Hello World", save the file, click on the "Preview" menu, and click on the second menu option like so:<br/>![image](http://i.imgur.com/qFC0isj.png)

### Keeping your workspace up-to-date

To make sure you have the latest files in your workspace, you will need to run a git command in the terminal. You will learn more about git and the terminal in the future. For now, follow these instructions verbatim. You will need to do this **everytime you start a new project**.

1. Find the terminal in the bottom of your screen. If you cannot find it, go to the menu bar at the top and click on "Window->New Terminal". Your terminal should look something close to:
![image](http://i.imgur.com/EcpmCiX.png)

2. Copy the following command: ``git pull`` and paste it in the terminal. Hit the enter/return key. 

3. You might be prompted with a message like so: ``Are you sure you want to continue connecting (yes/no)?``. In this case, type in "yes" without the quotes. Then hit the enter/return key.

4. Your files are now up-to-date.




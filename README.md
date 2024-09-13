# Hacker Badge System

## INTRODUCTION

Hi! My name is **Henry Bonomolo**, a current freshman at UC Berkeley studying computer science. I created a simple HTML website that uses JavaScript, html5-qrcode-master, and Firebase to build a full-stack website for a **Hacker Badge System**.

I started out by using a simple UI format that I had made for a previous project, and changed the fields to be specific for this project. From there, I created a simple algorithm to search through the whole csv file to add to a dropdown box for simplicity of the user.

### Features
- **Submit**: Creates a user page and saves data in Firebase Firestore.
- **See Profile**: Allows users to look up profiles by username and view their data from the Firebase database.
- **Scan Profile**: Opens a QR code scanner to scan user QR codes and navigate to a page with the scanned user’s data.

1. **Submit**: To create a user page and save data, fill out the required fields and click the submit button. This action creates a new entry in Firebase Firestore with your details.

2. **See Profile**: To look up user data by username, click the 'See Profile' button and enter the username. The system will retrieve and display the user's information from Firebase.

3. **Scan Profile**: To scan a QR code and view user data, click the 'Scan Profile' button. This will open the QR code scanner. After scanning, you’ll be directed to a page with the scanned user’s data.

Overall, I ran into a couple of issues with the scanning since it took me a while to find a package that I liked to be able to scan the qr code. After coming across html5-qrcode-master, I was easily able to use a lot of the code from examples online and used premade functions that allow the user to know the optimal place to scan the qr code.

I also ran into issues with the csv file, as I had never worked with scanning a csv in javascript and HTML, although I had done it in Java and Python which allowed me to review code from there to overcome this issue as well. 

## HOW TO USE

1. Start by downloading the file from this github page and either CDing into the project file from your terminal or using the project terminal in the text editor or IDE. 

2. If you are using **npm**, run the command **npm install -g firebase-tools**, or otherwise download the firebase-tools in order to run the project files.

3. In order to start the project in a live window, run **python -m http.server 8000** to start the live server.

4. You will now need to open a new window in a browser and open the project with **http://localhost:8000/formPage.html**, to open the start page in order to create an account. Alternatively, you can open **http://localhost:8000** and just click on formpage.html from the directory shown.

5. You have succesfully been able to do everything so have fun. FYI: You will need to allow camera access in order to scan any of the qr-codes that have been generated. 

## Example

1. Here is the standard front layout, where you enter all of your information. You will be able to see your data when you click submit.

![Homepage](https://github.com/henrybon806/hackathons/blob/0536590f18c24fd3771a0695be43c74a5744d276/Images/homepage.png)

2. This is where you will be able to search for other users by username.

![Find Profile](https://github.com/henrybon806/hackathons/blob/ed4a050142ef1dcc091ad58d727c3d4c9014e6e8/Images/findprofile.png)

3. This is where you can scan everyone's QR codes in order to see your friends' data.

![Scan QR Codes](https://github.com/henrybon806/hackathons/blob/9870502ccec794b04bbd908b876534591fac5b72/Images/scan.png)

4. Here is my QR code so you can try scanning it for yourself!

![My Profile](https://github.com/henrybon806/hackathons/blob/e26f130b40e96a63173a7112ccc895132b4d3674/Images/MyProfile.png)

Thank you!

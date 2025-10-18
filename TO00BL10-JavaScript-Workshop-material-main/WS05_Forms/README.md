# Workshop 5: Smart Forms

---

In this exercise we will practice the art of Smart Forms handling. Use the lecture-material as a reference guide side by side these exercises. It might also be a good idea to save the lines of code you write during the exercises for later use.

---

## Exercise 1: Contact Form

Below you see a simple contact form which has fields for email address and comments.

a) Write JavaScript code which checks the input fields when the form submit-button is clicked. Display the entered values with alert -dialogs. Use onsubmit-event on the form tag. Make sure that your code cancels the submission of the form if needed. Hint: See the PowerPoint -slides.

b) Enhance the code and write if-statements to check the following: the length of email address should be atleast 6 and less than 15\. It should also have a @ - character. Check also that the comment field is not be empty and the content should be trimmed down to 50 characters. Utilize JavaScript [String-methods](http://www.w3schools.com/js/js_string_methods.asp).

c) Should an error occur, highlight the erroneous field and provide some feedback to the user. Preferably by displaying some text message on the page, next to the input field. See the lecture slides for demo.

<form>
    <div class="no-border">
        <label>Email address:<br>
            <input type="text" name="email">
        </label>
    </div>
    <div class="no-border">
        <label>
            Comment:<br>
        </label>
        <textarea name="comment"></textarea>
    </div>
    <br>
    <input type="submit" value="Send">
</form>

---

## Exercise 2: Membership Calculator

Below there is a membership calculator form. It has 3 fields: Membership Type (pulldown), Years (input) and Costs (input). User can use the pulldown to select which plan user wants to choose (Basic = 10€, Premium=15€, Gold=20€) and then enter the number of years he wants to pay for.

Update the code of the form so that:

a) the Costs-field should display the total costs of the subscription

b) If the user chooses to pay for more than 2 years, he will get a 20% discount. Notify the user when he is eligible to get the discount, by showing a text next to form.

c) Should he pay for 5 years or more, he will get the normal 20% discount, but will also be given an extra 5€ discount with a special greetings text on screen.

<form action="#" method="post" id="theForm">

<fieldset><legend>Create Your Membership</legend>

Complete this form to calculate your membership. There's a 20% discount if you enroll for more than one year!

<div><label for="type">Type</label> <select name="type" id="type" size="4" required=""><option value="basic">Basic - $10.00</option> <option value="premium">Premium - $15.00</option> <option value="gold">Gold - $20.00</option> <option value="platinum">Platinum - $25.00</option></select></div>

<div><label for="years">Years</label> <input type="number" name="years" id="years" min="1" required=""></div>

<div><label for="cost">Cost</label> <input type="text" name="cost" id="cost" disabled=""></div>

<input type="submit" value="Calculate" id="submit"></fieldset>

</form>

---

## Exercise 3: Book Order

In many cases, developer has to maintain and develop code written by someone else. Look at the HTML code and JavaScript code below. Study how does it work and what is the logic behind it.

Then add following features to the code:

a) the values read from the text boxes are stored as strings. Modify the code to store the quantity as an integer and the price, tax and discount as floats.

b) modify the JS code to double the discount applied when the quantity ordered is greater than 100 items

c) modify the HTML form to include a shipping field, and include this value in the total calculation in shopping.js.

<fieldset>

Calculate a bulk book order.

<div><label for="quantity">Quantity</label> <input type="number" name="quantity" id="quantity" value="1" min="1" required=""></div>

<div><label for="price">Price Per Unit</label> <input type="text" name="price" id="price" value="1.00" required=""></div>

<div><label for="tax">VAT (%)</label> <input type="text" name="tax" id="tax" value="0.0" required=""></div>

<div><label for="discount">Discount</label> <input type="text" name="discount" id="discount" value="0.00" required=""></div>

<div><label for="total">Total</label> <input type="text" name="total" id="total" value="0.00"></div>

<div><input type="submit" value="Calculate" id="submit-calculate" onclick="calculate()"></div>

</fieldset>

---

## Exercise 4: Hidden Extra fields

- In PowerPoint-slides you were shown a demo of a form where some extra fields were hidden and they turned visible after certain events occurred.

  Copy the the contact form created in Exercise 1 and edit it. Add select boxes to the form where user can choose a preferred way of contact. There should be atleast email and phone and sms available.

  After choosing the box, the user is shown an input field which asks detailed information regarding on the selected contact method.

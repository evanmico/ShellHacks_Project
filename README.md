## ShellHacks Project

Hello, this is a project for the ShellHacks 2022 that allows a user to connect their bank accounts and see what subscription services they are subscribed to, how much they are spending monthly on them, and how much they have spent total on them. This is meant to have a primary target of the CapitalOne challenge.

### Getting Started

Just select login or results to see the two different pages

### Background Info

The project will have a user login with their bank account through an api called plaid. The plaid api then returns transaction history for a specific bank. What is then done, is that any "recurring transactions" in a person's transaction history will be displayed in a grid of cards. Each card contains the service, the amount paid per month, and the amount that they have spent on the service so far. At the bottom there is also a BIG total to really emphasize just how much money has been spent on their seemingly affordable monthly paid services.

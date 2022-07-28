@Regression
Feature: Techfios bank and cash New Account Functionality 


Scenario Outline:

	Given User is on the techfios login page 
	When User enters the "<username>" 
	When User enters the"<password>"
	And  User clicks on"<login>"
	Then User should land on Dashboard page
	
	Examples:
	|username|password|
	|demo@techfios.com|abc123|
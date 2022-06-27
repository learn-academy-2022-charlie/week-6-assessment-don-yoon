# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  > We could generate a migration that will create a file that we can add a few additional commands. The name of the foreign key would be cohort_id. The foreign key would belong in the Student model, because Cohort has many students and the foreign key is there to identify which cohort the various students are a part of. Once the migration file was generated, we can add the command add_column followed by which table and what the name of the column would be and what data type it would be. Once we have specified, we could do a db:migrate to update our table.

  Researched answer:
  > Another way we can accomplish this without having to manually type in the migration file would be to run the command, rails g migration <nameOfWhatWeWantToAdd> column_name:column_type. After we can simply type rails db:migrate. There are plenty of other commands we have access to besides add_column in the migration file.
  ```Ruby
  add_column
  add_index
  change_column
  change_table
  create_table
  drop_table
  remove_column
  remove_index
  rename_column
  ```


2. Which RESTful routes must always be passed params? Why?

  Your answer:
  > The show, edit, update, and destroy need them because they need to know  specific entry they need to GET, PATCH, or DELETE. The show requires the primary key to GET a specific entry. The edit method will require a parameter to offer a form specific for the entry you wish to change. The update and destroy need params as well to know which entry needs to be changed.

  Researched answer:
  > Since RESTful routes are simply the patterns for how we map HTTP verbs to CRUD actions, there can be a variety of different routes that arise.  To the best of my understanding, create and new do not require params because they are not referencing a specific entry. There is no need because once a new entry is created a unique key will be given and the already existing entries are not altered. However, as we continue to create more routes as we pass data between routes, there will be a need for params to specify what we wish to request. For the wildlife api challenge, we had to add a route to specify the range of dates we wanted to see sightings for.  


3. Name three rails generator commands. What is created by each?

  Your answer:
  > We have rails generate migration, rails generate Model, rails generate resources. The migration is for making changes to the table. We have the option to add or remove columns, change data types. The Model is for the initial creation of the table. The resources will create the table as well as the routes required for the controller.
  Researched answer:
  > Each generate command has a variety of other options that can give further customization in the generation step. For example, we can add more options like what columns we want to add and what data type they should be in the model straight from the terminal. There is another generate command that we did not cover and that is the scaffold. Generators in and of itself do not create anything, rather they invoke other generators to do the work. The scaffold command invokes erb, test_unit, and helper generators to create an entire rails app for us to flesh out.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
> This maps to the index method and it will return all entries within the students table.  

action: "POST"   location: /students       
> The maps to the create method and it will create a new entry within the student table.  

action: "GET"    location: /students/new
> This maps to the new method and it will offer a form to enter data for a new entry. It is still GET because nothing is being changed at this time.  

action: "GET"    location: /students/2
> This maps to the show method, because it seems to be referencing the primary key 2.    

action: "GET"    location: /students/2/edit    
> This maps to the edit method, because of the location as well as the reference to the primary key 2. This will get us a form that would allow us to specify what we wish to edit and what to change it to.  

action: "PATCH"  location: /students/2      
> This maps to the update method, because the parameter of primary key 2 let's us know which entry we are updating.  

action: "DELETE" location: /students/2 
> This maps to the destroy method, because of the action delete as well as the parameter of the primary key 2 letting us know which entry to delete.     



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Story #1:
As a user I see a welcome screen with a motivational background
User Story #2:
As a user I can see a menu with different options.
User Story #3:
As a user I can create different todo lists. Once a list has been created, I am redirected to the main page with the todo list I created.
User Story #4:
As a user I can click the todo list to create a new entry for the specific list. The form has fields for date due, time due, what the todo is, specific instructions, options for alerts. There is also a button for confirm and cancel.
User Story #5:
As a user I am redirected back to the landing page with the updated todo list. When I click the todo list I am given the details of the list as well as the option to edit or delete each entry in the list.
User Story #6:
As a user in the main page I have the option to delete entire lists. When pressing the delete list button I am prompted with a confirmation modal.
User Story #7:
As a user I can check off completed entries in the list.
User Story #8:
As a user I can see how many tasks I have completed and how many remain on the list.
User Story #9:
As a user I can keep track of all tasks that need to be completed in chronological order.
User Story #10:
As a user I am alerted of upcoming due dates.
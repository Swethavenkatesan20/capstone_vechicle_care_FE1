frontend
over view of how application works

If new user register your account. 
After registering you will redirect to login page login to get the dashboard.
Once login is successfull dashboard page will be displayed with welcome username (for this, i have used userServices to get current loged in user name).
there will be dashboard page containing services, appointments, and customer  review.

On clicking services ,
services will be fetched from backend.
In backend Admin can only add services. using serviceServices.jsx i have fetched service data from backend.
user can search and filter the services
user can check the available service with price.

on clicking Appointment
user can book the appointment choosing the services with convenient time slot. appointment booked details will be sent to admin.
admin can see all the booked appointments.

Customer Review 
user can post their reviews. all the reviews will be displayed in this page.




created vitge@latest
initial clearning default code

install react-router-dom
npm i axios

# pages/Landing.jsx
 this is my landing page here i have register and login button

 components/LoginWrapper
for navigation

used <outlet/> in landing for router(parent-child routing)


services/instance
used axios connecting to backend
for each, service user review appointments there is service created to interact with backend.(appointmentService.jsx,reviewService.jsx,serviceService.jsx,userService.jsx)

pages:
files here will be displayed in the webpage

dashboardWrapper to wrap all the dashboard components 

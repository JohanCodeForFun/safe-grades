import './styles/App.css'
import { NavLink } from 'react-router'

/* 
wip login
https://docs.amplify.aws/angular/build-a-backend/auth/set-up-auth/

<amplify-authenticator>
  <ng-template
    amplifySlot="authenticated"
    let-user="user"
    let-signOut="signOut"
  >
    <h1>Welcome {{ user.username }}!</h1>
    <button (click)="signOut()">Sign Out</button>
  </ng-template>
</amplify-authenticator>
*/

function App() {
  return (
    <>
      <h1>Login</h1>
      <NavLink to="/dashboard">
        <button>Go to Dashboard</button>
      </NavLink>
    </>
  )
}

export default App

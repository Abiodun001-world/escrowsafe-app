import './signin.css';

export default function SignIn() {
    return (
        <div className="password">
        <h4>
          </h4>
      
      <p className="section-font">
          Log into your account
      </p>
      
      <div className="form-div">
      <form className="flex-col">
      <input className="border" type="email"
       name="email" placeholder="Email" />
       <input className="rounded-lg" 
       type="password" name="password" placeholder="Password" />
       <a className="text" 
       href="./">Forgot password</a>
       <button className="bg-blue">Sign In</button>
       <p className="text-center">Don't Have an account? <a class="text-blue" 
      href="./"> Sign up</a></p>
      </form>
      </div>
      
      <div className="footer-lg">
       <p className="footer-ng">© 2023 Standard Escrow Safe. All rights reserved</p>
      </div>
      
           </div> 
           )
}
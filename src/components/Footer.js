export default function Footer() {
    return (
        
<div className="footer">
  <div className="combine">
     <h3>
      <img className="Logo" src="/images/assets/logo.svg" alt="Logo" />   
      </h3>
    <ol className="order-list">
      <div className="footer-1">
      <li>Explore</li>
      <br />
      <li>Blog</li> 
       <br />
      <li>Our team</li>
      <br />
  <li>Terms and Conditions</li> 
     </div>
    <div className="footer-list">
    <li>Links</li>
      <br />
    <li>Privacy policy</li>
    <br />
    <li>Contact Us</li>
    <br />
      <li>FAQ</li> 
    </div>  
   

<div className="footer-2">
     <div className="follow-us">Follow us </div>  
    <br />
    <img className="facebook-logo" src="/images/assets/Facebook.svg" alt="facebook-logo" />   
    <img className="instagram-logo" src="/images/assets/Instagram.svg" alt="instagram-logo" />  
    <img className="twitter-logo" src="/images/assets/Twitter.svg" alt="twitter-logo" />   
    <br />
<div className="form-section">
   <div className="subscribe-section">Subscribe to our newsletter</div> 
    <form action="" name="Subscribeform" id="subscribeform">
      <input type="email" name="email" id="email" placeholder="Enter your email " required />
      <input type="submit" value="Subscribe"  required/>
      </form>
</div>
</div>
</ol>

      </div>

    <div className="footer-3">
  </div>

 <div className="text-align">© 2023 Standard Escrow Safe. All rights reserved </div>
   </div> 
   
   )
}